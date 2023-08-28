import { VtexService } from '../services';
export declare class VtexController {
    private vtexService;
    constructor(vtexService: VtexService);
    getVtexCategoryTree(): Promise<any>;
    getVtexProductDetails(productId: string): Promise<any>;
    gettransformedVtexProductDetails(productId: string): Promise<any>;
}
