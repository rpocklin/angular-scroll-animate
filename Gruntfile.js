'use strict';

module.exports = function(grunt) {

	var moduleName = 'angular-scroll-animate';

	var beautifyFiles = ['!Gruntfile.js', '!npm-shrinkwrap.json', 'src/**/*.{html,js}', '!app/bower_components/**/*'];

	// Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    connect: {
             server: {
               options: {
                 port: 9000
               }
             }
    },

    watch: {
           scripts: {
                    files: ['src/**/*'],
                    tasks: ['beautify', 'build'],
                    options: {
                             spawn: false
                    }
           }

    },

    clean: ['dist/', 'docs/'],

    concat: {
      dist: {
        // Replace all 'use strict' statements in the code with a single one at the top
        options: {

          banner: "'use strict';\nangular.module('" + moduleName + "', []);",
          process: function(src, filepath) {
            return '// Source: ' + filepath + '\n' +
            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
          }
        },
        src: ['src/*.js'],
        dest: 'dist/angular-scroll-animate.js'
      }
    },

	  ngdocs: {

		  options: {
			  scripts: [
				  'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js',
				  //'http://localhost:9000/bower_components/angular.js',
			            '../dist/angular-scroll-animate.js'],
		    dest: 'docs',
		    html5Mode: false,
		    title: 'Angular Scroll Animate',
			  startPage: '/api'
		  },
		  api: {
		  	 src: ['dist/**/*.js'],
		  	 title: 'API'
		  }
	  },

	  // verifies we have formatted our js and HTML according to our style conventions
	  jsbeautifier: {
		  verify : {
			  src:   beautifyFiles,
			  options: {
				  config: '.jsbeautifyrc',
				  mode: 'VERIFY_ONLY'
			  }
		  },
		  update: {
			  src:   beautifyFiles,
			  options: {
				  config: '.jsbeautifyrc'
			  }
		  }
	  },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint:       {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      src:     ['src/!(*spec).js']
    },

    // Test settings
    karma:        {
      unit: {
        options:    {
          logLevel: 'DEBUG'
        },
        browsers:   ['PhantomJS'],
        configFile: 'karma.conf.js',
        singleRun:  true,
        autoWatch:  false
      }
    },
    coveralls: {
      options: {
        coverage_dir:'coverage',
        directory:'coverage/PhantomJS 1.9.7 (Mac OS X)/lcov.info',
        debug: true,
        dryRun: false,
        recursive: false
      }
    }
  });

  grunt.registerTask('serve', ['build','connect', 'watch']);
	grunt.registerTask('beautify', ['jsbeautifier:update']);
  grunt.registerTask('build', [
    'clean', 'jsbeautifier:verify', 'jshint', 'concat', 'ngdocs' //'karma'
  ]);

  grunt.registerTask('default', [
    'build'
    //, 'coveralls'
  ]);
};
