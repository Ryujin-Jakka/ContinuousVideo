if( window.location.pathname == pathName )
{
	$(window).load(function() {
		let durata = $(videoId)[0].duration;
		if( durata !== undefined ){
			console.log(prefix_log_1 + durata);
			durataInMSecs = moment.duration(`00:00:` + durata).asMilliseconds();
			durataMaxInMSecs = moment.duration(`00:59:00`).asMilliseconds();
			if(durataInMSecs < durataMaxInMSecs && durataInMSecs > 0){
				console.log(prefix_log_2 + durataInMSecs);
				setTimeout(function() {
					$(linkButtonID)[0].click();
				},durataInMSecs);
			}
			else{
				console.log(prefix_log_3 + durataMaxInMSecs);
				setTimeout(function() {
					$(linkButtonID)[0].click();
				},durataMaxInMSecs);
			}
		}
    });
}