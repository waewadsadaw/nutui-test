"use strict";
exports.__esModule = true;
exports.joinTimestamp = void 0;
function joinTimestamp(join, restful) {
    if (restful === void 0) { restful = false; }
    if (!join) {
        return restful ? "" : {};
    }
    var now = new Date().getTime();
    if (restful) {
        return "?_t=".concat(now);
    }
    return { _t: now };
}
exports.joinTimestamp = joinTimestamp;
