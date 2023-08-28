"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreesService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const axios_1 = tslib_1.__importDefault(require("axios"));
const datasources_1 = require("../datasources");
let TreesService = exports.TreesService = class TreesService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async fetchFromEndpoint(endpoint) {
        try {
            const response = await axios_1.default.get(`${this.dataSource.settings.baseURL}/${endpoint}`);
            return response.data;
        }
        catch (error) {
            // Handle errors
            throw error;
        }
    }
    async getConcreteProductDetails(productId) {
        const endpoint = `concrete-products/${productId}?include=concrete-product-image-sets%252cconcrete-product-availabilities`;
        return this.fetchFromEndpoint(endpoint);
    }
};
exports.TreesService = TreesService = tslib_1.__decorate([
    (0, core_1.injectable)(),
    tslib_1.__param(0, (0, core_1.inject)('datasources.category')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.CategoryDataSource])
], TreesService);
//# sourceMappingURL=trees.service.js.map