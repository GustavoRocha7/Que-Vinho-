import React from "react";
import { Image } from "native-base";
import detail from "../../img/img/detail.png";

export function DetailBackground() {
    return <Image source={detail} alt="detail of home" position="absolute"  bottom="0" right="0"/>
}