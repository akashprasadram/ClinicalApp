package com.akash.clinical.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akash.clinical.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Integer> {

}
