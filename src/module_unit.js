/**
 *@author xyx   <kwin.xu@semioe.com>
 *        date: 2016.12.29
 *@description 检测项组件
 */
/* jshint ignore: start */
'use strict';
/* jshint ignore: end   */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModuleUnitSchema = new Schema({
    key: { type: String, required: true },                          //key
    label: { type: String, required: true },                        //显示名称
    description: { type: String },                                  //描述
    conditions: [{ type: Schema.ObjectId, ref: '_Condition' }],     //条件
    results: { type: Array, required: true },                       //结果
    unit: { type: String, required: true },                         //单位
    module: { type: Schema.ObjectId, ref: '_NurseModule' },         //隶属模块
    service: { type: Schema.ObjectId, ref: '_Service' },            //隶属服务
    create_at: { type: Date, default: Date.now },                   //创建时间
    update_at: { type: Date, default: Date.now }                    //修改时间
});

module.exports = ModuleUnitSchema;