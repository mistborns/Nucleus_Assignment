import java.util.*;
public class Fibonacci {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int x = sc.nextInt();
        
        int a = 0, b = 1;
        
        System.out.print("First " + x + " Fibonacci numbers: ");
        
        for(int i = 1; i <= x; i++){
            System.out.print(a + " ");
            int next = a + b;
            a = b;
            b = next;
        }
    }
}