var ApiBuilder = require('claudia-api-builder'),
  api = new ApiBuilder();
module.exports = api;

api.get('/hello', function () {
  return 'hello world';
});

api.get('/liveStatus', function () {	
	var Status = require('./controllers/Status');	
	var finalResponse = Status.getLiveStatus()
  return finalResponse;
});

api.post('/sendEnvelope', function (req,res,next) {	
	console.log("inside app.js under sendEnvelope")
	console.log("Request received at sendEnvelope", req)
	console.log("Request body received at sendEnvelope", req.body)
	console.log("Request body email received at sendEnvelope", req.body.email)
	const emailId = req.body.email;
	var Docusign = require('./service/docusignService');	
	var finalResponse = Docusign.sendEnvelopeController(emailId);
	console.log("inside app.js final response", finalResponse)
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
});


api.get('/envStatus', function (req, res, next) {	
	console.log("inside app.js under envStatus")
	console.log("req.queryString in get Envelope Status", req.queryString)
	console.log("req.queryString.envelopeId in get Envelope Status", req.queryString.envelopeId)
	const envelopeId = req.queryString.envelopeId;
	var DocusignEnv = require('./service/docusignAPICall');
	var finalResponse = DocusignEnv.envStatus(envelopeId);
	 return finalResponse.then(function(res){
		  console.log("response in app")
		  console.log("response in app.1",res)
		  console.log("response in app.1.1",res.data)
		  return res;		  
	  }).catch(function(err){
		  console.log("error in app")
		  console.log("error in app.1",err)
		  return err;
	  })
});