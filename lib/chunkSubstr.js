"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function chunkSubstr(str, size) {
    var numChunks = Math.ceil(str.length / size);
    var chunks = new Array(numChunks);
    for (var i = 0, o = 0; i < numChunks; ++i, o += size) {
        chunks[i] = str.slice(o, (o + size - 1));
    }
    return chunks;
}
exports.default = chunkSubstr;
