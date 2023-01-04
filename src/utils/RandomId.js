export const randomId=()=>{
  
  const str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let value=''
  for(let i=0; i<10;i++){
    let random=Math.floor(Math.random()*str.length)
    value+=str[random]
    
  }
  return value
}

export const useNameAvailable=()=>{
  return Math.random() < 0.5;
}