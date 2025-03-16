import java.util.*;
public class Average{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the size of the array: ");
        int size = sc.nextInt();

        float sum = 0;
        int arr[] = new int[size];

        System.out.println("Enter the elements:");
        for(int i = 0 ; i < size ; i++){
            arr[i] = sc.nextInt();
            sum += arr[i];
        }

        System.out.println("Your average is: " + sum/size);
        sc.close();
    }
    
}