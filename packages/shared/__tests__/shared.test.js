import { greet } from '../lib/shared.js';
import { strict as assert } from 'assert';

assert.strictEqual(greet("assets"), "Hello, assets!");
console.info("assets tests passed");
