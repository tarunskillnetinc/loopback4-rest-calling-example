"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategoryProvider = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const service_proxy_1 = require("@loopback/service-proxy");
const datasources_1 = require("../datasources");
let ServiceCategoryProvider = exports.ServiceCategoryProvider = class ServiceCategoryProvider {
    constructor(dataSource = new datasources_1.CategoryDataSource()) {
        this.dataSource = dataSource;
    }
    value() {
        return (0, service_proxy_1.getService)(this.dataSource);
    }
};
exports.ServiceCategoryProvider = ServiceCategoryProvider = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.category')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.CategoryDataSource])
], ServiceCategoryProvider);
//# sourceMappingURL=service-category.service.js.map