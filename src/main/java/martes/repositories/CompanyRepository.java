package martes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import martes.domain.Company;

public interface CompanyRepository extends JpaRepository<Company, Long> {

}
