import java.util.Comparator;

class Node<E>{
    E data;
   
    Node<E> next;
    public Node(E data, Node<E> next){
        this.data = data;
        this.next = next;
    }
}

class LinkedList<E>{
    Node<E> head;
    Node<E> current;

    public LinkedList(){
        head = current = null;
    }
    public void addFirst(E obj){
        //데이터를활용해 노드객체 생성
        Node<E> ptrNew = new Node(obj,null);
        //노드객체의 다음 노드객체의 위치를 현재 head값으로 설정
        ptrNew.next =head;
        //새로운 노드를 heda로 설정한다
        head = ptrNew;
    
    }
    public void dump(){
        current = head;
        Student datavalue = (Student)current.data
        
        while(current!=null){
            System.out.println("현재 객체: "+current);
            System.out.println("다음 객체: "+current.next);
            System.out.println("현재 데이터: "+current.data.toString(Student(hakbun,name,mobile)));
         
           

            current=current.next;

        }
    }
    public E search(E obj, Comparator<? super E>c){
        current = head;
        while(current!=null){
            //current의 데이터와 매개변수로 온 obj와 비교
            if(c.compare(obj, current.data)==0){
                return current.data;
            }
            current = current.next;
        }
        return null;

    }
    public void addLast(E obj){
        if(head==null)
            addFirst(obj);
        else{
            Node<E> current = head;
            while(current.next != null)
                current =current.next;
            current.next = current = new Node<E>(obj,null);
        }
    }
    public void removeFirst(){
        if(head != null)
            head =current =head.next;

    }

    public void removeLast(){
        if(head != null){
            if(head.next == null){
                
        }

    }
    
    }
}
class Student{

    int hakbun;
    String name;
    String mobile;



    public Student(int hakbun, String name, String mobile){
        this.hakbun=hakbun;
        this.name=name;
        this.mobile=mobile;

        
    }
}
class StringCompareator implements Comparator<String>{
    public int compare(String o1, String o2){
        int result = o1.compareTo(o2);
        return result;
    }
}

public class Wdb2{
    public static void main(String []args) {
        LinkedList<Student>jjc= new LinkedList();

        Student sanghee = new Student(2101134, "심상희", "01029637243");
        Student jongchan = new Student(2101198, "전종찬","01034234212");
        Student hwangju =new Student(1820103, "조황주", "01029234212");

        jjc.addFirst((sanghee));
        jjc.addFirst((jongchan));
        jjc.addFirst((hwangju));
       

        jjc.dump();
        StringCompareator compare = new StringCompareator();
        //String result =  jjc.search("b", compare);
        //String result =  jjc.search("messi", new Comparator<String>() {public int compare(String o1, String o2){
            //익명(무명)클래스는 유지보수의 관점에서 한번만 쓰고 버리는게 이득일 경우에 클래스를 한번 쓸 용도로 메인메서드 안에 정의하여 쓰고 버린다.
           // int result = o1.compareTo(o2);
            //return result;
       // }
        //});
        //System.out.println("검색 결과: " +result);
       

        //jjc.dump();
    }
}