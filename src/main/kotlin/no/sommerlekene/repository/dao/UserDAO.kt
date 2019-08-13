package no.sommerlekene.repository.dao

import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "users")
data class UserDAO(
        @Id @GeneratedValue(strategy= GenerationType.IDENTITY) var id: Long? = null,
        var created: LocalDateTime = LocalDateTime.now(),
        var username: String = "",
        @ManyToOne @JoinColumn(name = "team_id") var team: TeamDAO? = null
)