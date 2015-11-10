/*eslint-disable*/
'use strict';

module.exports = function (grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    mochacli: {
      options: {
        reporter: 'spec',
        bail: true
      },
      all: ['test/*.js']
    },
    mocha_istanbul: {
      coverage: {
        src: 'test',
        options: {
          mask: '*.js',
          check: {
            lines: 80,
            statements: 80,
            functions: 80
          },
          reportFormats: ['html']
        }
      }
    }
  });

  grunt.registerTask('default', ['mocha_istanbul']);
  grunt.registerTask('test', ['mocha_istanbul']);
  grunt.registerTask('test-only', ['mochacli']);

};
