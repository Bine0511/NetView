<?php

$db = mysql_select_db('netviewdatabase', mysql_connect('192.168.0.200:3306','Martin','Martin123!'));
$query = mysql_query("SELECT  if_k_devIP_id, if_portNumber, if_desNumber, if_curIN, if_curOUT, dev_number, dev_name, dev_type FROM netviewdatabase.if
join netviewdatabase.dev on if_k_devIP_id = dev_k_devIP_id;");
$text = "";
while($row = mysql_fetch_array($query)){
	$text = $text.'{"geraete_id":"'.$row[5].'","ziel_id":"'.$row[2].'","device":"'.$row[7].'","in":'.$row[3].',"out":'.$row[4].'},';
}
$text = substr($text, 0, -1); 
echo "[".$text."]";

?>