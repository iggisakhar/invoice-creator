function getInvoiceDate() {
    const date = new Date();
    return date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
}

module.exports = { getInvoiceDate };
