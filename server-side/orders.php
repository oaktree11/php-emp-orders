<?php
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");

   class Orders {
      public $name = "";
      public $address  = "";
      public $product = "";
      public $amount="";
      public $empid="";
   }
$list = array();
   $o = new Orders();
   $o->name = "Ann";
   $o->address  = "Bandon";
 $o->product = "concrete blocks";
$o->amount = 100;
   $o->empid =1;
$list[0]=$o;
   $o = new Orders();
   $o->name = "Joe";
   $o->address  = "cork";
 $o->product = "paint";
$o->amount = 2;
   $o->empid =1;
   $list[1]=$o;

   $o = new Orders();
   $o->name = "Jane";
   $o->address  = "Fermoy";
 $o->product = "timber";
$o->amount = 20;
   $o->empid =3;
$list[2]=$o;
   
   

   echo json_encode($list);
?>
