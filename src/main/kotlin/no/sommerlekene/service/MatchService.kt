package no.sommerlekene.service

import no.sommerlekene.configuration.toNullable
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

    fun getMatchById(matchId: Long): MatchDAO? {
        return matchRepository.findById(matchId).toNullable()
    }

    fun updateMatch(match: MatchDAO) {
        matchRepository.save(match)
    }

    fun getMatchesByGameAndStage(game: GameDAO, stage: Int): List<MatchDAO> {
        return matchRepository.getMatchesByGameAndStage(game, stage)
    }

    fun createNextEndplayStageIfNeeded(game: GameDAO, stage: Int) {
        // Only do something for stages before finales
        if (stage > 3) {
            val matches = getMatchesByGameAndStage(game, stage)

            // Create next stage if all current stage matches are finished
            if (matches.filter { it.winner == null }.none()) {
                val firstWinner = matches[0].winner!!
                val firstLoser = listOf(matches[0].homeTeam, matches[0].awayTeam).find { teamDAO -> teamDAO != matches[0].winner }

                val secondWinner = matches[1].winner!!
                val secondLoser = listOf(matches[1].homeTeam, matches[1].awayTeam).find { teamDAO -> teamDAO != matches[1].winner }

                val finale = MatchDAO(game = game, homeTeam = firstWinner, awayTeam = secondWinner, stage = stage / 2)
                val bronzeFinale = MatchDAO(game = game, homeTeam = firstLoser, awayTeam = secondLoser, stage = stage / 2 + 1)

                matchRepository.saveAll(listOf(finale, bronzeFinale))
            }
        }
    }

    fun createMatchesForEndplayGame(game: GameDAO, teams: MutableList<TeamDAO>) {
        //    TODO now were assuming 4 teams

        teams.shuffle()
        val firstMatch = MatchDAO(game = game, homeTeam = teams[0], awayTeam = teams[1], stage = 4)
        val secondMatch = MatchDAO(game = game, homeTeam = teams[2], awayTeam = teams[3], stage = 4)

        matchRepository.saveAll(listOf(firstMatch, secondMatch))

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