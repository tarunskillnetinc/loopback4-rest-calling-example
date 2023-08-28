import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {SprykerDataSource} from '../datasources';

export interface Spryker {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
}

export class SprykerProvider implements Provider<Spryker> {
  constructor(
    // spryker must match the name property in the datasource json file
    @inject('datasources.spryker')
    protected dataSource: SprykerDataSource = new SprykerDataSource(),
  ) {}

  value(): Promise<Spryker> {
    return getService(this.dataSource);
  }
}
