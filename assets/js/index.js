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
    gdocs.initNavFilter()
    gdocs.initPageToc()
    gdocs.scrollActiveNavIntoView()
    var content = document.querySelector('.content')
    if (content) content.focus()
  },

  onReady: function() {
    // in case the document is already rendered
    if (document.readyState != 'loading') {
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

    for (var i = navElems.length; i--;) {
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

    if (collapseButtons.length === 0) return

    // Load saved state from localStorage
    gdocs.loadNavState()

    // Add click handlers
    collapseButtons.forEach(function(btn) {
      gdocs.eventAdd(btn, 'click', function(e) {
        e.preventDefault()
        e.stopPropagation()
        gdocs.toggleNavSection(this)
      })

      // Keyboard support
      gdocs.eventAdd(btn, 'keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          e.stopPropagation()
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
      } else {
        btn.classList.remove('expanded')
        if (targetList) {
          targetList.setAttribute('aria-expanded', 'false')
        }
      }
    })
  },

  toggleNavSection: function(button) {
    var navId = button.getAttribute('data-nav-id')
    var targetList = document.getElementById(navId)

    if (!targetList) return

    var isCollapsed = targetList.classList.contains('collapsed')

    if (isCollapsed) {
      targetList.classList.remove('collapsed')
      button.classList.add('expanded')
      targetList.setAttribute('aria-expanded', 'true')
    } else {
      targetList.classList.add('collapsed')
      button.classList.remove('expanded')
      targetList.setAttribute('aria-expanded', 'false')
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
    }
  },

  // Keep the current page visible in the sidebar on load
  scrollActiveNavIntoView: function() {
    var scroller = document.querySelector('.sidebar-nav-scroll')
    var active = scroller && scroller.querySelector('.navigation-list-link.active')
    if (!scroller || !active) return

    var offset = active.getBoundingClientRect().top - scroller.getBoundingClientRect().top
    if (offset > scroller.clientHeight - 80) {
      scroller.scrollTop = offset - scroller.clientHeight / 2
    }
  },

  // Live filter for the sidebar navigation
  initNavFilter: function() {
    var input = document.getElementById('docs-nav-filter')
    var nav = document.querySelector('.sidebar-nav')
    if (!input || !nav) return

    var searchWrap = input.parentElement
    var countNote = document.getElementById('docs-nav-filter-count')
    var items = Array.prototype.slice.call(nav.querySelectorAll('.navigation-list-item'))
    var links = Array.prototype.slice.call(nav.querySelectorAll('.navigation-list-link'))
    var emptyNote = nav.querySelector('.sidebar-nav-empty')

    // Remember original titles so match highlighting can be undone
    links.forEach(function(link) {
      link.setAttribute('data-title', link.textContent)
    })

    var escapeHtml = function(s) {
      return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    }

    var paintLink = function(link, query) {
      var title = link.getAttribute('data-title')
      var index = query ? title.toLowerCase().indexOf(query) : -1
      if (index === -1) {
        if (link.innerHTML !== title) link.textContent = title
        return false
      }
      link.innerHTML = escapeHtml(title.slice(0, index)) +
        '<mark>' + escapeHtml(title.slice(index, index + query.length)) + '</mark>' +
        escapeHtml(title.slice(index + query.length))
      return true
    }

    var apply = function() {
      var query = input.value.trim().toLowerCase()
      if (searchWrap) searchWrap.classList.toggle('has-value', query.length > 0)

      if (!query) {
        nav.classList.remove('sidebar-filtering')
        items.forEach(function(item) {
          item.classList.remove('filter-hidden')
        })
        links.forEach(function(link) {
          paintLink(link, '')
        })
        if (emptyNote) emptyNote.hidden = true
        if (countNote) countNote.hidden = true
        return
      }

      nav.classList.add('sidebar-filtering')
      var anyVisible = false
      var matchCount = 0

      links.forEach(function(link) {
        if (paintLink(link, query)) matchCount++
      })

      items.forEach(function(item) {
        var link = item.querySelector(':scope > .nav-item-wrapper > .navigation-list-link, :scope > .navigation-list-link')
        var text = link ? link.getAttribute('data-title').toLowerCase() : ''
        var selfMatch = text.indexOf(query) !== -1
        // A parent stays visible when any descendant link matches
        var childMatch = false
        if (!selfMatch) {
          var childLinks = item.querySelectorAll('.navigation-list-child-list .navigation-list-link')
          for (var i = 0; i < childLinks.length; i++) {
            if (childLinks[i].getAttribute('data-title').toLowerCase().indexOf(query) !== -1) {
              childMatch = true
              break
            }
          }
        }
        item.classList.toggle('filter-hidden', !selfMatch && !childMatch)
        if (selfMatch || childMatch) anyVisible = true
      })

      // Un-hide ancestors of visible items so matches inside sections show up
      items.forEach(function(item) {
        if (!item.classList.contains('filter-hidden')) {
          var parent = item.parentElement
          while (parent && !parent.classList.contains('sidebar-nav-scroll')) {
            if (parent.classList && parent.classList.contains('navigation-list-item')) {
              parent.classList.remove('filter-hidden')
            }
            parent = parent.parentElement
          }
        }
      })

      if (emptyNote) emptyNote.hidden = anyVisible
      if (countNote) {
        countNote.textContent = matchCount + (matchCount === 1 ? ' page' : ' pages')
        countNote.hidden = false
      }
    }

    gdocs.eventAdd(input, 'input', apply)
    gdocs.eventAdd(input, 'keydown', function(e) {
      if (e.key === 'Escape') {
        input.value = ''
        apply()
        input.blur()
      }
    })

    // "/" focuses the filter from anywhere on the page
    gdocs.eventAdd(document, 'keydown', function(e) {
      if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return
      var t = e.target
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return
      e.preventDefault()
      input.focus()
      input.select()
    })
  },

  // "On this page" table of contents with scroll spy
  initPageToc: function() {
    var toc = document.getElementById('page-toc')
    var body = document.querySelector('.main-body')
    if (!toc || !body) return

    var list = toc.querySelector('.page-toc-list')
    var headings = Array.prototype.slice.call(body.querySelectorAll('h2, h3')).filter(function(h) {
      // Skip helper headings (e.g. the auto-generated children list title)
      return !h.classList.contains('text-delta') && h.textContent.trim() !== ''
    })

    if (headings.length < 2) return

    var slugCounts = {}
    var links = []

    headings.forEach(function(heading) {
      if (!heading.id) {
        var slug = heading.textContent.trim().toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-') || 'section'
        if (slugCounts[slug] != null) {
          slugCounts[slug]++
          slug += '-' + slugCounts[slug]
        } else {
          slugCounts[slug] = 0
        }
        heading.id = slug
      }

      var li = document.createElement('li')
      li.className = 'page-toc-' + heading.tagName.toLowerCase()
      var a = document.createElement('a')
      a.href = '#' + heading.id
      a.textContent = heading.textContent.replace(/\s*#\s*$/, '')
      li.appendChild(a)
      list.appendChild(li)
      links.push(a)
    })

    toc.hidden = false

    // Scroll spy
    if ('IntersectionObserver' in window) {
      var activeIndex = -1
      var setActive = function(index) {
        if (index === activeIndex) return
        activeIndex = index
        links.forEach(function(link, i) {
          link.classList.toggle('active', i === index)
        })
      }

      var visible = {}
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          var index = headings.indexOf(entry.target)
          visible[index] = entry.isIntersecting
        })

        var firstVisible = -1
        for (var i = 0; i < headings.length; i++) {
          if (visible[i]) { firstVisible = i; break }
        }

        if (firstVisible !== -1) {
          setActive(firstVisible)
        } else {
          // Nothing on screen: highlight the last heading above the viewport
          var lastAbove = -1
          for (var j = 0; j < headings.length; j++) {
            if (headings[j].getBoundingClientRect().top < 0) lastAbove = j
          }
          if (lastAbove !== -1) setActive(lastAbove)
        }
      }, { rootMargin: '0px 0px -60% 0px' })

      headings.forEach(function(h) { observer.observe(h) })
    }
  }
}

gdocs.onReady()
