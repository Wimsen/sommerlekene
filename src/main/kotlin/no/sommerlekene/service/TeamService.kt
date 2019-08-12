package no.sommerlekene.service

import no.sommerlekene.configuration.toNullable
import no.sommerlekene.repository.TeamRepository
import no.sommerlekene.repository.dao.TeamDAO
import org.springframework.stereotype.Service

@Service
class TeamService(
        val teamRepository: TeamRepository
) {
    fun getAllTeams(): List<TeamDAO> {
        return teamRepository.findAll().toList()
    }

    fun findById(teamId: Long): TeamDAO? {
        return teamRepository.findById(teamId).toNullable()
    }
}