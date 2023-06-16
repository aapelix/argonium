const { ipcRenderer } = require('electron');
const ipc = ipcRenderer;

document.getElementById('close-app').onclick = () => {
    ipc.send('app/close');
};

document.getElementById('minimize').onclick = () => {
    ipc.send('app/minimize');
}

document.getElementById('maximize').onclick = () => {
    ipc.send('app/maximize');
}