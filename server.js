const http = require("http");
const request = require("request");
const conf = require("./conf/proxyConf.json");

http
  .createServer((req, res) => {
    request(
      {
        url: req.headers.site,
        headers: {
          "User-Agent": "request"
        }
      },
      (error, response, body) => {
        if (!error && response.statusCode == 200) {
          res.end(body);
        } else {
          if (response) {
            res.statusCode = response.statusCode;
          } else {
              res.statusCode = 400;
          }
          res.end(body||JSON.stringify(error));
        }
      }
    );
  })
  .listen(conf.port, ()=> {
    console.log("We staan te luisteren op", conf.port );
  }); 
