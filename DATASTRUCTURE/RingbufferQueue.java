import java.util.Scanner;
import java.util.random.*;

class RingbufferQueue{
    private int[] que;
    private int capacity;
    private int front;
    private int rear;
    private int num;
       // --- 실행시 예외: 큐가 비어있음 ---//
    public class EmptyIntQueueException extends RuntimeException {
    public EmptyIntQueueException() {
    }
 }

 // --- 실행시 예외: 큐가 가득 참 ---//
    public class OverflowIntQueueException extends RuntimeException {
    public OverflowIntQueueException() {
    }
 }

    public RingbufferQueue(int maxlen){
        num = front = rear = 0;
        capacity = maxlen;
        try{
            que = new int[capacity];

        }catch(OutOfMemoryError e){
            capacity = 0;
        }

    }
    public int enque(int x) throws OverflowIntQueueException{
        if (num>=capacity){
            throw new OverflowIntQueueException();
        }
        que[rear++] = x;
        num++;
        if(rear == capacity)
            rear = 0;
        return x;
    }
    public int deque() throws EmptyIntQueueException{
        if (num<=0){
            throw new EmptyIntQueueException();
        }
        int x = que[front++];
        num--;
        if(front == capacity)
            front = 0;
        return x;
    }

    public static void main(String []args){
        Scanner in = new Scanner(System.in);
        


    }


}