var redis = require('redis');
var client = redis.createClient('6379', 'redis');

client.set('foo', 'bar');

client.get('foo', function(err, reply) {
	console.log(reply);
});

client.quit();