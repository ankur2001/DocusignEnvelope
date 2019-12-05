const request = require('request');

exports.sendEnv = function (envelopeId) {
//	var Docusign = require('../service/docusignService');
	console.log("Inside docusign sendEnv function");
	
	const headers = {
		"Content-Type": "application/json",
		"x-Docusign-Authentication" : JSON.stringigy({"Username":"murtuza.bohri@mphasis.com","Password" : "Hackathon12$"}),
		"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY4MTg1ZmYxLTRlNTEtNGNlOS1hZjFjLTY4OTgxMjIwMzMxNyJ9.eyJUb2tlblR5cGUiOjUsIklzc3VlSW5zdGFudCI6MTU3NTU2OTgyNywiZXhwIjoxNTc1NTk4NjI3LCJVc2VySWQiOiJmOTE3YWEwMi1hY2VjLTQwZWQtYmE1Ny0wZGNmZjhkNDFmZTIiLCJzaXRlaWQiOjEsInNjcCI6WyJzaWduYXR1cmUiLCJjbGljay5tYW5hZ2UiLCJvcmdhbml6YXRpb25fcmVhZCIsImdyb3VwX3JlYWQiLCJwZXJtaXNzaW9uX3JlYWQiLCJ1c2VyX3JlYWQiLCJ1c2VyX3dyaXRlIiwiYWNjb3VudF9yZWFkIiwiZG9tYWluX3JlYWQiLCJpZGVudGl0eV9wcm92aWRlcl9yZWFkIiwiZHRyLnJvb21zLnJlYWQiLCJkdHIucm9vbXMud3JpdGUiLCJkdHIuZG9jdW1lbnRzLnJlYWQiLCJkdHIuZG9jdW1lbnRzLndyaXRlIiwiZHRyLnByb2ZpbGUucmVhZCIsImR0ci5wcm9maWxlLndyaXRlIiwiZHRyLmNvbXBhbnkucmVhZCIsImR0ci5jb21wYW55LndyaXRlIl0sImF1ZCI6ImYwZjI3ZjBlLTg1N2QtNGE3MS1hNGRhLTMyY2VjYWUzYTk3OCIsImF6cCI6ImYwZjI3ZjBlLTg1N2QtNGE3MS1hNGRhLTMyY2VjYWUzYTk3OCIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC1kLmRvY3VzaWduLmNvbS8iLCJzdWIiOiJmOTE3YWEwMi1hY2VjLTQwZWQtYmE1Ny0wZGNmZjhkNDFmZTIiLCJhbXIiOlsiaW50ZXJhY3RpdmUiXSwiYXV0aF90aW1lIjoxNTc1NTY5ODI1LCJwd2lkIjoiNjJiM2QxNDgtOTM2My00MWQyLWI0MWUtOGQ5NjVmMjMzYmJiIn0.4Co_c5Dvttbkro7iy7hsXhrkSBDJq2jNkZZJJrDKoqHRSHoz_RFudBBRfeB7b0y1zLd-ahVKYTffiJIT6A3l8SXrVBq22dHZlyDJtfCeCGPjh2oNu5lezpJe4jGGfIjBzORSgDTa44FGjNVVMBmWVJCc6a4XcnudmajtHtqRi5jUPVmfwQf1DJ4_qcxDbwvpQ1mOLv6LzNVBgJEGjSe-EtPVxpTFYL7Qd4vkB1SRnYWOYQmIOuU1_cjDDW5YEsi-t-2ubSxeXIXu5wfMn6hXskxP-TzL4TwPldhlAAIuX0Ln-faei-trDZA-2tdcfDCQ5QwtgLLM9YnJGp9KaMo6Cw"
	};
	
	const envReq = {
					"accountId": "9492754",
					"emailSubject": "This request is sent from a Template",
					"templateId": "c2be45cd-94d9-4be1-9e10-34d8d34feb6e",
					"templateRoles": [{
						"roleName": "Signer1",
						"name": "Ankur Agrawal",
						"email": "ankur2001@email.com"
						}],
					"status": "sent"
					}

	return new Promise(function (resolve, reject){
		var options = {
			url: "https://demo.docusign.net:443/restapi/v2/accounts/9492754/envelopes/",
			headers: headers,
			body: envReq,
			json: true,
			method: 'POST',
			rejectUnauthorized: false,
			timeout: 15000
		}
		
		console.log("Docusign API options....", options);
		request(options,function(err, response, body){
			console.log("Docusign API Response ....err ", err);
			console.log("Docusign API Response ....response ", response);
			console.log("Docusign API Response ....body ", body);
			
			if(err){
				const errorResponse = {
					"data": "error calling docusign"
				}
				console.log("Docusign API Response ....err.1", err);
				resolve(errorResponse);
			}
			else if(response.statusCode === 200 || response.statusCode === 201){
				const responseSuccess = {
					"data": "success from docusign",
					"details": body 
				}
					console.log("Docusign API Response ....response.1", response);
				resolve(responseSuccess);
				
			}
			else {
				const errorResponse1 = {
					"data": "response from docusign other than 200"
				}
				console.log("Docusign API Response ....body.1", body);
				resolve(errorResponse1);
			}
		})
		
	}) 
};

