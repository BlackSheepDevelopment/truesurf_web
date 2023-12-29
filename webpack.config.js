const path = require("path");
const AssetsPlugin = require("assets-webpack-plugin");
// css extraction and minification
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// clean out build dir in-between builds
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = [
    {
        entry: {
            main: ["./src/entries/main.js", "./src/sass/styles.scss"],
        },
        output: {
            filename: "./dist/[name].min.js",
            path: path.resolve(__dirname),
            publicPath: "./",
        },
        module: {
            rules: [
                // js babelization
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                },
                // sass compilation
                {
                    test: /\.(sass|scss)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
                // loader for webfonts (only required if loading custom fonts)
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    type: "asset/resource",
                    generator: {
                        filename: "[name][ext]",
                        publicPath: "./dist/fonts/",
                        outputPath: "./dist/fonts/",
                    },
                },
                // loader for images and icons (only required if css references image files)
                {
                    test: /\.(png|jpg|gif)$/,
                    type: "asset/resource",
                    generator: {
                        filename: "./dist/img/[name][ext]",
                    },
                },
            ],
        },
        plugins: [
            // css extraction into dedicated file
            new MiniCssExtractPlugin({
                filename: "./dist/main.min.css",
            }),
            new AssetsPlugin({
                filename: "assets.json",
            }),
        ],
        optimization: {
            // minification - only performed when mode = production
            minimizer: [
                // js minification - special syntax enabling webpack 5 default terser-webpack-plugin
                `...`,
                // css minification
                new CssMinimizerPlugin(),
            ],
        },
    },
];
