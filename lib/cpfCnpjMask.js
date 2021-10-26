"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cpfCnpjMask = void 0;
var chunkSubstr_1 = __importDefault(require("./chunkSubstr"));
var cpfCnpjMask = function (e) {
    var element = e.target;
    element.value = element.value.replace(/\D/g, '');
    if (element.value.length > 14) {
        element.value = element.value.slice(0, 14);
    }
    var arr = [''];
    switch (element.value.length) {
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            arr = (0, chunkSubstr_1.default)(element.value, 3);
            element.value = arr.join('.');
            break;
        case 10:
        case 11:
            element.value = element.value.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, '$1.$2.$3-$4');
            break;
        case 12:
            element.value = element.value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '$1.$2.$3/$4');
            break;
        case 13:
        case 14:
            element.value = element.value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/, '$1.$2.$3/$4-$5');
            break;
        default:
            break;
    }
};
exports.cpfCnpjMask = cpfCnpjMask;
