<?php
class Aircraft{

    public $maker;
    public $model;
    public $capacity;
    public $avrageSpeed;

    function __construct($maker,$model,$capacity,$avrageSpeed){
        $this->maker = $maker;
        $this->model = $model;
        $this->capacity = $capacity;
        $this->avrageSpeed = $avrageSpeed;
    }

}