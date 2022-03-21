const cors = require("cors");
const { getIp } = require("./ip");
const express = require("express");
const useragent = require("express-useragent");

const app = express();
app.use(useragent.express());
app.use(cors());

// Get the IP address of the client
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
  res.json("Hi Neo");
});

app.get("/v4/ip", async (req, res, next) => {
  const ip = await getV4IP(req);
  res.json({
    ip: ip,
    type: "v4",
    device: {
      os: req.useragent.os,
      source: req.useragent.source,
      platform: req.useragent.platform,
      userAgent: req.useragent.browser,
    },
  });
});

app.post("/v4/ip", async (req, res, next) => {
  const ip = await getV4IP(req);
  res.json({
    ip: ip,
    type: "v4",
    device: {
      os: req.useragent.os,
      source: req.useragent.source,
      platform: req.useragent.platform,
      userAgent: req.useragent.browser,
    },
  });
});

app.put("v4/ip", async (req, res, next) => {
  const ip = await getV4IP(req);
  res.json({
    ip: ip,
    type: "v4",
    device: {
      os: req.useragent.os,
      source: req.useragent.source,
      platform: req.useragent.platform,
      userAgent: req.useragent.browser,
    },
  });
});

app.delete("v4/ip", async (req, res, next) => {
  const ip = await getV4IP(req);
  res.json({
    ip: ip,
    type: "v4",
    device: {
      os: req.useragent.os,
      source: req.useragent.source,
      platform: req.useragent.platform,
      userAgent: req.useragent.browser,
    },
  });
});


function getV4IP(request) {
  return getIp(request);
}