(function() {
  var ColorSet, choice;

  window.TW = {};

  choice = function(list) {
    return list[_.random(list.length - 1)];
  };

  window.TW.main = function() {
    var $el, colorSets, cols, half, numColorSets, rows, size;
    $el = $('#content');
    rows = 10;
    cols = 10;
    size = 50;
    half = size / 2;
    numColorSets = 3;
    _.each(_.range(rows), function(row) {
      var $row;
      $row = $('<div class="tile-row">');
      $el.append($row);
      return _.each(_.range(cols), function(col) {
        return $row.append($('<div class="tile-item">'));
      });
    });
    colorSets = [new ColorSet()];
    _.each(_.range(numColorSets - 1), function(i) {
      return colorSets.push(new ColorSet(choice(_.rest(colorSets[i].colors))));
    });
    return $el.find('.tile-item').each(function(ix, item) {
      var cs;
      cs = choice(colorSets);
      return $(item).html("<svg version=\"1.1\"\n   baseProfile=\"full\"\n   xmlns=\"http://www.w3.org/2000/svg\">\n     <rect width=\"100%\" height=\"100%\" fill=\"" + (cs.get(0)) + "\" />\n     <circle cx=\"" + half + "\" cy=\"" + half + "\" r=\"" + half + "\" fill=\"" + (cs.get(1)) + "\" />\n     <circle cx=\"" + half + "\" cy=\"" + half + "\" r=\"" + (half * 0.5) + "\" fill=\"" + (cs.get(2)) + "\" />\n     <circle cx=\"" + half + "\" cy=\"" + half + "\" r=\"" + (half * 0.25) + "\" fill=\"" + (cs.get(2)) + "\" />\n</svg>");
    });
  };

  ColorSet = (function() {

    function ColorSet(base) {
      var methods;
      this.base = base != null ? base : $.xcolor.random();
      methods = [
        $.xcolor.triad, $.xcolor.tetrad, $.xcolor.splitcomplement, function(color) {
          return $.xcolor.analogous(color, 4);
        }, function(color) {
          return $.xcolor.monochromatic(color, 3);
        }
      ];
      this.colors = choice(methods)(this.base);
    }

    ColorSet.prototype.get = function(i) {
      return this.colors[i % this.colors.length];
    };

    return ColorSet;

  })();

}).call(this);
