package martes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import martes.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
