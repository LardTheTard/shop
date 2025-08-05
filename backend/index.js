const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
const app = express();

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(cors());
app.use(express.json()); // Parse JSON in requests

// Signup route
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await admin.auth().createUser({
      email,
      password,
    });
    res.status(200).send({ message: "User created", uid: user.uid });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Login (with ID token sent from frontend)
app.post("/verify", async (req, res) => {
  const { idToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    res.status(200).send({ uid: decodedToken.uid });
  } catch (error) {
    res.status(401).send({ error: "Invalid token" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});