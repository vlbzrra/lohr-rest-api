/*
 * Copyright (c) 2021 VBSolutions. All rights reserved.
 *
 * It's content can not be copied and/or distributed
 * without the express permission
 */
package com.lohr.restapi.model;

import lombok.Data;
/**
 * A Model for Registrations
 *
 * @author Vinícius Bezerra
 */
@Data
public class RegModel {
    private String userId;
    private String id;
    private String title;
    private boolean completed;
}
