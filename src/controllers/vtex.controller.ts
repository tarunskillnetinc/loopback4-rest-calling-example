import { get, response, param } from '@loopback/rest';
import { inject } from '@loopback/core';
import { VtexService } from '../services';

export class VtexController {
  constructor(
    @inject('services.VtexService') private vtexService: VtexService,
  ) {}

  @get('/get-vtex-category-tree')
  @response(200, {
    description: 'Get VTEX category tree from the external API',
  })
  async getVtexCategoryTree(): Promise<any> {
    try {
      const vtexCategoryTree = await this.vtexService.getVtexCategoryTree();
      return vtexCategoryTree;
    } catch (error) {
      throw error;
    }
  }
  @get('/vtex-product/{productId}')
  @response(200, {
    description: 'Get VTEX product details from the external API',
  })
  async getVtexProductDetails(@param.path.string('productId') productId: string): Promise<any> {
    try {
      const vtexProductDetails = await this.vtexService.getVtexProductDetails(productId);
      return vtexProductDetails;
    } catch (error) {
      throw error;
    }
  }
  @get('/vtex-transformed/{productId}')
  @response(200, {
    description: 'Get VTEX product details from the external API',
  })
  async gettransformedVtexProductDetails(@param.path.string('productId') productId: string): Promise<any> {
    try {
      const vtexProductDetails = await this.vtexService.getTransformedVtexProductDetails(productId);
      return vtexProductDetails;
    } catch (error) {
      throw error;
    }
  }

  @get('/vtex-best-selling-products')
  @response(200, {
    description: 'Get VTEX best selling products from the external API',
  })
  async getBestSellingProducts(): Promise<any> {
    try {
      const bestSellingProducts = await this.vtexService.getBestSellingProducts();
      return bestSellingProducts;
    } catch (error) {
      throw error;
    }
  }
}
