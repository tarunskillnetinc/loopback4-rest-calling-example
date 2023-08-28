"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const axios_1 = tslib_1.__importDefault(require("axios"));
/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE = {
    description: 'Ping Response',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                title: 'PingResponse',
                properties: {
                    greeting: { type: 'string' },
                    date: { type: 'string' },
                    url: { type: 'string' },
                    headers: {
                        type: 'object',
                        properties: {
                            'Content-Type': { type: 'string' },
                        },
                        additionalProperties: true,
                    },
                },
            },
        },
    },
};
/**
 * A simple controller to bounce back http requests
 */
let PingController = exports.PingController = class PingController {
    constructor(req) {
        this.req = req;
    }
    // Map to `GET /ping`
    ping() {
        // Reply with a greeting, the current time, the url, and request headers
        return {
            greeting: 'Hello from LoopBack',
            date: new Date(),
            url: this.req.url,
            headers: Object.assign({}, this.req.headers),
        };
    }
    async getProducts() {
        try {
            const url = 'https://skillnet.vtexcommercestable.com.br/api/catalog/pvt/product/40000077';
            const response = await (0, node_fetch_1.default)(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-VTEX-API-AppKey': 'vtexappkey-skillnet-VOZXMR',
                    'X-VTEX-API-AppToken': 'RVXQMZYNRRZNTMEURBRBHPRCWYMITOEUNUPISMZTCCAGROZIUTHBZFUCZKIVIWSHJPAREKDSZSKDTFKGQZHNBKKXLIANVJLFBTJJBUWJJNDQTJVQKXLOKCMFYHWORAVT'
                }
            });
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.log(error);
        }
    }
    async callApi(id) {
        try {
            const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
            const response = await axios_1.default.get(apiUrl);
            return response.data;
        }
        catch (error) {
            // Handle error appropriately
            throw error;
        }
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/ping'),
    (0, rest_1.response)(200, PING_RESPONSE),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Object)
], PingController.prototype, "ping", null);
tslib_1.__decorate([
    (0, rest_1.get)('/products'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], PingController.prototype, "getProducts", null);
tslib_1.__decorate([
    (0, rest_1.get)('/call-api/{id}'),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PingController.prototype, "callApi", null);
exports.PingController = PingController = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__metadata("design:paramtypes", [Object])
], PingController);
//# sourceMappingURL=ping.controller.js.map