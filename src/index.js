module.exports = function check(str, bracketsConfig) {
  let strArr = str.split('');
  let isThereAre = true;
  while(isThereAre){
    outer: for(let i = 0; i < strArr.length; i++){
      for(let j = 0; j < bracketsConfig.length; j++){
        if(i === strArr.length - 1){
          isThereAre = false;
          break outer
        } else if(strArr[i] === bracketsConfig[j][0] && strArr[i + 1] === bracketsConfig[j][1]){
          strArr.splice(i, 2);
          if(strArr.length === 0){
            isThereAre = false;
          }
          break outer
        }
      }
    }
  }
  return strArr.length === 0 ? true : false
}