package no.sommerlekene.service

import no.sommerlekene.repository.dao.UserDAO
import no.sommerlekene.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(
        private val repository: UserRepository
) {
    fun getAllUsers(): List<UserDAO> {
        return repository.findAll().toList()
    }
}