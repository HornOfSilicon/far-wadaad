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

export const numbers = {
  0: '٠',
  1: '١',
  2: '٢',
  3: '٣',
  4: '٤',
  5: '٥',
  6: '٦',
  7: '٧',
  8: '٨',
  9: '٩',
};

export const punctuationAndSpaces = {
  '.': '.',
  '!': '!',
  '?': '؟',
  ',': '،',
  '#': '#',
  '\n': '\n',
  '\r': '\r',
  '\t': '\t',
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
export const alphabet = {
  ...numbers,
  ...punctuationAndSpaces,
  ...longVowels,
  ...consonants,
};
