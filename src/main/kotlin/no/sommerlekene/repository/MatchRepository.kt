package no.sommerlekene.repository

import no.sommerlekene.repository.dao.GameDAO
import no.sommerlekene.repository.dao.MatchDAO
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.query.Param

interface MatchRepository : CrudRepository<MatchDAO, Long> {
    @Query("select m from MatchDAO m where m.game = :game")
    fun getMatchesByGame(@Param("game") game: GameDAO): List<MatchDAO>

    @Query("select m from MatchDAO m where m.game = :game and m.stage = :stage")
    fun getMatchesByGameAndStage(@Param("game") game: GameDAO, @Param("stage") stage: Int): List<MatchDAO>
}