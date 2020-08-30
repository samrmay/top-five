var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack')

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index.pack.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'public/index.html'
        }),
        new Dotenv()
    ]

}
