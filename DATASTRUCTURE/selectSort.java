import java.nio.channels.SelectionKey;

class SelectionSort{
    static void swap(int[] a, int idx1, int idx2){
        int temp=a[idx1];
        a[idx1] = a[idx2];
        a[idx2] =temp;
    }
    static void selectionSort(int[]a ,int n){
        for(int i= 0; i<n -1; i++){
            int min =i;
            for(int j=i+1; j<n; j++){
                if(a[j]<a[min]){
                    min =j;
                }
            }
            swap(a,i,min);
        }
    }
    static void print(int[] a,int n){
        for(int i =0; i<n; i++){
            System.out.println("x[" + i+"]=" +a[i]);
        }
    }
}




public class selectSort {
    public static void main(String[] args){
        System.out.println("단순 선택 정렬");
        int nx=7;
        int[] x ={6,4,8,3,1,9,7};
        SelectionSort.print(x,nx);
        SelectionSort.selectionSort(x, nx);
        System.out.println("오름차순 정렬 완료");
        SelectionSort.print(x, nx);

    }
    
}
