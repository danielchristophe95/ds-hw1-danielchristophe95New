<?php

require '../../app/common.php';

$comment = Comment::fetchAll();

$json = json_encode($comment, JSON_PRETTY_PRINT);

header('Content-Type: application/json')
echo $json;
