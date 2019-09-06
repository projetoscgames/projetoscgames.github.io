
var frames = ["youtube0","gj00","gj10","gj20","gj30","gj40","gj50","gj60","gj70","gj80","gj90"]

for (var i = 0; i < frames.length; i++){
  var _theframe = document.getElementById(frames[i]);
  _theframe.contentWindow.location.href = _theframe.src;
}
