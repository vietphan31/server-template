import { NextFunction, Request } from 'express';

import { HttpStatusCode } from '@/common/constants';

import ExampleService from './example.service';
import { ResponseCustom } from '@/common/interfaces/express';

export class ExampleController {
  getExample(req: Request, res: ResponseCustom, next: NextFunction) {
    try {
      const data = ExampleService.getExample(req);
      return res.status(HttpStatusCode.OK).json({
        httpStatusCode: HttpStatusCode.OK,
        data,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ExampleController();
