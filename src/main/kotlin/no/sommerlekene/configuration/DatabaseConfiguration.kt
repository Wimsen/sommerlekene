package no.sommerlekene.configuration

import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import java.net.URI
import javax.sql.DataSource

@Configuration
class DatabaseConfig {
    @Bean
    fun dataSource(): DataSource {
        val dbUri = URI(System.getenv("DATABASE_URL"))
        val username = dbUri.userInfo.split(":")[0]
        val password = dbUri.userInfo.split(":")[1]
        val dbUrl = "jdbc:postgresql://" + dbUri.host + ':'.toString() + dbUri.port + dbUri.path + "?sslmode=require"

        val config = HikariConfig()
        config.jdbcUrl = dbUrl
        config.username = username
        config.password = password

        return HikariDataSource(config)
    }
}