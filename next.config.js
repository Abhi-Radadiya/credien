module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: "@svgr/webpack",
        });

        config.externals.push({
            "utf-8-validate": "commonjs utf-8-validate",
            bufferutil: "commonjs bufferutil",
            canvas: "commonjs canvas",
        });

        return config;
    },
};
