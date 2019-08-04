package no.sommerlekene.repository

import no.sommerlekene.repository.dao.TeamDAO
import org.springframework.data.repository.CrudRepository

interface TeamRepository : CrudRepository<TeamDAO, Long>