/*
 * Copyright (c) 2021 VBSolutions. All rights reserved.
 *
 * It's content can not be copied and/or distributed
 * without the express permission
 */
package com.lohr.restapi.client;

import com.lohr.restapi.model.RegModel;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;
/**
 * A JSON place holder client
 *
 * @author Vinícius Bezerra
 */
@FeignClient(
        value="JSONPlaceHolderClient",
        url="${json.place.holder.base.url}"
)
public interface JSONPlaceHolderClient {
    /**
     * JSON with the list of all registers
     *
     * @return
     *
     */
    @GetMapping("todos")
    List<RegModel> getAllRegs();

    /**
     * JSON with a single API register
     *
     * @param number
     * @return
     *
     */
    @GetMapping("todos/{number}")
    RegModel getSingleReg(@PathVariable String number);

    /**
     * Send a request to insert a new register
     *
     * @param item
     * @return
     *
     */
    @PostMapping("posts")
    RegModel createReg(@RequestBody RegModel item);

    /**
     * Send a request to update a register
     *
     * @param number
     * @return
     *
     */
    @PutMapping("posts/1")
    RegModel updateReg(@RequestBody String number);

    /**
     * Send a request to delete a register
     *
     * @param number
     * @return
     *
     */
    @DeleteMapping("posts/1")
    RegModel deleteReg(@RequestBody String number);
}
