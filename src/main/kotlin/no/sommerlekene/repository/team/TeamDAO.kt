package no.sommerlekene.repository.team

import java.time.LocalDateTime
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "teams")
class TeamDAO(
        @Id @GeneratedValue var id: Long? = null,
        var created: LocalDateTime = LocalDateTime.now(),
        var name: String? = ""
)