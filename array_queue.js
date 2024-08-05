class Queue {
    //배열로 큐를 나타내려면 3개의 변수가 필요함.
    // 큐를 나타내는 빈 배열과, 각각 프론트와 리어의 위치를 나타내기 위한 인덱스 변수가 필요하다.
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        //enqueue를 구현하는 법. rear영역에 값을 넣고, rear인덱스의 값을 증가시키기만 하면 된다.
        this.queue[thisrear++] = value;
    }

    dequeue() {
        //front 인덱스에 해당하는 값을 반환하고 증가시킨다. 바로 반환하면 함수가 종료되기 때문에 임시로 변수에 값을 넣어두고 삭제한 다음, 인덱스값을 증가하고 반환하면 된다.
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }

    peek() {
        //peek함수는 큐의 가장 앞에 있는 값을 알아내는 함수다. front인덱스에 해당하는 값을 반환하면 된다. 
        return this.queue[this.front];
    }

    size() {
        //큐의 크기는 rear에 front인덱스를 빼는 것으로 구할 수 있다.
        return this.rear - this.front;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);

console.log(queue.dequeue()); //1

queue.enqueue(8);

console.log(queue.size()); //3
console.log(queue.peek()); //2
console.log(queue.dequeue()); //2
console.log(queue.dequeue()); //4