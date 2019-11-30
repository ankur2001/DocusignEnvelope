var ApiBuilder = require('claudia-api-builder'),
  api = new ApiBuilder();
module.exports = api;

api.get('/hello', function () {
  return 'hello world';
});

api.get('/liveStatus', function () {
	
	var Status = require('./src/controllers/Status');
	
	var finalResponse = Status.getLiveStatus()

  return finalResponse;
});

api.get('/sendEnvelope', function () {
	
	var Docusign = require('./src/controllers/Docusign');
	
	var finalResponse = Docusign.sendEnvelope()

  return finalResponse;
});