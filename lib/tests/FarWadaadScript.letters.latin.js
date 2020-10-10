import FarWadaadScript from '../FarWadaadScript';

test('FarWadaad convert ع to latin', () => {
  const result = FarWadaadScript.toLatin('ع');
  expect(result).toBe('c');
});

test('FarWadaad convert ح to latin', () => {
  const result = FarWadaadScript.toLatin('ح');
  expect(result).toBe('x');
});

test('FarWadaad convert ا to latin', () => {
  const result = FarWadaadScript.toLatin('ا');
  expect(result).toBe('aa');
});
