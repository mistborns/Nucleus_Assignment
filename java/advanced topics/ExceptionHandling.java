import java.util.*;
public class ExceptionHandling{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        try{
            System.out.print("Enter a number: ");
            int num = sc.nextInt();
            int result = 10 / num;
            System.out.println("Result: " + result);
        }catch(ArithmeticException e){
            System.out.println("Cannot divide by zero");
        }catch(Exception e){
            System.out.println("Invalid input");
        } finally{
            sc.close();
        }
    }
}