# Clean After Emit Webpack Plugin

A webpack plugin used for cleaning after building.

This can be used with johnagan's [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) which clean files before building.

Only works webpack 4.x+.

## Installation

```
npm i -D clean-after-emit-webpack-plugin
```

## Usage

For now, only support one params. The `paths` absolute path array.

```

new CleanAfterEmitWebpackPlugin({
  paths: [absPath, absPath],
})
```

New Features and Pr are welcomed.
