"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnpjMask = void 0;
var cnpjMask = function (e) {
    var element = e.target;
    element.value = element.value.replace(/\D/g, '');
    if (element.value.length > 14) {
        element.value = element.value.slice(0, 14);
    }
    switch (element.value.length) {
        case 3:
        case 4:
        case 5:
            element.value = element.value.replace(/(\d{2})(\d+)/, '$1.$2');
            break;
        case 6:
        case 7:
        case 8:
            element.value = element.value.replace(/(\d{2})(\d{3})(\d+)/, '$1.$2.$3');
            break;
        case 9:
        case 10:
        case 11:
        case 12:
            element.value = element.value.replace(/(\d{2})(\d{3})(\d{3})(\d+)/, '$1.$2.$3/$4');
            break;
        case 13:
        case 14:
            element.value = element.value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/, '$1.$2.$3/$4-$5');
            break;
        default:
            break;
    }
};
exports.cnpjMask = cnpjMask;
