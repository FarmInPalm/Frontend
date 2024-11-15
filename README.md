# 🪴 스마트팜 농부들을 위한 모니터링 서비스 Farm In Palm 🪴

![Frame 1171275996](https://github.com/user-attachments/assets/fdf74b6a-d895-41e4-9efd-2dee597a925a)

-   _배포 client URL_

-   _배포 server URL : https://port-0-farminpalmserver-m1bow3hn7b1c4b46.sel4.cloudtype.app_

-   _시연 영상 : https://www.youtube.com/watch?v=5rZ4y66YYeI&feature=youtu.be_
   
-   _발표 자료 : https://drive.google.com/file/d/1N1jDdtGGcb6hE-s81Zvz4sK5HJJlgJfA/view_
<br>

## ✨ 프로젝트 소개

-   Farm In Palm은 스마트 농업을 운영하는 사람들을 위한 농장 모니터링 서비스입니다.

-   핵심적으로, 각 농장에 설치된 센서와 카메라로부터 실시간 데이터를 수집하여 손쉽게 관리할 수 있습니다.

-   기존 스마트 농업을 운영하는 농부와 새롭게 스마트 농업에 뛰어드려는 젊은 층에게 유익합니다.

<br>

## 🧑🏻‍💻 팀원 구성

<div align="center">

|                                                            **Design 김도연**                                                            |                                                            **FE 정서현**                                                             |                                                               **FE 박수민**                                                                |                                                                 **BE 김준형**                                                                  |                                                              **BE 오성식**                                                               |
| :-------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars.githubusercontent.com/u/187283797?v=4" height=150 width=150> <br/> @Doring119](https://github.com/Doring119) | [<img src="https://avatars.githubusercontent.com/u/75007741?v=4" height=150 width=150> <br/> @hyunaeri](https://github.com/hyunaeri) | [<img src="https://avatars.githubusercontent.com/u/65269430?v=4" height=150 width=150> <br/> @Moderator11](https://github.com/Moderator11) | [<img src="https://avatars.githubusercontent.com/u/80797496?v=4" height=150 width=150> <br/> @junhyung85920](https://github.com/junhyung85920) | [<img src="https://avatars.githubusercontent.com/u/80496872?v=4" height=150 width=150> <br/> @OreoFlavor](https://github.com/OreoFlavor) |

</div>

<br>

## 🔧 개발 환경

-   Front : React, Typescript

-   Back-end : Java, Spring boot, Spring Data JPA, Spring Security, MariaDB,

-   버전 및 이슈관리 : Github, Github Organization

-   협업 툴 : Discord, Notion

-   서비스 배포 환경 : Cloudtype

-   디자인 : [Figma](https://www.figma.com/design/RulZwY7fkeyYAGQYnc5aF7/GDG-2%ED%8C%80?node-id=0-1&m=dev&t=Z1PWu4YlAAtL93Gj-1)

<br>

## ✏️ 프론트엔드 기술스택

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white">
<img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white">
<img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white">
<img src="https://img.shields.io/badge/Axios-31785F?style=for-the-badge&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/Swiper-2d81c6?style=for-the-badge&logo=Swiper&logoColor=white">
<img src="https://img.shields.io/badge/Framer-d7da6b?style=for-the-badge&logo=Framer&logoColor=white">

<br>

## ✏️ 백엔드 기술스택
<img src="https://img.shields.io/badge/springboot-31785F?style=for-the-badge&logo=spring-boot&logoColor=black"> 
<img src="https://img.shields.io/badge/springsecurity-%d7da6b.svg?style=for-the-badge&logo=springsecurity&logoColor=white">
<img src="https://img.shields.io/badge/Java-FF4154?style=for-the-badge&logo=Java&logoColor=white">
<img src="https://img.shields.io/badge/mariadb%20Query-61DAFB?style=for-the-badge&logo=mariadb%20query&logoColor=white">

<br>

## ⚙️ 개발 주안점

### `Builder pattern`

service code를 작성할 때 code의 통일성과 setter의 단점을 보완하기 위해 builder pattern을 이용하였습니다.

### `Security`
사용자마다 재고, 모니터링, 이벤트 등을 관리함에 따라 로그인/회원가입 기능이 필요했습니다. 데이터 보안을 위해 각 요청에 대해 auth filter를 적용했습니다. 허용된 요청에 대해서만 데이터에 접근할 수 있도록 설정했습니다.

### `Custom exception handler`
서버에서 발생할 수 있는 예외에 대하여 custom format으로 구성하여 client에게 알려줍니다. project 전역에서 발생하는 에러를 catch하여 일관된 형식으로 쉽게 파악할 수 있습니다.

### `Crawling`
- 농민들을 위한 기사를 제공하기 위해 Jsoup 라이브러리를 이용하여 최근 기사들을 가져와 제공합니다.

### `Weather API`
- 외부 API를 사용하여 사용자의 위치와 요청 시간을 기반으로 실시간 날씨 정보를 받아오는 로직을 구현하였습니다.

### `Video streaming`
- 모니터링 기능에 각 농장의 실시간 현황을 제공하기 위함입니다. 실시간 video를 client에게 streaming하는 service를 구현했습니다.

### `History`
- 스케줄 기록, 조희, 수정, 삭제 등의 기능을 구현했습니다.

<br>

## 🔎 기획한 서비스 기능 - Pigma

### [메인화면]

-   현재 사용자 위치 기반 기상 정보와 농업 관련 소식을 제공합니다
    -   기상 정보, 이달의 농업 기술, 농업 관련 연구 모아보기
    -   로그인 하지 않은 사용자에게도 이용할 수 있는 화면입니다.

|![메인페이지](https://github.com/user-attachments/assets/e82ae3c0-04e4-43fd-8a7a-b0607af64836)|

<br>

### [뉴스 트렌드]

-   최신 동향의 뉴스 기사와 농사 꿀팁, 계절별 대비책 등을 제공합니다

|![트렌드](https://github.com/user-attachments/assets/c605a700-46bc-4673-bc10-98d2c98b6749)|

<br>

### [작물 모니터링]

-   등록된 스마트 농장들을 실시간으로 모니터링 할 수 있습니다.
    -   각 농장의 온, 습도 등의 정보와 실시간 영상을 제공합니다.
-   새로운 농장을 추가하거나 더 이상 필요없는 구역을 삭제할 수 있습니다.

| ![작물 모니터링](https://github.com/user-attachments/assets/67acb42d-7cd5-4b08-bd89-af32e34a0874) | ![작물 모니터링2](https://github.com/user-attachments/assets/a529276a-febb-459a-9a02-b439a4ca08f3) |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |

<br>

### [히스토리 - 이벤트]

-   여러 농작물을 일궈내는 과정에서 필요한 일정을 등록하여 관리할 수 있습니다.
    -   각 이벤트의 시작과 끝, 제목을 입력하여 생성하고, 수정, 삭제도 가능합니다.
-   등록된 이벤트는 캘린더에 표기되어 한눈에 보기 쉽습니다.

| ![히스토리 - 이벤트](https://github.com/user-attachments/assets/5afa7eb0-3734-4439-b954-4b7ff5ef66f0) | ![히스토리 - 이벤트2](https://github.com/user-attachments/assets/4a786fbd-4aca-4e45-b622-a01661d73ad7) |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |

<br>

### [히스토리 - 재고 관리]

-   농업 관련 도구 및 재료들을 등록하여 관리할 수 있습니다.
    -   각 품목마다 분류와 수량을 설정합니다.

| ![히스토리 - 재고관리](https://github.com/user-attachments/assets/eafa1538-0259-40fe-8c05-1373e344bcc0) | ![히스토리 - 재고관리2](https://github.com/user-attachments/assets/0892a873-b2ec-4783-8e78-81b7441aa587) |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |

<br>
