//Interfaces support multiple inheritance, but abstract classes don’t.
interface Animal {
    void makeSound(); 
}

class Cat implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
}

public class interfacesMain {
    public static void main(String[] args) {
        Cat cat = new Cat();
        cat.makeSound(); 
    }
}
