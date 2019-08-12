package no.sommerlekene.repository

import no.sommerlekene.repository.dao.GameDAO
import no.sommerlekene.repository.dao.MatchDAO
import no.sommerlekene.repository.dao.TeamDAO
import no.sommerlekene.repository.dao.UserDAO
import org.apache.catalina.User
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.query.Param

interface UserRepository: CrudRepository<UserDAO, Long> {

    @Query("select u from UserDAO u where u.team = :team")
    fun findUsersByTeam(@Param("team") team: TeamDAO): List<UserDAO>
}
