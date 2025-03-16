class Task extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + " - Count: " + i);
            try {
                Thread.sleep(500); // Pause for 500ms
            } catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
        }
    }
}

public class Multithreading {
    public static void main(String[] args) {
        Task task1 = new Task();
        Task task2 = new Task();
        
        task1.start();
        task2.start();
    }
}
