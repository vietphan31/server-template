import { Request } from 'express';

class ExampleService {
  getExample(_req: Request) {
    return 'Example';
  }
}

export default new ExampleService();
