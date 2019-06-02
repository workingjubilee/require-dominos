'use strict';

const urls = require('./urls.json');
const httpJson = require('./http-json');

const Customer = function(parameters) {
    this.ID = '';
    // These are named with camelCase because Dominos API uses this format
    if(!parameters){
        parameters={
            firstName:'',
            lastName:'',
            email:'',
            phone:''
        }
    }
    this.firstName = parameters.firstName;
    this.lastName = parameters.lastName;
    this.email = parameters.email;
    this.address = parameters.address;
    this.phone = parameters.phone;
};

module.exports = Customer;
