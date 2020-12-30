const path = require('path')

const srcPath = p => path.resolve(__dirname, '../src', p)

export const aliases = {
    api: srcPath('api'),
    assets: srcPath('assets'),
    components: srcPath('components'),
    constants: srcPath('constants'),
    hooks: srcPath('hooks'),
    pages: srcPath('pages'),
    routes: srcPath('routes'),
    services: srcPath('services'),
    theme: srcPath('theme'),
    utils: srcPath('utils'),
    mocks: srcPath('mocks'),
    'styled-components': path.resolve(__dirname, '../node_modules', 'styled-components'),
}
