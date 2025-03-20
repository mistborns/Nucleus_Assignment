package com.example.hr_portal.service;

import com.example.hr_portal.model.HR;
import com.example.hr_portal.repository.HRRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class HRService {
    private final HRRepository hrRepository;

    public HRService(HRRepository hrRepository){
        this.hrRepository = hrRepository;
    }

    public boolean authenticateHR(String email, String password){
        Optional<HR> hr = hrRepository.findByEmail(email);
        return hr.map(h ->
                h.getPassword().equals(password)
        ).orElse(false);
    }

    public HR registerHR(HR hr){
        return hrRepository.save(hr);
    }

}