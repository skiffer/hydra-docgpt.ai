window.gdocs = {

  eventAdd: function(el, type, handler) {
    if (el.attachEvent) el.attachEvent('on' + type, handler)
    else el.addEventListener(type, handler)
  },

  eventRemove: function(el, type, handler) {
    if (el.detachEvent) el.detachEvent('on' + type, handler)
    else el.removeEventListener(type, handler)
  },

  init: function() {
    gdocs.nav()
    document.querySelector('.content').focus()
  },

  onReady: function() {
    // in case the document is already rendered
    if (document.readyState!='loading') {
      gdocs.init()
      
    // modern browsers
    } else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', gdocs.init)
    }
  },

  nav: function() {
    // Show/hide mobile menu
    var body = document.querySelector('body')
    var navElems = document.getElementsByClassName('toggle-nav')

    for (var i=navElems.length; i--;) {
      gdocs.eventAdd(navElems[i], 'click', function(e) {
        e.preventDefault()
        var text = this.innerText
        var textToggle = this.getAttribute('data-text-toggle')

        body.classList.toggle('nav-open')
        this.classList.toggle('nav-open')
        if (textToggle) {
          this.innerText = textToggle
          this.setAttribute('data-text-toggle', text)
          textToggle = text
        }
      })
    }
  }
}

gdocs.onReady()
