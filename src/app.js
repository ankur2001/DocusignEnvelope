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
console.log("inside app.js under sendEnvelope")
	var Docusign = require('./controllers/Docusign');	
	var finalResponse = Docusign.sendEnvelope()
	return finalResponse.then(function(res){
		  console.log("response in app")
		  console.log("response in app.2",res)
		  console.log("response in app.2.2",res.data)
		  return res;		  
	  }).catch(function(err){
		  console.log("error in app")
		  console.log("error in app.2",err)
		  return err;
	  })
//  return finalResponse;
});