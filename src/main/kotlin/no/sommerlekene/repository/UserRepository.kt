package no.sommerlekene.repository

import no.sommerlekene.repository.dao.UserDAO
import org.springframework.data.repository.CrudRepository

interface UserRepository: CrudRepository<UserDAO, Long>