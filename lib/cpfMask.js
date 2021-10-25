"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cpfMask = void 0;
var chunkSubstr_1 = __importDefault(require("./chunkSubstr"));
var cpfMask = function (e) {
    var _a;
    var element = e.target;
    var filteredNumbers = (_a = element.value.match(/\d+/g)) === null || _a === void 0 ? void 0 : _a.join('');
    if (filteredNumbers && filteredNumbers.length > 11) {
        filteredNumbers = filteredNumbers.slice(0, 10);
    }
    filteredNumbers ? (element.value = filteredNumbers) : (element.value = '');
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
        default:
            break;
    }
};
exports.cpfMask = cpfMask;
