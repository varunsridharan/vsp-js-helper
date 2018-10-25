import md5 from 'blueimp-md5';

/**
 * Unique random md5
 * @returns {String}
 */
module.exports = () => String( md5( Math.random() + '-' + Math.random() + '-' + Math.random() ) );