<?php

$commentVar = new Comment($_POST);

$commentVar->create();

echo json_encode($commentVar);
