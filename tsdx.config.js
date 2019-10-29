module.exports = {
    // This function will run for each entry/format/env combination
    rollup(config, options) {
        // if (options.config === 'cjs') {
        //     options.format = 'umd';
        // }
        return config; // always return a config.
    },
};