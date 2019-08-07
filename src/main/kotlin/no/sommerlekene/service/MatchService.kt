package no.sommerlekene.service

import no.sommerlekene.repository.MatchRepository
import no.sommerlekene.repository.dao.GameDAO
import no.sommerlekene.repository.dao.MatchDAO
import no.sommerlekene.repository.dao.TeamDAO
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import kotlin.math.ceil

@Service
class MatchService(
        val matchRepository: MatchRepository
) {
    fun getAllMatches(): List<MatchDAO> {
        return matchRepository.findAll().toList()
    }

    fun getMatchesByGame(game: GameDAO): List<MatchDAO> {
        return matchRepository.getMatchesByGame(game).toList()
    }

    fun createMatchesForSeriesGame(game: GameDAO, teams: MutableList<TeamDAO>) {
        val matches = arrayListOf<MatchDAO>()

        fun addMatch(game: GameDAO, homeTeam: TeamDAO, awayTeam: TeamDAO) {
            matches.add(MatchDAO(null, LocalDateTime.now(), game, homeTeam, awayTeam, null))
        }


        if (teams.size % 2 != 0) {
            teams.add(TeamDAO(null, LocalDateTime.now(), "Dummy"))
        }

        val numRounds = teams.size - 1
        val firstTeam = teams.removeAt(0)

        for (round in 0 until numRounds) {
            println("Round $round")

            addMatch(game, firstTeam, teams[round])

            val endIndex = ceil(teams.size / 2.0).toInt()
            for (idx in 1 until endIndex) {
                val homeTeamIndex = (round + idx) % teams.size
                val awayTeamIndex = (round + teams.size - idx) % teams.size

                val homeTeam = teams.get(homeTeamIndex)
                val awayTeam = teams.get(awayTeamIndex)

                if (homeTeam.name!! != "Dummy" && awayTeam.name!! != "Dummy") addMatch(game, homeTeam, awayTeam)
            }
        }

        matchRepository.saveAll(matches)
    }

}