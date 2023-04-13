function digitalClock() {
    // Get current time
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    // Add leading zero if needed
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    // Display time in "hh:mm:ss" format
    let time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = time;
  
    // Update clock every second
    setTimeout(digitalClock, 1000);
}

    // Start the clock when the page loads
    window.onload = digitalClock;
