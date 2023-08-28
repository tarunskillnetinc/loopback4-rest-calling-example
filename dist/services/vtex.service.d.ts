import { VtexDataSource } from '../datasources';
export declare class VtexService {
    protected dataSource: VtexDataSource;
    constructor(dataSource: VtexDataSource);
    fetchFromEndpoint(endpoint: string): Promise<any>;
    getVtexCategoryTree(): Promise<any>;
    getVtexProductDetails(productId: string): Promise<any>;
    getTransformedVtexProductDetails(productId: string): Promise<any>;
    private transformProductDetails;
}
