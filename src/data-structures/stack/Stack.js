export default class Stack {
  constructor() {
    this.data = [] ;
    this.index = 0 ;
  }
  isEmpty() {
    return this.index === 0 ;
  }
  peek() {
    return this.index > 0 ? this.data[this.index-1] : null ;
  }
  push(value) {
    if(this.isEmpty())
      this.data[this.index++] = value ;
    else {
      this.data[this.index] = this.data[this.index-1];
      this.data[this.index++] = value ;
    }
  }
  pop() {
    if(this.isEmpty()){
      return null ;
    }
    let newArr = this.data ;
    for(let i=1 ; i<this.index-1 ; i++){
      this.data[i-1] = newArr[i] ;
    } 
    return newArr[0] ;
  }
  toArray() {
    return this.data ;
  }
  toString(cb = x=>x) {
    let str = '';
    for(let i=0 ; i < this.index ; i++){
      str+=cb(this.data[i]);
      if(this.index-1 !== i)
        str+= ',' ; 
    }
    return str ;
  }
}
