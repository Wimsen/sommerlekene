package no.sommerlekene.repository

import no.sommerlekene.repository.dao.GameDAO
import org.springframework.data.repository.CrudRepository

interface GameRepository : CrudRepository<GameDAO, Long>