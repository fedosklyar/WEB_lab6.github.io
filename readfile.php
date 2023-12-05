<?php
    if (file_exists("File.txt"))
    {
        readfile("File.txt");
    }
    else
    {
        header('HTTP/1.0 404 not found');
    }
?>