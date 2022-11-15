public class isprime {

    private static void method01(){
        int n;    
    int count = 0;
    boolean isPrime;
    for(int i = 0; i<999; i++){
        n = i+2;
        isPrime = true;

        for(int j = 0; j < n-2; j++){
            count++;
            if(n % (j+2) == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            System.out.print(n + ",");
        }
    }
    System.out.println("\n나눗셈횟수는" + count);

    }
    private static void method02(){
        int n;
        int count = 0;
        boolean isPrime;
        for (int i = 3; i < 1000; i=i+2) {
            isPrime = true;
            for (int j = 0; j < i-2; j++) {
                count++;
                if(i%(j+2) ==0 ){
                    isPrime = false;
                    break;
                }
                
            }
            if(isPrime){
                System.out.println(i + ", ");
            }
        }
    }

    private static void method03(){
        int n;
        int count = 0;
        int i,j;
        boolean isPrime;
        int[] prime = new int[500]; //소수를 저장할 배열
        int counter;  //저장된 소수의 개수
        int ptr = 0;
        //System.out.println(2 + ", ");
        //초기에 2를 소수 배열에 넣음
        prime[ptr++] = 2;
        


        for (i = 3; i < 1000; i=i+2) {
            isPrime = true;
            for (j = 0; j < ptr; j++) {
                count++;
                if(i%(prime[j]) ==0 ){
                    isPrime = false;
                    break;
                }
                
            }
            if (isPrime){
                prime[ptr++] = i;
            }
            
        }

        for (i = 0; i < ptr; i++) {
            System.out.print(prime[i] + ", ");
            
        }
        System.out.print("\n나눗셈 횟수는 " + count);

    }
    public static void main(String[] args){

        method01();
        //method02();
        method03();
        
       
        

    }

    
}
