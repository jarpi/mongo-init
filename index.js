var mongo = require('mongodb').MongoClient
    mongo.connect('mongodb://127.0.0.1', function(err, client) {
      // db gives access to the database
			console.log('connected');
			const db = client.db('BoardingPass');
			db.collection('AirportCode').find({}).toArray((err, data) => {
				console.dir(data);
				client.close();
			});
    });
