import {inject} from '@loopback/core';
import {
  Request,
  RestBindings,
  get,
  param,
  response,
  ResponseObject,
} from '@loopback/rest';
import fetch from 'node-fetch';
import axios from 'axios';

/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE: ResponseObject = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'PingResponse',
        properties: {
          greeting: {type: 'string'},
          date: {type: 'string'},
          url: {type: 'string'},
          headers: {
            type: 'object',
            properties: {
              'Content-Type': {type: 'string'},
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};

/**
 * A simple controller to bounce back http requests
 */
export class PingController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  // Map to `GET /ping`
  @get('/ping')
  @response(200, PING_RESPONSE)
  ping(): object {
    // Reply with a greeting, the current time, the url, and request headers
    return {
      greeting: 'Hello from LoopBack',
      date: new Date(),
      url: this.req.url,
      headers: Object.assign({}, this.req.headers),
    };
  }

  @get('/products')

  async getProducts() : Promise<any> {

    try{

      const url = 'https://skillnet.vtexcommercestable.com.br/api/catalog/pvt/product/40000077';

      const response = await fetch(url,{

        method:'GET',

        headers:{

          'Content-Type': 'application/json',

          'X-VTEX-API-AppKey':'vtexappkey-skillnet-VOZXMR',

          'X-VTEX-API-AppToken':'RVXQMZYNRRZNTMEURBRBHPRCWYMITOEUNUPISMZTCCAGROZIUTHBZFUCZKIVIWSHJPAREKDSZSKDTFKGQZHNBKKXLIANVJLFBTJJBUWJJNDQTJVQKXLOKCMFYHWORAVT'

        }

      });

      const data = await response.json();

      return data;

    }

    catch(error){

      console.log(error);

    }

  }

  @get('/call-api/{id}')
  async callApi(@param.path.number('id') id: number): Promise<object> {
    try {
      const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

 }
