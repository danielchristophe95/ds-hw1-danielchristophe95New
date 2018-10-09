<?php

require '../../app/common.php';

if ($SERVER['REQUEST_METHOD'] == 'POST') {
  require 'workPost.php';
  exit;
}

$workArr = Work::getAllWork($id);

$json = json_encode($workArr, JSON_PRETTY_PRINT);

echo $json;
