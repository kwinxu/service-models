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
    serviceCore: { type: Schema.ObjectId, ref: 'ServiceCore' },
    target: { type: Schema.ObjectId, ref: 'User' },
    type: { type: String, enum: ['PLATFORM', 'DOCTOR', 'CLIENT'] },
    
});


module.exports = ServiceSchema;