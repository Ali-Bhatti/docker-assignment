const request = require("request");
const rp = require("request-promise");
const express = require("express");
const redis = require("redis");
const app = express();

const PORT = process.env.PORT || 3000;

const client = redis.createClient({
  host: "redis-server",
  port: 6379,
});

let data;
var options = {
  uri: "http://service-2:2002/data",
  json: true,
  method: "GET",
};
rp(options)
  .then(function (response) {
    //console.log(response);
    data = response;
  })
  .catch(function (err) {
    console.log(err);
  });

app.get("/", (_, res, _2) => {
  // res.status(200).json({
  //   data,
  // });
  client.get("visits", (err, visits) => {
    res.status(200).json({
      Number_of_visits: visits,
      data,
    });
    client.set("visits", +visits + 1);
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
