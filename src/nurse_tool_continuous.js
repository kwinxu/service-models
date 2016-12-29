/**
 *@author xyx   <kwin.xu@semioe.com>
 *        date: 2016.12.29
 *@description 高级看护-连续看护工具
 */
/* jshint ignore:start */
'use strict';
/* jshint ignore:end   */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NurseToolContinuousSchema = new Schema({
    service: { type: Schema.ObjectId, ref: '_Service' },                                         //隶属service
    module: { type: Schema.ObjectId, ref: '_NurseModule' },                                      //隶属module
    times: { type: Number },                                                                     //检测条件次数
    periods: [{ type: Number }],                                                                 //干预期、观察期
    result: { type: String, enum: _.map(constant.blood_pressure_value_state, 'key') },           //预期判断结果
    create_at: { type: Date, default: Date.now },                                                //创建时间
    update_at: { type: Date, default: Date.now }                                                 //修改时间
});

module.exports = NurseToolContinuousSchema;