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

const NurseModuleSchema = new Schema({
    key: { type: String, required: true },                                              //key
    label: { type: String, required: true },                                            //显示名称
    nurse_tool_continuous: [{ type: Schema.ObjectId, ref: 'NurseToolContinuous' }],     //连续高级看护工具
    nurse_tool_stable: [{ type: Schema.ObjectId, ref: 'NurseToolStable' }],             //稳定期看护工具
    description: { type: String },                                                      //检测项木块介绍
    create_at: { type: Date, default: Date.now },                                       //创建时间
    update_at: { type: Date, default: Date.now }                                        //修改时间
});

module.exports = NurseModuleSchema;