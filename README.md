[![Actions Status](https://github.com/HornOfSilicon/far-wadaad/workflows/npm-publish/badge.svg)](https://github.com/HornOfSilicon/far-wadaad/actions)

# Far Wadaad

Tools for Somali far Wadaad script. Far wadaad is one of the first Somali language scripts. It is based on Arabic abjad and reported to be invented by Sh Yusuf Al-kawnayn (Aw barkhadle).

The repo will contains:

- Somali latin to Far wadaad converter (beta)
- Far wadaad to somali latin converter (experimental)

## Demo

https://www.haadka.com/far-wadaad/

## Usage in your own code

The tools are in `lib` folder. The `ui` is only for testing them. In the near future, the `lib` will be exposed as an npm package.

Once you get that npm package you will be able to do the following:

```
import FarWadaadScript from 'FarWadaadScript'

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
