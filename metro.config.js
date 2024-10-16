const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);
const options = {
    input: './tailwind.css'
};

module.exports = withNativeWind(config, options);
