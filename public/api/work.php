<?php

require '../../app/common.php';

$tableid = intval($_GET['tableid'] ?? 0);

if ($tableid < 1) {
  throw new Exception('Invalid ID');
}

$workArr = Work::getAllWork($tableid);

$json = json_encode($workArr);

echo $json;
//go to db to get work associated with ID
// convert to JSON
//print
