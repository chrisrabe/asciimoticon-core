/*jshint esversion:6*/

const service = require('../../services/text.service');

const table = {
    a: 'ﾑ',
    b: '乃',
    c: 'ᄃ',
    d: 'D',
    e: '乇',
    f: 'ｷ',
    g: 'G',
    h: 'ん',
    i: 'ﾉ',
    j: 'ﾌ',
    k: 'ズ',
    l: 'ﾚ',
    m: 'ﾶ',
    n: '刀',
    o: 'Ө',
    p: 'ｱ',
    q: 'Q',
    r: '尺',
    s: '丂',
    t: 'ｲ',
    u: 'Ц',
    v: '√',
    w: 'Щ',
    x: 'ﾒ',
    y: 'ﾘ',
    z: '乙',
};

exports.getAscii = (text) => {
    return (text == null || text == '') ? null : service.transpose(text.toLowerCase(), table);
};