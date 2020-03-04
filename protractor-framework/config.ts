// import {Config} from 'protractor'

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../protractor-framework/features/*.feature'],

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        require: ['../protractor-framework/JSFilesLocation/steps/homePageSteps.js'],
        tags: false,
        strict: true
    },
};