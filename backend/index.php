<?php
//include classes no citiem failiem
include "Aircraft.class.php";
include "Airport.class.php";
include "Flight.class.php";



//Piemers
$aircraft = new Aircraft("Airbus", "A220-300", 120, 850);
$destination = new Airport("RIX", 56.924, 23.971);
$startplaceeIguess = new Airport("RIX", 56.121, 23.743);
$flight = new Flight("SA503", $startplaceeIguess, $destination, new DateTime, $aircraft);

//output
echo "Distance: " .$flight->getDistance();
echo "<br>";
echo "Duration: " .$flight->getDuration();
echo "<br>";
echo "Landing time: ";
var_export($flight->getLandingTime());
