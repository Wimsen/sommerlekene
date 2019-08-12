package no.sommerlekene.controller.dto

import no.sommerlekene.repository.dao.TeamDAO
import no.sommerlekene.repository.dao.UserDAO

data class TeamDetailDTO (
        val team: TeamDAO,
        val members: List<UserDAO>
)