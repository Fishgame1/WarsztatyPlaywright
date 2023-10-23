import { ENDPOINTS, HOSTS } from "core-capabilities/steps/api/endpoints";
import { expect } from "playwright/test";
import { ApiHandler } from "./request-handler";

export const getToDoPageRequest = async () => {
    let requestParams = {
        host: HOSTS.TO_DO_LIST,
        url: ENDPOINTS.TO_DO_MVC,
    };
    let response = await new ApiHandler(requestParams).get();
    expect(response.ok()).toBeTruthy();
    return response
};