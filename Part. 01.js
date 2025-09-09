// HTML 에서 JS 파일 부르는 방법
<head>
  <script src="파일 이동경로"></script>  
</head>
// 이렇게 <head> 태그 안에 넣어주면 된다.

// 결과값이 그대로 나오는 방법
console.log("Hello World");
// 참고로 이렇게 입력해도 결과값이 반영된다.
console.log('Hello world!");

// 변수값을 지정하는 방법
let (변수이름) = "결과값";
let fruit = "grape";
// 결과값을 나오게 하는 방법
console.log(변수이름);
console.log(fruit);

// 결과값을 바꾸고 싶은 방법
fruit = "바꾸고 싶은 결과값";
fruit = "orange";

// 긴 문장을 변수 이름으로 사용해야 할 때
let theNameIsNotOver = "oh my god";
// 이렇게 앞에 대문자를 제외하고 단어마다 시작하는 첫번째 알파벳을 대문자로 적어주면 된다.

// 상수 = 절대 변하지 않는 값
// 상수는 절대 변하지 않는 값이기 때문에 다른 사람이 중간에 바꾸려고 해도, 처음 지정한 값이 그대로 사용이 된다. 만약에 바꾸려고 할 시, error 가 뜬다.
// 상수는 웬만하면 변하지 않기 때문에 변수 이름을 모두 대문자로 사용하는 것이 좋다.
// 상수는 'let' 을 사용하는 것이 아니라, 'const' 를 사용한다.

const BIRTH = "9-24";

