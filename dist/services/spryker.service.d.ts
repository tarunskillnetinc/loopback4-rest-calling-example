import { Provider } from '@loopback/core';
import { SprykerDataSource } from '../datasources';
export interface Spryker {
}
export declare class SprykerProvider implements Provider<Spryker> {
    protected dataSource: SprykerDataSource;
    constructor(dataSource?: SprykerDataSource);
    value(): Promise<Spryker>;
}
