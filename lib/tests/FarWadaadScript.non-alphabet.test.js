import FarWadaadScript from '../FarWadaadScript';

test('is it an emoji', () => {
  const result = FarWadaadScript.isEmoji('😃');
  expect(result).toBe(true);
});

test('FarWadaad parse emojis', () => {
  const fw = new FarWadaadScript();
  const result = fw.parse('😃😃');
  expect(result).toBe('😃😃');
});

test('FarWadaad parse numbers', () => {
  const fw = new FarWadaadScript();
  const result = fw.parse('2135');
  expect(result).toBe('٢١٣٥');
});
