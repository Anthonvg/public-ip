const cors = require("cors");
const express = require("express");
const requestIp = require("request-ip");
const useragent = require("express-useragent");

const app = express();
app.use(useragent.express());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Get the IP address of the client
app.listen(PORT, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
  res.json("Hi Neo");
});

app.get("/v4/ip", async (req, res, next) => {
  const ip = requestIp.getClientIp(req);
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
  const ip = requestIp.getClientIp(req);
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

app.put("/v4/ip", async (req, res, next) => {
  const ip = requestIp.getClientIp(req);
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

app.delete("/v4/ip", async (req, res, next) => {
  const ip = requestIp.getClientIp(req);
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