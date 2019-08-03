package no.sommerlekene.configuration

import com.zaxxer.hikari.*
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.*
import java.net.URI
import javax.sql.DataSource

@Configuration
class DatabaseConfig {
    @Bean
    fun dataSource(): DataSource {
        val databaseUrl = System.getenv("DATABASE_URL")

        val dbUri: URI
        try {
            dbUri = URI(databaseUrl)
        } catch (exception: Exception) {
            throw exception
        }

        val dbUrl = ("jdbc:postgresql://" + dbUri.host + ':'
                + dbUri.port + dbUri.path)
        val username = dbUri.userInfo.split(":")[0]
        val password = dbUri.userInfo.split(":")[1]


        val config = HikariConfig()
        config.jdbcUrl = dbUrl
        config.username = username
        config.password = password
        return HikariDataSource(config)
    }
}