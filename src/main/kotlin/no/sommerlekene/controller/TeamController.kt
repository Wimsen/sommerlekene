package no.sommerlekene.controller

import no.sommerlekene.controller.dto.TeamDetailDTO
import no.sommerlekene.service.TeamService
import no.sommerlekene.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/teams")
class TeamController(
        val teamService: TeamService,
        val userService: UserService
) {
    @GetMapping("/{teamId}")
    fun getTeamById(@PathVariable teamId: Long): ResponseEntity<TeamDetailDTO> {
        val optionalTeam = teamService.findById(teamId)

        optionalTeam?.let { team ->
            val members = userService.getByTeam(team)
            val teamDetailDTO = TeamDetailDTO(team, members)
            return ResponseEntity.ok(teamDetailDTO)
        }

        return ResponseEntity.notFound().build()
    }
}