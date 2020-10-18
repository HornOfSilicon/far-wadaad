/* eslint-disable max-classes-per-file */
import _ from 'lodash';
import {
  shortVowelsAtStart, shortVowels, alphabet, consonants,
} from './constants';

/**
 * Options for parsing Latin text to far wadaad
 * withDiacritics - if true, adds arabic diacritics to parsed text
 * withDaal - if true, replaces arabic letter daa with daal
 */
export class FarWadaadScriptOptions {
  constructor() {
    this.withDiacritics = false;
    this.withDaal = false;
  }
}

/**
 * Converts between latin and far wadaad
 */
export default class FarWadaadScript {
  /**
   * @param {object} options parse options
   * @param {boolean} options.withDiacritics if true, adds arabic diacritics to parsed text
   * @param {boolean} options.withDaal - if true, replaces arabic letter daa with daal
   */
  constructor(options) {
    this.options = options || new FarWadaadScriptOptions();
  }

  /**
   * Converts from latin to far wadaad
   *
   * @param {string} inputText - input in Somali latin script
   * @returns {string} - text in Somali far wadaad script
   */
  parse(inputText) {
    const latinText = FarWadaadScript.cleanUp(inputText);
    const latinWords = latinText.split(' ');
    const farWadaadWordsArray = _.map(latinWords, (word) => {
      const latinChars = Array.from(word);
      const farWadaadCharArray = this.parseLatinWord(latinChars, [], 0);
      return farWadaadCharArray.filter((r) => r).join('');
    });
    let farWadaad = farWadaadWordsArray.join(' ').trim();
    if (this.options.withDaal) {
      farWadaad = farWadaad.replace(/ط/g, 'د');
      farWadaad = farWadaad.replace(/ڎ/g, 'ط');
    }
    return farWadaad;
  }

  parseLatinWord(input, output, currentIndex) {
    let index = currentIndex;

    if (!input || input.length === 0) {
      return output;
    }
    const result = this.findFarWadaadCharMatch(input, index);
    if (result.shift) {
      input.shift();
    }
    output.push(result.output);
    index += 1;
    return this.parseLatinWord(input, output, index);
  }

  /**
   * Converts from far wadaad to latin script
   * (this is WIP)
   *
   * @param {string} farWadaad - input in far wadaad
   * @returns {string} - text in Somali latin
   */
  static toLatin(farWadaad) {
    const letters = Array.from(farWadaad);
    const resultArray = letters.map(
      (l) => Object.keys(alphabet).filter((a) => alphabet[a].includes(l))[0] || '',
    );
    return resultArray.filter((r) => r).join('a');
  }

  /**
   * Converts single latin to far wadaad, returns if more shift is needed (for double)
   *
   * @param {string} currentLatinLetter - latin letter
   * @param {string} input - latin word
   * @param {number} index - current char index
   * @returns {object} result - output, shift
   */
  findFarWadaadCharMatch(input, index) {
    let output = '';
    let shift = false;
    const currentLatinLetter = input.shift();
    const farWadaadMatch = alphabet[currentLatinLetter];
    const farwadaadVowelStart = shortVowelsAtStart[currentLatinLetter];
    const farwadaadVowel = shortVowels[currentLatinLetter];
    const doubleCharLetter = alphabet[currentLatinLetter + input[0]];
    const isEmoji = FarWadaadScript.isEmoji(currentLatinLetter);
    const isLastChar = input.length === 0;
    const isFirstChar = index === 0;
    const nextLatinLetter = isLastChar ? '' : input[0];
    const isConsonants = consonants[currentLatinLetter];
    const addSukoon = isConsonants && !doubleCharLetter
      && !farwadaadVowelStart && (isLastChar || !shortVowels[nextLatinLetter]);

    // emoji should be passed as is
    if (isEmoji) {
      output = currentLatinLetter;
    }

    // dealing with likes of oo sh dh etc...
    if (!output && doubleCharLetter) {
      output = doubleCharLetter;
      shift = true;
    }

    // dealing with single match such as x c etc..
    if (!output && farWadaadMatch) {
      output = farWadaadMatch;
    }

    // dealing with words that starts with single vowel (usually single vowels are ignored)
    if (!output && farwadaadVowelStart && isFirstChar) {
      output = farwadaadVowelStart;
    }

    // dealing with diacritics if enabled
    if (!output && this.options.withDiacritics === true && farwadaadVowel) {
      output = farwadaadVowel;
    }

    // dealing with diacritics last word with constant
    if (this.options.withDiacritics === true && addSukoon) {
      output += 'ْ';
    }
    return { output, shift };
  }

  static cleanUp(input) {
    // TODO: line blow is a hack to deal with text that start with vowels
    // dirty hack needs proper implementation
    let cleanInput = `  ${input.toLowerCase()}`;
    // removing space from the following 'proverbs' so it it is part of the next word
    cleanInput = cleanInput.replace(/ la /g, ' la');
    cleanInput = cleanInput.replace(/ ha /g, ' ha');
    cleanInput = cleanInput.replace(/ ku /g, ' ku');
    cleanInput = cleanInput.replace(/ ka /g, ' ka');
    cleanInput = cleanInput.replace(/ oo/g, ' o');
    // dealing with 'heavy' consonants
    cleanInput = cleanInput.replace(/gg/g, 'g');
    cleanInput = cleanInput.replace(/rr/g, 'r');
    return cleanInput;
  }

  static isEmoji(string) {
    // from stackOverflow
    const ranges = [
      '\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]',
      ' ', // Also allow spaces
    ].join('|');
    const match = string.match(new RegExp(ranges, 'g'));
    return match && match.length > 0;
  }
}
