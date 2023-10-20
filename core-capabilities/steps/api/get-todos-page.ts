import { ApiHandler } from "core-capabilities/engine/api/request-handler";
import { expect } from "playwright/test";
import { ENDPOINTS, HOSTS } from "./endpoints";

export const getToDoPageRequest = async () => {
    let requestParams = {
        host: HOSTS.TO_DO_LIST,
        url: ENDPOINTS.TO_DO_MVC,
    };
    let handler = new ApiHandler(requestParams);
    let response = await handler.get();
    expect(response.ok()).toBeTruthy();
    return response
};