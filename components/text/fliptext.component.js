const service = require('../helper/text.service');

const flipText = {
    a: '\u0250',
    b: 'q',
    c: '\u0254',
    d: 'p',
    e: '\u01DD',
    f: '\u025F',
    g: '\u0183',
    h: '\u0265',
    i: '\u0131',
    j: '\u027E',
    k: '\u029E',
    l: '\u05DF',
    m: '\u026F',
    n: 'u',
    p: 'd',
    q: 'b',
    r: '\u0279',
    t: '\u0287',
    u: 'n',
    v: '\u028C',
    w: '\u028D',
    y: '\u028E',
    '.': '\u02D9',
    '[': ']',
    '(': ')',
    '{': '}',
    '?': '\u00BF',
    '!': '\u00A1',
    "\'": ',',
    '<': '>',
    '_': '\u203E',
    '"': '\u201E',
    '\\': '\\',
    ';': '\u061B',
    '\u203F': '\u2040',
    '\u2045': '\u2046',
    '\u2234': '\u2235'
};

exports.getAscii = (text) => {
    return (text == null || text == '') ? null : service.transpose(text.toLowerCase(), flipText, true);
};
