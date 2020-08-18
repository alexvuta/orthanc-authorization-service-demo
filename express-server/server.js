"use strict";

const express = require("express");
var bodyParser = require("body-parser");
const app = express();

// parse application/json
app.use(bodyParser.json());

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

app.post("/auth", (req, res) => {
  console.log("Received request:");
  console.dir(req.body);
  const authRequest = req.body;
  const authResponse = {
    granted: true,
    validity: 0,
  };

  // TODO: use dicom-uid or parse data from uri and estrict user access

  if (authRequest["token-value"] != "demo") {
    authResponse.granted = false;
    console.log("[FAIL] operation not allowed!");
  } else {
    console.log("[OK] operation allowed!");
    console.log("\n --------------------------- \n");
  }

  res.send(JSON.stringify(authResponse));
});

app.listen(PORT, HOST, () => {
  console.log(`[OK] Running on http://${HOST}:${PORT}`);
});
