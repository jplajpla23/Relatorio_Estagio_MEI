function gLng() {
    var v = document.cookie.match('(^|;) ?locale=([^;]*)(;|$)');
    return v ? v[2].toUpperCase(): "EN";
}
function sLng(v) {
    var d = new Date;
    d.setTime(d.getTime() + 31536000000);
    document.cookie ="locale=" + v + ";path=/;expires=" + d.toGMTString();
    location.reload();
}

var _d={};

function __(k){
	if(_d==null|| _d==undefined || cd==undefined || cd==null || _d[gLng()]==null || _d[gLng()]==undefined) {return k;}
	return _d[gLng()][k];
}

function ll(a,b){
	if(_d==null|| _d==undefined){ _d={};}
	_d[a]=b;
}


