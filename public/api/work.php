<?php

require '../../app/common.php';

$id = intval($_GET['id'] ?? 0);

if ($id < 1) {
  throw new Exception('Invalid IDD');
}

$workArr = Work::getAllWork($id);

$json = json_encode($workArr);

echo $json;
//go to db to get work associated with ID
// convert to JSON
//print
