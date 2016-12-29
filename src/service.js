/**
 *@author xyx   <kwin.xu@semioe.com>
 *        date: 2016.12.28
 *@description 服务
 */
/* jshint ignore: start */
'use strict';
/* jshint ignore: end   */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    serviceCore: { type: Schema.ObjectId, ref: 'ServiceCore' },                         //服务基本信息以及分配不可更改内容
    target: { type: Schema.ObjectId, ref: 'User' },                                     //服务分配用户
    type: { type: String, enum: ['PLATFORM', 'DOCTOR', 'CLIENT'] },                     //服务类型
    start_at: { type: Date, default: Date.now },                                        //服务开始时间
    create_at: { type: Date, default: Date.now },                                       //创建时间
    update_at: { type: Date, default: Date.now }                                        //修改时间
});

module.exports = ServiceSchema;