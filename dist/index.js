"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var showOvertime = function () {
    var table = document.evaluate(
    //  所定外時間を取得
    "//div[@class='htBlock-adjastableTableF_inner']/table/tbody/tr/td[@class='custom2 specific-align_right ']/p", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var range = __spreadArray([], Array(table.snapshotLength)).map(function (_, k) { return k; });
    // => [0, 1, 2 ...]
    var totalMinutes = range.reduce(function (prev, index) {
        var _a, _b, _c;
        var overtime = (_c = (_b = (_a = table
            .snapshotItem(index)) === null || _a === void 0 ? void 0 : _a.firstChild) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.innerText.split(".");
        if (overtime && overtime.length === 2) {
            // 例 1.32 = 1時間32分
            // overtime[0] = 1, overtime[1] = 32 なので、 分に変換して加算していく
            return prev + Number(overtime[0]) * 60 + Number(overtime[1]);
        }
        // 年休や休日などで所定時間が空欄の場合はスキップ
        return prev;
    }, 0);
    var hour = (totalMinutes / 60) | 0;
    var minute = totalMinutes % 60;
    alert("\u4ECA\u6708\u306E\u6B8B\u696D\u6642\u9593\u306F " + hour + "\u6642\u9593" + minute + "\u5206 \u3067\u3059");
};
showOvertime();
