const service = require('../helper/text.component');

const fancyText = {
    a: 'α',
    b: 'в',
    c: '¢',
    d: '∂',
    e: 'є',
    f: 'ƒ',
    g: 'g',
    h: 'н',
    i: 'ι',
    j: 'נ',
    k: 'к',
    l: 'ℓ',
    m: 'м',
    n: 'η',
    o: 'σ',
    p: 'ρ',
    q: 'q',
    r: 'я',
    s: 'ѕ',
    t: 'т',
    u: 'υ',
    v: 'ν',
    w: 'ω',
    x: 'χ',
    y: 'у',
    z: 'z',
};

exports.getAscii = (text) => {
    return (!text) ? null : service.transpose(text.toLowerCase(), fancyText);
};
