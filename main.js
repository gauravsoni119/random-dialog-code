var electron = require('electron');
var app = electron.app,
    BrowserWindow = electron.BrowserWindow,
    mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    // Create the browser window
    mainWindow = new BrowserWindow({width: 800, height: 600});
    // and load the index.html of the app.
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
