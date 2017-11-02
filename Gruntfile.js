var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
    lambda_invoke: {
        default: {
            options: {
                file_name: 'index.js',
                event: 'event.json'
            }
        }
    },
    lambda_deploy: {
        default: {
            arn: 'arn:aws:lambda:us-east-1:377117578606:function:GitHub-Create-Thumbnail',
            options: {
                region: 'us-east-1'
            }
        }
    },
    lambda_package: {
        default: {
            options: {
                include_time: false,
                include_version: false,
                dist_folder: './dist'
            }
        }
    }
});

grunt.registerTask('package',['lambda_package']);
grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy']);
//grunt.registerTask('test', ['mochaTest']);
grunt.registerTask('test', ['lambda-invoke']);
