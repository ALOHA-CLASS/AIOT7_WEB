// 이벤트 처리 메소드
// - on('이벤트 타입', 콜백함수{} )
// * 이벤트 타입 : click, keyup, change, ...
/*
    콜백함수
    - fucntion()    : $(this) 사용가능
    - () => {}      : $(this) 사용불가
*/
// 문서 준비 이벤트
$(function() {
    
    $('#item1').on('click', function() {
        $('#item1').css('color', 'red')
    })

    // this : 현재 속한 블록의 객체
    //        현재 선택한 요소를 가리키는 키워드
    //        여기서는 $('#item2') = <div id="item2">
    $('#item2').on('mouseover', function() {
        $(this).css('color', 'hotpink')
    })

    $('#item3').on('mouseover', function() {
        $(this).css('color', 'red')
        $(this).css('background', 'black')
    })

    $('#item3').on('mouseout', function() {
        $(this).css('color', 'white')
        $(this).css('background', 'cornflowerblue')
    })
    
    // 메서드 체인
    // : 하나의 jQuery 객체로 여러 메소드를 연결하는 기법
    $('#item4')
        .on('mouseover', function() {
            $(this).css('color', 'red')
            $(this).css('background', 'black')
        })
        .on('mouseout', function() {
            $(this).css('color', 'white')
            $(this).css('background', 'cornflowerblue')
        })

    $('#item5')
        .on('mouseover', function() {
            $(this).css('color', 'red')
            $(this).css('background', 'black')
        })
        .on('mouseout', function() {
            $(this).css('color', 'white')
            $(this).css('background', 'cornflowerblue')
        })
        .on('click', function() {
            $(this).css('color', 'springgreen')
        })
        .on('dblclick', function() {
            $(this).css({
                'border'        : '10px solid hotpink',
                'background'    : 'black',
                'color'         : 'yellow'
            })
        })
})