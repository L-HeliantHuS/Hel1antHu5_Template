// main.js
const { app, BrowserWindow, Tray, Menu } = require('electron')
const {join} = require("path");

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: join(__dirname, 'preload.js') // 指定 preload 脚本
    }
  })

  win.loadURL('http://baidu.com')


  // tray 系统托盘
  tray = new Tray(join(__dirname, 'images/logo.jpg'));
  // 点击托盘图标显示应用
  tray.on("click", () => {
      if (win.isVisible()) {
          win.hide();
      } else {
          win.show()
      }
  })
  const contextMenu = Menu.buildFromTemplate([
      {type: 'separator'},
      {label: "Hel1antHu5_Template"},
      {label: '显示主窗口', type: 'normal', click: () => win.show()},
      {type: 'separator'},
      {
          label: '退出', type: 'normal', role: 'quit', click: () => {
              app.exit()
          }
      }
  ]);
  tray.setContextMenu(contextMenu)
  tray.setTitle("Hel1antHu5_Template")
  tray.setToolTip("Hel1antHu5_Template")


  // hook窗口关闭
  win.on("close", (event) => {
      event.preventDefault()
      win.hide()
  })

}


app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


app.on("before-quit", () => {
  app.exit()
})


app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})