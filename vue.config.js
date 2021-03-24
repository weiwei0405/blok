module.exports = {
	lintOnSave: true,
	devServer: {
		proxy: {
			'/api': {
				target: 'https://y.jinkangwang.com',
				ws: true,
				secure: false,
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			},
		}
	},

}
