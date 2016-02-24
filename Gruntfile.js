module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jsDev: 'dev/js/',
    jsPub: 'js/',
    cssDev: 'dev/scss/',
    cssPub: 'css/',
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: ['<%= jsDev %>*.js'],
        dest: '<%= jsPub %>scripts.js'
      }
    },

    jshint: {
      beforeconcat: ['<%= jsDev %>*.js'],
      afterconcat: ['<%= jsPub %>scripts.js']
    },

    uglify: {
      dist: {
        files: {
          '<%= jsPub %>scripts.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          '<%= cssDev %>style.css': '<%= cssDev %>style.scss',
          '<%= cssDev %>login.css': '<%= cssDev %>login.scss'
        }
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')( { browsers: 'last 2 versions' } ),
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: '<%= cssDev %>style.css',
        dest: '<%= cssPub %>style.min.css'
      },
      admin: {
        src: '<%= cssDev %>login.css',
        dest: '<%= cssPub %>login.min.css'
      }
    },

    watch: {
      files: ['<%= jsDev %>*.js', '<%= cssDev %>**/*.scss'],
      tasks: ['concat', 'jshint', 'uglify', 'sass', 'postcss']
    },

  });

  grunt.registerTask('default', [
    'concat',
    'jshint',
    'uglify',
    'sass',
    'postcss',
    'watch'
  ]);
};