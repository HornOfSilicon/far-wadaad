import FarWadaadScript from '../FarWadaadScript';

test('FarWadaad exists', () => {
  const fw = new FarWadaadScript();
  expect(fw).toBeTruthy();
});

test('FarWadaad parse c', () => {
  const fw = new FarWadaadScript();
  const result = fw.parse('c');
  expect(result).toBe('ع');
});

test('FarWadaad parse x', () => {
  const fw = new FarWadaadScript();
  const result = fw.parse('x');
  expect(result).toBe('ح');
});

test('FarWadaad parse aa', () => {
  const fw = new FarWadaadScript();
  const result = fw.parse('aa');
  expect(result).toBe('ا');
});

test('FarWadaad parse na', () => {
  const fw = new FarWadaadScript();
  const result = fw.parse('na');
  expect(result).toBe('ن');
});

test('FarWadaad parse N', () => {
  const fw = new FarWadaadScript();
  const result = fw.parse('N');
  expect(result).toBe('ن');
});

test('FarWadaad parse N!', () => {
  const fw = new FarWadaadScript();
  const result = fw.parse('N!');
  expect(result).toBe('ن!');
});
