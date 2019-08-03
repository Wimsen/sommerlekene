package no.sommerlekene.repository.user

import no.sommerlekene.repository.team.TeamDAO
import java.time.LocalDateTime
import javax.persistence.*


@Entity
@Table(name = "users")
class UserDao(
        @Id @GeneratedValue var id: Long? = null,
        var created: LocalDateTime = LocalDateTime.now(),
        var username: String = "",
        @ManyToOne @JoinColumn(name = "team_id") var team: TeamDAO? = null
)