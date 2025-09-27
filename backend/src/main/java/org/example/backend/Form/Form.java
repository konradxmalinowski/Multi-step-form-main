package org.example.backend.Form;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Entity(name = "form")
@Table(name = "form")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Form implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false, unique = true, name = "id")
    @Id
    private Integer id;

    @Column(nullable = false, name = "name", columnDefinition = "varchar(50)")
    private String name;

    @Column(nullable = false, name = "email", columnDefinition = "varchar(70)", unique = true)
    private String email;

    @Column(nullable = false, name = "phone_number", columnDefinition = "varchar(20)", unique = true)
    private String phoneNumber;

    @Column(nullable = false, name = "plan", columnDefinition = "varchar(10)")
    private String plan;

    @Column(nullable = false, name = "plan_type", columnDefinition = "varchar(10)")
    private String planType;

    @Column(nullable = false, name = "is_online_service", columnDefinition = "boolean default false")
    private boolean isOnlineService;

    @Column(nullable = false, name = "is_larger_storage", columnDefinition = "boolean default false")
    private boolean isLargerStorage;

    @Column(nullable = false, name = "is_customizable_profile", columnDefinition = "boolean default false")
    private boolean isCustomizableProfile;
}
