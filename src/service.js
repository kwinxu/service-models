/**
 *@author xyx   <kwin.xu@semioe.com>
 *        date: 2016.12.27
 *@description 
 */
/* jshint ignore: start */
'use strict';
/* jshint ignore: end   */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    serviceCore: { type: Schema.ObjectId, ref: 'ServiceCore' }
});


module.exports = ServiceSchema;