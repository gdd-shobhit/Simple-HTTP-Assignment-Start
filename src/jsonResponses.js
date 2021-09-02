const text = require('./textResponses.js');

const getHelloJSON = (request, response) => {
  const helloJson = {
    message: text.hello,
  };

  const stringMessage = JSON.stringify(helloJson);

  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(stringMessage);
  response.end();
};

const getTimeJSON = (request, response) => {
  const timeJson = {
    message: text.getTimeString(),
  };

  const stringMessage = JSON.stringify(timeJson);

  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(stringMessage);
  response.end();
};

module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;
