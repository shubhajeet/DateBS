function onOpen() {
  SpreadsheetApp.getUi().createAddonMenu()
      .addItem('Activate the Addon', 'activate')
      .addToUi();
}

function activate() {
  var title = 'Date BS';
  var message = `This addon provides custom function to convert date from AD to BS and vice versa. https://maharjansujit.com.np/projects/DateBS`;
  var ui = SpreadsheetApp.getUi();
  ui.alert(title, message, ui.ButtonSet.OK);
}

  
