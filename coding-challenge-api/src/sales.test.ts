import request from 'supertest';
import express from 'express';
import { getSales } from './sales';

const app = express();
app.get('/sales', getSales);

describe('GET /sales', () => {
  it('should return combined data', async () => {
    const response = await request(app).get('/sales');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });


it('should return an array of objects with specific properties', async () => {
    const response = await request(app).get('/sales');
  
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    response.body.forEach((item: any) => {
      expect(item).toHaveProperty('Id');
      expect(item).toHaveProperty('storeId');
      expect(item).toHaveProperty('orderId');
      expect(item).toHaveProperty('latest_ship_date');
      expect(item).toHaveProperty('shipment_status');
      expect(item).toHaveProperty('destination');
      expect(item).toHaveProperty('destination');
      expect(item).toHaveProperty('items');
      expect(item).toHaveProperty('orderValue');
      expect(item).toHaveProperty('marketplace');
      expect(item).toHaveProperty('shopName');
    });
  });
});