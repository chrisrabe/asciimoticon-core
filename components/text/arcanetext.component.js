const service = require('../helper/text.component');

const table = {
    a: 'ค',
    b: '๒',
    c: 'ς',
    d: '๔',
    e: 'є',
    f: 'Ŧ',
    g: 'ﻮ',
    h: 'ђ',
    i: 'เ',
    j: 'ן',
    k: 'к',
    l: 'l',
    m: '๓',
    n: 'ภ',
    o: '๏',
    p: 'ק',
    q: 'ợ',
    r: 'г',
    s: 'ร',
    t: 't',
    u: 'ย',
    v: 'ש',
    w: 'ฬ',
    x: 'א',
    y: 'ץ',
    z: 'z',
};

exports.getAscii = (text) => {
    return (text == null || text == '') ? null : service.transpose(text.toLowerCase(), table);
};
