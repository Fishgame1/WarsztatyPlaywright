import playwrightObject from 'core-capabilities/engine/playwright-object';
import { APIRequestContext, APIResponse } from 'playwright-core';
import { RequestParams } from './request-params';

export class ApiHandler {
    public context!: APIRequestContext;

    constructor(private requestParams: RequestParams) {}

    static of(requestParams: RequestParams): ApiHandler {
        return new ApiHandler(requestParams);
    }

    // public async post(): Promise<APIResponse> {
    //     await this.init();
    //     return await this.context.post(this.requestParams.url, {
    //         headers: this.requestParams.headers,
    //         data: this.requestParams.body,
    //         form: this.requestParams.form,
    //         params: this.requestParams.params
    //     });
    // }

    // public async put(): Promise<APIResponse> {
    //     await this.init();
    //     return await this.context.put(this.requestParams.url, {
    //         headers: this.requestParams.headers,
    //         data: this.requestParams.body,
    //         form: this.requestParams.form,
    //         params: this.requestParams.params
    //     });
    // }

    // public async delete(): Promise<APIResponse> {
    //     await this.init();
    //     return await this.context.delete(this.requestParams.url, {
    //         headers: this.requestParams.headers,
    //         data: this.requestParams.body,
    //         form: this.requestParams.form,
    //         params: this.requestParams.params
    //     });
    // }

    // private addToken(): void {
    //     if (this.requestParams.token) {
    //         if (this.requestParams.headers) {
    //             this.requestParams.headers['Authorization'] = `Bearer ${this.requestParams.token}`;
    //         } else {
    //             this.requestParams.headers = { Authorization: `Bearer ${this.requestParams.token}` };
    //         }
    //     }
    // }

    // private async init(proxy?: string) {
    //     this.context = await playwrightObject.getApiRequest().newContext({
    //         baseURL: this.requestParams.host,
    //         proxy: proxy ? {server: proxy} : undefined
    //     });
    //     this.addToken();
    // }
}

export const getRequest = (requestParams: RequestParams): ApiHandler => {
    return new ApiHandler(requestParams);
};
