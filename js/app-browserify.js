"use strict";

// es5 polyfills, powered by es5-shim
require("es5-shim")
// es6 polyfills, powered by babel
require("babel/register")

var Promise = require('es6-promise').Promise
// just Node?
// var fetch = require('node-fetch')
// Browserify?
// require('whatwg-fetch') //--> not a typo, don't store as a var

// other stuff that we don't really use in our own code
// var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
// var Router = require('./app.js')

// window.addEventListener('load', app)

// function app() {
    // start app
    // new Router()
// }

var clock = () => {
    var d = new Date();
    var clockText = `${d.getHours()}:${ d.getMinutes()}:${ d.getSeconds()}`
    var correctminutes = (d.getMinutes().toString().length==1) ? "0" + d.getMinutes():d.getMinutes()
    var correctseconds = (d.getSeconds().toString().length==1) ? "0" + d.getSeconds():d.getSeconds()
    var clocksuccess = `${d.getHours()}:${correctminutes}:${correctseconds}`
    document.querySelector(".time").innerHTML = clocksuccess;    

    var HMS = [d.getHours(), d.getMinutes(), d.getSeconds()]
    var range = [24, 60, 60]
    var values = HMS.map((v, i) => Math.floor(v / range[i] * 255))
    var color = `rgb(${values.join(',')})`
    document.body.style['background'] = color
    var S = `${3*d.getSeconds()}px`
    document.body.querySelector('hr').style['width'] = S

document.querySelector(".time2").innerHTML =  values.map((v) => v.toString(16)).join(':');
    
}
setInterval(clock, 1000)