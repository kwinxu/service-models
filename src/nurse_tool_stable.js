/**
 *@author xyx <kwin.xu@semioe.com>
 *        date: 2016.12.29
 *@description 高级看护-稳定器看护工具
 */
/* jshint ignore:start */
'use strict';
/* jshint ignore:end   */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NurseToolStableSchema = new Schema({
    service: { type: Schema.ObjectId, ref: '_Service' },                                    //隶属service
    module: { type: Schema.ObjectId, ref: '_NurseModule' },                                 //隶属module
    //加测条件
    condition: {
        count: { type: Number },                                                            //检测次数
        state: { type: String }                                                             //检测状态
    },
    days: { type: Number },                                                                 //加测天数
    testTime: [{ type: String }],                                                           //加测每天测量次数
    //加测警告
    warnings: {
        count: { type: Number },                                                            //检测次数
        state: { type: String }                                                             //检测状态
    },
    create_at: { type: Date, default: Date.now },                                           //创建时间
    update_at: { type: Date, default: Date.now }                                            //修改时间
});

module.exports = NurseToolStableSchema;