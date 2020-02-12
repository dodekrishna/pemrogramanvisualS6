const electron = require ("electron");

const {app, BrowserWindow, Menu, ipcMain} = electron;

let todayWindow;
let createWindow;
let listWindow;


app.on("ready", ()=> {
    todayWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration : true
        },
        title : "Tutorial Electron"
    });

    todayWindow.loadURL(`file://${__dirname}/today.html`);
    todayWindow.on("closed", () => {

        app.quit()
        todayWindow = null;
    });
});