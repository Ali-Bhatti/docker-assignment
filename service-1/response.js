const request = require("request");
const rp = require("request-promise");

const getResponse = (uri)=>{
    var options = {
        uri,
        json: true,
        method: "GET",
      };
      rp(options)
        .then(function (response) {
          return response;
        })
        .catch(function (err) {
          return err;
        });
};

module.exports = getResponse;