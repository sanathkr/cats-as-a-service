var fs = require('fs');

var cats = JSON.parse(fs.readFileSync("./cats.json"));

exports.handler = function(event, context, callback) {

  var images = cats["data"]["images"]["image"];
  var randIndex = Math.floor(Math.random() * images.length);
  var imgUrl = images[randIndex]["url"];

  var html = `
    <html>
    <body>
    <img src="${imgUrl}"/>
    </body>
    </html>
  `;

  callback(null, {
    "body": html,
    "statusCode": 200,
    "headers": {
      "content-type": "text/html"
    }
  });
}