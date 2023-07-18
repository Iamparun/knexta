//1
function getEvenSquares(numbers) {
    let result =[];
    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
      if (num % 2 == 0) {
        result.push(num**2);
      }
    }
    return result;
  }
  let inputNumber = [1,2,3,4,5,6,7,8];
  let outputNumber = getEvenSquares(inputNumber);
  console.log(outputNumber);
  //2
  function delayedPrint(message,delay) {
    setTimeout(() =>
    console.log(message),
    delay);
  }
  async function
  printmessageinorder(){
    await
    delayedPrint("hello",1000);
    await
     delayedPrint("this is",2000);
    await
     delayedPrint("asynchronous",3000);
    await 
     delayedPrint("programming",5000);
  }
  printmessageinorder();