/**
 *@author xyx   <kwin.xu@semioe.com>
 *        date: 2016.12.28
 *@description 服务基本信息及其内容
 */
/* jshint ignore: start */
'use strict';
/* jshint ignore: end   */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceCoreSchema = new Schema({
    name: { type: String, required: true },                               //服务名称
    price: { type: Number, required: true },                              //服务价格
    nurse_period: [{ type: Number, required: true }],                     //看护时间
    creator: { type: Schema.ObjectId, ref: 'User' },                      //创建者
    description: { type: String },                                        //服务描述
    nurse_modules: [{ type: Schema.ObjectId, ref: '_NurseModule' }],      //检测项  看护模块
    remind_modules: [{ type: Schema.ObjectId, ref: 'RemindModules' }],    //提醒模块
    status: { type: String, default: '0' },                               //服务状态{'0': '未完成', '1': '已完成', '2': '已下架'}
    create_at: { type: Date, default: Date.now },                         //创建时间
    update_at: { type: Date, default: Date.now }                          //修改时间
});


module.exports = ServiceCoreSchema;