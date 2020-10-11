export const shortVowels = {
  a: 'ا',
  e: 'ا',
  i: 'ا',
  o: 'او',
  u: 'او',
};

export const longVowels = {
  aa: 'ا',
  ee: 'ي',
  ii: 'ي',
  oo: 'و',
  uu: 'و',
};

export const punctuation = {
  '.': '.',
  '!': '!',
  '?': '؟',
  ',': '،',
};

export const consonants = {
  b: 'ب',
  t: 'ت',
  j: 'ج',
  x: 'ح',
  kh: 'خ',
  d: 'ط',
  r: 'ر',
  s: 'س',
  sh: 'ش',
  dh: 'ڎ',
  c: 'ع',
  g: 'گ',
  f: 'ف',
  q: 'ق',
  k: 'ك',
  l: 'ل',
  m: 'م',
  n: 'ن',
  w: 'و',
  h: 'ه',
  y: 'ي',
};

// by default, we will be ignoring shortVowels from the alphabet
// only on the start of a word, shortVowels are included. See FarWadaadScript.parse for details
export const alphabet = { ...punctuation, ...longVowels, ...consonants };
