package no.sommerlekene.service

import no.sommerlekene.repository.user.UserDao
import no.sommerlekene.repository.user.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(
        private val repository: UserRepository
) {
    fun getAllUsers(): List<UserDao> {
        return repository.findAll().toList()
    }
}