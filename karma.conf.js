module.exports = function (config) {
    config.set({
        basePath: './',
        browsers: [ 'PhantomJS' ],
        singleRun: true,
        autoWatch: false,
        frameworks: [
            'mocha',
            'chai'
        ],

        files: [
            'array-from-polyfill.js',
            'test/**/*.spec.js'
        ],

        reporters: [
            'progress',
            'spec'
        ]
    });
};
