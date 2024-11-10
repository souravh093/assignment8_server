import { Router } from "express";
import { BookRoutes } from "../modules/book/book.routes";
import { MemberRoutes } from "../modules/member/member.routes";
import { BorrowBookRoutes } from "../modules/borrow/borrow.routes";
import { ReturnRoutes } from "../modules/return/return.routes";

const router = Router();

const modulesRoutes = [
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/members",
    route: MemberRoutes,
  },
  {
    path: "/borrow",
    route: BorrowBookRoutes,
  },
  {
    path: "/return",
    route: ReturnRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
