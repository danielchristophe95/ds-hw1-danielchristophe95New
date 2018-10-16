<?php

class Comment{
  public $id;
  public $comment;

  public function __construct($data){

  }

public static function fetchAll() {
  $db = new PDO(DB_SERVER, DB_USER, DB_PW);

  $sql = 'SELECT * FROM webpage WHERE id = ?';

  $statement = $db->prepare($sql);

  $success = $statement->execute(
    [$id]
  );

  $arr = [];
  while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

    $workItem = new Comment($row);

    array_push($arr, $workItem);
  }


  return $arr;
}

}
