import { test, expect } from '@playwright/test';
import fs from 'fs';

test('has title', async () => {
  const expected = fs.readFileSync('restored-Image-expected.png');
  expect(expected).toMatchSnapshot('restored-Image-actual.png', {threshold: 0.91});
});

