<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Booking Konsultasi - Aziq</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Inter;wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="booking.css">
</head>
<body>
    <header class="navbar">
        <div class="nav-inner">
            <a href="index.php" class="logo">aziq<span class="dot">.</span>dev</a>
        </div>
    </header>

    <main class="booking-page">
        <div class="booking-card">
            <div class="booking-progress">
                <span class="step active" data-step="1">1. Tanggal &amp; Waktu </span>
                <span class="step" data-step="2">2. Data Diri </span>
            </div>
            <?php if (isset($_GET['error']) && $_GET['errror']=== 'invalid'): ?>
            <p class="booking-error">Data belum lengkap atau ada yang salah, cek lagi  isinya!!</p>
            <?php endif;?>
            <section class="booking-step" id="step1">
                <h2>Pilih Tanggal &amp; waktu</h2>

                <div class="calandar-head">
                    <button type="button" id="prevMonth" aria-label="Bulan Sebelumnya"><</button>
                        <span id="calandarLabel"></span>
                    <button type="button" id="nextMonth" aria-label="Bulan Berikutnya"></button>
                </div>

                <div class="calandar-weekdays">
                    <span>Mon</span><span>Tue</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
                <div  class="calandar-grid" id="timeSlots"></div>
                <p class="booking-selected" id="selectedSummary" >Belum ada tanggal &amp; waktu di pilih.</p>
                <button type="button" class="btn btn-primary" id="toStep2" disabled>Contuinue</button>
            </section>

            <section class="booking-step" id="step2" hidden>
                <button type="button" class="booking-back" id="backToStep"> < Kembali</button>
                <h2>Data Diri</h2>

                <form action="submit_booking.php" method="POST" class="booking-form">
                    <input type="hidden" name="booking_date" id="inputDate">
                    <input type="hidden" name="time_slot" id="inputSlot">

                    <div class="form-row">
                        <label>Nama Depan *
                            <input type="text" name="first_name" required>
                        </label>
                        <label>Nama Belakang *
                            <input type="text" name="last_name" required>
                        </label>
                    </div>
                    <div class="form-row">
                        <label>Email
                            <input type="email" name="email">
                        </label>
                        <label>No. HP *
                            <input type="tel" name="phone" required placeholder="08xxxxxxxxxx">
                        </label>
                    </div>
                    <label class="form-full">Alamat Lengkap *
                        <textarea name="address" rows="3" required></textarea>
                    </label>

                    <button type="submit" class="btn btn-primary">Continue</button>
                </form>
            </section>
        </div>
    </main>
    <script src="booking.js"></script>
</body>
</html>