package org.example.backend.Repository;

import org.example.backend.Form.Form;
import org.springframework.data.jpa.repository.JpaRepository;

@org.springframework.stereotype.Repository
public interface Repository extends JpaRepository<Form,Integer> {
}
