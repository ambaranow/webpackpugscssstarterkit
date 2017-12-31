require("timers");

const purify = require("purify-css/lib/purifycss")
setTimeout(function(){
    console.log('Start purifycss')
    let content = ['dist/*.html']
    console.log('content')
    console.log(content)
    let css = ['dist/static/css/*.css']
    console.log('css:')
    console.log(css)
    let options = {
        minify: true,
        whitelist: [],
        output: "dist/static/css/style.css",
        info: true
    }
    purify(content, css, options, function (result) {
        console.log('purifycss: ' + result)
    })
    console.log('End purifycss')
},500)
