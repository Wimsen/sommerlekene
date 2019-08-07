package no.sommerlekene.repository.dao

import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "teams")
class TeamDAO(
        @Id @GeneratedValue(strategy= GenerationType.IDENTITY) var id: Long? = null,
        var created: LocalDateTime = LocalDateTime.now(),
        var name: String? = ""
)