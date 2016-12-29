/**
 *@author xyx   <kwin.xu@semioe.com>
 *        date: 2016.12.29
 *@description 
 */
/* jshint ignore:start */
'use strict';
/* jshint ignore:end   */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NurseModuleCondition = new Schema({
    type: { type: String, enum: ['default', 'service'] },                       //当前模块是否属于某个服务
    service: { type: Schema.ObjectId, ref: '_Service' },                        //service
    module_unit: { type: Schema.ObjectId, ref: 'ModuleUnit' },                  //隶属模块组件
    value: { type: Schema.Types.Mixed },                                        //Number | {min: 2, max 10}
    eval: { type: String },                                                     //条件逻辑关系
    result: { type: String },                                                   //判断结果  包含于 module_unit.results
    person: { type: Schema.Types.Mixed },                                       //个人信息作为条件因素之一,eg: sex: 1|0 男|女
    create_at: { type: Date, default: Date.now },                               //创建时间
    update_at: { type: Date, default: Date.now }                                //修改时间
});

module.exports = NurseModuleCondition;