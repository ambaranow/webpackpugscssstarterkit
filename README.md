# Webpack+Pug+Scss markup starter kit

A webpack starter kit without any framework (like Angular, Vue, React, etc.) for quickly write markup (HTML+CSS+JS).

## Install

```bash
$ yarn install
```

## Developing

```bash
$ npm start
```

## Production build

```bash
$ npm run build
```

### Structure

```
├ build        # Webpack configurations
├ config       # Dev and prod configurations
├ dist         # Production ready files (.gitignore, build rewrite it)
├ src          # Project development files
  ├ scripts    # Javascript files
  ├ styles     # Style files (scss)
  ├ views      # HTML templates (pug) and Style files (scss) like components
    ├ components
    ├ layouts
    ├ pages
    ├ shared
    ├ main.js  # start point
├ static       # Static files (fonts, images)
  ├ fonts
  ├ images
```

### Used Frameworks and libs

* [Webpack 4](https://webpack.js.org/)
* [Bootstrap 4](https://getbootstrap.com/) + [jQuery 3](https://jquery.com/).
* [Babel.js](https://babeljs.io/) for ES6 compile
* [Pug](https://pugjs.org/) for HTML templates
* [Scss](http://sass-lang.com/) and [postcss](https://github.com/postcss/postcss) with [autoprefixer](https://github.com/postcss/autoprefixer) for CSS (Less and Stylus also available)
* [PurifyCSS](https://github.com/purifycss/purifycss) for css cleanup after prod build


-----

MIT License

Copyright (c) 2017 Andrew Baranow <ambaranow@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
