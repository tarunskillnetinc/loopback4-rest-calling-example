import {inject, Provider, injectable} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import axios from 'axios';
import {CategoryDataSource} from '../datasources';

@injectable()
export class TreesService {
  constructor(
    @inject('datasources.category') protected dataSource: CategoryDataSource,
  ) {}

  async fetchFromEndpoint(endpoint: string): Promise<any> {
    try {
      const response = await axios.get(`${this.dataSource.settings.baseURL}/${endpoint}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getConcreteProductDetails(productId: string): Promise<any> {
    const endpoint = `concrete-products/${productId}?include=concrete-product-image-sets%252cconcrete-product-availabilities`;
    return this.fetchFromEndpoint(endpoint);
  }
}