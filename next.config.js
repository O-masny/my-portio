/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        loader: 'custom',
        loaderFile: './src/lib/components/cards/card_loader.tsx',
    },
    output: 'export',
    experimental: {
        scrollRestoration: true,
    },
    webpack(config) {

        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })
        return config
    },
}