package no.sommerlekene.controller

import com.fasterxml.jackson.annotation.JsonProperty
import no.sommerlekene.controller.dto.GameDetailDTO
import no.sommerlekene.controller.dto.GameDetailRowDTO
import no.sommerlekene.repository.dao.GameDAO
import no.sommerlekene.service.GameService
import no.sommerlekene.service.MatchService
import no.sommerlekene.service.TeamService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping("/api/games")
class GameController(
        private val gameService: GameService,
        private val matchService: MatchService,
        private val teamService: TeamService
) {
    @GetMapping
    fun getAllGames(): ResponseEntity<List<GameDAO>> {
        return ResponseEntity.ok(gameService.getAllGames())
    }

    @PostMapping
    fun createGame(@Valid @RequestBody gameDAO: GameDAO): ResponseEntity<GameDAO> {
        val createdGame = gameService.createGame(gameDAO)
        val allTeams = teamService.getAllTeams()
        when (createdGame.type) {
            GameType.SERIES -> matchService.createMatchesForSeriesGame(createdGame, allTeams.toMutableList())
            GameType.PLAYOFF -> matchService.createMatchesForEndplayGame(createdGame, allTeams.toMutableList())
            else -> return ResponseEntity.badRequest().build()
        }

        return ResponseEntity.ok(createdGame)
    }

    @GetMapping("/{id}")
    fun getGame(@PathVariable id: Long): ResponseEntity<GameDetailDTO> {
        val optionalGame = gameService.getGameById(id)

        optionalGame?.let { game ->
            val matches = matchService.getMatchesByGame(game).sortedBy { it.id }
            val upcomingMatches = matches.filter { match -> match.winner == null }
            val playedMatches = matches.filter { match -> match.winner != null }

            val teams = teamService.getAllTeams()
            val standings: MutableList<GameDetailRowDTO> = ArrayList()

            for (team in teams) {
                val matchesPlayed = playedMatches.count { matchDAO -> matchDAO.homeTeam == team || matchDAO.awayTeam == team }
                val matchesWon = playedMatches.count { matchDAO -> matchDAO.winner == team }
                standings.add(GameDetailRowDTO(team, matchesPlayed, matchesWon))
            }

            return ResponseEntity.ok(GameDetailDTO(game, upcomingMatches, playedMatches, standings))
        }

        return ResponseEntity.notFound().build()
    }
}

enum class GameType(val type: String) {
    @JsonProperty("Serie")
    SERIES("Serie"),

    @JsonProperty("Utslag")
    PLAYOFF("Utslag"),

    @JsonProperty("")
    EMPTY("")
}