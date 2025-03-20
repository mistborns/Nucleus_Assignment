package com.example.hr_portal.controller;

import com.example.hr_portal.model.HR;
import com.example.hr_portal.service.HRService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/hr")
public class HRController {

    private final HRService hrService;

    public HRController(HRService hrService){
        this.hrService = hrService;
    }

    @PostMapping("/login")
    public String login(@RequestParam String email , @RequestParam String password){
        boolean loginCheck =  hrService.authenticateHR(email, password);
        return loginCheck ? "Login Successful" : "Invalid Credentials";
    }

    @PostMapping("/register")
    public HR registerHR(@RequestBody HR hr) {
        return hrService.registerHR(hr);
    }
}
