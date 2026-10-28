// Konfigurasi Spreadsheet
var SPREADSHEET_ID = '1xSEUTv3VZzGlzEdx6UeTNmDJi4OiJSzKCIZP_Au41oQ';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Sistem Pembayaran IAI KHAS Al-Arsyadi')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// Fungsi untuk mengambil data (Wajib Bayar, Transaksi, dll)
function loadDataFromProperties() {
  var data = PropertiesService.getScriptProperties().getProperty('appData');
  return data ? data : null;
}

// Fungsi untuk menyimpan data keseluruhan
function saveDataToProperties(jsonData) {
  PropertiesService.getScriptProperties().setProperty('appData', jsonData);
  return true;
}

// Fungsi khusus untuk menulis kwitansi baru ke Sheet sebagai Backup / Laporan
function appendPaymentData(id, date, code, name, period, amount, method, officer, note) {
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
  sheet.appendRow([id, date, code, name, period, amount, method, officer, note]);
  return true;
}