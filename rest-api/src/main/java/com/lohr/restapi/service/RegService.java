/*
 * Copyright (c) 2021 VBSolutions. All rights reserved.
 *
 * It's content can not be copied and/or distributed
 * without the express permission
 */
package com.lohr.restapi.service;

import com.lohr.restapi.client.JSONPlaceHolderClient;
import com.lohr.restapi.model.RegModel;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
/**
 * Service for Registrations
 *
 * @author Vinícius Bezerra
 */
@Slf4j
@Service
public class RegService {
    @Autowired
    public JSONPlaceHolderClient jsonPlaceHolderClient;
    public List<RegModel> getAllRegs(){
        log.info(">> Fetching all reg items");
        return jsonPlaceHolderClient.getAllRegs();
    }
    public RegModel getSingleReg(String number){
        log.info(">> Fetching reg item {}", number);
        return jsonPlaceHolderClient.getSingleReg(number);
    }
    public RegModel createReg(RegModel item){
        log.info(">> Creating reg item {}", item);
        return jsonPlaceHolderClient.createReg(item);
    }

    public RegModel updateReg(String number){
        log.info(">> Updating reg item {}", number);
        return jsonPlaceHolderClient.updateReg(number);
    }

    public RegModel deleteReg(String number){
        log.info(">> Deleting reg item {}", number);
        return jsonPlaceHolderClient.deleteReg(number);
    }
}
