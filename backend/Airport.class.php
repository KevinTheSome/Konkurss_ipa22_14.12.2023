<?php
class Airport{

    public $IATAcode;
    public $latitude;
    public $longitude;

    function __construct($IATAcode, $latitude, $longitude){
        $this->IATAcode = $IATAcode;
        $this->latitude = $latitude;
        $this->longitude = $longitude;
    }
}