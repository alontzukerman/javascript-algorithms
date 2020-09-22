
export default class IsraeliQueue {
  constructor() {
    this.data = [] ;
  }
  enqueue(item , friend) {
    if(friend != null) {
      const index = this.data.indexOf(friend) ;
      if(index !== -1){
        this.data.splice(index,0,item) ;
      } else {
        this.data.unshift(item) ;
      }
    } else {
      this.data.unshift(item) ;
    }
  }
  dequeue() {
    return this.isEmpty() ? null : this.data.pop() ;
  }

  isEmpty() {
    return this.data.length === 0 ;
  }

  peek() {
    return this.isEmpty() ? null : this.data[this.data.length-1] ;
  }
  toString(cb = x=>x) {
    return this.data.map(cb).toString() ;
  }
}
