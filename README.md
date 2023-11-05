<img src="https://capsule-render.vercel.app/api?type=Waving&color=gradient&height=200&section=header&text=GoodSeul&fontSize=90" />

# GoodSeul
<h3>대한민국의 독특한 문화인 ‘굿’에 대한 온/오프라인 플랫폼 제공<h3/>

<br/>

## Development Schedule
* 기간 : 2023.09.04 ~ 2023.11.04
* 인원 : 9명

# 서류
[구슬 프로젝트 보고(최종 완성본)_compressed.pdf](https://github.com/helloa1109/goodseul/files/13258833/_compressed.pdf)

## 기능

* 헤더 
     1. 헤더 컴포넌트 분리 (기본 레이아웃과 클릭시 열리는 햄버거 메뉴)
     2. Input checkbox 와 css 를 사용하여 햄버거 메뉴 구현
     3. 메인페이지 제외 헤더에 들어가는 제목 컴포넌트 분리
* 견적요청 작성
     1. 견적요청 작성페이지 css
     2. 견적작성 (날짜,지역,종류, 상세입력정보) api 기능구현
     3. React-calendar 라이브러리 사용 달력 구현 및 css 수정
     4. 모달 직접 구현
* 위치기반페이지
     1. 지역 선택 메뉴, 리스트 출력되는 슬라이드 컴포넌트 분리
     2. 각 지역 클릭 시 파라미터로 클릭한 지역을 보내 해당 지역 구슬님 리스트 출력
     3. React-swiper 라이브러리 사용 및 css 수정
* 마이페이지
     1. 마이페이지 css
     2. 채팅목록 클릭 시 나랑 대화했던 채팅방 목록 리스트 출력
     3. 해당 목록 클릭 시 채팅방과 연결
* 아이디찾기, 비밀번호찾기
     1. 레이아웃 동일, 아이디찾기와 비밀번호찾기 컴포넌트 하나로 구성
     2. 비밀번호 찾기 인증페이지 css
     3. 비밀번호 찾기 인증번호 입력페이지 css 및 js
          3-1. Input 입력 시 다음 input 으로 자동 탭, 백스페이스도 동일
     4. 비밀번호 성공페이지 css
     5. 아이디찾기 성공페이지 css
* 구슬님 상세정보 페이지
     1. 선택한 구슬 상세정보 api 호출 후 출력
     2. 상담하기 클릭 시 해당 구슬님과 현재 로그인한 유저로 채팅방 생성
* 채팅
     1. 생성된 룸 ID로 채팅방 연결
     2. 채팅방에 들어왔을경우 이전 대화목록 출력
     3. 위로 스크롤 시 이전 대화내용 출력
* 라우터
1. 아이디찾기, 비밀번호찾기 url 주소 입력 시 ‘페이지가 없습니다’ 페이지로 출력되게 설정 

- 프로젝트 시작 전 React Hook을 공부하면서 useState나 useRecoilState를 사용하여 데이터를 저장하고, 페이지를 새로고침할 때 데이터가 사라지는 문제에 대해 고민하였습니다. 
이 문제를 해결하기 위해 React Hook의 다양한 기능을 탐구하고 적용해보면서, 데이터의 지속성과 상태 관리를 향상시킬 수 있음을 깨달았습니다.
- 또한, 컴포넌트 분리에 대한 개념을 탐구하면서 재사용 가능한 컴포넌트를 만들고, 코드가 점점 길어질 때에 대비하여 모듈화하고 분리하는 중요성을 깨달았습니다. 
이러한 접근은 통해 코드의 가독성을 유지하고 유지보수성을 향상 시킬 수 있음을 인지하였습니다.
프로젝트를 진행하면서 로직과 뷰를 분리하며 코드를 작성한 결과, 코드를 더욱 명확하게 구분할 수 있었고, 데이터의 흐름에 대한 이해도를 높일 수 있었습니다. 
- 이러한 공부와 경험을 통해 프로젝트 개발과 유지보수 과정에서 훨씬 더 효율적이고 안정적인 코드를 작성할 수 있게 되었습니다.
- 이번 프로젝트에서 채팅 기능을 처음으로 구현하려고 노력했지만, 시간 관계상 제대로 완성하지 못한 부분이 아쉽게 느껴집니다. 주요 문제점 중 하나는 채팅방 연결 시 connect 가 여러번 호출되는 문제였습니다.
이 문제를 해결하기 위해 다양한 방법을 시도해봤습니다.
소켓 통신의 작동 원리를 이해하고, 프로젝트를 마무리하면 Node.js와 React를 사용하여 
실시간 채팅을다시 구현해보려고 합니다.

## Technology used
### Front-End
<div>
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
  <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <img src="https://img.shields.io/badge/greensock-88CE02?style=for-the-badge&logo=greensock&logoColor=white">
  <img src="https://img.shields.io/badge/recoil-5A29E4?style=for-the-badge&logo=recoil&logoColor=white">
  <img src="https://img.shields.io/badge/stomp-5A29E4?style=for-the-badge&logo=stomp&logoColor=white">
  <img src="https://img.shields.io/badge/jwt-5A29E4?style=for-the-badge&logo=jwt&logoColor=white">
</div>

### Back-End

<div>
  <img src="https://img.shields.io/badge/java 11-007396?style=for-the-badge&logo=java&logoColor=white"> 
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white"> 
  <img src="https://img.shields.io/badge/apache tomcat 9-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=black">
  <img src="https://img.shields.io/badge/mysql 8-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
  <img src="https://img.shields.io/badge/spring_boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> 
  <img src="https://img.shields.io/badge/Gradle-c71a36?style=for-the-badge&logo=Gradle&logoColor=white">
  <img src="https://img.shields.io/badge/apachemaven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white">
  <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
  <img src="https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white">
  <img src="https://img.shields.io/badge/ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white">
  <img src="https://img.shields.io/badge/stomp-5A29E4?style=for-the-badge&logo=stomp&logoColor=white">
  <img src="https://img.shields.io/badge/jwt-5A29E4?style=for-the-badge&logo=jwt&logoColor=white">
</div>

### Tools
<div> 
  <img src="https://img.shields.io/badge/intellij-000000?style=for-the-badge&logo=intellijidea&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white">
  <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&c%2B%2B&logoColor=white">
  <img src="https://img.shields.io/badge/npm-F24E1E?style=for-the-badge&logo=npm&c%2B%2B&logoColor=white">
  <img src="https://img.shields.io/badge/Naver-03C75A?style=for-the-badge&logo=Naver&logoColor=white">
</div>



![Footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=footer)

