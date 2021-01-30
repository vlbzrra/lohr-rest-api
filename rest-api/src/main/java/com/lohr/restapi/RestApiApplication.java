/*
 * Copyright (c) 2021 VBSolutions. All rights reserved.
 *
 * It's content can not be copied and/or distributed
 * without the express permission
 */
package com.lohr.restapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class RestApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestApiApplication.class, args);
	}

}
