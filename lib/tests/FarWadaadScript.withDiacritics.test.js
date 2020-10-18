import FarWadaadScript from '../FarWadaadScript';

test('FarWadaad parse cab', () => {
  const fw = new FarWadaadScript({ withDiacritics: true });
  const result = fw.parse('cab');
  expect(result).toBe('عَبْ');
});

test('FarWadaad parse dhe kaw laba sadex', () => {
  const fw = new FarWadaadScript({ withDiacritics: true, withDaal: true });
  const result = fw.parse('dhe kaw laba sadex');
  expect(result).toBe('طِّ كَوْ لَبَ سَدِّحْ');
});

test('FarWadaad parse maxaa las heegay', () => {
  const fw = new FarWadaadScript({ withDiacritics: true });
  const result = fw.parse('maxaa la sheegay');
  expect(result).toBe('مَحا لَشيگَيْ');
});

test('FarWadaad parse ma nabad baa', () => {
  const fw = new FarWadaadScript({ withDiacritics: true });
  const result = fw.parse('ma nabad ba');
  expect(result).toBe('مَ نَبَطْ بَ');
});
