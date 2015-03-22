module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    manifest: grunt.file.readJSON('resources/public/manifest.json'),
    compress: {
      mentionmyfollowers: {
        options: {
          archive: "tmp/mentionmyfollowers-<%= manifest.version %>.zip"
        },
        files: [{
          expand: true,
          cwd: "target/public",
          src: ["**",
                "!js/main_prod/**",
                "!js/commenting_prod/**",
                "!js/main_dev/**",
                "!js/commenting_dev/**"]}]}},
    zip_to_crx: {
      options: {
        privateKey: "key.pem"
      },
      mentionmyfollowers: {
        src: "tmp/mentionmyfollowers-<%= manifest.version %>.zip",
        dest: "dist/"
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-zip-to-crx');

  grunt.registerTask('default', ['compress', 'zip_to_crx']);
};
