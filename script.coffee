window.TW = {}

choice = (list) -> list[_.random(list.length - 1)]
window.TW.main = ->
  $el = $('#content')

  rows = 10
  cols = 10
  size = 50
  half = size / 2
  numColorSets = 3

  _.each _.range(rows), (row) ->
    $row = $('<div class="tile-row">')
    $el.append($row)
    _.each _.range(cols), (col) ->
      $row.append($('<div class="tile-item">'))

  colorSets = [new ColorSet()]

  _.each _.range(numColorSets - 1), (i) ->
    colorSets.push(new ColorSet(choice(colorSets[i].colors)))

  $el.find('.tile-item').each (ix, item) ->
    cs = choice(colorSets)
    $(item).html """
      <svg version="1.1"
         baseProfile="full"
         xmlns="http://www.w3.org/2000/svg">
           <rect width="100%" height="100%" fill="#{cs.get(0)}" />
           <circle cx="#{half}" cy="#{half}" r="#{half}" fill="#{cs.get(1)}" />
           <circle cx="#{half}" cy="#{half}" r="#{half*0.5}" fill="#{cs.get(2)}" />
           <circle cx="#{half}" cy="#{half}" r="#{half*0.25}" fill="#{cs.get(2)}" />
      </svg>
      """

class ColorSet

  constructor: (@base = $.xcolor.random())->
    methods = [
      $.xcolor.triad,
      $.xcolor.tetrad,
      $.xcolor.splitcomplement,
      (color) -> $.xcolor.analogous(color, 4),
      (color) -> $.xcolor.monochromatic(color, 3),
    ]
    @colors = choice(methods)(@base)

  get: (i) ->
    @colors[i % @colors.length]
