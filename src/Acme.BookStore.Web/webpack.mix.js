﻿let mix = require('laravel-mix')

if (!mix.inProduction()) {
    mix.webpackConfig({ devtool: 'source-map' });
}

mix.setPublicPath('wwwroot');

mix.js('./Scripts/Home/mainPage.js', 'js/mainPage.js').vue({ version: 3 });
//mix.js('./Vue/Scripts/books.js', 'js/Books.js').vue({ version: 3 });
//mix.js('./Vue/Scripts/authors.js', 'js/Authors.js').vue({ version: 3 });
mix.copy('./Scripts/commonModule.js', './wwwroot/js/commonModule.js');