exports.envStatus = function (envelopeId) {
//	var Docusign = require('../service/docusignService');
	console.log("Inside docusign envStatus function");
	
	const headers = {
		"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY4MTg1ZmYxLTRlNTEtNGNlOS1hZjFjLTY4OTgxMjIwMzMxNyJ9.eyJUb2tlblR5cGUiOjUsIklzc3VlSW5zdGFudCI6MTU3NTU2OTgyNywiZXhwIjoxNTc1NTk4NjI3LCJVc2VySWQiOiJmOTE3YWEwMi1hY2VjLTQwZWQtYmE1Ny0wZGNmZjhkNDFmZTIiLCJzaXRlaWQiOjEsInNjcCI6WyJzaWduYXR1cmUiLCJjbGljay5tYW5hZ2UiLCJvcmdhbml6YXRpb25fcmVhZCIsImdyb3VwX3JlYWQiLCJwZXJtaXNzaW9uX3JlYWQiLCJ1c2VyX3JlYWQiLCJ1c2VyX3dyaXRlIiwiYWNjb3VudF9yZWFkIiwiZG9tYWluX3JlYWQiLCJpZGVudGl0eV9wcm92aWRlcl9yZWFkIiwiZHRyLnJvb21zLnJlYWQiLCJkdHIucm9vbXMud3JpdGUiLCJkdHIuZG9jdW1lbnRzLnJlYWQiLCJkdHIuZG9jdW1lbnRzLndyaXRlIiwiZHRyLnByb2ZpbGUucmVhZCIsImR0ci5wcm9maWxlLndyaXRlIiwiZHRyLmNvbXBhbnkucmVhZCIsImR0ci5jb21wYW55LndyaXRlIl0sImF1ZCI6ImYwZjI3ZjBlLTg1N2QtNGE3MS1hNGRhLTMyY2VjYWUzYTk3OCIsImF6cCI6ImYwZjI3ZjBlLTg1N2QtNGE3MS1hNGRhLTMyY2VjYWUzYTk3OCIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC1kLmRvY3VzaWduLmNvbS8iLCJzdWIiOiJmOTE3YWEwMi1hY2VjLTQwZWQtYmE1Ny0wZGNmZjhkNDFmZTIiLCJhbXIiOlsiaW50ZXJhY3RpdmUiXSwiYXV0aF90aW1lIjoxNTc1NTY5ODI1LCJwd2lkIjoiNjJiM2QxNDgtOTM2My00MWQyLWI0MWUtOGQ5NjVmMjMzYmJiIn0.4Co_c5Dvttbkro7iy7hsXhrkSBDJq2jNkZZJJrDKoqHRSHoz_RFudBBRfeB7b0y1zLd-ahVKYTffiJIT6A3l8SXrVBq22dHZlyDJtfCeCGPjh2oNu5lezpJe4jGGfIjBzORSgDTa44FGjNVVMBmWVJCc6a4XcnudmajtHtqRi5jUPVmfwQf1DJ4_qcxDbwvpQ1mOLv6LzNVBgJEGjSe-EtPVxpTFYL7Qd4vkB1SRnYWOYQmIOuU1_cjDDW5YEsi-t-2ubSxeXIXu5wfMn6hXskxP-TzL4TwPldhlAAIuX0Ln-faei-trDZA-2tdcfDCQ5QwtgLLM9YnJGp9KaMo6Cw"
	};
	return new Promise(function (resolve, reject){
		var options = {
			url: "https://demo.docusign.net:443/restapi/v2/accounts/9492754/envelopes/"+envelopeId,
			headers: headers,
	//		body: body,
			json: true,
			method: 'GET',
			rejectUnauthorized: false,
			timeout: 15000
		}
		
		console.log("Docusign API options....", options);
		request(options,function(err, response, body){
			console.log("Docusign API Response ....err ", err);
			console.log("Docusign API Response ....response ", response);
			console.log("Docusign API Response ....body ", body);
			
			if(err){
				const errorResponse = {
					"data": "error calling docusign"
				}
				console.log("Docusign API Response ....err.1", err);
				resolve(errorResponse);
			}
			else if(response.statusCode === 200 || response.statusCode === 201){
				const responseSuccess = {
					"data": "success from docusign",
					"details": body 
				}
					console.log("Docusign API Response ....response.1", response);
				resolve(responseSuccess);
				
			}
			else {
				const errorResponse1 = {
					"data": "response from docusign other than 200"
				}
				console.log("Docusign API Response ....body.1", body);
				resolve(errorResponse1);
			}
		})
		
	}) 
};

