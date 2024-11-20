

const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push(
  'obj',
  'vrx',
  'mtl',
  'tif',
  'fbx'
)

module.exports = config;
