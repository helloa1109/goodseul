<img src="https://capsule-render.vercel.app/api?type=Waving&color=gradient&height=200&section=header&text=GoodSeul&fontSize=90" />

# GoodSeul
<h3>대한민국의 독특한 문화인 ‘굿’에 대한 온/오프라인 플랫폼 제공<h3/>

<br/>

## Development Schedule
* 기간 : 2023.09.04 ~ 2023.11.04
* 인원 : 9명

# 프로젝트 문서
[구슬 프로젝트 보고(최종 완성본)_compressed.pdf](https://github.com/helloa1109/goodseul/files/13258833/_compressed.pdf)

# 피그마 프로토타입
![GoodSeulFigma](https://github.com/helloa1109/goodseul/assets/124419012/dd6bbaab-621c-4054-b9f3-879e81f8d46a)


## 기능

- **헤더**
    - `useRecoilState`와 `useRecoilValue`를 사용하여 상태를 전역으로 관리함으로써 컴포넌트 간의 상태 공유를 용이하게 했습니다.
    - `useEffect`를 사용하여 `pathname`이 변경될 때 마다 상태를 업데이트 하여 사용자가 특정 경로에 있을 때 헤더의 동작을 변경하였습니다.
    - `isMain` 상태를 기반으로 헤더의 UI를 동적으로 변경하였습니다.
        - 메인 페이지(`/`)에서는 로고와 햄버거 메뉴 버튼을 표시하고, 그 외 페이지에서는 뒤로 가기 버튼과 페이지 제목을 표시하도록 구현했습니다.
        - 조건부 렌더링을 통해 **불필요한 렌더링을 방지**하여 성능을 최적화하였으며, **UI의 일관성을 유지**하면서도 페이지별로 필요한 차이점을 반영했습니다.
        - **동적 UI 제공**: `isMain` 상태에 따라 메인 페이지와 서브 페이지에서 다른 헤더를 보여줌으로써 사용자 경험(UX)을 개선했습니다.
- **견적요청**
    - `React-calendar` 라이브러리를 활용하여 브랜드 이미지에 맞게 CSS를 커스터마이징
        - `moment` 라이브러리를 사용하여 날짜를 `YY-MM-DD` 형식으로 포맷팅하여 사용자에게 직관적인 정보를 제공합니다.
        - `React-calendar` 를 커스터마이징하여 불필요한 요소를 제거하여 사용성을 높였습니다.
    - `React-swiper` 라이브러리 사용 및 css 수정
        - `Swiper`를 사용하여 슬라이드 UI를 구현했습니다. `effect={'cards'}`와 `EffectCards` 모듈을 활용해 카드 형태의 슬라이드를 제공하며, 시각적으로 매력적인 UI를 구            성했습니다.
        - `useEffect`를 사용하여 컴포넌트가 마운트 될때 `ReviewListApi`를 호출하고, 응답 데이터를 `reviews` 상태에 저장합니다.
        - 비동기 데이터 fetching을 통해 서버로부터 리뷰 데이터를 가져와 동적으로 UI를 업데이트합니다.
        - 빈 문자열인 경우 해당 태그를 렌더링하지 않도록 조건부 렌더링을 사용했습니다.
    - 모달이 열릴 때 스크롤 막아 사용자가 모달 외부를 실수로 클릭하거나 스크롤 하는것을 방지합니다.
        - 모달이 닫힐 때 스크롤을 다시 활성화하여 사용자 경험을 개선하였습니다.
- **위치기반**
    - `useEffect`를 사용하여 컴포넌트가 처음 마운트될 때(`initialLoad` 상태가 `true`일 때) 기본 지역(`서울`)을 선택하고 해당 지역의 데이터를 불러옵니다. 이는 사용자가 페이        지에 접속했을 때 바로 데이터를 볼 수 있도록 하여 사용자 경험(UX)을 개선합니다.
    - `initialLoad` 상태를 사용하여 컴포넌트가 처음 마운트될 때만 초기 데이터를 불러오도록 설정했습니다. 이는 불필요한 API 호출을 방지하고 성능을 최적화합니다.
- **마이페이지**
    - 마이페이지 css
    - 현재 유저의 채팅 방 목록 출력
    - 클릭 한 채팅 방 연결
- **아이디찾기, 비밀번호찾기**
    - 사용자에게 인증 코드를 입력받고, 이를 `검증하는 기능`을 구현했습니다.
    - 4개의 입력 필드를 제공하여 사용자가 코드를 쉽게 입력할 수 있도록 설계했습니다.
    - 입력 필드 간 `자동 포커스 이동` 및 `백스페이스 키 처리`를 통해 사용자 경험(UX)을 개선했습니다.
    - 3분의 타이머를 구현하여 `인증 코드 입력 시간을 제한`하고, 시간 초과 시 사용자에게 알립니다.
    - `인증 코드 재전송 기능`을 제공하여 사용자가 코드를 다시 받을 수 있도록 했습니다.
    - Recoil을 사용하여 전역 상태를 관리하고, API를 통해 인증 코드를 재전송하는 로직을 구현했습니다.
    - 기본 페이지 디자인(css)
- **구슬님 상세정보 페이지**
    - 선택 한 구슬 상세정보 출력
    - 상담하기 클릭 시 해당 구슬님과 채팅방 생성
- **채팅**
    - 생성된 룸 ID로 채팅방 연결
    - 채팅방 입장 시 이전 대화목록 출력
    - 위로 스크롤 시 이전 대화내용 출력

구현화면

## 헤더
<div align="center"> 
     
![헤더](https://github.com/helloa1109/goodseul/assets/124419012/1e5cc7d8-a0bb-4e58-8503-d54b23f41ab0)

</div>

## 아이디찾기
![아이디찾기](https://github.com/helloa1109/goodseul/assets/124419012/08aaee40-6356-4374-8963-f0b42efdebfd)

## 비밀번호찾기
![비밀번호찾기](https://github.com/helloa1109/goodseul/assets/124419012/78b7d04b-2d3a-45fa-8615-3353ea0ddd88)

<div align="center"> 
     
![비밀번호찾기](https://github.com/helloa1109/goodseul/assets/124419012/c9472074-f07a-488a-b551-41b68afd2732)

</div>

## Technology used
### Front-End
<div>
  <img src="https://img.shields.io/badge/scss-1572B6?style=for-the-badge&logo=scss&logoColor=white"> 
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

