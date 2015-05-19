module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concurrent: {
      target: {
        tasks: ['watch', 'connect:server'],
        options: {
          logConcurrentOutput: true,
          limit: 5
        }
      }
    },
    browserify: {
      dev: {
        options: {
          debug: true,
          transform: ['reactify']
        },
        files: {
          'public/js/bundle.js': 'source/scripts/app.js'
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'source/scripts/**/*.js'],
      options: {
        globals: {
          console: true
        },
        additionalSuffixes: ['.js']
      }
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    watch: {
      dev: {
        files: ['<%= jshint.files %>', 'source/**/*.jsx', 'source/sass/**/*.scss', 'source/**/*.js'],
        tasks: ['jshint', 'compass', 'browserify']
      },
    },
    connect: {
      server: {
        port: 1337,
        base: 'public'
      }
    }
  });

  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-connect');
  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['concurrent:target']);

};