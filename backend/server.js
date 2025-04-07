const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const serviceAccount = require("./privateKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const db = admin.firestore();

app.use("/api/report-issue", require("./routes/reportIssueRoutes"));
app.use("/api/news", require("./routes/newsRoutes"));
app.use("/api/summarize", require("./routes/summarizeRoutes.js"));

app.listen(port, () => {
  console.log(`Port is running on port ${port}`);
});
