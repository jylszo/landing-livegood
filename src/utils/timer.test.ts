import test from 'node:test';
import assert from 'node:assert/strict';
import { getTimeUntilNextCutoff, padZero } from './timer';

test('padZero formats numbers with leading zero', () => {
  assert.equal(padZero(5), '05');
  assert.equal(padZero(12), '12');
  assert.equal(padZero(0), '00');
});

test('getTimeUntilNextCutoff calculates valid non-negative remaining time', () => {
  const result = getTimeUntilNextCutoff(new Date('2026-11-08T14:24:37Z'));
  assert.ok(result.days >= 0 && result.days <= 7);
  assert.ok(result.hours >= 0 && result.hours < 24);
  assert.ok(result.minutes >= 0 && result.minutes < 60);
  assert.ok(result.seconds >= 0 && result.seconds < 60);
});
