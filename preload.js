// preload.js
const { contextBridge, ipcRenderer } = require('electron');

// 将需要在渲染进程中使用的模块暴露给渲染进程
contextBridge.exposeInMainWorld('Hel1antHu5', {
    
});