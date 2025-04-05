const admin = require("firebase-admin");
const db = admin.firestore();

const sendReport = async (req, res) => {
  const { category, description, location, user_email } = req.body;

  if (!category || !description || !location || !user_email) {
    res.status(400).json({ message: "All field are mandatory!" });
  }

  try {
    const issueRef = db.collection("election_issues").doc();

    await issueRef.set({
      category,
      description,
      location: new admin.firestore.GeoPoint(location.lat, location.lng),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      status: "pending",
      email: user_email,
    });
    res.status(201).json({
      message: "Issue reported successfully",
      isseuId: issueRef.id,
    });
  } catch (err) {
    console.error(`Error reporting issue`, err);
    return res.status(500).json({ error: err.message });
  }
};

const getIssues = async (req, res) => {
  try {
    const snapshot = await db.collection("election_issues").get();
    const reports = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      location: {
        lat: doc.data().location._latitude,
        lng: doc.data().location._longitude,
      },
    }));

    res.status(200).json(reports);
  } catch (err) {
    console.error(`Error fetching issues: `, err);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { sendReport, getIssues };