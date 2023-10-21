function removeElementsByClassName(className) {
    const elements = document.getElementsByClassName(className);
    for (let i = elements.length - 1; i >= 0; i--) {
        elements[i].remove();
    }
}

// Set the interval to check for the element and remove it (e.g., every 1 second).
const checkInterval = 1000; // 1 second
setInterval(() => {
    removeElementsByClassName("ytd-popup-container");
}, checkInterval);