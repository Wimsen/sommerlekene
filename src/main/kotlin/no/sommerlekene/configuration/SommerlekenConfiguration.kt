package no.sommerlekene.configuration

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.filter.CommonsRequestLoggingFilter
import java.util.*
import kotlin.math.ln

@Configuration
class SommerlekenConfiguration {
    @Bean
    fun logFilter(): CommonsRequestLoggingFilter {
        val filter = CommonsRequestLoggingFilter()
        filter.setIncludeQueryString(true)
        filter.setIncludePayload(true)
        filter.setMaxPayloadLength(10000)
        filter.setIncludeHeaders(true)
        filter.setAfterMessagePrefix("REQUEST DATA: ")
        return filter
    }
}

fun <T : Any> Optional<T>.toNullable(): T? = this.orElse(null)
