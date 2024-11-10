import { Response } from "express";

type TMeta = {
  total?: number;
  page: number;
  limit: number;
};

type TResponse<T> = {
  status: number;
  success: boolean;
  message?: string;
  meta?: TMeta | null | undefined;
  data?: T | null | undefined;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  return res.status(data.status).json({
    success: data.success,
    status: data.status,
    message: data.message,
    ...(data.meta && { meta: data.meta }),
    ...(data.data && { data: data.data }),
  });
};

export default sendResponse;
