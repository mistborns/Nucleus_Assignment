import java.util.*;
public class Multiplication{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a number to print its table: ");
        int num = sc.nextInt();
        
        for(int i = 1; i <= 10; i++){
            int result = num * i;
            System.out.println(num + " x " + i + " = " + result);
        }
        sc.close();
    }
}