const service = require('../helper/text.component');

const table = {
    a: 'ⓐ',
    b: 'ⓑ',
    c: 'ⓒ',
    d: 'ⓓ',
    e: 'ⓔ',
    f: 'ⓕ',
    g: 'ⓖ',
    h: 'ⓗ',
    i: 'ⓘ',
    j: 'ⓙ',
    k: 'ⓚ',
    l: 'ⓛ',
    m: 'ⓜ',
    n: 'ⓝ',
    o: 'ⓞ',
    p: 'ⓟ',
    q: 'ⓠ',
    r: 'ⓡ',
    s: 'ⓢ',
    t: 'ⓣ',
    u: 'ⓤ',
    v: 'ⓥ',
    w: 'ⓦ',
    x: 'ⓧ',
    y: 'ⓨ',
    z: 'ⓩ',
};

exports.getAscii = (text) => {
    return (!text) ? null : service.transpose(text.toLowerCase(), table);
};
