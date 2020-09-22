// It is the same as min heap except that when comparing two elements
// we take into account its priority instead of the element's value.
export default class PriorityQueue {
  constructor() {
    this.data = [] ;
  }

  isEmpty() {
    return this.data.length === 0 ;
  }
// [[100,0],[10,1],[5,3]]
  add(item, priority = 0) {
    if(this.isEmpty()) this.data.push([item,priority]);
    else {
      const index = this.data.findIndex((elem)=>elem[1] > priority);
      if(index !== -1) this.data.splice(index,0,[item,priority]);
      else {
        this.data.push([item,priority]);
      }
    }
  }
  peek() {
    return this.data[0][0] ;
  }
  poll() {
    return this.data.shift()[0] ;
  }

  changePriority(item,priority) {
    const index = this.data.findIndex(elem=>elem[0] === item);
    if(index !== -1) {
      this.data.splice(index,1);
      this.add(item,priority);
    }
  }

  hasValue(value) {
    return this.data.findIndex(elem=>elem[0] ===value) !== -1 ;
  }

}
