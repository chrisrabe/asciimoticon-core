
class Template {
    constructor() {
        this.content = {};
    }

    map(key, value) {
        if (!key && !value) {
            throw new Error('Key and value parameters are null');
        }
        if (!key || !value) {
            throw new Error(!key ? 'Key is null' : 'Value is null');
        }
        this.content[key] = value;
    }

    delete(key) {
        if (!key) {
            throw new Error('Key is null');
        }
        delete this.content[key];
    }
}

exports.template = () => {
    return new Template();
}
