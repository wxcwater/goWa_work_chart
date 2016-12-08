var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件项
    //  plugins: [
    //    new webpack.ProvidePlugin({
    //        $: "jquery",
    //        jQuery: "jquery",
    //        "window.jQuery": "jquery"
    //    })
    //  ],
    //页面入口文件配置
    entry: {
        index : './entry.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/js',
        filename: '[name]_bundle.js'
    },
    module: {
        //加载器配置
        loaders: [
             { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
    // ,
    // //其它解决方案配置
    // resolve: {
    //     root: 'E:/github/flux-example/src', //绝对路径
    //     extensions: ['', '.js', '.json', '.scss'],
    //     alias: {
    //         AppStore : 'js/stores/AppStores.js',
    //         ActionType : 'js/actions/ActionType.js',
    //         AppAction : 'js/actions/AppAction.js'
    //     }
    // }
};
