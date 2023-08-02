import request from 'supertest';

import { App } from '@/app';
import config from '@/common/config';
import TC_001 from '../mocks/example/TC_001.json';

const server = new App();
const prefix = `${config.contextPath}/example`;

describe('Example module', () => {
  test('TC_GET_EXAMPLE_001', async () => {
    const res = await request(server.app).get(`${prefix}/get-example`);
    expect(res.body).toStrictEqual(TC_001);
  });
});
