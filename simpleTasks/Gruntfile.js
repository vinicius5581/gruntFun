module.exports = function(grunt) {
    grunt.registerTask('speak', function(){
        console.log("I'm speaking");
    });
    grunt.registerTask('yell', function(){
        console.log("I'm YELLING!");
    });
    grunt.registerTask('whisper', function(){
        console.log("I'm whispering");
    });
    grunt.registerTask('both', ['speak','yell']);
    grunt.registerTask('default', ['whisper','speak','yell']);
};