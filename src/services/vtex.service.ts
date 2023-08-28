import { injectable, inject } from '@loopback/core';
import axios from 'axios';
import { VtexDataSource } from '../datasources';

@injectable()
export class VtexService {
  constructor(
    @inject('datasources.vtex') protected dataSource: VtexDataSource,
  ) {}

  async fetchFromEndpoint(endpoint: string): Promise<any> {
    try {
      const response = await axios.get(`${this.dataSource.settings.baseURL}/${endpoint}`, { 
        headers: { 
          'Accept': 'application/json', 
          'X-VTEX-API-AppToken': 'RVXQMZYNRRZNTMEURBRBHPRCWYMITOEUNUPISMZTCCAGROZIUTHBZFUCZKIVIWSHJPAREKDSZSKDTFKGQZHNBKKXLIANVJLFBTJJBUWJJNDQTJVQKXLOKCMFYHWORAVT', 
          'X-VTEX-API-AppKey': 'vtexappkey-skillnet-VOZXMR'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getVtexCategoryTree(): Promise<any> {
    const endpoint = 'api/catalog_system/pub/category/tree/2';
    return this.fetchFromEndpoint(endpoint);
  }

  async getVtexProductDetails(productId: string): Promise<any> {
    const endpoint = `api/catalog/pvt/product/${productId}`;
    return this.fetchFromEndpoint(endpoint);
  }

  async getTransformedVtexProductDetails(productId: string): Promise<any> {
    const endpoint = `api/catalog/pvt/product/${productId}`;
    
    const response = await this.fetchFromEndpoint(endpoint);
    // return this.fetchFromEndpoint(endpoint);
    const transformedResponse = this.transformProductDetails(response);
    return transformedResponse;
  }
  private transformProductDetails(response: any): any {
    return {
      productId: response.Id,
      productName: response.Name,
      category: {
        departmentId: response.DepartmentId,
        categoryId: response.CategoryId,
      },
    };
  }
}

