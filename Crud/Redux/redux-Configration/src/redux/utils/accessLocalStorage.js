export const saveData = (key,value)=>{
   localStorage.setItem(key,JSON.stringify(value))
}
export const loadData = (key)=>{
   let value =JSON.parse(localStorage.getItem(key));
  return value;
}