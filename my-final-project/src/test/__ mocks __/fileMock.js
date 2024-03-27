const path = require('path');

module.exports = {
    __esModule: true,
    default: 'test-file-stub',
    process(src, filename, config, options) {
        return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
      },
};