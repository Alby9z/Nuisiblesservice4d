document.addEventListener('DOMContentLoaded', function () {
  const btnBurger = document.querySelector('.btn-burger')
  const sidebarBurger = document.querySelector('.sidebar-burger')
  const featBtn = document.querySelector('.feat-btn')
  const servBtn = document.querySelector('.serv-btn')
  const featShow = document.querySelector('.feat-show')
  const servShow = document.querySelector('.serv-show')
  if (btnBurger && sidebarBurger) {
    btnBurger.addEventListener('click', function () {
      btnBurger.classList.toggle('click')
      sidebarBurger.classList.toggle('show')
    })
  }
  if (featBtn && featShow) {
    featBtn.addEventListener('click', function () {
      featShow.classList.toggle('show')
      featBtn.querySelector('ion-icon').classList.toggle('rotate')
    })
  }
  if (servBtn && servShow) {
    servBtn.addEventListener('click', function () {
      servShow.classList.toggle('show1')
      servBtn.querySelector('ion-icon').classList.toggle('rotate')
    })
  }
  const subMenuItems = document.querySelectorAll('.li-sous-menu a')
  subMenuItems.forEach((item) => {
    item.addEventListener('click', function () {
      sidebarBurger.classList.remove('show')
      btnBurger.classList.remove('click')
    })
  })
})
document.addEventListener('DOMContentLoaded', function () {
  const selectedOptionDisplay = document.querySelector('.selected-option')
  const optionsList = document.querySelector('.options-list')
  const selectedContent = document.querySelector(
    '.selected-option .selected-content'
  )
  const hiddenInput = document.querySelector('input[name="Nuisibles"]')
  const searchForm = document.getElementById('search-form')
  if (optionsList) {
    optionsList.style.display = 'none'
  }
  if (selectedOptionDisplay) {
    selectedOptionDisplay.addEventListener('click', function () {
      if (
        optionsList.style.display === 'none' ||
        optionsList.style.display === ''
      ) {
        optionsList.style.display = 'block'
        optionsList.classList.add('open')
      } else {
        optionsList.style.display = 'none'
        optionsList.classList.remove('open')
      }
    })
  }
  document.querySelectorAll('.options-list li').forEach(function (li) {
    li.addEventListener('click', function () {
      const selectedOptionText = li.textContent.trim()
      const selectedOptionIcon = li.getAttribute('data-icon')
      const selectedOptionValue = li.getAttribute('data-value')
      selectedContent.innerHTML = `
        <img class="selected-icon" src="${selectedOptionIcon}" alt="${selectedOptionText}">
        ${selectedOptionText}
      `
      hiddenInput.value = selectedOptionValue
      optionsList.style.display = 'none'
      optionsList.classList.remove('open')
    })
  })
  document.addEventListener('click', function (e) {
    if (
      selectedOptionDisplay &&
      !selectedOptionDisplay.contains(e.target) &&
      optionsList &&
      !optionsList.contains(e.target)
    ) {
      optionsList.style.display = 'none'
      optionsList.classList.remove('open')
    }
  })
  if (searchForm) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault()
      const nuisible = hiddenInput.value
      const type = document.getElementById('type-select').value
      const codePostal = document.getElementById('cp').value
      const urgent = document.getElementById('urgent-switch').checked
        ? 'oui'
        : 'non'

      if (!type) {
        alert('Veuillez sélectionner votre type (particulier ou entreprise).')
        return
      }

      if (!codePostal) {
        alert('Veuillez entrer votre code postal.')
        return
      }
      const redirections = {
        1: 'Dératisation.html',
        2: 'Guêpes-frelons.html',
        3: 'Frelon_Asiatique.html',
        4: 'Punaise_De_Lit.html',
        5: 'Puce.html',
        6: 'Dépigeonnage.html',
        7: 'Fouine_Martre.html',
        8: 'Cafard_Blatte.html',
        9: 'Fourmis.html',
        10: 'Gale.html',
        11: 'Syndrome_De_Diogéne.html',
        12: 'Cave-local.html',
        13: 'Traitement_Boiserie.html',
        14: 'Désinfection.html',
        15: 'Éco-responsable.html',
      }
      const pageUrl = redirections[nuisible]
      if (pageUrl) {
        const queryString = `?type=${type}&cp=${codePostal}&urgent=${urgent}`
        console.log(`Redirection vers : ${pageUrl}${queryString}`)
        window.location.href = `${pageUrl}${queryString}`
      } else {
        alert('Veuillez sélectionner une catégorie de nuisible.')
      }
    })
  }
})
document.addEventListener('DOMContentLoaded', function () {
  const prev = document.querySelector('#prev')
  const next = document.querySelector('#next')
  const carouselVp = document.querySelector('#carousel-vp')
  const cCarouselInner = document.querySelector('#cCarousel-inner')
  if (!prev || !next || !carouselVp || !cCarouselInner) return
  let carouselInnerWidth = cCarouselInner.getBoundingClientRect().width
  let leftValue = 0
  const totalMovementSize =
    parseFloat(
      document.querySelector('.cCarousel-item').getBoundingClientRect().width,
      10
    ) +
    parseFloat(
      window.getComputedStyle(cCarouselInner).getPropertyValue('gap'),
      10
    )
  prev.addEventListener('click', () => {
    if (leftValue !== 0) {
      leftValue += totalMovementSize
      cCarouselInner.style.left = leftValue + 'px'
    }
  })
  next.addEventListener('click', () => {
    const carouselVpWidth = carouselVp.getBoundingClientRect().width
    if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
      leftValue -= totalMovementSize
      cCarouselInner.style.left = leftValue + 'px'
    }
  })
  const mediaQuery510 = window.matchMedia('(max-width: 510px)')
  const mediaQuery770 = window.matchMedia('(max-width: 770px)')
  mediaQuery510.addEventListener('change', mediaManagement)
  mediaQuery770.addEventListener('change', mediaManagement)
  let oldViewportWidth = window.innerWidth
  function mediaManagement() {
    const newViewportWidth = window.innerWidth
    if (
      leftValue <= -totalMovementSize &&
      oldViewportWidth < newViewportWidth
    ) {
      leftValue += totalMovementSize
      cCarouselInner.style.left = leftValue + 'px'
      oldViewportWidth = newViewportWidth
    } else if (
      leftValue <= -totalMovementSize &&
      oldViewportWidth > newViewportWidth
    ) {
      leftValue -= totalMovementSize
      cCarouselInner.style.left = leftValue + 'px'
      oldViewportWidth = newViewportWidth
    }
  }
})
;(function ($) {
  $.fn.menumaker = function (options) {
    var cssmenu = $(this),
      settings = $.extend(
        {
          format: 'dropdown',
          sticky: false,
        },
        options
      )
    return this.each(function () {
      $(this)
        .find('.button')
        .on('click', function () {
          $(this).toggleClass('menu-opened')
          var mainmenu = $(this).next('ul')
          if (mainmenu.hasClass('open')) {
            mainmenu.slideToggle().removeClass('open')
          } else {
            mainmenu.slideToggle().addClass('open')
            if (settings.format === 'dropdown') {
              mainmenu.find('ul').show()
            }
          }
        })
      cssmenu.find('li ul').parent().addClass('has-sub')
      multiTg = function () {
        cssmenu.find('.has-sub').prepend('<span class="submenu-button"></span>')
        cssmenu.find('.submenu-button').on('click', function () {
          $(this).toggleClass('submenu-opened')
          if ($(this).siblings('ul').hasClass('open')) {
            $(this).siblings('ul').removeClass('open').slideToggle()
          } else {
            $(this).siblings('ul').addClass('open').slideToggle()
          }
        })
      }
      if (settings.format === 'multitoggle') multiTg()
      else cssmenu.addClass('dropdown')
      if (settings.sticky === true) cssmenu.css('position', 'fixed')
      resizeFix = function () {
        var mediasize = 1000
        if ($(window).width() > mediasize) {
          cssmenu.find('ul').show()
        }
        if ($(window).width() <= mediasize) {
          cssmenu.find('ul').hide().removeClass('open')
        }
      }
      resizeFix()
      return $(window).on('resize', resizeFix)
    })
  }
})(jQuery)
;(function ($) {
  $(document).ready(function () {
    $('#cssmenu').menumaker({
      format: 'multitoggle',
    })
  })
})(jQuery)
