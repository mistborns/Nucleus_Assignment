package com.example.hr_portal.service;


import com.example.hr_portal.model.Employee;
import com.example.hr_portal.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    public Employee saveEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

//    public Employee updateEmployee(Long id, Employee updatedEmployee){
//        return employeeRepository.findById(id).map(emp -> {
//            emp.setName(updatedEmployee.getName());
//            emp.setDepartment(updatedEmployee.getDepartment());
//            emp.setEmail(updatedEmployee.getEmail());
//            emp.setSalary(updatedEmployee.getSalary());
//            return employeeRepository.save(emp);
//        }) .orElseThrow(() -> new RuntimeException("Employee not found with ID: " + id));
//    }

    //does the same thing as the above function but easier to understand
    public Employee updateEmployee(Long id, Employee updatedEmployee) {
        Optional<Employee> optionalEmp = employeeRepository.findById(id);
        if (optionalEmp.isPresent()) {
            Employee emp = optionalEmp.get();

            // Update the employee details
            emp.setName(updatedEmployee.getName());
            emp.setDepartment(updatedEmployee.getDepartment());
            emp.setEmail(updatedEmployee.getEmail());
            emp.setSalary(updatedEmployee.getSalary());

            // Save and return the updated employee
            return employeeRepository.save(emp);
        } else {
            // If the employee does not exist, return null
            return null;
        }
    }

    public void  deleteEmployee(Long id){
        employeeRepository.deleteById(id);
    }


}