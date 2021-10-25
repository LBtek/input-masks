"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cepMask = void 0;
var cepMask = function (e) {
    var _a;
    var element = e.target;
    var filteredNumbers = (_a = element.value.match(/\d+/g)) === null || _a === void 0 ? void 0 : _a.join('');
    if (filteredNumbers && filteredNumbers.length > 8) {
        filteredNumbers = filteredNumbers.slice(0, 7);
    }
    filteredNumbers ? (element.value = filteredNumbers) : (element.value = '');
    switch (element.value.length) {
        case 3:
        case 4:
        case 5:
            element.value = element.value.replace(/(\d{2})(\d+)/, '$1.$2');
            break;
        case 6:
        case 7:
        case 8:
            element.value = element.value.replace(/(\d{2})(\d{3})(\d+)/, '$1.$2-$3');
            break;
        default:
            break;
    }
};
exports.cepMask = cepMask;
