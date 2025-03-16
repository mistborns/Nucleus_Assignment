
class GraduateStudent extends Student {
    String researchTopic;

    public GraduateStudent(String name, int rollNumber, float marks, String researchTopic) {
        super(name, rollNumber, marks);  
        this.researchTopic = researchTopic;
    }

    @Override
    public void display() {
        super.display();  
        System.out.println("Research Topic: " + researchTopic);
    }
}

