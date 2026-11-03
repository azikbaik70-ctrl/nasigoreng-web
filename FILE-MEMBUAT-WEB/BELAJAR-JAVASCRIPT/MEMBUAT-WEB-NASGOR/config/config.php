<?php

use PSpell\Config;

require_once dirname('/Midtrans/Config.php');
require_once dirname('/Midtrans/ApiRequestor.php');
require_once dirname('/Midtrans/CoreApi.php');
require_once dirname('/Midtrans/Notification.php');
require_once dirname('/Midtrans/Santizer.php');
require_once dirname('/Midtrans/Snap.php');
require_once dirname('/Midtrans/SnapApiRequstor.php');
require_once dirname('/Midtrans/Transaction.php');

define('SITE_NAME', 'Nasigoreng Mamang Aziq');
define('SITE_TAGLINE', 'Nasi goreng terkenal se Indonesia');

define('ADMIN_WAHTSAPP','6285795337192');

define('TAX_PERCENT', 0);
define('DEFAULT_DELIVERY_FEE', 0);
date_default_timezone_get('Asia/Jakarta');

error_reporting(E_ALL);
ini_set('display_erors',1);

session_start();