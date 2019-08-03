package no.sommerlekene.controller

import no.sommerlekene.repository.user.UserDao
import no.sommerlekene.service.UserService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class UserController(
        private val userService: UserService
) {
    @GetMapping("/api/users")
    fun getAllUsers(): List<UserDao> {
        return userService.getAllUsers()
    }
}