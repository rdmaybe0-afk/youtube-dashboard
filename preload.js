const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  storeCredentials: (credentials) => ipcRenderer.invoke('store-credentials', credentials),
  getCredentials: () => ipcRenderer.invoke('get-credentials')
});