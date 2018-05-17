'use strict';

module.exports = function(Shipment) {
  Shipment.byTel = function(key, cb) {
    var whereCondition = {
      tel: key
    };
    var limit = 20;

    if (key === "XiaoHaoHao") {
      limit = 300;
      whereCondition = {};
    }

    Shipment.find({
      where: whereCondition,
      order: 'created DESC',
      limit: limit
    }, function(err, shipments) {
      if (err) {
        return cb(err);
      }
      cb(null, shipments);
    });
  }

  Shipment.remoteMethod ('byTel', {
    http: {
      path: '/byTel',
      verb: 'post'
    },
    accepts: {
      arg: 'tel',
      type: 'string',
      required: true
    },
    returns: {
      arg: 'shipments',
      type: 'array'
    },
    description: "Get the top 20 shipments for a phone number, ordered by created datetime."
  });
};

