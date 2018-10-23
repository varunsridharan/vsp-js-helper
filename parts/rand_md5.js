import VSP_JS_Helper from '../index';
/**
 * Unique random md5
 * @returns {String}
 */
module.exports = () => String( VSP_JS_Helper.md5( Math.random() + '-' + Math.random() + '-' + Math.random() ) );