/*jshint esversion:6*/

class Template {
    constructor() {
        this.content = {};
    }

    map(key, value) {
        this.content[key] = value;
    }

    delete(key) {
        delete this.content[key];
    }
}

exports.template = () => {
    return new Template();
}
