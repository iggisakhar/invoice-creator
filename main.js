function generateInvoice() {
    const clientName = document.getElementById('clientName').value;
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);

    if (!clientName || isNaN(hoursWorked) || isNaN(hourlyRate)) {
        document.getElementById('invoiceOutput').textContent = 'Please fill out all fields correctly.';
        return;
    }

    const total = (hoursWorked * hourlyRate).toFixed(2);
    const today = new Date().toLocaleDateString();

    const invoice = `
    <strong>Invoice</strong>
    ---------------------------
    <strong>Date:</strong> ${today}
    <strong>Client:</strong> ${clientName}

    <strong>Hours Worked:</strong> ${hoursWorked}
    <strong>Hourly Rate:</strong> $${hourlyRate}

    <strong>Total Due:</strong> $${total}
  `;

    document.getElementById('invoiceOutput').innerHTML = invoice;
}
