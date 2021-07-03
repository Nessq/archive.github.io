<?php
// if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){
//         $to = ''; 
//         $subject = $_POST['type'];
//         $message = '
//                 <html>
//                     <head>
//                         <title>'.$_POST['site'].' '.$subject.'</title>
//                     </head>
//                     <body>
//                         <p>Имя: '.$_POST['name'].'</p>
//                         <p>Телефон: '.$_POST['phone'].'</p>                        
//                     </body>
//                 </html>';
//         // $headers  = "Content-type: text/html; charset=utf-8 \r\n";
// 				$headers  = "MIME-Version: 1.0\n";
// 				$headers .= "Content-type: text/html; charset=utf-8\n";
// 				$headers .= "X-Priority: 3\n";
// 				$headers .= "X-MSMail-Priority: Normal\n";
// 				$headers .= "X-Mailer: php\n";
//         $headers .= "From: ".$_POST['site']." <kassiopeya@kds.house>\r\n";
//         mail($to, $subject, $message, $headers);
// }
?>

<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$project_name = trim($_POST['site']);
	$admin_email  = "kristergrad@kds.house";
	$form_subject = trim($_POST['type']);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}
} 

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );