let scannedData = '';

document.addEventListener('keypress', function(event) {
    if (event.charCode > 31 && event.charCode < 127) {
        scannedData += String.fromCharCode(event.charCode);
        const outputDiv = document.getElementById('output');
        outputDiv.innerText = scannedData;
    }

    // Optionally, handle the Enter key to process the scanned data
    if (event.key === 'Enter') {
        processScannedData(scannedData);
        scannedData = ''; // Clear after processing
    }
});

function processScannedData(data) {
    // Implement your logic to handle the scanned data
    //console.log('Scanned Data:', data);
    alert(data);
    // You can send this data to a server or perform other actions
}