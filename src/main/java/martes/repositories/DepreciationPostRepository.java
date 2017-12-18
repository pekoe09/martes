package martes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import martes.domain.DepreciationPost;

public interface DepreciationPostRepository extends JpaRepository<DepreciationPost, Long> {

}
