package no.sommerlekene.controller

import no.sommerlekene.repository.dao.UserDAO
import no.sommerlekene.service.UserService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api/users")
class UserController(
        private val userService: UserService
) {
    @GetMapping()
    fun getAllUsers(): List<UserDAO> {
        return userService.getAllUsers()
    }

}