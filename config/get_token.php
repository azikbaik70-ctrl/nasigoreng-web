<?php
header('Content-Type: application/json');
require_once 'config.php';
$transaction_details = array(
    'order_id' => 'NASIGORENG-' . rand(),
    'goes_amount' => 20000,
);

$item_details = array (
    array(
        'id' => 'nasi01',
        'price' => 20000,
        'quantity' => 1,
        'nama' =>  'Nasi Goreng Spesial Mamang Aziq'
    )
);
$transaction = array(
    'transsaction_details' => $transaction_details,
    'item_details' => $item_details,
);

try {
    $snapToken = \Midtrans\Snap::getSnapToken($transaction);
    echo json_encode(array('token' => $snapToken));
} catch (Exception $e) {
    echo json_encode(array('error' => $e->getMessage())); 
}
?>