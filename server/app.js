const dbPool = require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const { getCapsules } = require("./resources/spacexRequests");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/v1/capsule", async (req, res) => {
  try {
    let response = await getCapsules();
    res.status(200);
    res.send({
      result: response.data,
    });
  } catch (e) {
    res.status(400);
    res.send({
      error: "Error:" + e,
      errorMsg: "Failed to get capsule results",
      url: req.url,
    });
  }
});

app.get("/", async (req, res) => {
  //   const rows = await dbPool.query("SELECT * FROM spaceData");
  res.status(200);
  res.send({
    // result: JSON.stringify(rows),
    result: "boo",
  });
});

app.listen("4000");
console.log(
  `Listening on port: 4000, wait for the development server to be up...`
);
