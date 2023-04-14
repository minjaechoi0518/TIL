// (단,  OX문의 결과는 0보다 크고 80보다 작은 문자열이 주어진다. 또한 문자열은 O와 X만으로 이루어져 있다.)
// str 은 0 와 x 로 이루어진 문자열. 
//연속되고 반복되는 값을 구하는 프로그램이기 때문에 반복문..for문 
//0= 1 이고,  00 =  1+2 , 000 = 1+2+3 , 0000 = 1+2+3+4 .....
// 0이 계속되면 누적해서 더해주다가.. x나오면 다시 초기화가 된다.

function solution(str){
  let zero=0; //0의 개수를 저장하기 위해 변수 zero 의 초기값을 0으로 선언
  let zeroSum = 0; // zero를 누적할 이름 저장해주고 초기값 0.
  for(let i =0; i < str.length; i++){// 문자열 str의 각각 문자가 뭔지 확인하려면 반복문으로 돌린다.
    str[i] === "O" ? zero ++ : zero = 0; //반복을 하다가 str 배열의 변수가 "0" 이면 ? zero 변수를 1씩 증가시켜주고. 
                                         //: 그렇지않으면 (x가 나왔을 경우) zero 변수를 0으로 초기화 해준다. 
    zeroSum += zero; // 그 zero 값들을 zeroSum에 누적해준다. 
  } 
  return zeroSum;
  
};
let str="OXOOOXXXOXOOXOOOOOXO";
console.log(solution(str));
