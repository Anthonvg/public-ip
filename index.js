import cors from "cors";
import express from "express";
import publicIp from "public-ip";
import useragent from "express-useragent";

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
  const ip = await getV4IP();
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
  const ip = await getV4IP();
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
  const ip = await getV4IP();
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
  const ip = await getV4IP();
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

app.get("/v6/ip", async (req, res, next) => {
  const ip = await getV6IP();
  res.json({
    ip: ip,
    type: "v6",
    device: {
      os: req.useragent.os,
      source: req.useragent.source,
      platform: req.useragent.platform,
      userAgent: req.useragent.browser,
    },
  });
});

app.post("/v6/ip", async (req, res, next) => {
  const ip = await getV6IP();
  res.json({
    ip: ip,
    type: "v6",
    device: {
      os: req.useragent.os,
      source: req.useragent.source,
      platform: req.useragent.platform,
      userAgent: req.useragent.browser,
    },
  });
});

app.put("v6/ip", async (req, res, next) => {
  const ip = await getV6IP();
  res.json({
    ip: ip,
    type: "v6",
    device: {
      os: req.useragent.os,
      source: req.useragent.source,
      platform: req.useragent.platform,
      userAgent: req.useragent.browser,
    },
  });
});

app.delete("v6/ip", async (req, res, next) => {
  const ip = await getV6IP();
  res.json({
    ip: ip,
    type: "v6",
    device: {
      os: req.useragent.os,
      source: req.useragent.source,
      platform: req.useragent.platform,
      userAgent: req.useragent.browser,
    },
  });
});

function getV4IP() {
  return new Promise((resolve, reject) => {
    publicIp.v4().then((ip) => {
      resolve(ip);
    });
  });
}

function getV6IP() {
  return new Promise((resolve, reject) => {
    publicIp.v6().then((ip) => {
      resolve(ip);
    });
  });
}
