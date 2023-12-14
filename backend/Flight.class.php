<?php
class Flight{

    public $flightCode;
    public $leaveAirport;
    public $destination;
    public $departureTime;
    public $aircraft;

    function __construct($flightCode, $leaveAirport, $destination, $departureTime, $aircraft){
        $this->flightCode = $flightCode;
        $this->leaveAirport = $leaveAirport;
        $this->destination = $destination;
        $this->departureTime = $departureTime;
        $this->aircraft = $aircraft;
    }

    public function getDistance(){
        //dabuja delta no abām kordinātm
        $delta_lat = $this->leaveAirport->latitude - $this->destination->latitude ;
        $delta_lon = $this->leaveAirport->longitude - $this->destination->longitude ;
        //vajadzēs apreiķiniem
        $earth_radius = 6372.795477598;
        $alpha    = $delta_lat/2;
        $beta     = $delta_lon/2;
        //apreiķini
        $a        = sin(deg2rad($alpha)) * sin(deg2rad($alpha)) + cos(deg2rad($this->destination->latitude)) * cos(deg2rad($this->leaveAirport->latitude)) * sin(deg2rad($beta)) * sin(deg2rad($beta)) ;
        $c        = asin(min(1, sqrt($a)));
        $distance = 2*$earth_radius * $c;
        $distance = round($distance, 4);
        //return $distance;
        return $distance;
    }
    public function getDuration(){
        {
            // Pārbauda, vai vidējais ātrums ir lielāks par nulli
            if ($this->aircraft->avrageSpeed > 0) {
                // Aprēķina lidojuma ilgumu minūtēs un pieliek 30 min
                return round( (($this->getDistance() / $this->aircraft->avrageSpeed) * 60) + 30);
            } else {
                return "Error: Vidējais ātrums ir nepareizi norādīts!";
            }
        }
    }

    public function getLandingTime(){
        //dabu laika zonu no api un saglagā mainigaja
       $timezones = json_decode(file_get_contents("https://tu.proti.lv/timezones/?latitude=" .$this->destination->latitude ."&longitude=" .$this->destination->longitude),true)["timezones"][0];

       $departureDate = new DateTime('now');
       $departureDate->add(new DateInterval('PT' . $this->getDuration() . 'M'));
       $destinationTimeZone = new DateTimeZone($timezones);
       $departureDate->setTimezone($destinationTimeZone);


       return $departureDate;
    }

}

