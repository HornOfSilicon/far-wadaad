import FarWadaadScript from '../FarWadaadScript';

test('FarWadaad parse cab', () => {
  const fw = new FarWadaadScript();
  const result = fw.parse('cab');
  expect(result).toBe('عب');
});

test('FarWadaad parse caano', () => {
  const fw = new FarWadaadScript();
  const result = fw.parse('caano');
  expect(result).toBe('عان');
});

test('FarWadaad parse macaan', () => {
  const fw = new FarWadaadScript();
  const result = fw.parse('macaan');
  expect(result).toBe('معان');
});
