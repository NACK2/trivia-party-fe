package com.nack2.trivia_party_server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@SpringBootApplication
public class TriviaPartyServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(TriviaPartyServerApplication.class, args);
	}

	@GetMapping()
	public String getHelloWorld() {
		return "Hello World";
	}
}
