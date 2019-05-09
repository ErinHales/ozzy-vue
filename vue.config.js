var webpack = require('webpack')
	
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'CLOUDINARY_API_KEY': JSON.stringify(process.env.CLOUDINARY_API_KEY),
          'CLOUDINARY_UPLOAD_PRESET': JSON.stringify(process.env.CLOUDINARY_UPLOAD_PRESET),
          'CLOUD_NAME': JSON.stringify(process.env.CLOUD_NAME)
        }
      })
    ]
  }
}