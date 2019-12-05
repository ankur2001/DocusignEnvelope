'use strict';
var Docusign = require('../service/docusignService');

module.exports.sendEnvelope = function sendEnvelope () {
	
	return new Promise(function (resolve, reject){
	  var serviceRes = Docusign.sendEnvelopeController('ankur2001@gmail.com')
	  //return serviceRes;
	  console.log ("serviceRes inside controller", JSON.stringify(serviceRes))
	  serviceRes.then(function(res){
		  console.log("response in app")
		  console.log("response in app.2.1.1",res)
		  console.log("response in app.2.1.1.1.1",res.data)
		  return res;		  
	  }).catch(function(err){
		  console.log("error in app 2.2.2")
		  console.log("error in app.2.2.2.2",err)
		  return err;
	  })
	})
    
};
