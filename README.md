# simple-slides #

Simple yet fully customizable/interactive slideshows for talks and presentations. Each "slide" is a JS function that gets run when it's its turn.

## Example ##

```js
var SS = require('simple-slides')

// Starts the show: left/right arrows to go forward/back
var slideshow = SS.start(document.body, [
  // large text
  SS.title('simple-slides'),

  // full-screen image
  SS.image('/example/white-blue.png'),

  // contained image
  SS.image('/example/wide-blue.png', 'contain'),

  // video (muted by default)
  SS.video('/example/spin.mp4'),

  // custom function to alter an element
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
```

Edit `example/index.js` and run `npm run example` to try it out in your browser.

## API ##

### SS.start(el, slideFns) ###

This will start the slideshow with the specified element (usually `document.body`) and array of slide functions.

Each item in the array will be a "slide helper" like `SS.title`, `SS.image`, or `SS.video` (explained below), or it will be a function that receives the element as an argument.

```js
var slideshow = SS.start(document.body, [
  // basic large text using SS.title helper
  SS.title('simple-slides'),

  // or your own function
  function (slide) {
    var el = document.createElement('h1')
    el.innerHTML = 'Custom Slide!'

    slide.innerHTML = ''
    slide.appendChild(el)
  }
])
```

### SS.title(text) ###

Standard "big text" card. Will make sure it's centered.

### SS.image(url[, backgroundSize]) ###

Standard "big image". By default `backgroundSize` is "cover". Depending on the image you might want to use `"contain"`. For more info see [background-size on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size?redirectlocale=en-US&redirectslug=CSS%2Fbackground-size).

### SS.video(url[, playAudio]) ###

Standard "big movie". Will be muted by default, but you can set `playAudio` to `true` if you'd like sound.


## License ##

MIT
