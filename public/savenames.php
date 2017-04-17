<?php
if(isset($_GET['field1'])) {
    $data = $_GET['field1'] . ' - $'. $_GET['amount'] . "\n";
    $ret = file_put_contents('./files/names.txt', $data, FILE_APPEND | LOCK_EX);
    if($ret === false) {
        die('There was an error writing this file');
    }
    else {
    // Prepare GET data
    $query = array();
    $query['cmd'] = '_xclick';
    $query['business'] = 'V73M83YRFESC4';
    $query['lc'] = 'NL';
    $query['item_name'] = 'E-book';
    $query['currency_code'] = 'USD';
    $query['button_subtype'] = 'services';
    $query['no_note'] = 1;
    $query['no_shipping'] = 1;
    $query['cancel_return'.$i] = 'http://www.questioningmeat.com/donate';
    $query['amount'] = $_GET['amount'];

    // Prepare query string
    $query_string = http_build_query($query);

    header('Location: https://www.paypal.com/cgi-bin/webscr?' . $query_string);
    }
}
else {
   die('no post data to process');
}
?>