package no.sommerlekene.repository.dao

import no.sommerlekene.controller.GameType
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "games")
data class GameDAO(
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var id: Long? = null,
        var created: LocalDateTime = LocalDateTime.now(),
        var title: String? = "",
        var type: GameType? = GameType.EMPTY
)
