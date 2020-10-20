<?php

/* https://api.telegram.org/bot1383480790:AAFYQHhHtEMiGC1QZhMCJuzi4Qjxm1bV_do/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name=$_POST['name'];
$phone=$_POST['phone'];
$message=$_POST['message'];
$token = "1383480790:AAFYQHhHtEMiGC1QZhMCJuzi4Qjxm1bV_do";
$chat_id = "-460738612";
$arr = array(
  'Numele: ' => $name,
  'Telefon: ' => $phone,
  'Mesaj' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
    header('Location: thank-you.html');
} else {
  echo "Error";
}
?>