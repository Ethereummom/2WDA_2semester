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
        current =head;

        while(current!=null){
            System.out.println("현재 객체: "+current);
            System.out.println("다음 객체: "+current.next);
            System.out.println("현재 데이터: "+current.data);
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
class StringCompareator implements Comparator<String>{
    public int compare(String o1, String o2){
        int result = o1.compareTo(o2);
        return result;
    }
}

public class Wdb2{
    public static void main(String []args) {
        LinkedList<String>jjc= new LinkedList();

        jjc.addFirst("a");
        jjc.addFirst("b");
        jjc.addFirst("c");
        jjc.addLast("messi");

        jjc.dump();
        StringCompareator compare = new StringCompareator();
        //String result =  jjc.search("b", compare);
        String result =  jjc.search("messi", new Comparator<String>() {public int compare(String o1, String o2){
            //익명(무명)클래스는 유지보수의 관점에서 한번만 쓰고 버리는게 이득일 경우에 클래스를 한번 쓸 용도로 메인메서드 안에 정의하여 쓰고 버린다.
            int result = o1.compareTo(o2);
            return result;
        }
        });
        System.out.println("검색 결과: " +result);
       

        //jjc.dump();
    }
}