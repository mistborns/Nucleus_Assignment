
import java.util.*;

class Areas{
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        System.out.println("Select shape: 1.Circle 2.Rectangle 3.Triangle");
        int x = sc.nextInt();

        
        if(x == 1){
            System.out.print("Enter radius: ");
            int radius = sc.nextInt();
            int area = (int)(3.14 * radius * radius);
            System.out.println("Area of circle: " + area);
        }else if(x == 2){
            System.out.print("Enter length: ");
            int length = sc.nextInt();
            System.out.print("Enter width: ");
            int width = sc.nextInt();
            int area = length * width;
            System.out.println("Area of rectangle: " + area);
        }else if(x == 3){
            System.out.print("Enter base: ");
            int base = sc.nextInt();
            System.out.print("Enter height: ");
            int height = sc.nextInt();
            int area = (base * height) / 2;
            System.out.println("Area of triangle: " + area);
        }else{
            System.out.println("Invalid choice");
        }
    }
}

