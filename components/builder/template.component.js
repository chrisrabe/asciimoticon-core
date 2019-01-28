
class Template {
    constructor() {
        this.content = {};
    }

    /**
     * Inserts the key-value pairs into the content
     * @param {string} key
     * @param {string|function} value
     */
    map(key, value) {
        if (!key && !value) {
            throw new Error('Key and value parameters are null');
        }
        if (!key || !value) {
            throw new Error(!key ? 'Key is null' : 'Value is null');
        }
        this.content[key] = value;
    }

    /**
     * Deletes the value with the key.
     * @param {string} key
     */
    delete(key) {
        if (!key) {
            throw new Error('Key is null');
        }
        delete this.content[key];
    }

    /**
     * Adds the key-value pairs into the current template. The merge only
     * includes key-value pairs that do not exist in the current template.
     * @param {Array} templates
     * @return {Object} new template object
     */
    merge(templates) {
        if(!templates) {
            throw new Error('Argument is null.');
        }
        if(!Array.isArray(templates)) {
            throw new Error('Argument is not an array.');
        }
        if(templates.length) {
            const newTemplate = new Template();
            newTemplate.content = {...this.content};
            templates.forEach(template => {
                for(const key in template.content) {
                    if(template.content.hasOwnProperty(key)) {
                        if(!Object.keys(newTemplate.content).includes(key)) {
                            newTemplate.content[key] = template.content[key];
                        }
                    }
                }
            });
            return newTemplate;
        }
        return this;
    }
}

/**
 * Creates a new template
 * @returns {Template}
 */
exports.template = () => {
    return new Template();
};
