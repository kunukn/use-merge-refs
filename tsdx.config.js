module.exports = {
    // This function will run for each entry/format/env combination
    rollup(config, options) {
        options.format = 'umd';

        //console.log(config)
        ///console.log(options)

        return config; // always return a config.
    },
};