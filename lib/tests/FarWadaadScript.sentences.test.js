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

test('FarWadaad parse cab caano macaan', () => {
  const fw = new FarWadaadScript();
  const result = fw.parse('cab caano macaan');
  expect(result).toBe('عب عان معان');
});

test('FarWadaad parse iska warama', () => {
  const fw = new FarWadaadScript();
  const result = fw.parse('iska warama');
  expect(result).toBe('إسك ورم');
});

test('FarWadaad parse war maxaa la sheegay', () => {
  const fw = new FarWadaadScript();
  const result = fw.parse('war maxaa la sheegay');
  expect(result).toBe('ور محا لشيگي');
});

test('FarWadaad parse xaggan ku qor waxaad doontid!🚀', () => {
  const fw = new FarWadaadScript();
  const result = fw.parse('xaggan ku qor waxaad doontid!🚀');
  expect(result).toBe('حگن كقر وحاط طونتط!🚀');
});

test('FarWadaad parse sanadku wa 2020', () => {
  const fw = new FarWadaadScript();
  const result = fw.parse('#sanadku wa 2020');
  expect(result).toBe('#سنطك و ٢٠٢٠');
});
test('FarWadaad parse xaggan\niyo\nxagaa', () => {
  const fw = new FarWadaadScript();
  const result = fw.parse(`xaggan
  iyo
  xagaa`);
  expect(result).toBe(`حگن
  إي
  حگا`);
});
