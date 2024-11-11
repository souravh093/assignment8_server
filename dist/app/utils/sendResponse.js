"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    return res.status(data.status).json(Object.assign(Object.assign({ success: data.success, status: data.status, message: data.message }, (data.meta && { meta: data.meta })), (data.data && { data: data.data })));
};
exports.default = sendResponse;
