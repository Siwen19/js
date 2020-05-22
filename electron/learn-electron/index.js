const { app, BrowserWindow } = require('electron');
// exe  c/s b/s window  
let win 

app.on('ready', () => {
  win = new BrowserWindow({   // chromium 
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadURL('http://localhost:3000/')
  // win.loadFile("index.html")
})
