import { HttpResponse } from "../models/http-response-model"

export const ok = async (data: any): Promise<HttpResponse> => {
    return { 
        statuscode: 200,
        body: data,
    };
};

export const created = async (): Promise<HttpResponse> => {
    return { 
        statuscode: 201,
        body: "Created",
    };
};

export const noContent = async (): Promise<HttpResponse> => {
    return { 
        statuscode: 204,
        body: "No Content",
    };
};

export const badRequest = async (): Promise<HttpResponse> => {
    return { 
        statuscode: 400,
        body: "Bad Request",
    };
};