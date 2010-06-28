
//Array wrapper methods around splice
Array.shift = function(arr) {if(arr.length > 0) return  arr.splice(0,1)[0];}
Array.prototype.shift = function() {return Array.shift(this);}

Array.unshift = function(arr, el)
{
  if(arguments.length > 1) arr.splice(0, 0, el)
  return arr.length
}

Array.prototype.unshift = function(el)
{
  if(arguments.length) return Array.unshift(this, el);
  return this.length;
}

//currently unimplemented methods
//from http://www.w3schools.com/jsref/

function declare_unimplemented(class, fname)
{
  class[fname] = class.prototype[fname] = not_implemented;
}

declare_unimplemented(Number, "toExponential")
declare_unimplemented(Number, "toFixed")
declare_unimplemented(Number, "toPrecision")

declare_unimplemented(String, "charCodeAt")
declare_unimplemented(String, "concat")
declare_unimplemented(String, "fromCharCode")
declare_unimplemented(String, "match")
declare_unimplemented(String, "search")
declare_unimplemented(String, "replace")