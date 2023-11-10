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

구현화면

## 헤더
<div align="center">
     
![헤더](https://github.com/helloa1109/goodseul/assets/124419012/1e5cc7d8-a0bb-4e58-8503-d54b23f41ab0)

</div>
## 견적요청

## 위치기반

## 아이디찾기
![아이디찾기](https://github.com/helloa1109/goodseul/assets/124419012/08aaee40-6356-4374-8963-f0b42efdebfd)

## 비밀번호찾기
![비밀번호찾기](https://github.com/helloa1109/goodseul/assets/124419012/78b7d04b-2d3a-45fa-8615-3353ea0ddd88)
![비밀번호찾기](https://github.com/helloa1109/goodseul/assets/124419012/c9472074-f07a-488a-b551-41b68afd2732)


## 마이페이지
![마이페이지](https://github.com/helloa1109/goodseul/assets/124419012/14f16309-c2d3-42dc-bf9b-fac96ebfc1b9)

## 채팅
![마이페이지 채팅](https://github.com/helloa1109/goodseul/assets/124419012/aa892a57-f1ee-468e-9687-0b96c3bb1cad)

![채팅](https://github.com/helloa1109/goodseul/assets/124419012/b6178f1b-7cb2-44b5-88df-b3d40d5babbf)
![채팅](https://github.com/helloa1109/goodseul/assets/124419012/0bfe0e0b-afd2-412c-8f5b-37519e0a845d)



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

