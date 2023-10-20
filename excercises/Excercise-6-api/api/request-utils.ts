import { expect } from '@playwright/test';
import { APIResponse } from 'playwright-core';

export const getBodyAsString = async (response: APIResponse) => {
    expect(response.ok()).toBeTruthy();
    return JSON.parse((await response.body()).toString());
};
