module.exports = api => {
    api.cache(true)
    return {
        presets: [
            '@babel/preset-react',
            '@babel/preset-typescript',
            [
                '@babel/preset-env',
                {
                    modules: false,
                    targets: {
                        browsers: ['last 4 versions'],
                    },
                },
            ],
        ],
        plugins: [
            '@babel/plugin-transform-modules-commonjs',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
            ['styled-components'],
            [
                'module-resolver',
                {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                    root: ['./'],
                    alias: {
                        api: ['./src/api'],
                        assets: ['./src/assets'],
                        components: ['./src/components'],
                        constants: ['./src/constants'],
                        src: ['./src'],
                    },
                },
            ],
        ],
    }
}
