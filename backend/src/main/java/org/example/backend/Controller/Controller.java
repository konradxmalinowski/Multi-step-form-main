package org.example.backend.Controller;

import org.example.backend.Form.Form;
import org.example.backend.Service.Service;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/form")
public class Controller {

    private final Service service;
    public Controller(Service service) {
        this.service = service;
    }

    @PostMapping()
    public ResponseEntity<?> insertForm(@RequestBody Form form) {
        return service.insertForm(form);
    }

}
