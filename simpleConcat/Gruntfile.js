module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
          js: {
            src: ['src/js/script1.js', 'src/js/script2.js'],
            dest: 'build/js/scripts.js',
          },
          css: {
            src: ['src/css/style1.css', 'src/css/style2.css'],
            dest: 'build/css/styles.css',
          },
        },
        watch: {
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['concat:js'],
            },
            css: {
                files: ['src/css/**/*.css'],
                tasks: ['concat:css'],
            }
        }
      });

      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.registerTask('default', ['concat', 'watch']);
}