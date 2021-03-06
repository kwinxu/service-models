/**
 *@author xyx   <kwin.xu@semioe.com>
 *        date: 2016.12.29
 *@description 提醒-高级服药
 */
/* jshint ignore:start */
'use strict';
/* jshint ignore:end   */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RemindUnitHighTakeMedicineSchema = new Schema({
    type: { type: String, enum: ['default', 'service'] },                                    //当前模块是否属于某个服务
    service: { type: Schema.ObjectId, ref: '_Service' },                                     //service
    module_unit: { type: Schema.ObjectId, ref: 'ModuleUnit' },                               //隶属模块组件
    medicine: { type: String },                                                              //药物名称
    times: [{ type: String }],                                                               //服药几次
    dosage: {                                                                                //服药剂量及单位
        number: { type: Number },                                                            //服药剂量
        unit: { type: String, enum: _.map(constant.take_medicine_unit, 'key') }              //服药单位
    },
    advice: { type: String, enum: _.map(constant.take_medicine_advice, 'key') },             //医嘱
    create_at: { type: Date, default: Date.now },                                            //创建时间
    update_at: { type: Date, default: Date.now }                                             //修改时间
});

module.exports = RemindUnitHighTakeMedicineSchema;