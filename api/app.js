'use strict';

var restify = require('restify');
var server = restify.createServer();

server.use(restify.authorizationParser());
server.use(restify.bodyParser({ mapParams: false }));

var restifyOAuth2 = require('restify-oauth2');

restifyOAuth2.ropc(server, {
	tokenEndpoint: '/token',
	hooks: require('./hooks')
});

/*

To get a token:

curl http://localhost:8080/token \
-X POST \
-u officialApiClient:C0FFEE \
-d 'grant_type=password&username=fernando&password=romero' \
-is | json

HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 85
Date: Wed, 19 Feb 2014 23:12:09 GMT
Connection: keep-alive

{
  "access_token": "5lWbd61/1B+HWRr0xvx62L6fotLUFALu3P2mDUxqXkg=",
  "token_type": "Bearer"
}

To access a protected resource:

curl http://localhost:8080/api/fernando \
-H 'Authorization: Bearer 05RkSf/81re9vccLQCRhIbwhdihA/rYt007BbxgD8z8=' \
-is | json

HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 21
Date: Wed, 19 Feb 2014 23:14:55 GMT
Connection: keep-alive

{
  "msg": "hi <username>"
}

*/

server.get('/', function(req, res) {
	res.send({
		msg: req.username ? ('hi ' + req.username) : 'hi stranger'
	});
});

server.get('/api/:username', function(req, res) {
	if (req.params.username !== req.username) {
		res.sendUnauthorized();
	}
	res.send({
		info: 'this info belongs to ' + req.username
	});
});

server.listen(8080);
