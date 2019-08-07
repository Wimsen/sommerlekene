package no.sommerlekene.controller.dto

import no.sommerlekene.repository.dao.GameDAO
import no.sommerlekene.repository.dao.MatchDAO
import no.sommerlekene.repository.dao.TeamDAO

data class GameDetailDTO(
        val game: GameDAO,
        val upcomingMatches: List<MatchDAO>,
        val playedMatches: List<MatchDAO>,
        val standings: List<GameDetailRowDTO>
)

data class GameDetailRowDTO(
        val team: TeamDAO,
        val played: Int,
        val points: Int
)