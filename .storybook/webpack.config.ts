import webpack, { RuleSetRule } from 'webpack';

export default ({ config }: { config: webpack.Configuration }) => {
    // const paths: BuildPaths = {
    //     build: '',
    //     entry: '',
    //     html: '',
    //     src: path.resolve(__dirname, '..', '..', 'src'),
    // };

    // config.resolve?.modules?.push(paths.src);
    // config.resolve?.extensions?.push('.ts', '.tsx');
    config.module?.rules?.push({
        test: /\.s[ac]ss$/i,
        use: [
            'style-loader',
            { loader: 'css-modules-typescript-loader' },
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath) => resPath.includes('.module.'),
                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                    },
                },
            },
            'sass-loader',
        ],
    });

    // eslint-disable-next-line no-param-reassign
    // config.module!.rules = config.module!.rules!.map((rule) => {
    //     if (rule !== '...' && /svg/.test(rule.test as string)) {
    //         return { ...rule, exclude: /\.svg$/i };
    //     }

    //     return rule;
    // });

    // config.module!.rules.push({
    //     test: /\.svg$/,
    //     use: ['@svgr/webpack'],
    // });

    // config.plugins!.push(
    //     new webpack.DefinePlugin({
    //         __IS_DEV__: false,
    //     })
    // );

    return config;
};
