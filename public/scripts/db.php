<?php

$mysql = new mysqli("localhost", "root", "1234", "reallife");
if($mysql->connect_errno){
    echo "Не удалось подключиться к MySQL: (" . $mysql->connect_errno . ") " . $mysql->connect_error;
}

/**
 * Created by PhpStorm.
 * User: zair
 * Date: 13.07.18
 * Time: 22:03
 */