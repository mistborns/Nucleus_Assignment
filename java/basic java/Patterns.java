import java.util.*;
public class Patterns{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter the number of rows:");
        int num = sc.nextInt();
        
        System.out.print("What do you wanna print? 1)Triangle or 2)Square :");
        int choice = sc.nextInt();
        
        if(choice == 1){
            //triangle
            for(int i = 1; i <= num; i++){
                for(int j = 1; j <= i; j++){
                    System.out.print("* ");
                }
                System.out.println();
            }
        }else if(choice == 2){

            // square
            for(int i = 1; i <= num; i++){
                for(int j = 1; j <= num; j++){
                    System.out.print("* ");
                }
                System.out.println();
            }
        }else{
            System.out.println("Invalid");
        }
    }
}