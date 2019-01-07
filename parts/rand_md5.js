//import md5 from 'locutus/php/strings/md5';

/**
 * Unique random md5
 * @returns {String}
 */
module.exports = () => String( md5( Math.random() + '-' + Math.random() + '-' + Math.random() ) );