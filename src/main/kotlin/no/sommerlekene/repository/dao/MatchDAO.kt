package no.sommerlekene.repository.dao

import com.fasterxml.jackson.annotation.JsonIdentityInfo
import com.fasterxml.jackson.annotation.JsonManagedReference
import com.fasterxml.jackson.annotation.ObjectIdGenerators
import java.time.LocalDateTime
import javax.persistence.*

@JsonIdentityInfo(property = "id", generator = ObjectIdGenerators.PropertyGenerator::class)
@Entity
@Table(name = "matches")
class MatchDAO(
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var id: Long? = null,
        var created: LocalDateTime = LocalDateTime.now(),
        @ManyToOne @JoinColumn(name = "game_id") var game: GameDAO? = null,
        @ManyToOne @JoinColumn(name = "team1_id") var homeTeam: TeamDAO? = null,
        @ManyToOne @JoinColumn(name = "team2_id") var awayTeam: TeamDAO? = null,
        @ManyToOne @JoinColumn(name = "winner_id") var winner: TeamDAO? = null,
        var stage: Int? = 0
)