const slugify = require('slugify');

module.exports = {
    /**
     * Triggered before user creation.
     */
    beforeCreate(event) {
        const { data } = event.params;
        if (data.name) {
            const slug = data.name + "-" + (data.short_description ?? '');
            data.slug = slugify(slug, { lower: true });
        }
    },
    beforeUpdate(event) {
        const { data } = event.params;
        if (data.name) {
            const slug = data.name + "-" + (data.short_description ?? '');
            data.slug = slugify(slug, { lower: true });
        }
    },
};