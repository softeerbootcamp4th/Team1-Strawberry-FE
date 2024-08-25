
# 🍓 Team1-Strawberry-FE

<br>

## 프로젝트 소개

<img width="1178" alt="image" src="https://github.com/user-attachments/assets/f9ee768c-04ee-4506-8dd0-6c6f0a1095c2">


-   현대자동차그룹 소프티어 부트캠프 4기 프로젝트입니다.
-   기획, 디자인 팀원과 상의한 산출물을 기반으로 개발하며, 사용자 경험 향상을 위해 끊임없이 개선점을 찾아가며 완성도 높은 결과를 목표로 하고있습니다.

<br />
<br />

<img width="1171" alt="image" src="https://github.com/user-attachments/assets/16e2f9df-6b66-4900-9854-ce8dff8e8e66">

- 두 이벤트를 진행할 수 있는 신차 소개를 위한 페이지를 구현합니다.


<br>

## 프론트 팀원 구성

<div align="center">

| 김지성 | 마경미 |
| --- | --- |
| [<img src="https://avatars.githubusercontent.com/u/122510664?v=4" height=150 width=150> <br/> @JSK0406](https://github.com/JSK0406) | [<img src="https://avatars.githubusercontent.com/u/62610032?v=4" height=150 width=150> <br/> @akrudal](https://github.com/akrudal) |

</div>

<br>

## 프로젝트 구현 예정 기능

### 1. 랜딩 페이지

-   유저가 페이지에 처음 접속했을 때 볼 수 있는 페이지입니다.
-   신차에 대한 간략한 소개와 진행하는 이벤트의 설명을 확인할 수 있습니다.

### 2. 신차 소개 페이지

-   신차에 대한 상세한 설명을 볼 수 있는 페이지입니다.
-   각종 디자인 요소들과, 스크롤 이벤트, 캐러셀, 모달, 선택한 옵션의 차량 렌더링 등을 통해 사용자 경험 향상을 위합니다.

### 3. 선착순 퀴즈 이벤트 페이지

-   선착순으로 퀴즈를 맞추는 이벤트를 진행하는 페이지입니다.
-   소개 페이지와 진행 페이지로 나뉩니다.
-   이벤트 진행 페이지에서 퀴즈를 진행한 후 바로 결과를 확인할 수 있습니다.

### 4. 드로잉 이벤트 페이지

-   신차의 주요 특징을 드로잉 게임을 통해 고객에게 알릴 수 있는 페이지입니다.
-   소개 페이지, 진행 페이지, 결과 페이지로 나뉩니다.
-   소개 페이지에서 점수 랭킹과 자신의 점수를 확인할 수 있습니다.
-   Canvas API를 사용하여 3단계의 드로잉 게임을 구현할 예정입니다.
-   사용자는 게임 진행 후 결과를 확인하고 이를 링크 공유할 수 있습니다.

### 5. 기대평 페이지

-   신차에 대한 기대평을 작성할 수 있는 페이지입니다.
-   고객은 기대평을 작성하거나 타인의 댓글을 확인할 수 있습니다.
-   지정한 단어를 사용하면 경고창이 뜨는 비속어 필터 기능을 추가할 예정입니다.

<br>

<br>

## 개발 환경

-   Front : HTML, CSS, Javascript, React, styled-components, Context API
-   버전 및 이슈관리 : Github, Github Issues
-   협업 툴 : Notion
-   서비스 배포 환경 : AWS EC2

<br>


## 그라운드룰

1. 평일 12시 `데일리 스크럼`을 진행한다.
2. 월요일마다 `주간 개인 일정`을 작성하고 퇴근 전 매일 변경 사항을 기록한다.
3. Github Project 를 사용해 이슈들을 관리한다. 
4. 확인했다면 반드시 리액션과 이모지로 반응한다.
    - 컨펌이 필요한 부분은 @ 언급으로 대상을 명확히 한다.
5. 결정할 사안에 대해서는 팀원 모두 자신의 의견을 표명한다.
    - 의견이 좁혀지지 않을 시 다수결로 진행한다.
6. 대화할 때는 어떠한 경우가 있어도 욕, 비속어, 비난 표현은 하지 않는다.
7. 화가 날 것 같으면 용용체를 쓴다.
    - 혹시라도 다툼이 생길 경우 다음 날 다툰 팀원끼리 점심을 먹는다.
8. 쉬는 시간은 자유롭게 하고, 점심은 다 같이 먹는다.

<br>


## 협업 전략

- 백로그(task 관리)를 위해 github Issue 사용  
상세한 작업 내용 작성하기 위해 issue Template 사용   
![image](https://github.com/user-attachments/assets/03c63779-46ea-4f56-bb31-10148483d4aa)

<br />
<br />

- git convention  
commit은 세부 작업 단위로 나눠서 다음과 같이 `{convention}: {영어 내용} (#{관련 이슈 번호)` 작성  
  ![image](https://github.com/user-attachments/assets/9d45122e-e401-4249-af89-f312fad0c5d9)

<br />
<br />

- git branch  
`feature` 단위로 나눠 작업  
작업 후 PR → 리뷰 → 메인에 병합  
`feature/#{이슈번호}-내용` 네이밍 규칙  

<br />
<br />

- pull request  
작업 내용, 전달 사항 등을 자세하게 공유 → PR TEMPLATE 이용  
squash merge를 통해 커밋 내용 간략화  
하나의 이슈에 대해 여러 개의 commit → 하나의 PR → 하나의 커밋으로 메인에 머지  
<img width="850" alt="image" src="https://github.com/user-attachments/assets/6d36a7f5-f099-492d-9914-cdd5c4155fe4">

<br />
<br />
  
- review  
뱅크샐러드 리뷰 단계 적용  
P5는 의견 표현 ~ P1는 무조건 반영해야 함을 의미  
![image](https://github.com/user-attachments/assets/c85d4eb7-d00d-4dd6-b64a-752e5224f723)


<br />
<br />

## 프로젝트 폴더 구조

```
─ src
  ├─ App.tsx
  ├─ main.tsx
  ├─ core
  │  ├─ contexts
  │  ├─ design_system
  │  └─ utils
  ├─ layout
  │  ├─ DefaultLayout.tsx
  │  ├─ HeaderLayout.tsx
  │  └─ components
  ├─ pages
  │  ├─ common
  │  │  ├─ components
  │  │  ├─ contexts
  │  │  ├─ hooks
  │  │  └─ services
  │  ├─ drawing
  │  │  ├─ components
  │  │  ├─ contexts
  │  │  ├─ hooks
  │  │  └─ services
  │  ├─ expectation
  │  │  ├─ components
  │  │  ├─ contexts
  │  │  ├─ hooks
  │  │  └─ services
  │  ├─ introduce
  │  │  ├─ components
  │  │  ├─ contexts
  │  │  ├─ hooks
  │  │  └─ services
  │  ├─ login
  │  │  ├─ components
  │  │  ├─ contexts
  │  │  ├─ hooks
  │  │  └─ services
  │  ├─ newCar
  │  │  ├─ components
  │  │  ├─ contexts
  │  │  ├─ hooks
  │  │  └─ services
  │  └─ quiz
  │     ├─ components
  │     ├─ contexts
  │     ├─ hooks
  │     └─ services
  └─ router


```

<br />

## Dependencies
- html2canvas: HTML 요소를 캡처하여 스크린샷을 생성하는 라이브러리.
- prettier: 코드 포맷팅을 위한 도구.
- react: UI를 구축하기 위한 JavaScript 라이브러리.
- react-dom: React 애플리케이션을 브라우저 DOM에 렌더링하기 위한 라이브러리.
- react-query: 서버 상태를 관리하는 React 라이브러리.
- react-router-dom: React 애플리케이션에서 라우팅을 구현하기 위한 라이브러리.
- roughjs: 손으로 그린 스타일의 그래픽을 생성하는 라이브러리.
- styled-components: CSS를 JavaScript 안에서 직접 작성할 수 있는 라이브러리.
