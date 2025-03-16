
class Parent {
    
    void show() {
        System.out.println("Parent: No parameters");
    }

    void show(String message) {
        System.out.println("Parent: " + message);//overloading
    }
}


class Child extends Parent {
    
    @Override
    void show() {
        System.out.println("Child: Overridden method");//overriding
    }
}

public class Polymorphism {
    public static void main(String[] args) {
        Parent p = new Parent();
        p.show(); 
        p.show("Hello!");  

        Child c = new Child();
        c.show();  

        Parent pc = new Child();  
        pc.show();  
    }
}
