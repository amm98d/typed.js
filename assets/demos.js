document.addEventListener('DOMContentLoaded', function () {
  new Typed('#typed', {
    strings: ['&#x0041; &#x1F44B;'],
    // stringsElement: '#typed-strings',
    typeSpeed: 1000,
    backSpeed: 1000,
    loop: true,
    loopCount: Infinity,
    onBegin: function (self) {
      prettyLog('onBegin ' + self);
    },
    onComplete: function (self) {
      prettyLog('onComplete ' + self);
    },
    preStringTyped: function (pos, self) {
      prettyLog('preStringTyped ' + pos + ' ' + self);
    },
    onStringTyped: function (pos, self) {
      prettyLog('onStringTyped ' + pos + ' ' + self);
    },
    onLastStringBackspaced: function (self) {
      prettyLog('onLastStringBackspaced ' + self);
    },
    onTypingPaused: function (pos, self) {
      prettyLog('onTypingPaused ' + pos + ' ' + self);
    },
    onTypingResumed: function (pos, self) {
      prettyLog('onTypingResumed ' + pos + ' ' + self);
    },
    onReset: function (self) {
      prettyLog('onReset ' + self);
    },
    onStop: function (pos, self) {
      prettyLog('onStop ' + pos + ' ' + self);
    },
    onStart: function (pos, self) {
      prettyLog('onStart ' + pos + ' ' + self);
    },
    onDestroy: function (self) {
      prettyLog('onDestroy ' + self);
    },
  });
});

function prettyLog(str) {
  console.log('%c ' + str, 'color: green; font-weight: bold;');
}

function toggleLoop(typed) {
  if (typed.loop) {
    typed.loop = false;
  } else {
    typed.loop = true;
  }
}
