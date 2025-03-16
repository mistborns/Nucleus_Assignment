//An abstract class can have both abstract and concrete methods, while an interface (before Java 8) only had abstract methods.
abstract class Animal {
    abstract void makeSound(); 

    void sleep() {  
        System.out.println("Sleeping...");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Bark!");
    }
}

public class abstractMain {
    public static void main(String[] args) {
        Dog doggy = new Dog();
        doggy.makeSound();
        doggy.sleep();     
    }
}
