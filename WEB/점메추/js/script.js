const menus = [
      { name: '짜장면',   emoji: '🍜', tag: '중식' },
      { name: '김치찌개', emoji: '🍲', tag: '한식' },
      { name: '초밥',     emoji: '🍣', tag: '일식' },
      { name: '피자',     emoji: '🍕', tag: '양식' },
      { name: '삼겹살',   emoji: '🥩', tag: '한식' },
      { name: '파스타',   emoji: '🍝', tag: '양식' },
      { name: '치킨',     emoji: '🍗', tag: '분식' },
      { name: '햄버거',   emoji: '🍔', tag: '패스트푸드' },
      { name: '부대찌개', emoji: '🍚', tag: '한식' },
      { name: '라멘',     emoji: '🍥', tag: '일식' },
      { name: '타코',     emoji: '🌮', tag: '멕시코' },
      { name: '카레',     emoji: '🍛', tag: '인도' },
    ]
let count = 0
let lastIndex = -1
const $btn = document.getElementById("btnPick")

const menuCard = document.getElementById("menuCard")
const menuEmoji = document.getElementById("menuEmoji")
const menuName = document.getElementById("menuName")
const menuTag = document.getElementById("menuTag")
const $count = document.getElementById("count")
const menuPreview = document.getElementById("menuPreview")

// 최근 추천 내역 5개
const history = []

// 버튼 클릭 이벤트
$btn.addEventListener("click", (e)=> {
    // 1. 배열에서 랜덤 인덱스 뽑기
    const index = Math.floor(Math.random() * menus.length)
    const picked = menus[index]

    menuName.textContent = picked.name
    menuEmoji.textContent = picked.emoji
    menuTag.textContent = picked.tag

    count++;    // 개수 증가
    $count.textContent = count

    // 추천 내역에 추가
    history.unshift(picked)                 // 맨 앞에 요소를 추가
    if( history.length > 5 ) history.pop()  // 맨 뒤의 요소 제거
    preview()
    // console.log(history);
    
})

// 추천 내역 5개
function preview() {
    const newPreview = history.map( (menu, index) => 
        `<span class="preview-chip ${index === 0 ? 'recent' : ''}">
            ${menu.emoji} ${menu.name}
         </span>
        `
    ).join('')
    console.log(newPreview);
    
    menuPreview.innerHTML = newPreview
}