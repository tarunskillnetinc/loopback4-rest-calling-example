import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {CategoryDataSource} from '../datasources';

export interface ServiceCategory {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.

}

export class ServiceCategoryProvider implements Provider<ServiceCategory> {
  constructor(
    @inject('datasources.category')
    protected dataSource: CategoryDataSource = new CategoryDataSource(),
  ) {}

  value(): Promise<ServiceCategory> {
    return getService(this.dataSource);
  }
}
