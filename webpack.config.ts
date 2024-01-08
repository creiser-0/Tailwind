import path from "path";
import { Configuration } from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";

interface iConfiguration extends Configuration {
    devServer: {
        static: {
            directory: string;
        };
        hot: boolean;
        compress: boolean;
        port: number;
    }
}

const config: iConfiguration = {
    mode: "development",  /* (process.env.NODE_ENV as "production" | "development" | undefined) ?? */
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: "public" }],
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot: true,
        compress: true,
        port: 9000,
    },
};

export default config;