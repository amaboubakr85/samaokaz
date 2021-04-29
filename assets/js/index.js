$next_sec = document.querySelector('.nxt-sec')
if ($next_sec) {
  $next_sec.addEventListener('click', function () {
    window.location.href = '#aboutus'
  })
}

let play = document.getElementById('play')
if (play) {
  play.addEventListener('click', function () {
    let play_video = document.querySelector('.video-play')
    document.querySelector('.overlay').style.opacity = '0'
    document.querySelector('.overlay').style.zIndex = '0'
    play_video.play()
    play_video.controls = true
  })
}

const planningGallery = document.querySelector('.planning-gallery')

if (planningGallery) {
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  })
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  })
}
