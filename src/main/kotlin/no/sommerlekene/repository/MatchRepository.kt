package no.sommerlekene.repository

import no.sommerlekene.repository.dao.MatchDAO
import org.springframework.data.repository.CrudRepository

interface MatchRepository : CrudRepository<MatchDAO, Long>