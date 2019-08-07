package no.sommerlekene.service

import no.sommerlekene.configuration.toNullable
import no.sommerlekene.repository.GameRepository
import no.sommerlekene.repository.dao.GameDAO
import org.springframework.stereotype.Service

@Service
class GameService(
        val gameRepository: GameRepository
) {

    fun getAllGames(): List<GameDAO> {
        return gameRepository.findAll().toList()
    }

    fun getGameById(id: Long): GameDAO? {
        return gameRepository.findById(id).toNullable()
    }

    fun createGame(gameDAO: GameDAO): GameDAO {
        return gameRepository.save(gameDAO)
    }

}