const path = require('path');
const weblog = require('webpack-log');
const rimraf = require('rimraf');
const version = require('./package.json').version;

const PluginName = 'Clean After Emit Webpack Plguin';
const log = weblog({name: PluginName});

function isAbsolutePath (userPath) {
  return path.isAbsolute(userPath);
}

function rm(paths){
  if (!Array.isArray(paths)) return;

  paths.forEach(p => {
    if (!isAbsolutePath(p)) return;
    rimraf.sync(p);
    log.info(`remove ${p} after build`);
  })
}

module.exports = class CleanAfterEmitWebpackPlguin {
  constructor({
    paths = [],
  }) {
    this.paths = paths;
    this.version = version;
    this.PluginName = PluginName;
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync(
      this.PluginName,
      (compilation, cb) => {
        rm(this.paths);
        cb();
      }
    )
  }
};
