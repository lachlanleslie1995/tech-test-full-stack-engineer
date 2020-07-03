const dbPool = require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const { getCapsules, getLandingPads } = require("./resources/spacexRequests");

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
    res.status(404);
    res.send({
      error: "Error:" + e,
      errorMsg: "Failed to get capsules",
      url: req.url,
    });
  }
});

app.get("/api/v1/landingpad/:id", async (req, res) => {
  let id = req.params.id;
  const rows = await dbPool.query("SELECT * FROM spaceData");
  let result = "";

  try {
    if (rows.length) {
    } else {
      let response = await getLandingPads(id);
      if (response.data) {
        result = res.status(200);
        result = {
          id: response.data.id,
          full_name: response.data.full_name,
          status: response.data.status,
          location: response.data.location,
        };
        await dbPool.query(
          `INSERT INTO spaceData (id, spaceItem) VALUES('?, ?')`,
          [result.id, JSON.stringify(result)]
        );
      }
    }
    res.send({
      result: result,
    });
  } catch (e) {
    res.status(404);
    res.send({
      error: "" + e,
      errorMsg: "Failed to get Landing Pad",
      url: req.url,
    });
  }
});

app.get("/", async (req, res) => {
  res.status(200);
  res.send({
    result: "Welcome to Space airport API",
  });
});

app.listen("4000");
console.log(
  `Listening on port: 4000, wait for the development server to be up...`
);
