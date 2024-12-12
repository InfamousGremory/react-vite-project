import { JSDOM } from 'jsdom';

const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
globalThis.document = dom.window.document;
globalThis.window = dom.window;