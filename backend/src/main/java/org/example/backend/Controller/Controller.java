package org.example.backend.Controller;

import org.example.backend.Form.Form;
import org.example.backend.Form.FormDTO;
import org.example.backend.Service.Service;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/forms")
public class Controller {

    private final Service service;
    public Controller(Service service) {
        this.service = service;
    }

    @PostMapping()
    public ResponseEntity<?> insertForm(@RequestBody Form form) {
        return service.insertForm(form);
    }

    @GetMapping()
    public ResponseEntity<List<FormDTO>> getAllForms() {
    return service.getAllForms();
    }

}
