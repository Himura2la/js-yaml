var issue = module.exports = {},
    fs = require('fs'),
    jsyaml = require(__dirname + '/../../lib/js-yaml'),
    source = __dirname + '/issue-9.yml';

issue.title = "#9: Reader fails on File Resource stream, when file is less than 4KB";
issue.test = function (fixed, broken) {
  var fd = fs.openSync(source, 'r');

  try {
    jsyaml.load(fd);
    fs.closeSync(fd);
  } catch (err) {
    broken();
    return;
  }

  fixed();
};