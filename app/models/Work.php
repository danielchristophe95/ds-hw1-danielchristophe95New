<?php

class Work
{
  public $id;
  public $comment;

  public function __construct($row) {
    $this->id = $row['id'];
    $this->comment = $row['comment'];
    ]
  }

  public static getAllWork(int $tableid) {
    //connect to db, run query, read results, for each row make new work object, return the array of work objects
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    var_dump($db);

    die;

    return[];
  }
}
