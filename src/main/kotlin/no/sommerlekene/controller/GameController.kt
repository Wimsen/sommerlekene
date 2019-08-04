package no.sommerlekene.controller

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
        matchService.createMatchesForSeriesGame(createdGame, allTeams.toMutableList())
        return ResponseEntity.ok(createdGame)
    }

    @GetMapping("/{id}")
    fun getGame(@PathVariable id: Long): ResponseEntity<GameDAO> {
        val game = gameService.getGameById(id)
        return if (game.isPresent) {
            println(game.get().matches)
            ResponseEntity.ok(game.get())
        } else {
            ResponseEntity.notFound().build()
        }
    }
}