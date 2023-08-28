import { Provider } from '@loopback/core';
import { CategoryDataSource } from '../datasources';
export interface ServiceCategory {
}
export declare class ServiceCategoryProvider implements Provider<ServiceCategory> {
    protected dataSource: CategoryDataSource;
    constructor(dataSource?: CategoryDataSource);
    value(): Promise<ServiceCategory>;
}
