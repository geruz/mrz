'use strict';

/*
 Parsing document number
 The number may be splited (TD1 format)
 */

module.exports = function parseDocumentNumber(source, checkDigit, optional) {
    if (checkDigit === '<' && optional) {
        optional = optional.replace(/<.*/, '');
        source += optional.substring(0, optional.length - 1);
        checkDigit = optional.charAt(optional.length - 1);
    }
    var result = {
        source,
        label:'Document number',
        description: source,
        error:[]
    };
    if (!check(source, checkDigit)) {
        result.push('Check digit "' + checkDigit + '" not valid');
    }
    return result;
};
