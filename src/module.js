/**
 *@author xyx   <kwin.xu@semioe.com>
 *        date: 2016.12.29
 *@description 常用检测项模块
 */
/* jshint ignore: start */
'use strict';
/* jshint ignore: end   */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModuleSchema = new Schema({
    key: { type: String, required: true },                                              //key
    label: { type: String, required: true },                                            //显示名称
    type: { type: String, required: true, enum: ['nurse', 'remind'] },                  //模块类型
    description: { type: String },                                                      //检测项木块介绍
    create_at: { type: Date, default: Date.now },                                       //创建时间
    update_at: { type: Date, default: Date.now }                                        //修改时间
});

module.exports = ModuleSchema;