
(function(){

  return;
  var cof ={
    initCof:function(){
      var ws = new WebSocket('ws://172.16.4.183:4000');
      ws.onopen = function(){
        console.log('success');
      };
      ws.operror = function(){
        console.log('fail');
      };
      ws.onmessage = function(e){
        console.log(+new Date());
      };
    }
  };

  cof.initCof();

})();
