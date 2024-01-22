import { Delete, Get, Patch, Post, Put } from './types';
import { getHeaders } from './utils';

/**
 * @todo Investigate how to alter the methods to work in different environments (client/server/static)
 * 'no-store' is used (hard coded at the moment) to prevent caching on the server side
 * https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#dynamic-data-fetching
 */
const GET: Get = async (url) =>
  fetch(url, {
    cache: 'no-store',
    method: 'GET',
    headers: getHeaders(),
  });

const POST: Post = async (url, body) =>
  fetch(url, {
    cache: 'no-store',
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(body),
  });

const PUT: Put = async (url, body) =>
  fetch(url, {
    cache: 'no-store',
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(body),
  });

const PATCH: Patch = async (url, body) =>
  fetch(url, {
    cache: 'no-store',
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify(body),
  });

const DELETE: Delete = async (url) =>
  fetch(url, {
    cache: 'no-store',
    method: 'DELETE',
    headers: getHeaders(),
  });

export const client = {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
};
