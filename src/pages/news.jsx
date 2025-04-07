import React, { useState, useEffect } from "react";
import "./styles/news.css";

const News = () => {
  const [sortField, setSortField] = useState("publishedAt");
  const [sortDirection, setSortDirection] = useState("desc");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch("http://localhost:5555/api/news");
      const data = await response.json();
      console.log(data);
      setArticles(data);
    };

    getArticles();
  }, []);

  // Sort the articles based on the current sort field and direction
  const sortedArticles = [...articles].sort((a, b) => {
    if (sortField === "publishedAt") {
      return sortDirection === "asc"
        ? new Date(a.publishedAt) - new Date(b.publishedAt)
        : new Date(b.publishedAt) - new Date(a.publishedAt);
    } else if (sortField === "source") {
      return sortDirection === "asc"
        ? a.source.name.localeCompare(b.source.name)
        : b.source.name.localeCompare(a.source.name);
    } else {
      return sortDirection === "asc"
        ? a[sortField].localeCompare(b[sortField])
        : b[sortField].localeCompare(a[sortField]);
    }
  });

  // Handle sorting when a column header is clicked
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Render sort arrow indicator
  const renderSortArrow = (field) => {
    if (sortField !== field) return null;
    return sortDirection === "asc" ? " ↑" : " ↓";
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      <h1 className="pageTitle mb-6">NEWS</h1>

      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th
                  className="px-4 py-3 cursor-pointer"
                  onClick={() => handleSort("title")}
                >
                  Title {renderSortArrow("title")}
                </th>
                <th
                  className="px-4 py-3 cursor-pointer"
                  onClick={() => handleSort("source")}
                >
                  Source {renderSortArrow("source")}
                </th>
                <th
                  className="px-4 py-3 cursor-pointer"
                  onClick={() => handleSort("publishedAt")}
                >
                  Date {renderSortArrow("publishedAt")}
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedArticles.map((article, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-4 py-3 border-b">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="article-title"
                    >
                      {article.title}
                    </a>
                    <div className="article-description">
                      {article.description}
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b text-center">
                    <span className="source-name">{article.source.name}</span>
                  </td>
                  <td className="px-4 py-3 border-b text-center">
                    <span className="article-date">
                      {formatDate(article.publishedAt)}
                    </span>
                  </td>
                  <td className="image-cell border-b">
                    {article.image && (
                      <img src={article.image} alt={article.title} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default News;
