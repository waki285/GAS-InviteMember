const emails = ["hogehoge@example.com", "fugafuga@example.com"];

function documentEditorAdd() {
  const document = DocumentApp.openByUrl("https://docs.google.com/document/d/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/edit");
  document.addEditors(emails);
}

function spreadsheetEditorAdd() {
  const sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/edit");
  sheet.addEditors(emails);
}

function slideEditorAdd() {
  const slide = SlidesApp.openByUrl("https://docs.google.com/spreadsheets/d/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/edit");
  slide.addEditors(emails);
}
