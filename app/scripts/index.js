/* jshint devel:true */
/* global Snap */
/* global Noise */

document.addEventListener('DOMContentLoaded', function() {
  'use strict';
  console.log('starting..');

  Number.prototype.map = function ( inMin , inMax , outMin , outMax ) {
    return ( this - inMin ) * ( outMax - outMin ) / ( inMax - inMin ) + outMin;
  };

  Noise.seed(Math.random());

  var screenWidth = window.innerWidth -10;
  var screenHeight = window.innerHeight -10;

  console.log('screen: '+screenWidth+'x'+screenHeight);

  var x = 0;
  var y = 0;
  var s = new Snap(screenWidth, screenHeight);
  // var c = s.circle(x, y, 10);
  var tx = 0;
  var ty = 0;

  (function draw(){
    x = Math.abs(Noise.simplex2(tx, ty).map(0, 1, 0, screenWidth));
    y = Math.abs(Noise.simplex2(ty, 0).map(0, 1, 0, screenHeight));

    // var t = new Snap.Matrix();
    // t.translate(x, 50);
    // c.transform(t);
    // c.attr({fill: 'r()#fff-#000'});

    // var tmpc = s.circle(x, y, Math.floor((Math.random() * 100) + 10));
    var radius = Math.abs(Noise.simplex2(tx, 0).map(0, 1, 10, 200));

    var tmpc = s.circle(x, y, radius);
    tmpc.attr({fill: 'r()#fff-#217A14'});

    // var r = Math.abs(Noise.simplex2(tx, 0).map(0, 1, 0, 255));
    // var g = Math.abs(Noise.simplex2(tx, 0).map(0, 1, 0, 255));
    // var b = Math.abs(Noise.simplex2(tx, 0).map(0, 1, 0, 255));
    // var rgb = r+','+g+','+b;
    // var bgr = '10,'+0+','+r;
    // tmpc.attr({fill: 'r()rgb('+rgb+')-rgb('+bgr+')'});

    tx += 0.01;
    ty += 0.01;

    window.requestAnimationFrame(draw);

  })();
}, false);

