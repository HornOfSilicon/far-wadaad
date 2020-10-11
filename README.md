[![Actions Status](https://github.com/HornOfSilicon/far-wadaad/workflows/npm-publish/badge.svg)](https://github.com/HornOfSilicon/far-wadaad/actions)

# Far Wadaad

Tools for Somali far Wadaad script. Far wadaad is one of the first Somali language scripts. It is based on Arabic abjad and reported to be invented by Sh Yusuf Al-kawnayn (Aw barkhadle). To learn more, read [this blog post](https://www.haadka.com/blog/2020-10-11-reclaiming-somali-aw-barkhadles-script-somali-abs/)

The repo will contains:

- Somali latin to Far wadaad converter (beta)
- Far wadaad to somali latin converter (experimental)

## Demo

https://www.haadka.com/far-wadaad/

## Usage in your own code (as exernal library)

Provided your solution is in javaScript, you can install the library like any Github npm Package

```
npm install @hornofsilicon/far-wadaad
```

Please note that the package is publically available however as per GitHub packages rule, you will need to create a token and add it to your .npmrc folder.

After installing the package, you can do the following in your code:

```
import FarWadaadScript from '@hornofsilicon/far-wadaad'

const converter = new FarWadaadScript();
const farwadaadOutput = converter.parse('iska waran');
console.log(farwadaadOutput)
// اسك ورن

```

## Unit Tests

```
cd lib
yarn test

```

## Running locally (manual testing)

a react page with is used for rendering a basic ui for manual testing for these tools

```
cd ui
yarn start
```

The ui project uses react scripts. For more information refer to its [Readme](./ui/Readme.md) file

## License

HornOfSilicon/far-wadaad is licensed under the

MIT License
