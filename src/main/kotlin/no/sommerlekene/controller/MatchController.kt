package no.sommerlekene.controller

import no.sommerlekene.repository.dao.MatchDAO
import no.sommerlekene.service.MatchService
import no.sommerlekene.service.TeamService
import org.springframework.http.ResponseCookie
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/matches")
class MatchController(
        val matchService: MatchService,
        val teamService: TeamService
) {

    @GetMapping("/{id}")
    fun getMatch(@PathVariable id: Long): ResponseEntity<MatchDAO> {
        val optionalMatch = matchService.getMatchById(id)
        optionalMatch?.let { match ->
            return ResponseEntity.ok(match)
        }
        return ResponseEntity.notFound().build()
    }

    @PostMapping("/{matchId}")
    fun postWinner(@PathVariable matchId: Long, @RequestBody winnerId: Long): ResponseEntity<ResponseStatus> {
        val optionalMatch = matchService.getMatchById(matchId)

        optionalMatch?.let { match ->
            val optionalWinnerTeam = teamService.findById(winnerId)

            optionalWinnerTeam?.let { winnerTeam ->
                if (match.awayTeam == winnerTeam || match.homeTeam == winnerTeam) {

                    match.winner = winnerTeam
                    matchService.updateMatch(match)

                    return ResponseEntity.ok().build()
                }
            }
        }

        return ResponseEntity.badRequest().build()
    }
}