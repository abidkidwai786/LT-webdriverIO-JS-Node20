exports.config = {

    runner: 'local',//

    hostname: 'mobile-hub.lambdatest.com',
    port: 80,
    path: '/wd/hub',

    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,
 
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,


    capabilities: [{
    	"lt:options": {
    		"w3c": true,
    		"platformName": "android",
    		"deviceName": "Galaxy A12",
    		"platformVersion": "10",
    		"isRealMobile": true
    	}
    }],


    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,

    framework: 'mocha',
    

    reporters: ['spec'],

    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
