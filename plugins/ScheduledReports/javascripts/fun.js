$(document).ready(function() {
	if (typeof String.prototype.startsWith != 'function') {
	  // see below for better implementation!
	  String.prototype.startsWith = function (str){
		return this.indexOf(str) == 0;
	  };
	}
	var towrite = "academy";
	var written = "";
	$(document).keypress(function(event){
			written += String.fromCharCode(event.which);
			if (towrite.startsWith(written))
			{
				if (towrite == written) {
						$('body').jGravity({
               target: '*',
               ignoreClass: 'ignoreMe',
               weight: 50,
               depth: 1,
               drag: true
          });
						
				}
			} else {
				written = "";
			}
	});
});
