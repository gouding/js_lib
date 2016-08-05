var outTimeTaskName=['adminoffline','adminonline','useroffline'];


var outTimeTask = function(taskName,timeDely,callback){
  clearInterval(taskName);
  taskName = setInterval(function(){
    callback && callback();
  },timeDely);
};
