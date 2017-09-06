'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js');

/* Connect to your database */
mongoose.connect('mongodb://cmndrbacara:twipapke@ds133398.mlab.com:33398/the1337chef-db');
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
fs.readFile('listings.json', 'utf8', function(err, data)
{
	var newData = JSON.parse(data);
	for(var i = 0; i < newData.entries.length; i++)
	{
		Listing.create(
		{
			code: newData.entries[i].code,
			name: newData.entries[i].name,
			coordinates: newData.entries[i].coordinates,
			address: newData.entries[i].address,
			created_at: newData.entries[i].created_at,
			updated_at: newData.entries[i].updated_at
		}, function(err, listing)
		{
			if(err)
				return handleError(err);
		});
	}
});

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */