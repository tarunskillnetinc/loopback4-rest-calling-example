import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'spryker',
  connector: 'rest',
  baseURL: 'www.spryker.com',
  crud: false
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class SprykerDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'spryker';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.spryker', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
