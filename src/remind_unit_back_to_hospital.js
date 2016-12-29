/**
 *@author xyx   <kwin.xu@semioe.com>
 *        date: 2016.12.29
 *@description 提醒-回院
 */
/* jshint ignore:start */
'use strict';
/* jshint ignore:end   */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RemindUnitBackToHospitalSchema = new Schema({
    type: { type: String, enum: ['default', 'service'] },                                    //当前模块是否属于某个服务
    service: { type: Schema.ObjectId, ref: '_Service' },                                     //service
    module_unit: { type: Schema.ObjectId, ref: 'ModuleUnit' },                               //隶属模块组件
    time: { type: Date },                                                                    //回院时间
    hospital: { type: String },                                                              //指定医院
    examinations: [{ type: String }],                                                        //检测项
    create_at: { type: Date, default: Date.now },                                            //创建时间
    update_at: { type: Date, default: Date.now }                                             //修改时间
});

module.exports = RemindUnitBackToHospitalSchema;