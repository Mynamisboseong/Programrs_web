//Curcular Queue
//Front와 Rear가 이어져있는 Queue. 해당 코드는 Array(배열)로 구현되었다.
class Queue {
    //maxSize를 받아 Queue의 크기를 제한한다. rear나 front가 범위를 벗어 날 경우, 다시 큐로 돌아올 수 있도록 작성되었음
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.queue = [];
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }

    enqueue(value) {
        //enqueue에서는 rear가 증가되고 나서 최대크기로 나머지 연산을 해준다. 이러면 크기를 벗어 날 경우 다시 0부터 시작된다.
        if (this.isFull()) {
            console.log("Queue is full.");
            return;
        }
        this.queue[this.rear] = value;
        this.rear = (this.rear + 1) % this.maxSize;
        this.size += 1;
    }
    
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front = (this.front + 1) % this.maxSize;
        this.size -= 1;
        return value;
    }

    isFull() {
        //환영Queue가 꽉 찼는지 확인하는 함수도 필요하다. 이를 통해 무한정 enqueue되는 것을 막을 수 있다.
        return this.size === this.maxSize;
    }

    peek() {
        return this.queue[this.front];
    }

    //환영queue를 구현하는 것은 어려운 편은 아니다. 다만 자바스크립트에서 환영queue를 사용해야 하는 상황이 많지는 않기 때문에 꼭 외울 필요는 없다.
}