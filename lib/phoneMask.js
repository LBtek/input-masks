"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneMask = void 0;
var chunkSubstr_1 = __importDefault(require("./chunkSubstr"));
var phoneMask = function (e) {
    var _a;
    var element = e.target;
    var filteredNumbers = (_a = element.value.match(/\d+/g)) === null || _a === void 0 ? void 0 : _a.join('');
    if (filteredNumbers && filteredNumbers.length > 11) {
        filteredNumbers = filteredNumbers.slice(0, 10);
    }
    filteredNumbers ? (element.value = filteredNumbers) : (element.value = '');
    var arr = [''];
    switch (element.value.length) {
        case 1:
        case 2:
            arr = (0, chunkSubstr_1.default)(element.value, 2);
            arr.unshift('(');
            if (arr.length < 2)
                arr.push(' )');
            else
                arr.push(')');
            element.value = arr.join('');
            break;
        case 3:
        case 4:
        case 5:
        case 6:
            element.value = element.value.replace(/(\d{2})(\d+)/, '($1) $2');
            break;
        case 7:
        case 8:
        case 9:
        case 10:
            element.value = element.value.replace(/(\d{2})(\d{4})(\d+)/, '($1) $2-$3');
            break;
        case 11:
            element.value = element.value.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '($1) $2-$3-$4');
            break;
        default:
            break;
    }
};
exports.phoneMask = phoneMask;
