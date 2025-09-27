package org.example.backend.Service;

import org.example.backend.Form.Form;
import org.example.backend.Form.FormDTO;
import org.example.backend.Repository.Repository;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.Optional;

@org.springframework.stereotype.Service
public class Service {

    private final Repository repository;

    public Service(Repository repository) {
        this.repository = repository;
    }

    public ResponseEntity<?> insertForm(Form form) {
        Optional<Form> savedForm;

        try {
            savedForm = Optional.of(repository.save(form));
            return new ResponseEntity<>(new FormDTO(savedForm.get().getId(), savedForm.get().getName()), HttpStatus.OK);

        } catch (DataIntegrityViolationException e) {
            System.out.println("Form already exists. Error message: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } catch (DataAccessException e) {
            System.out.println("Failed to insert form. Error message: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    public ResponseEntity<?> updateForm(Optional<String> name, Optional<String> email, Optional<String> phoneNnumber, Optional. Integer id) {
//        Optional<Form> foundForm;
//        try {
//            foundForm = repository.findById(id);
//        } catch (Exception e) {
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//
//        if (foundForm.isEmpty()) {
//            System.out.println("User was not found");
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//
//        foundForm.get().setName(form.getName());
//
//        try {
//            repository.save(foundForm.get());
//            return new ResponseEntity<>(HttpStatus.OK);
//        } catch (DataAccessException e) {
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
}
