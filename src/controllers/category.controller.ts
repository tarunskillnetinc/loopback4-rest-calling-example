// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import { ServiceCategory, TreesService} from '../services';
import {
  Request,
  RestBindings,
  get,
  response,
  param,
  ResponseObject,
} from '@loopback/rest';


export class CategoryController {
  constructor(
    @inject('services.TreesService') private treesService: TreesService,
  ) {}

  @get('/get-category-trees')
  @response(200, {
    description: 'Get category trees from the external API',
  })
  async getCategoryTrees(): Promise<any> {
    try {
      const categoryTrees = await this.treesService.fetchFromEndpoint('category-trees');
      return categoryTrees;
    } catch (error) {
      // Handle errors
      throw error;
    }
  }

  @get('/spryker-product/{productId}')
  @response(200, {
    description: 'Get concrete product details from the external API',
  })
  async getConcreteProductDetails(@param.path.string('productId') productId: string): Promise<any> {
    try {
      const productDetails = await this.treesService.getConcreteProductDetails(productId);
      return productDetails;
    } catch (error) {
      // Handle errors
      throw error;
    }
  }
}