import java.util.Scanner;

import javax.print.attribute.standard.RequestingUserName;

public class EuclidGCD {
    static int gcd(int x,int y){
        if(y==0)
        return x;
    
    else
        return gcd(y,x%y);
    }
}
