# GitHub Pages 무료 호스팅 가이드

1. GitHub 가입 및 로그인
   - https://github.com 접속
   - 회원가입 또는 로그인

2. 새 Repository 만들기
   - 오른쪽 위 `+` → `New repository` 클릭
   - Repository name 입력
   - `Public` 선택
   - `Create repository` 클릭

3. 웹사이트 파일 준비하기
   - 아래와 같은 구조로 파일을 준비합니다.
   - index.html
   - css/style.css
   - js/script.js

4. index.html 작성하기
   - CSS 파일과 JavaScript 파일을 연결합니다.
   - `<link rel="stylesheet" href="css/style.css">`
   - `<script src="js/script.js"></script>`

5. CSS와 JavaScript 작성하기
   - `css/style.css`에 디자인 코드를 작성합니다.
   - `js/script.js`에 JavaScript 코드를 작성합니다.

6. GitHub에 파일 업로드하기
   - Repository에서 `Add file` → `Upload files` 클릭
   - `index.html`, `css`, `js` 파일을 업로드합니다.

7. Commit changes
   - 업로드된 파일을 확인합니다.
   - `Commit changes` 버튼을 클릭합니다.

8. GitHub Pages 설정하기
   - `Settings` → `Pages`로 이동합니다.
   - `Source` → `Deploy from a branch` 선택
   - `Branch` → `main` 선택
   - `Folder` → `/ (root)` 선택
   - `Save` 클릭

9. 배포 주소 확인하기
   - 잠시 기다린 후 `Settings` → `Pages`에서 배포 주소를 확인합니다.
   - `https://사용자이름.github.io/저장소이름/`

10. 웹사이트 접속 및 확인하기
    - 생성된 GitHub Pages 주소로 접속합니다.
    - `index.html`이 정상적으로 출력되는지 확인합니다.
    - CSS와 JavaScript가 정상적으로 작동하면 무료 웹호스팅이 완료됩니다.