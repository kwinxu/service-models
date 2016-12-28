/**
 *@author xyx   <kwin.xu@semioe.com>
 *        date: 2016.12..27
 *@description 
 */
/* jshint ignore: start */
'use strict';
/* jshint ignore: end   */

const _CONSTANT = {
    PHONE_CODE_EXPIRE: 180,
    TokenSettings: {
        TokenSaveDays: '90d',
        TokenSavePeriod: 90
    },
    Roles: {
        admin: 'admin',
        user: 'user',
        doctor: 'doctor'
    },
    workflow_type: {
        template: 'template',
        common: 'common'
    },
    service_type: {
        template: 'template',
        common: 'common',
        private: 'private'
    },
    template_type: {
        PLATFORM: 'PLATFORM',
        DOCTOR: 'DOCTOR',
        CLIENT: 'CLIENT'
    },
    plan_type: {
        daily_repeat: 'daily_repeat',
        weekly_repeat: 'weekly_repeat',
        times: 'times',
        times_check: 'times_check',
        additional_test: 'additional_test',
        additional_test_check: 'additional_test_check'
    },
    eval_type: [
        { key: 'gte', name: '大于等于' },
        { key: 'gt', name: '大于' },
        { key: 'eq', name: '等于' },
        { key: 'lte', name: '小于等于' },
        { key: 'lt', name: '小于' },
        { key: 'range', name: '介于' }
    ],
    relations: [
        { key: 'or', name: '或者' },
        { key: 'and', name: '并且' }
    ],
    blood_pressure_value_state: [
        { key: 'serious_low', name: '严重偏低' },
        { key: 'low', name: '偏低' },
        { key: 'normal', name: '正常' },
        { key: 'high', name: '偏高' },
        { key: 'serious_high', name: '严重偏高' }
    ],
    blood_fat_value_state: [
        { key: 'low', name: '偏低' },
        { key: 'normal', name: '正常' },
        { key: 'high', name: '偏高' }
    ],
    rdf_category: {
        public: 'public',
        private: 'private'
    },
    take_medicine_unit: [
        { key: 'tablets', name: '片' },
        { key: 'grain', name: '粒' },
        { key: 'bottle', name: '瓶' },
        { key: 'piece', name: '支' },
        { key: 'g', name: '克' },
        { key: 'kg', name: '千克' },
        { key: 'mg', name: '毫克' },
        { key: 'litre', name: '升' },
        { key: 'ml', name: '毫升' },
        { key: 'bag', name: '袋' },
        { key: 'tablespoon', name: '汤匙' }
    ],
    take_medicine_advice: [
        { key: 'none', name: '无医嘱' },
        { key: 'ante_cibum', name: '餐前服药' },
        { key: 'in_cibum', name: '餐前服药' },
        { key: 'post_cibum', name: '餐后服药' }
    ],
    SERVICE_STATUS: [0, 1, 2]
}

module.exports = _CONSTANT;