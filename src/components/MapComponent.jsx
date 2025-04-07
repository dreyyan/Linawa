import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const MapComponent = ({ onLocationSelect }) => {
  const [reports, setReports] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch("https://linawa-backend-api.onrender.com/api/report-issue/get");
        const data = await response.json();

        setReports((prevReports) => {
          const existingIds = new Set(prevReports.map((r) => r.id));
          const newReports = data.filter((report) => !existingIds.has(report.id));
          return [...prevReports, ...newReports];
        });
      } catch (err) {
        console.error("Error fetching reports: ", err);
      }
    };

    fetchReports();
    const interval = setInterval(fetchReports, 5000);
    return () => clearInterval(interval);
  }, []);

  // Hook for handling map click events
  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setSelectedLocation({ lat, lng });
        if (onLocationSelect) {
          onLocationSelect({ lat, lng });
        }
      },
    });
    return null; // Return nothing as it's just a handler
  };

  return (
    <MapContainer center={[12.8797, 121.7740]} zoom={6} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <MapClickHandler /> {/* Handle map click here */}

      {/* Add existing reports with default markers */}
      {reports.map((report) => (
        <Marker key={report.id} position={[report.location.lat, report.location.lng]}>
          <Popup>
            <span>Category:</span> {report.category} <br />
            <span>Description:</span> {report.description} <br />
            <span>Reported By:</span> {report.user_email} <br />
            <span>Status:</span> {report.status} <br />
          </Popup>
        </Marker>
      ))}

      {/* Show marker for newly selected location */}
      {selectedLocation && (
        <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
          <Popup>Selected location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapComponent;
