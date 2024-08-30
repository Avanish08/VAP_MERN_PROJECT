require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT =3050;
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());





app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});