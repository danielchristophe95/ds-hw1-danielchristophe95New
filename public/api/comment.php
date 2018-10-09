<?php

require '../../app/common.php';

$id = intval($_GET['id'] ?? 0);

//FIX THIS!!!!!!!!!!!!!!!!??
if ($id < 1) {
  throw new Exception('Invalid ID');
}

$workArr = Work::getAllWork($id);

$json = json_encode($workArr, JSON_PRETTY_PRINT);

echo $json;
