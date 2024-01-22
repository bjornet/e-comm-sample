import { Maybe } from '$types/types';

export type Headers = {
  'Content-Type': 'application/json';
};

export type Get = (url: string) => Promise<Maybe<Response>>;

export type Post = (url: string, body: any) => Promise<Response>;

export type Put = (url: string, body: any) => Promise<Response>;

export type Patch = (url: string, body: any) => Promise<Response>;

export type Delete = (url: string) => Promise<Response>;

type RequestBody<T> = T extends undefined ? undefined : T;

export type UrlParams<B> = B extends undefined ? undefined : B[];

export type Options<T = undefined, B = undefined> = {
  body?: RequestBody<T>;
  urlParams?: UrlParams<B>;
};
