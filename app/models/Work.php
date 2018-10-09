<?php

class Work
{
  public $id;
  public $comment;

  public function __construct($row) {
    $this->id = isset($row['id']) ? intval($row['id']) : null;
    $this->comment = $row['comment'];
  }

  public function create() {
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    $sql = 'INSERT webpage (id, comment)
            VALUES (?, ?)';

    $statement = $db->prepare($sql);

    $success = $statement->execute([
    $this->id,
    $this->comment
  ]);

  $this->id = $db->lastInsertId();
  }

  public static function getAllWork(int $id) {
    //connect to db, run query, read results, for each row make new work object, return the array of work objects
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    $sql = 'SELECT * FROM webpage WHERE id = ?';

    $statement = $db->prepare($sql);

    $success = $statement->execute(
      [$id]
    );

    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

      $workItem = new Work($row);

      array_push($arr, $workItem);
    }


    return $arr;
  }
}
