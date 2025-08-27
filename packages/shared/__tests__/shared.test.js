import assets from '../lib/shared.js';
import { strict as assert } from 'assert';

assert.strictEqual(assets(), 'Hello from assets');
console.info('assets tests passed');
