const path = require('path')
const dev = process.env.NODE_ENV == "development"
const liveServer = require("live-server")

if(dev){
    liveServer.start({
        root: "./",
        file: "index.html"
    })
}

// mode no lo tengo que declarar porque le llega solo cuando declaro la variable NODE_ENV
module.exports = {
    watch: dev,
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts','.js']
    },
    output: {
        path : path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    }
}