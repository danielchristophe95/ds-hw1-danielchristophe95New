<?php

require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'commentPost.php';
  exit;
}

$id = intval($_GET['id'] ?? 0);

// if ($id < 1) {
//   throw new Exception('Invalid ID');
// }

$workArr = Comment::fetchAll($id);

$json = json_encode($workArr, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
