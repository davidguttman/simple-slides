var SS = require('..')

var slideshow = SS.start(document.body, [
  // large text
  SS.title('simple-slides'),

  // full-screen image
  SS.image('/example/white-blue.png'),

  // contained image
  SS.image('/example/wide-blue.png', 'contain'),

  // video (muted by default)
  SS.video('/example/spin.mp4'),

  // custom
  function (slide) {
    var el = document.createElement('div')
    slide.innerHTML = ''
    slide.appendChild(el)

    var letters = ('Custom effects!').split('')

    var interval = setInterval(function () {
      var letter = letters.shift()
      if (!letter) return clearInterval(interval)

      el.innerHTML += letter
    }, 250)
  }
])
