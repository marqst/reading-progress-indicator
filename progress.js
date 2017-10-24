(function(w,d){
	var progressBar = d.createElement('progress');
	var setMax = function() {
		progressBar.max = d.body.clientHeight - w.innerHeight;
	}
	var setPos = function() {
		progressBar.value = w.pageYOffset;
		progressBar.textContent = Math.floor(progressBar.position * 100)+'%';
	}
	w.addEventListener('resize',function(){
		setMax();
		setPos();
	});
	w.addEventListener('scroll',setPos);
	d.body.appendChild(progressBar);
	setMax();
	setPos();
})(window,document);