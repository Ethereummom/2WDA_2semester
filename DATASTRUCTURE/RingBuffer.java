import java.util.Random;
public class RingBuffer {
  
private int[] que;
private int capacity;
private static int front;
private static int rear;
private static int num;
   
public RingBuffer (int maxlen) {
      num = front = rear = 0;
      capacity = maxlen;
      try {
         que = new int[capacity];
      }catch (OutOfMemoryError e) {
         capacity = 0;
      }
   }
   public class OverflowIntQueueException extends RuntimeException{
    public void OverflowIntQueueException() {}
 }


   public class EmptyIntQueueException extends RuntimeException{
      public void EmptyQueueException() {}
   }
   
   public int enque(int x) throws OverflowIntQueueException  {
      if (num >= capacity)
         throw new OverflowIntQueueException();
         que[rear++] = x;
         num++;
         if (rear == capacity)
            rear = 0;
         return x;
   }
   public int deque() throws EmptyIntQueueException {
      if (num <= 0)
         throw new EmptyIntQueueException();
      int x = que[front++];
      num--;
      if (front == capacity)
         front = 0;
      return x;
   }
   public static void main(String[] args) {
      
      int[] a = new int[100];
      Random rand = new Random();
      boolean trueorfalse = false;
      RingBuffer queue = new RingBuffer(20);
      
      
      for(int i =0; i < a.length; i++) {
         a[i] = rand.nextInt(100);
         if (trueorfalse == true) {   
            for(int j = 20; j > 0; j--) {
               System.out.println(queue.deque() + " deque front = " + front + ", rear = " + rear + ", num = " + num);
            }
            System.out.println("empty 발생");
            System.out.println();
            trueorfalse = false;
            i--;
         }else {
            queue.enque(a[i]);
            System.out.println("[" + (i+1) + "] 데이터: " + a[i] + "  inque front = " + front + ", rear = " + rear + ", num = " + num);
            }
            if(queue.num >= 20) {
               System.out.println("full 발생");
               System.out.println();
               trueorfalse = true;
            }
         }
      }
   }