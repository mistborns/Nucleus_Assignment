
public class Student{
    String name;
    int rollNumber;
    float marks;

    public Student(String name, int rollNumber, float marks){
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }

    public void display(){
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks: " + marks);
    }
}
