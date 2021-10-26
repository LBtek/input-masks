var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define("cepMask", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cepMask = void 0;
    var cepMask = function (e) {
        var element = e.target;
        element.value = element.value.replace(/\D/g, '');
        if (element.value.length > 8) {
            element.value = element.value.slice(0, 7);
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
                element.value = element.value.replace(/(\d{2})(\d{3})(\d+)/, '$1.$2-$3');
                break;
            default:
                break;
        }
    };
    exports.cepMask = cepMask;
});
define("chunkSubstr", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function chunkSubstr(str, size) {
        var numChunks = Math.ceil(str.length / size);
        var chunks = new Array(numChunks);
        for (var i = 0, o = 0; i < numChunks; ++i, o += size) {
            chunks[i] = str.slice(o, o + size);
        }
        return chunks;
    }
    exports.default = chunkSubstr;
});
define("cnpjMask", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cnpjMask = void 0;
    var cnpjMask = function (e) {
        var element = e.target;
        element.value = element.value.replace(/\D/g, '');
        if (element.value.length > 14) {
            element.value = element.value.slice(0, 13);
        }
        switch (element.value.length) {
            case 3:
            case 4:
            case 5:
                element.value = element.value.replace(/(\d{2})?(\d+)/, '$1.$2');
                break;
            case 6:
            case 7:
            case 8:
                element.value = element.value.replace(/(\d{2})?(\d{3})?(\d+)/, '$1.$2.$3');
                break;
            case 9:
            case 10:
            case 11:
            case 12:
                element.value = element.value.replace(/(\d{2})?(\d{3})?(\d{3})?(\d+)/, '$1.$2.$3/$4');
                break;
            case 13:
            case 14:
                element.value = element.value.replace(/(\d{2})?(\d{3})?(\d{3})?(\d{4})?(\d+)/, '$1.$2.$3/$4-$5');
                break;
            default:
                break;
        }
    };
    exports.cnpjMask = cnpjMask;
});
define("cpfCnpjMask", ["require", "exports", "chunkSubstr"], function (require, exports, chunkSubstr_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cpfCnpjMask = void 0;
    chunkSubstr_1 = __importDefault(chunkSubstr_1);
    var cpfCnpjMask = function (e) {
        var element = e.target;
        element.value = element.value.replace(/\D/g, '');
        if (element.value.length > 14) {
            element.value = element.value.slice(0, 13);
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
                element.value = element.value.replace(/(\d{2})?(\d{3})?(\d{3})?(\d{4})/, '$1.$2.$3/$4');
                break;
            case 13:
            case 14:
                element.value = element.value.replace(/(\d{2})?(\d{3})?(\d{3})?(\d{4})?(\d+)/, '$1.$2.$3/$4-$5');
                break;
            default:
                break;
        }
    };
    exports.cpfCnpjMask = cpfCnpjMask;
});
define("cpfMask", ["require", "exports", "chunkSubstr"], function (require, exports, chunkSubstr_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cpfMask = void 0;
    chunkSubstr_2 = __importDefault(chunkSubstr_2);
    var cpfMask = function (e) {
        var element = e.target;
        element.value = element.value.replace(/\D/g, '');
        if (element.value.length > 11) {
            element.value = element.value.slice(0, 10);
        }
        var arr = [''];
        switch (element.value.length) {
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                arr = (0, chunkSubstr_2.default)(element.value, 3);
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
});
define("phoneMask", ["require", "exports", "chunkSubstr"], function (require, exports, chunkSubstr_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.phoneMask = void 0;
    chunkSubstr_3 = __importDefault(chunkSubstr_3);
    var phoneMask = function (e) {
        var element = e.target;
        element.value = element.value.replace(/\D/g, '');
        if (element.value.length > 11) {
            element.value = element.value.slice(0, 10);
        }
        var arr = [''];
        switch (element.value.length) {
            case 1:
            case 2:
                arr = (0, chunkSubstr_3.default)(element.value, 2);
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
});
define("index", ["require", "exports", "cepMask", "cpfMask", "cnpjMask", "cpfCnpjMask", "phoneMask"], function (require, exports, cepMask_1, cpfMask_1, cnpjMask_1, cpfCnpjMask_1, phoneMask_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(cepMask_1, exports);
    __exportStar(cpfMask_1, exports);
    __exportStar(cnpjMask_1, exports);
    __exportStar(cpfCnpjMask_1, exports);
    __exportStar(phoneMask_1, exports);
});
