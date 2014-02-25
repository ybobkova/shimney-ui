module.exports = function() {

  var fs = require('fs');
  var chai = require('chai'),
  expect = chai.expect,
  assert = chai.assert;
  var Sui = this.Sui = require('../../tasks/shimney-ui');
  var Given = When = Then = this.defineStep;

  var cssRegexp = new RegExp(".+?\\.(?=css|less)", "i");
  var imageRegexp = new RegExp(".+?\\.(?=jpeg|jpg|png|bmp|gif)", "i");
  var imageRegexp = new RegExp(".+?\\.(?=Test\\.js|Tests\\.js)", "i");

  Given(/^the $package is not yet installed$/, function(package) {
    fs.unlink('www/css/' + package);
    fs.unlink('www/js/' + package + '.js');
    fs.unlink('www/images/' + package);
    fs.unlink('www/test/' + package);
  });

  When(/^the User runs 'shimney\-ui\-$package'$/, function(package) {
    Sui.download(package);
  });

  Then(/^the folder '$package' is created in the 'css'\-folder$/, function(package) {
    expect('www/css/' + package).to.exist;
  });

  Then(/^the folder '$package' is created in the 'images'\-folder$/, function(package) {
    expect('www/images/' + package).to.exist;
  });

  Then(/^the folder '$package' is created in the 'test'\-folder$/, function(package) {
    expect('www/test/' + package).to.exist;
  });

  Then(/^the file '$package\.js' is copied to the 'js'\-folder$/, function(package) {
    expect('www/js/' + package + '/' + package + '.js').to.exist;
  });

  Then(/^the css\-files of the $package are copied to the 'css\/$package'\-folder$/, function(package) {
    var fileList = fs.readdirSync('www/css/' + package + '/')
    var match = false;
    for (file in fileList) {
      if (file.match(cssRegexp)) {
        match = true;
      }
    }
    expect(match).to.be.true;
  });

  Then(/^the images\-files of the $package are copied to the 'images\/$package'\-folder$/, function(package) {
    var fileList = fs.readdirSync('www/images/' + package + '/')
    var match = false;
    for (file in fileList) {
      if (file.match(imageRegexp)) {
        match = true;
      }
    }
    expect(match).to.be.true;
  });

  Then(/^the test\-files of the datepicker are copied to the 'test\/datepicker'\-folder$/, function(package) {
    var fileList = fs.readdirSync('www/test/' + package + '/')
    var match = false;
    for (file in fileList) {
      if (file.match(jsRegexp)) {
        match = true;
      }
    }
    expect(match).to.be.true;
  });

  Given(/^the datepicker is already installed$/, function(callback) {
    Sui.download(package);
  });
};