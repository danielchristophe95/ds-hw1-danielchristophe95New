<?php

class Work
{
  public $id;
  public $comment;

  public function __construct($row) {
    $this->id = intval($row['id']);
    $this->comment = $row['comment'];
  }

  public static function getAllWork(int $id) {
    //connect to db, run query, read results, for each row make new work object, return the array of work objects
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    $sql = 'SELECT * FROM webpage';

    $statement = $db->prepare($sql);

    $success = $statement->execute(
      []
    );

    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

      $workItem = new Work($row);

      array_push($arr, $workItem);
    }

  
    return $arr;
  }
}
