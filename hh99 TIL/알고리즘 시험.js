
//이 문제에서 알고싶은것은?  받을 잔돈의 개수. 
//가장 거스름돈의 개수가 적게  잔돈을 준다...  
//900원 내면 100원 1개 반환  1000-900=100  pay-price=change 
//550원 내면 100원 4개 + 50월 1개  총 5개 

function solution(price){
  const price = 160; //가격
  let change = 1000-price; //잔돈 계산 방법. 

  //반복문으로 풀어야할것같다.  배열을 만들어서... 500원 짜리부터 돌면 최소의 잔돈 개수를 구할 수 있다. 
  // 잔돈종류(change) 의 배열은
  let coin = [500, 100, 50, 10];
  let changeMini = 0; //총 돌려받을 잔돈의 최소 개수.  원하는 값. 

  for(let i =0; i< coin.length; i++){
      changeMini += parseInt(change / coin[i]);
      change %= coin[i]; //그 동전종류로 거슬러 준만큼 빼기 .

  };
  console.log(changeMini); //총 받아야할 잔돈 동전 개수. 
  return changeMini;
}
let price1 = 160
console.log(solution(price1));