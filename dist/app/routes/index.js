"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_routes_1 = require("../modules/book/book.routes");
const member_routes_1 = require("../modules/member/member.routes");
const borrow_routes_1 = require("../modules/borrow/borrow.routes");
const return_routes_1 = require("../modules/return/return.routes");
const router = (0, express_1.Router)();
const modulesRoutes = [
    {
        path: "/books",
        route: book_routes_1.BookRoutes,
    },
    {
        path: "/members",
        route: member_routes_1.MemberRoutes,
    },
    {
        path: "/borrow",
        route: borrow_routes_1.BorrowBookRoutes,
    },
    {
        path: "/return",
        route: return_routes_1.ReturnRoutes,
    },
];
modulesRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
