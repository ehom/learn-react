///

var timer = {
  timerID : undefined,
  
  start : function() {
      this.timerID = setInterval(
        () => {
          $('#time-display-panel').text(
            Date.now().toLocaleString()
          );
      }, 
      100
    );
  },
  
  resume : function() {
    this.start();
  },
  
  pause : function() {
    clearInterval(this.timerID);
    this.timerID = undefined;
  },
  
  toggle : function() {
    if (timer.timerID) {
      timer.pause();
    } else {
      timer.resume();
    }
  }
};

$("#time-display-panel").click(
  function() {
    timer.toggle();
  }
);

timer.start();
