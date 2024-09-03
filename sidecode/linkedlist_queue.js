class Node {

    // Node클래스는 일반적인 연결 클래스를 다룰때와 크게 다르지 않습니다. 
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    //마찬가지로 Queue의 생성부분도 크게 다르지 않습니다.
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(newValue) {
        //마찬가지로 enqueue도 연결리스트의 업핸드(?) 함수와 크게 다르지 않다
        const newNode = new Node(newValue);
        if (this.head === null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size += 1;
    }

    dequeue() {
        //스택을 연결리스트로 구현했을 때 팝 하는 구현과 동일하다.
        const value = this.head.value;
        this.head = this.head.next;
        this.size -= 1;
        return value;
    }

    peek() {
        //head의 값을 그대로 반환하면 된다.
        return this.head.value;
    }
}