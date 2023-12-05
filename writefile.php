<?php
  $myfile = fopen($_POST["objectName"], "w");
  fwrite($myfile, $_POST["objectContent"]);
  fclose($myfile);
?>