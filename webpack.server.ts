import path from "path";

export default {
    // bundle for nodejs
    target: 'node',
    mode: "production",
    //root file for the server application
    entry: './src/index.ts',

        // where to put the output file generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build'),
    },

    // tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['react', 'stage-0',
                    ['env', {targets: {browsers: ['last 2 version'] } } ]],
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }
}