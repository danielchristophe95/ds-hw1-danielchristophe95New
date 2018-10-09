<?php

$commentVar = new Work($_POST);

$commentVar->create();

echo json_encode($commentVar);
