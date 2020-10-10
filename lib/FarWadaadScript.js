import _ from 'lodash';
import {
  shortVowels, alphabet,
} from './constants';

/**
 * Converts between latin and far wadaad
 */
export default class FarWadaadScript {
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
      const farWadaadCharArray = this.parseLatinCharArray(latinChars, [], 0);
      return farWadaadCharArray.filter((r) => r).join('');
    });
    return farWadaadWordsArray.join(' ').trim();
  }

  parseLatinCharArray(input, output, currentIndex) {
    let index = currentIndex;

    if (!input || input.length === 0) {
      return output;
    }
    const currentLatinLetter = input.shift();
    const farWadaadMatch = alphabet[currentLatinLetter];
    // emoji should be passed as is
    if (FarWadaadScript.isEmoji(currentLatinLetter)) {
      output.push(currentLatinLetter);
      index += 1;
      return this.parseLatinCharArray(input, output, index);
    }

    // dealing with likes of oo sh dh etc...
    const doubleCharLetter = alphabet[currentLatinLetter + input[0]];
    if (doubleCharLetter) {
      input.shift();
      index += 1;
      output.push(doubleCharLetter);
      return this.parseLatinCharArray(input, output, index);
    }

    // dealing with single match such as x c etc..
    if (farWadaadMatch) {
      output.push(farWadaadMatch);
      index += 1;
      return this.parseLatinCharArray(input, output, index);
    }

    // dealing with words that starts with single vowel (usually single vowels are ignored)
    const farwadaadVowelStart = shortVowels[currentLatinLetter];
    if (farwadaadVowelStart && index === 0) {
      output.push(farwadaadVowelStart);
      index += 1;
      return this.parseLatinCharArray(input, output, index);
    }

    // similar to the above, recursively call the next char in input array
    return this.parseLatinCharArray(input, output, index);
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
