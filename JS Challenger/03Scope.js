function either404(numbers) {
  for(let i=0; i<numbers.length; i++){
    if((numbers[i] ===0 && numbers[i+1] === 0)){
      return true;
    }

    if((numbers[i] === 4 && numbers[i+1] === 4)){
        return true;
    }
  }
  return false;
}

console.log(either404([2,8,4,4]))