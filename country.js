/**
 * Created by root on 25/3/16.
 */
var countries        = require('country-data').countries,
    currencies       = require('country-data').currencies,
    regions          = require('country-data').regions,
    languages        = require('country-data').languages,
    callingCountries = require('country-data').callingCountries;

// .all gives you an array of all entries
console.log( countries.all );
//console.log( currencies.all );

// countries are found using alpha2 or alpha3 (both uppercase)
//console.log( countries.BE.name );        // 'Belgium'
//console.log( countries.FRA.currencies ); // ['EUR']

// callingCountries is like countries but only has entries with dialing codes.

// currencies are accessed by their code (uppercase)
//console.log( currencies.USD.name ); // 'United States dollar'

// regions are accessed using a camel case name
//console.log( regions.europe.countries );
