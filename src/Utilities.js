'use strict';

const httpJson = require('./http-json.js');
const urls = require('./urls.json');
const Address = require('./Address.js');

const findNearbyStores = function(address, pickUpType, callback) {
    if(typeof pickUpType == 'function'){
        callback=pickUpType;
        pickUpType='Delivery';
    }
    if(!address || !callback) {
        if(!callback){
            throw('invalid findNearbyStores request. address and callback are required at a minimum.');
        }
        if(callback) {
            callback(
                {
                    success: false,
                    message: 'At least a partial address (minimum accepted is zipcode) is required to find stores'
                }
            );
        }
        return false;
    }

    let updatedAddress = new Address(address)
    const addressLines=updatedAddress.getAddressLines();

    const url = urls.store.find.replace(
        '${line1}',
        encodeURI(
          addressLines.line1
        )
    ).replace(
        '${line2}',
        encodeURI(
          addressLines.line2
        )
    ).replace(
        '${type}',
        pickUpType||'Delivery'
    );

    httpJson.get(url, callback);
};

module.exports = {
    findNearbyStores: findNearbyStores
};
