package no.sommerlekene.configuration

import com.zaxxer.hikari.*
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.*
import javax.sql.DataSource

@Configuration
class DatabaseConfig {

    @Value("\${spring.datasource.url}")
    private val dbUrl: String? = null

    @Value("\${spring.datasource.username}")
    private val username: String? = null

    @Value("\${spring.datasource.password}")
    private val password: String? = null

    @Bean
    fun dataSource(): DataSource {
        val config = HikariConfig()
        config.jdbcUrl = dbUrl
        config.username = username
        config.password = password
        return HikariDataSource(config)
    }
}