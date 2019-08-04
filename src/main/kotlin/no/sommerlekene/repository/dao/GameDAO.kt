package no.sommerlekene.repository.dao

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIdentityInfo
import com.fasterxml.jackson.annotation.JsonIdentityReference
import com.fasterxml.jackson.annotation.ObjectIdGenerators
import java.time.LocalDateTime
import javax.persistence.*

@JsonIdentityInfo(property = "id", generator = ObjectIdGenerators.PropertyGenerator::class)
@Entity
@Table(name = "games")
class GameDAO(
        @Id @GeneratedValue(strategy= GenerationType.IDENTITY) var id: Long? = null,
        var created: LocalDateTime = LocalDateTime.now(),
        var title: String? = "",
        var type: String? = "",
        @OneToMany(mappedBy="game", fetch=FetchType.LAZY) val matches: Set<MatchDAO>? = emptySet()
)
