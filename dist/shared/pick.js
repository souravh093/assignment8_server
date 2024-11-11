"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = void 0;
const pick = (query, keys) => {
    const finalObject = {};
    for (const key of keys) {
        if (query && Object.hasOwnProperty.call(query, key)) {
            finalObject[key] = query[key];
        }
    }
    return finalObject;
};
exports.pick = pick;
