20240319 - 20240404

### ajax 실습 웹사이트 
- https://jsonplaceholder.typicode.com/

### ajax 실습시 JSON Server 설치(가상 Rest Api)

- vscode 상단부 -> 터미널 -> 새 터미널
- 아래 $ 떼고 하나씩 터미널에 작성

```shell script
$ mkdir json-virtual-server
$ cd json-virtual-server
$ npm init -y
$ npm install json-server -D
```

- 여기까지 하면 json-virtual-server 폴더가 설치되는데

package.json - 자바의 build.gradle
node_modules - 자바의 라이브러리

- package.json에 아래 내용 추가
```json
"scripts": {
    "start": "json-server --watch db.json --port 5000"    
  },
```

- json-server-exam폴더로 가서 (cd json-virtual-server)
- `$ npm start`로 서버실행

—
