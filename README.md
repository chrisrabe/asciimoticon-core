# asciimoticon-core: Getting Started
**Author**: [Chris Rabe](https://github.com/chrisrabe)

**asciimoticon-web**: [asciimoticon-web.herokuapp.com](https://asciimoticon-web.herokuapp.com)

[![Build Status](https://travis-ci.org/chrisrabe/asciimoticon-core.svg?branch=release-v.1.2)](https://travis-ci.org/chrisrabe/asciimoticon-core)
![](https://img.shields.io/github/license/chrisrabe/asciimoticon-core.svg)

## Nodejs Installation
```
npm install asciimoticon-core --save
```

## Demo Videos

- [asciimoticon-core v-1.1 demo video](https://www.youtube.com/watch?v=X6qywKP9d4c)
- [asciimoticon-core v-1.0 demo video](https://www.youtube.com/watch?v=q2XFvnmGceU)

## Full Documentation

Please visit our [documentation page](https://github.com/chrisrabe/asciimoticon-core/wiki/main_doc) to see the full list of functionalities.

## Basic JS Usage

**NOTE**: This snippet only covers the *basic* functionality of `asciimoticon-core`. 


```
const core = require('asciimoticon-core');

// Convert text to special ASCII texts
const text = 'test';

const witchText = core.text.toWitchtext(text);
const fancyText = core.text.toFancytext(text);
const flipText = core.text.toFliptext(text);
const fliptextTable = core.text.toFliptextTable(text);

console.log(witchText); //†Σ$†
console.log(fancyText); //тєѕт
console.log(flipText); //ʇsǝʇ
console.log(fliptextTable); //(ノ ゜Д゜)ノ ︵  ʇsǝʇ

// Convert numbers into ASCII emoticons

const number = 5;

const dice = core.number.dice(number); // 1 - 6 sides
const dollar = core.number.dollarbill(number);
const loading = core.number.loading(number);

console.log(dice); // ⚄
console.log(dollar); // [̲̅$̲̅(̲5̲̅̅)̲̅$̲̅]
console.log(loading); // █▒▒▒▒▒▒▒▒▒

// Get predefined faces with associated words on them

const faces = core.faces;

for (const faceName in faces) {
    const face = faces[faceName];
    console.log(`${face.ascii} : ${face.words}`); // TOO MANY TO DEFINE
}

```

## Additional Links
- [Available predefined faces](https://github.com/chrisrabe/asciimoticon-core/wiki)
- [Full Documentation](https://github.com/chrisrabe/asciimoticon-core/wiki/main_doc)
