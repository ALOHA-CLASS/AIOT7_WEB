// 아이콘 라이브러리 실행
lucide.createIcons()

// 이미지 슬라이드 
new Swiper('.gallery-swiper', {
  slidesPerView: 1.15,
  spaceBetween: 16,
  loop: true,
  navigation: { nextEl: '.gallery-next', prevEl: '.gallery-prev' },
  pagination: { el: '.swiper-pagination', clickable: true },
  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 20 },
    900: { slidesPerView: 3, spaceBetween: 24 },
  },
})


// 더 알아보기 클릭 시, SweetAlert2
const $btn = document.getElementById("introButton")
$btn.addEventListener("click", function() {
  Swal.fire({
    title: '김개발의 한마디',
    text: '매일 한 걸음씩, 더 나은 사용자 경험을 만들고 있습니다.',
    icon: 'info',
    confirmButtonText: '확인',
    confirmButtonColor: '#ef876d',
    background: '#f7f8f4',
    color: '#17232c',
  })
})