module.exports = function check(str, bracketsConfig) {
    let br2='';
    let result = [];
                       
    for (let i=0; i<str.length; i++) {
       for(let j=0;j<bracketsConfig.length;j++){
          if (str[i] == bracketsConfig[j][0] && result[result.length-1] !== str[i]) {
              result.push(str[i]);
              break;
      } else if (str[i] == bracketsConfig[j][1]) {
        const br = result.pop();
             
  
          if (br == bracketsConfig[j][0]){
              br2 = bracketsConfig[j][1];
              } else if (br == bracketsConfig[j][1]){
                  br2 = bracketsConfig[j][0];
              }
  
          if (br2 !== str[i]) { 
            
              return false; 
          }
          break;
        }
        
      }
    }
  
    
    return result.length == 0; 
}
