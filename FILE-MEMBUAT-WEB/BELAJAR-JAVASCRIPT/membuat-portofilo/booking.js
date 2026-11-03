const monthNames = ['Januari', 'Februarui', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agusutus', 'September', 'Oktober', 'November', 'Desember'];
const timeSlotOptions = ['09:00-10:00', '10:00-11.00', '12:00-13:00', '14:00-15:00', '16:00-17:00', '18:00-19:00', '20:00-21:00']

let viewDate  = new Date();
viewDate.setDate(1);

let selectedDate = null;
let selectedSlot = null;

const calanderGrid = document.getElementById('calandarGrid');
const calandarLabel = document.getElementById('calandarLabel');
const timeSlotEl = document.getElementById('timeSlots');
const selectedSummary = document.getElementById('selectedSummary')
const toStep28tn = document.getElementById('toStep2')

function formatDate(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth()).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
}
function renderCalandar() {
    calandarLabel.textContent = `${monthNames[viewDate.getMonth()]} ${viewDate.getFullYear()}`;
    calandaarGrid.innerHTML = '';
    
    const firstDay = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);

    const startOffset = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < startOffset; i++) {
        calanderGrid.appendChild(document.createElement('span'));
    }
    for (let day = 1; day <= daysInMonth; day++) {
        const thisDate = new Date(viewDate.getFullYear(),viewDate.getMonth(), day);
        const dateStr = formatDate(thisDate);

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = day;
        
        if (thisDate < today) {
            btn.disabled = true;
        }else {
            btn.addEventListener('click', () => {
                selectedDate = dateStr;
                document.querySelectorAll('.calandar-grid button').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                updateSummary();
            });
        }
        if (selectedDate === dateStr) {
            btn.classList.add('selected')
        }
        calanderGrid.appendChild(btn);
    }
}
function renderTimeSlots() {
    timeSlotEl.innerHTML = '';
    timeSlotOptions.forEach(slot => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = slot;
        if(slot === selectedSlot) btn.classList.add('selected');
        btn.addEventListener('click', () => {
            selectedSlot = slot;
            document.querySelectorAll('.time-slot button').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected')
            updateSummary();
        });
        timeSlotEl.appendChild(btn);
    })
}

function updateSummary() {
    if (selectedDate && selectedSlot) {
        selectedSummary.textContent = `${selectedDate} - ${selectedSlot} `;
        toStep28tn.disabled = false;
    }else {
        selectedSummary.textContent = 'Belum ada tanggal &  Waktu di pilih.';
        toStep28tn.disabled = true;
    }
}
document.getElementById('prevMonth').addEventListener('click', () => {
    viewDate.setMonth(viewDate.getMonth() - 1);
    renderCalandar();
});
document.getElementById('nextMonth').addEventListener('click', () => {
    viewDate.setMonth(viewDate.getMonth() + 1 );
    renderCalandar();
});

document.getElementById('toStep2').addEventListener('click', () => {
 document.getElementById('inputDate').value = selectedDate;
 document.getElementById('inputSlot').value = selectedSlot;
 document.getElementById('step1').hidden = true;
 document.getElementById('step2').hidden = false;
 document.querySelector('.booking-progress .step[data-step="2"]').classList.add('active');
});
document.getElementById('backToStep1').addEventListener('click', () => {
    document.getElementById('step2').hidden =  true;
    document.getElementById('step1').hidden = false;
    document.querySelectorAll('.booking-progress .step')forEach(s => s.classList.remove('active'));
    document.querySelector('.booking-progress .step[data-step="1"]').classList.add('active');
});
renderCalandar();
renderTimeSlots();
updateSummary();