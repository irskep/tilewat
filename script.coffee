window.TW = {}
window.TW.main = ->
  $el = $('#content')
  cs = new ColorSet()
  $el.html("""
  <svg version="1.1"
     baseProfile="full"
     xmlns="http://www.w3.org/2000/svg">
       <rect width="100%" height="100%" fill="#{cs.get(0)}" />
       <circle cx="150" cy="100" r="80" fill="#{cs.get(1)}" />
       <circle cx="150" cy="100" r="40" fill="#{cs.get(2)}" />
       <circle cx="150" cy="100" r="20" fill="#{cs.get(3)}" />
  </svg>
  """)

class ColorSet

  constructor: ->
    base = $.xcolor.random()
    methods = [
      $.xcolor.triad,
      $.xcolor.tetrad,
      $.xcolor.splitcomplement,
      (color) -> $.xcolor.analogous(color, 4),
      (color) -> $.xcolor.monochromatic(color, 3),
    ]
    @colors = methods[_.random(methods.length - 1)](base)

  get: (i) ->
    @colors[i % @colors.length]
