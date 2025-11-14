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

    // Initialize collapsible navigation
    gdocs.initCollapsibleNav()
  },

  initCollapsibleNav: function() {
    var collapseButtons = document.querySelectorAll('.nav-collapse-btn')

    console.log('[Collapsible Nav] Found', collapseButtons.length, 'collapse buttons')

    if (collapseButtons.length === 0) return

    // Load saved state from localStorage
    gdocs.loadNavState()

    // Add click handlers
    collapseButtons.forEach(function(btn) {
      gdocs.eventAdd(btn, 'click', function(e) {
        e.preventDefault()
        e.stopPropagation()
        console.log('[Collapsible Nav] Button clicked')
        gdocs.toggleNavSection(this)
      })

      // Keyboard support
      gdocs.eventAdd(btn, 'keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          e.stopPropagation()
          console.log('[Collapsible Nav] Button activated via keyboard')
          gdocs.toggleNavSection(this)
        }
      })
    })

    // Initialize button states based on current collapsed state
    collapseButtons.forEach(function(btn) {
      var navId = btn.getAttribute('data-nav-id')
      var targetList = document.getElementById(navId)

      if (targetList && !targetList.classList.contains('collapsed')) {
        btn.classList.add('expanded')
        targetList.setAttribute('aria-expanded', 'true')
        console.log('[Collapsible Nav] Initialized as expanded:', navId)
      } else {
        btn.classList.remove('expanded')
        if (targetList) {
          targetList.setAttribute('aria-expanded', 'false')
          console.log('[Collapsible Nav] Initialized as collapsed:', navId)
        }
      }
    })

    console.log('[Collapsible Nav] Initialization complete')
  },

  toggleNavSection: function(button) {
    var navId = button.getAttribute('data-nav-id')
    var targetList = document.getElementById(navId)

    console.log('[Toggle] navId:', navId, 'targetList:', targetList)

    if (!targetList) {
      console.warn('[Toggle] Target list not found for:', navId)
      return
    }

    var isCollapsed = targetList.classList.contains('collapsed')
    console.log('[Toggle] Current state:', isCollapsed ? 'collapsed' : 'expanded')

    if (isCollapsed) {
      // Expand
      targetList.classList.remove('collapsed')
      button.classList.add('expanded')
      targetList.setAttribute('aria-expanded', 'true')
      console.log('[Toggle] Expanding section:', navId)
    } else {
      // Collapse
      targetList.classList.add('collapsed')
      button.classList.remove('expanded')
      targetList.setAttribute('aria-expanded', 'false')
      console.log('[Toggle] Collapsing section:', navId)
    }

    // Save state
    gdocs.saveNavState()
  },

  saveNavState: function() {
    try {
      var state = {}
      var childLists = document.querySelectorAll('.navigation-list-child-list')

      childLists.forEach(function(list) {
        var id = list.id
        if (id) {
          state[id] = !list.classList.contains('collapsed')
        }
      })

      localStorage.setItem('navState', JSON.stringify(state))
    } catch (e) {
      // localStorage might be disabled
      console.warn('Could not save navigation state:', e)
    }
  },

  loadNavState: function() {
    try {
      var savedState = localStorage.getItem('navState')
      if (!savedState) return

      var state = JSON.parse(savedState)

      Object.keys(state).forEach(function(id) {
        var list = document.getElementById(id)
        if (list) {
          var shouldBeExpanded = state[id]
          var isCurrentlyExpanded = !list.classList.contains('collapsed')

          // Only change if different from saved state and not currently active
          if (shouldBeExpanded !== isCurrentlyExpanded && !list.classList.contains('active')) {
            if (shouldBeExpanded) {
              list.classList.remove('collapsed')
            } else {
              list.classList.add('collapsed')
            }
          }
        }
      })
    } catch (e) {
      // Invalid JSON or localStorage disabled
      console.warn('Could not load navigation state:', e)
    }
  }
}

gdocs.onReady()
