const sass = require('@zeit/next-sass')
const css = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')

module.exports = withPlugins([
	[sass],
	[css],
	[withImages]
]);

