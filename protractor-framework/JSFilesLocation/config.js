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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQztBQUVwQyxPQUFPLENBQUMsTUFBTSxHQUFHO0lBQ2IsZUFBZSxFQUFFLDhCQUE4QjtJQUMvQyxLQUFLLEVBQUUsQ0FBQyw0Q0FBNEMsQ0FBQztJQUVyRCxTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUUvRCxZQUFZLEVBQUU7UUFDVixPQUFPLEVBQUUsQ0FBQyxnRUFBZ0UsQ0FBQztRQUMzRSxJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSxJQUFJO0tBQ2Y7Q0FDSixDQUFDIn0=