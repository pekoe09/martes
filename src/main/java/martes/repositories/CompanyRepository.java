package martes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import martes.domain.Organization;

public interface CompanyRepository extends JpaRepository<Organization, Long> {

}
