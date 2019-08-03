package no.sommerlekene.repository.user

import org.springframework.data.repository.CrudRepository

interface UserRepository: CrudRepository<UserDao, Long>