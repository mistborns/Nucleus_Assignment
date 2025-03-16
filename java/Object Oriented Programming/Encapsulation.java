//Encapsulation in Java is a concept where the details of an object's data are hidden from the outside world. It is achieved by making the fields (variables) private and providing public methods (getters and setters) to access and modify those fields.
// private var name cannot be directly accessed
// getters and setters are made so that accessed can be controlled 
// this helps in maintaining data integrity and binds the variable and methods to the class.

class Person {
    private String name;  

    //setter
    public void setName(String name) {
        this.name = name;
    }

    //getter
    public String getName() {
        return name;
    }
}

public class Encapsulation {
    public static void main(String[] args) {
        Person p = new Person();
        p.setName("BATMAN");
        System.out.println("Name: " + p.getName());
    }
}
