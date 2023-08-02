import { Router } from 'express';

import ExampleController from '@/modules/example/example.controller';

const exampleRouter = Router();

exampleRouter.get('/get-example', ExampleController.getExample);

export default exampleRouter;
