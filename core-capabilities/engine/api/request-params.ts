import { Serializable } from "playwright-core/types/structs";

export interface RequestParams {
    host: string;
    url: string;
    body?: string | Buffer | Serializable;
    params?: { [key: string]: string | number | boolean };
    headers?: { [key: string]: string };
    form?: { [key: string]: string | number | boolean };
    token?: string;
}