import java.util.Comparator;
import java.util.Scanner;


class LinkedList<E>{
    Node<E> head;
    Node<E> current;
    class Node<E>{
        private E data;
        private Node<E> next;
        public Node(int hakbun,String name,String mobile,Node<E> next){
            this.data = (E)new Student(hakbun,name,mobile);
            this.next = next;
        }
    }

    public LinkedList(){
        head = current = null;
    }
    public void addFirst(int hakbun, String name, String mobile){
        //데이터를활용해 노드객체 생성
        Node<E> ptrNew = new Node<E>(hakbun, name, mobile,null);
        //노드객체의 다음 노드객체의 위치를 현재 head값으로 설정
        ptrNew.next =head;
        //새로운 노드를 heda로 설정한다
        head = ptrNew;
    
    }
    public void dump(){
        current = head;
        
        while(current!=null){
            System.out.println(current.data.toString());
            current=current.next;

        }
    }
    public E search(int num, E obj, Comparator<? super E> c) {
        Node<E> current = head;
        while(current != null) {
           if (num == 1) {
              if (c.compare(obj, (E) ((Student) current.data).getHakbun()) == 0) {
                 return (E) current.data.toString();
              }
           } else if (num == 2) {
              if (c.compare(obj, (E) ((Student) current.data).getName()) == 0) {
                 return (E) current.data.toString();
              }
           } else {
              if (c.compare(obj, (E) ((Student) current.data).getMobile()) == 0) {
                 return (E) current.data.toString();
              }
           }
           current = current.next;
        }
        return null;
     }
  
    public void addLast(int hakbun, String name, String mobile){
        if(head==null)
            addFirst(hakbun,name,mobile);
        else{
            Node<E> current = head;
            while(current.next != null)
                current =current.next;
            current.next = current = new Node<E>(hakbun,name,mobile,null);
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
    @Override
    public String toString(){
        return "학번: " + this.hakbun + "  이름: " +this.name + "  전화번호: "+ this.mobile;
    }
    public String getHakbun() {
        return Integer.toString(this.hakbun);
     }
     public String getName() {
        return this.name;
     }
     public String getMobile() {
        return this.mobile;
     }
  
}
class hakbunComparator implements Comparator<String> {
    @Override
    public int compare(String o1, String o2) {
       int result = o1.compareTo(o2);
       return result;
    }
 }
 class nameComparator implements Comparator<String> {
    @Override
    public int compare(String o1, String o2) {
       int result = o1.compareTo(o2);
       return result;
    }
 }
 class mobileComparator implements Comparator<String> {
 
    @Override
    public int compare(String o1, String o2) {
       int result = o1.compareTo(o2);
       return result;
    }
 }
 
//class StringCompareator implements Comparator<String>{
    //public int compare(String o1, String o2){
    //    int result = o1.compareTo(o2);
   //     return result;
 //   }
//}

public class Wdb2{
    public static void main(String []args) {
        LinkedList<String>ssh= new LinkedList<String>();
        Scanner in = new Scanner(System.in);

        hakbunComparator compareH = new hakbunComparator();
        nameComparator compareN = new nameComparator();
        mobileComparator compareM = new mobileComparator();


        //Student sanghee = new Student(2101134, "심상희", "01029637243");
        //Student jongchan = new Student(2101198, "전종찬","01034234212");
        //Student hwangju =new Student(1820103, "조황주", "01029234212");

        ssh.addFirst(2102313,"심상희","010-2963-7243");
        ssh.addFirst(2123121,"jongchan","010-1234-5678");
        ssh.addFirst(1951231,"김정은","010-4567-2342");
       

        ssh.dump();
        int a=0;
        String b = "";
        while (true) {
           System.out.println("어떤 것으로 찾아볼까요?");
           System.out.println("press 1 = 학번으로찾기 press 2 = 이름으로찾기 press 3 = 전화번호로찾기");
           a = in.nextInt();
           if (a >= 1 && a <= 3)
              break;
        }
        while (true) {
           System.out.println("정보를 입력하세요(학번,이름,전화번호 중 1)");
           b = in.next();
           break;
        }
        String result;
        if (a == 1) {
           result = ssh.search(a, b, compareH);
        } else if (a == 2) {
           result = ssh.search(a, b, compareN);
        } else {
           result = ssh.search(a, b, compareM);
        }
        System.out.println(result);
     }
}
        //String result =  jjc.search("b", compare);
        //String result =  jjc.search("messi", new Comparator<String>() {public int compare(String o1, String o2){
            //익명(무명)클래스는 유지보수의 관점에서 한번만 쓰고 버리는게 이득일 경우에 클래스를 한번 쓸 용도로 메인메서드 안에 정의하여 쓰고 버린다.
           // int result = o1.compareTo(o2);
            //return result;
       // }
        //});
        //System.out.println("검색 결과: " +result);
       

        //jjc.dump();
    
