public class insertSort {
    public static void main(String[] args){


        int[] a={7,10,5,9,14,1,4,8,22};
        int temp = 0;

        for (int i = 0; i < args.length-1; i++) {
            
            for (int j = 0; j < args.length; j++) {
                if (a[j+1]<a[j]){
                    temp=a[j+1];
                    a[j+1]=a[j];
                    a[j]=temp;
                } 
            }
        }
        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);
        }


    }
    
}
