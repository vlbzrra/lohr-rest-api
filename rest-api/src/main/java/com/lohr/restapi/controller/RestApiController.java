/*
 * Copyright (c) 2021 VBSolutions. All rights reserved.
 *
 * It's content can not be copied and/or distributed
 * without the express permission
 */
package com.lohr.restapi.controller;

import com.lohr.restapi.model.RegModel;
import com.lohr.restapi.service.RegService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
/**
 * A Controller for Registrations
 *
 * @author Vinícius Bezerra
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("reg-list")
@RequiredArgsConstructor
public class RestApiController {
    private final RegService regService;

    /**
     * Get all API registrations
     *
     * @return
     *
     */
    @GetMapping("")
    public List<RegModel> getAllRegs(){
        return regService.getAllRegs();
    }

    /**
     * Get a single API register
     *
     * @param number
     * @return
     *
     */
    @GetMapping("{number}")
    public RegModel getSingleReg(@PathVariable String number){
        return regService.getSingleReg(number);
    }

    /**
     *Creates a new register in the API
     *
     * @param item
     * @return
     *
     */
    @PostMapping("")
    public RegModel createReg(@RequestBody RegModel item){
        return regService.createReg(item);
    }

    /**
     * Update a single API register
     *
     * @param number
     * @return
     *
     */
    @PutMapping("{number}")
    public RegModel updateReg(@PathVariable String number) { return regService.updateReg(number); }

    /**
     * Delete a single API register
     *
     * @param number
     * @return
     *
     */
    @DeleteMapping("{number}")
    public RegModel deleteReg(@PathVariable String number) { return regService.deleteReg(number); }
}