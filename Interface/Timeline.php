<?php
$db = mysql_select_db('netviewdatabase', mysql_connect('IP','User','Password'));
$query = mysql_query("SELECT history_k_devIP_id, history_portNumber, history_timestamp, history_IN, history_OUT, if_desNumber, dev_number, dev_name, dev_type FROM netviewdatabase.history
join netviewdatabase.if on history_portNumber = if_portNumber
join netviewdatabase.dev on if_k_devIP_id = dev_k_devIP_id
where history_timestamp<=".$_GET['timestamp']." AND history_timestamp >= ".$_GET['timestamp']." - 30
group by history_portNumber;");
$text = "";
while($row = mysql_fetch_array($query)){
	$text = $text.'{"geraete_id":"'.$row[6].'","ziel_id":"'.$row[5].'","device":"'.$row[8].'","in":'.$row[3].',"out":'.$row[4].'},';
}
$text = substr($text, 0, -1); 
echo "[".$text."]";

?>