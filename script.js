(function() {
  var ColorSet;

  window.TW = {};

  window.TW.main = function() {
    var $el, cs;
    $el = $('#content');
    cs = new ColorSet();
    return $el.html("<svg version=\"1.1\"\n   baseProfile=\"full\"\n   xmlns=\"http://www.w3.org/2000/svg\">\n     <rect width=\"100%\" height=\"100%\" fill=\"" + (cs.get(0)) + "\" />\n     <circle cx=\"150\" cy=\"100\" r=\"80\" fill=\"" + (cs.get(1)) + "\" />\n     <circle cx=\"150\" cy=\"100\" r=\"40\" fill=\"" + (cs.get(2)) + "\" />\n     <circle cx=\"150\" cy=\"100\" r=\"20\" fill=\"" + (cs.get(3)) + "\" />\n</svg>");
  };

  ColorSet = (function() {

    function ColorSet() {
      var base, methods;
      base = $.xcolor.random();
      methods = [
        $.xcolor.triad, $.xcolor.tetrad, $.xcolor.splitcomplement, function(color) {
          return $.xcolor.analogous(color, 4);
        }, function(color) {
          return $.xcolor.monochromatic(color, 3);
        }
      ];
      this.colors = methods[_.random(methods.length - 1)](base);
    }

    ColorSet.prototype.get = function(i) {
      return this.colors[i % this.colors.length];
    };

    return ColorSet;

  })();

}).call(this);
