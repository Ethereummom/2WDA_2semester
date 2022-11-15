public class WdbRecur {
   
    public static void main(String[]args){
        Recur practice = new Recur();
        practice.recur(4);
    }
}
class Recur{
    void recur(int n){
        if(n>0){
            recur(n-1);
            System.out.println(n);
            recur(n-2);
        }

    }

}
