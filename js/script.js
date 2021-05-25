///// recursive---sqrt---function

function _sqrt(x, y, z) {
    var add = (y + z) / 2;
   var sqr = add * add;
  
    if (Math.abs(x - sqr) <= 0.01)
      return add;
    
    if (sqr > x)
      z = add;
    else
      y = add;
  
    return _sqrt(x, y, z);
  }
  
  function sqrt(x) {
    if (x < 0)
      return -1;
    
    return _sqrt(x, 0, x);
  }
  

