package no.sommerlekene.service

import no.sommerlekene.repository.GameRepository
import no.sommerlekene.repository.dao.GameDAO
import org.springframework.stereotype.Service
import java.util.*

@Service
class GameService(
        val gameRepository: GameRepository
) {

    fun getAllGames(): List<GameDAO> {
        return gameRepository.findAll().toList()
    }

    fun getGameById(id: Long): Optional<GameDAO> {
        return gameRepository.findById(id)
    }

    fun createGame(gameDAO: GameDAO): GameDAO {
        return gameRepository.save(gameDAO)
    }

}