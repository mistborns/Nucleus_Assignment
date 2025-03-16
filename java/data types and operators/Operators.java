import java.util.Scanner;

public class Operators {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Input numbers
        System.out.print("Enter first number: ");
        int num1 = sc.nextInt();

        System.out.print("Enter second number: ");
        int num2 = sc.nextInt();

        // Demonstrating Arithmetic Operators
        System.out.println("\nArithmetic Operators:");
        System.out.println("Addition: " + (num1 + num2));
        System.out.println("Subtraction: " + (num1 - num2));
        System.out.println("Multiplication: " + (num1 * num2));
        System.out.println("Division: " + (num1 / num2));
        System.out.println("Modulus (Remainder): " + (num1 % num2));

        // Demonstrating Relational Operators
        System.out.println("\nRelational Operators:");
        System.out.println(num1 + " is equal to " + num2 + ": " + (num1 == num2));
        System.out.println(num1 + " is not equal to " + num2 + ": " + (num1 != num2));
        System.out.println(num1 + " is greater than " + num2 + ": " + (num1 > num2));
        System.out.println(num1 + " is less than " + num2 + ": " + (num1 < num2));
        System.out.println(num1 + " is greater than or equal to " + num2 + ": " + (num1 >= num2));
        System.out.println(num1 + " is less than or equal to " + num2 + ": " + (num1 <= num2));

        // Demonstrating Logical Operators
        System.out.println("\nLogical Operators:");
        boolean andcondition = num1 > 0 && num2 > 0;
        boolean orcondition = num1 < 0 || num2 < 0;
        boolean notcondition = !(num1 == num2);

        System.out.println("Both numbers are positive: " + andcondition);
        System.out.println("At least one number is negative: " + orcondition);
        System.out.println("Numbers are not equal: " + notcondition);

        sc.close();
        
    }
}
