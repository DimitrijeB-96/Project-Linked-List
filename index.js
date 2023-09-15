class LinkedList {
  constructor() {
    this.listHead = null;
  }

  append(value) {
    if (this.listHead === null) {
      this.prepend(value);
    } else {
      let temp = this.listHead;

      while(temp.nextNode) {
        temp = temp.nextNode;
      }

      temp.nextNode = new Node(value);
    }
  }

  prepend(value) {
    this.listHead = new Node(value, this.listHead);
  }

  size() {
    let listSize = 0;
    let temp = this.listHead;
    
    while (temp !== null) {
      listSize += 1;

      temp = temp.nextNode;
    }

    return listSize;
  }

  head() {
    return this.listHead.value;
  }

  tail() {
    let temp = this.listHead
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }

    return temp.value;
  }

  at(index) {
    let temp = this.listHead;

    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;

      if (temp === null) {
        return 'No element at this index.';
      }
    }

    return temp.value;
  }

  pop() {
    let current = this.listHead;
    let prev = null;

    while(current.nextNode !== null) {
      prev = current;
      current = current.nextNode;
    }
    prev.nextNode = null;
  }

  contains(value) {
    let temp = this.listHead;
    
    while (temp !== null) {
      if (temp.value === value) {
        return true;
      }
      temp = temp.nextNode;
    }

    return false;
  }

  find(value) {
    let temp = this.listHead;
    let index = 0;

    if (temp.nextNode === null) {
      return index;
    } else {
      while (temp !== null) {
        if (temp.value === value) {
          return index;
        }

        temp = temp.nextNode;
        index += 1;
      }
      return null;
    }
  }

  toString() {
    let temp = this.listHead;

    let printList = '';

    while (temp) {
      printList += `${temp.value} -> `;

      temp = temp.nextNode;
    }

    temp === null ? printList += 'null' : printList;

    return printList;
  }

  insertAt(value, index) {
    if (this.listHead === null) {
      this.prepend(value);
    } else {
      let current = this.listHead;
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.nextNode;
        if (current === null) {
          break;
        }
      }
      const temp = new Node(value);
      prev.nextNode = temp;
      temp.nextNode = current;
    }
  }

  removeAt(index) {
    if (this.listHead === null) {
      return 'List is empty';
    }

    let current = this.listHead;
    let prev = null;
    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.nextNode;
      if (current === null) {
        return 'There is no element at this index';
      }
    }
    prev.nextNode = current.nextNode;
  }

}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const printList = new LinkedList();

