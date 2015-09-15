<?php
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");

   class Emp {
      public $id ="";
      public $name = "";
      public $address  = "";
      public $birthdate = "";
   }
$list = array();
   $e = new Emp();
   $e->id = 1;
   $e->name = "John";
   $e->address  = "cork";
 $e->birthdate = "8/5/1976 12:20:03";
$list[0]=$e;
   $e = new Emp();
    $e->id = 2;
   $e->name = "Jack";
   $e->address  = "dublin";
   $e->birthdate = "8/5/1970 12:20:03";
   $list[1]=$e;
$e = new Emp();
    $e->id = 3;
   $e->name = "Mary";
   $e->address  = "London";
   $e->birthdate = "8/5/1974 12:20:03";
$list[2]=$e;
   
   

   echo json_encode($list);
?>
