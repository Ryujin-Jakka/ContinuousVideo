if( window.location.pathname == pathName )
{	
	$(window).load(function() {
		var spanDurata = $(classSpanTime)[0];
		if( spanDurata !== undefined ){
			durata = spanDurata.innerText;
			
			durataInMSecs = moment.duration(`00:` + durata).asMilliseconds();
			durataMaxInMSecs = moment.duration(`00:59:00`).asMilliseconds();

			if(durataInMSecs < durataMaxInMSecs && durataInMSecs > 0){
				setTimeout(function() {
					$(linkButtonID)[0].click();
				},durataInMSecs);
			}
			else{
				setTimeout(function() {
					$(linkButtonID)[0].click();
				},durataMaxInMSecs);
			}
		}
    });
}