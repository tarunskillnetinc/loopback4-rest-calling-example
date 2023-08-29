"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VtexController = void 0;
const tslib_1 = require("tslib");
const rest_1 = require("@loopback/rest");
const core_1 = require("@loopback/core");
const services_1 = require("../services");
let VtexController = exports.VtexController = class VtexController {
    constructor(vtexService) {
        this.vtexService = vtexService;
    }
    async getVtexCategoryTree() {
        try {
            const vtexCategoryTree = await this.vtexService.getVtexCategoryTree();
            return vtexCategoryTree;
        }
        catch (error) {
            throw error;
        }
    }
    async getVtexProductDetails(productId) {
        try {
            const vtexProductDetails = await this.vtexService.getVtexProductDetails(productId);
            return vtexProductDetails;
        }
        catch (error) {
            throw error;
        }
    }
    async gettransformedVtexProductDetails(productId) {
        try {
            const vtexProductDetails = await this.vtexService.getTransformedVtexProductDetails(productId);
            return vtexProductDetails;
        }
        catch (error) {
            throw error;
        }
    }
    async getBestSellingProducts() {
        try {
            const bestSellingProducts = await this.vtexService.getBestSellingProducts();
            return bestSellingProducts;
        }
        catch (error) {
            throw error;
        }
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/get-vtex-category-tree'),
    (0, rest_1.response)(200, {
        description: 'Get VTEX category tree from the external API',
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], VtexController.prototype, "getVtexCategoryTree", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vtex-product/{productId}'),
    (0, rest_1.response)(200, {
        description: 'Get VTEX product details from the external API',
    }),
    tslib_1.__param(0, rest_1.param.path.string('productId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], VtexController.prototype, "getVtexProductDetails", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vtex-transformed/{productId}'),
    (0, rest_1.response)(200, {
        description: 'Get VTEX product details from the external API',
    }),
    tslib_1.__param(0, rest_1.param.path.string('productId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], VtexController.prototype, "gettransformedVtexProductDetails", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vtex-best-selling-products'),
    (0, rest_1.response)(200, {
        description: 'Get VTEX best selling products from the external API',
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], VtexController.prototype, "getBestSellingProducts", null);
exports.VtexController = VtexController = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('services.VtexService')),
    tslib_1.__metadata("design:paramtypes", [services_1.VtexService])
], VtexController);
//# sourceMappingURL=vtex.controller.js.map