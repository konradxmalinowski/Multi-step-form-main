package org.example.backend.Service;

import org.example.backend.Form.Form;
import org.example.backend.Form.FormDTO;
import org.example.backend.Repository.Repository;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
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

    public ResponseEntity<List<FormDTO>> getAllForms() {
        List<FormDTO> forms;

        try {
            forms = repository.findAll().stream().map(form -> new FormDTO(form.getId(), form.getName())).toList();

            if (forms.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(forms, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("Failed to get forms. Error message: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
