# API 서버 구현 및 테스트 연습

프로젝트 개요

회사에서 온라인 도서 서비스를 런칭한다고 하자. 아래 데이터 모델 설계와 API 설계를 활용하여 도서 서비스 API 서버를 구현하고 테스트 해보자!

- 데이터 모델 설계 - Book

|필드명|설명|데이터 타입|
|:---:|:---:|:---:|
|title|책의 제목 - 필요|문자열(String)|
|author|책의 저자 - 필요|문자열(String)|
|summary|책의 내용 요약|문자열(String)|
|genre|책의 장르|문자열(String)|
|release|책의 발매일 - 필요|문자열(String)|
|ISBN|책의 국제표준 도서정보 - 필요|숫자(Number)|


- 데이터 모델 설계 - User

|필드명|설명|데이터 타입|
|---|:---:|---|
|name|사용자 이름 - 필요|문자열(String)|
|age|사용자 나이 - 필요|숫자(Number)|
|email|사용자 연락처 - 필요|문자열(String)|
|books|해당 사용자의 도서 구매 목록 - 필요|배열(Array)|

* API 설계

|URL|	URL 설명|	HTTP 메서드|
|---|:---:|---|
|/api/books| 전체 도서 목록 조회| GET|
|/api/books/{id}| 특정 도서 조회| GET|
|/api/books| 새로운 도서 생성| POST|
|/api/books/{id}| 특정 도서 정보 변경| PUT|
|/api/books/{id}|	특정 도서 삭제|	DELETE|

  
