// ==UserScript==
// @name        BS Detector
// @namespace   bs-detector
// @description Clearly label content from a list of given sites.
// @version     1
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==
	
// Account for possible jquery conflicts.
this.$ = this.jQuery = jQuery.noConflict(true);

/**
 * Run the script.
 */
function _bsDetector() {

	// Inject the CSS for this.

	/*! Hint.css - v2.4.1 - 2016-11-08
	 * http://kushagragour.in/lab/hint/
	 * Copyright (c) 2016 Kushagra Gour */
	var newStyle = "<style>[class*=hint--]{position:relative;display:inline-block}[class*=hint--]:after,[class*=hint--]:before{position:absolute;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);visibility:hidden;opacity:0;z-index:1000000;pointer-events:none;-webkit-transition:.3s ease;-moz-transition:.3s ease;transition:.3s ease;-webkit-transition-delay:0s;-moz-transition-delay:0s;transition-delay:0s}[class*=hint--]:hover:after,[class*=hint--]:hover:before{visibility:visible;opacity:1;-webkit-transition-delay:.1s;-moz-transition-delay:.1s;transition-delay:.1s}[class*=hint--]:before{content:'';position:absolute;background:0 0;border:6px solid transparent;z-index:1000001}[class*=hint--]:after{background:#383838;color:#fff;padding:8px 10px;font-size:12px;font-family:Helvetica,Arial,sans-serif;line-height:12px;white-space:nowrap;text-shadow:0 -1px 0 #000;box-shadow:4px 4px 8px rgba(0,0,0,.3)}[class*=hint--][aria-label]:after{content:attr(aria-label)}[class*=hint--][data-hint]:after{content:attr(data-hint)}[aria-label='']:after,[aria-label='']:before,[data-hint='']:after,[data-hint='']:before{display:none!important}.hint--top-left:before,.hint--top-right:before,.hint--top:before{border-top-color:#383838}.hint--bottom-left:before,.hint--bottom-right:before,.hint--bottom:before{border-bottom-color:#383838}.hint--top:after,.hint--top:before{bottom:100%;left:50%}.hint--top:before{margin-bottom:-11px;left:calc(50% - 6px)}.hint--top:after{-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);transform:translateX(-50%)}.hint--top:hover:before{-webkit-transform:translateY(-8px);-moz-transform:translateY(-8px);transform:translateY(-8px)}.hint--top:hover:after{-webkit-transform:translateX(-50%) translateY(-8px);-moz-transform:translateX(-50%) translateY(-8px);transform:translateX(-50%) translateY(-8px)}.hint--bottom:after,.hint--bottom:before{top:100%;left:50%}.hint--bottom:before{margin-top:-11px;left:calc(50% - 6px)}.hint--bottom:after{-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);transform:translateX(-50%)}.hint--bottom:hover:before{-webkit-transform:translateY(8px);-moz-transform:translateY(8px);transform:translateY(8px)}.hint--bottom:hover:after{-webkit-transform:translateX(-50%) translateY(8px);-moz-transform:translateX(-50%) translateY(8px);transform:translateX(-50%) translateY(8px)}.hint--right:before{border-right-color:#383838;margin-left:-11px;margin-bottom:-6px}.hint--right:after{margin-bottom:-14px}.hint--right:after,.hint--right:before{left:100%;bottom:50%}.hint--right:hover:after,.hint--right:hover:before{-webkit-transform:translateX(8px);-moz-transform:translateX(8px);transform:translateX(8px)}.hint--left:before{border-left-color:#383838;margin-right:-11px;margin-bottom:-6px}.hint--left:after{margin-bottom:-14px}.hint--left:after,.hint--left:before{right:100%;bottom:50%}.hint--left:hover:after,.hint--left:hover:before{-webkit-transform:translateX(-8px);-moz-transform:translateX(-8px);transform:translateX(-8px)}.hint--top-left:after,.hint--top-left:before{bottom:100%;left:50%}.hint--top-left:before{margin-bottom:-11px;left:calc(50% - 6px)}.hint--top-left:after{-webkit-transform:translateX(-100%);-moz-transform:translateX(-100%);transform:translateX(-100%);margin-left:12px}.hint--top-left:hover:before{-webkit-transform:translateY(-8px);-moz-transform:translateY(-8px);transform:translateY(-8px)}.hint--top-left:hover:after{-webkit-transform:translateX(-100%) translateY(-8px);-moz-transform:translateX(-100%) translateY(-8px);transform:translateX(-100%) translateY(-8px)}.hint--top-right:after,.hint--top-right:before{bottom:100%;left:50%}.hint--top-right:before{margin-bottom:-11px;left:calc(50% - 6px)}.hint--top-right:after{-webkit-transform:translateX(0);-moz-transform:translateX(0);transform:translateX(0);margin-left:-12px}.hint--top-right:hover:after,.hint--top-right:hover:before{-webkit-transform:translateY(-8px);-moz-transform:translateY(-8px);transform:translateY(-8px)}.hint--bottom-left:after,.hint--bottom-left:before{top:100%;left:50%}.hint--bottom-left:before{margin-top:-11px;left:calc(50% - 6px)}.hint--bottom-left:after{-webkit-transform:translateX(-100%);-moz-transform:translateX(-100%);transform:translateX(-100%);margin-left:12px}.hint--bottom-left:hover:before{-webkit-transform:translateY(8px);-moz-transform:translateY(8px);transform:translateY(8px)}.hint--bottom-left:hover:after{-webkit-transform:translateX(-100%) translateY(8px);-moz-transform:translateX(-100%) translateY(8px);transform:translateX(-100%) translateY(8px)}.hint--bottom-right:after,.hint--bottom-right:before{top:100%;left:50%}.hint--bottom-right:before{margin-top:-11px;left:calc(50% - 6px)}.hint--bottom-right:after{-webkit-transform:translateX(0);-moz-transform:translateX(0);transform:translateX(0);margin-left:-12px}.hint--bottom-right:hover:after,.hint--bottom-right:hover:before{-webkit-transform:translateY(8px);-moz-transform:translateY(8px);transform:translateY(8px)}.hint--large:after,.hint--medium:after,.hint--small:after{white-space:normal;line-height:1.4em;word-wrap:break-word}.hint--small:after{width:80px}.hint--medium:after{width:150px}.hint--large:after{width:300px}.hint--error:after{background-color:#b34e4d;text-shadow:0 -1px 0 #592726}.hint--error.hint--top-left:before,.hint--error.hint--top-right:before,.hint--error.hint--top:before{border-top-color:#b34e4d}.hint--error.hint--bottom-left:before,.hint--error.hint--bottom-right:before,.hint--error.hint--bottom:before{border-bottom-color:#b34e4d}.hint--error.hint--left:before{border-left-color:#b34e4d}.hint--error.hint--right:before{border-right-color:#b34e4d}.hint--warning:after{background-color:#c09854;text-shadow:0 -1px 0 #6c5328}.hint--warning.hint--top-left:before,.hint--warning.hint--top-right:before,.hint--warning.hint--top:before{border-top-color:#c09854}.hint--warning.hint--bottom-left:before,.hint--warning.hint--bottom-right:before,.hint--warning.hint--bottom:before{border-bottom-color:#c09854}.hint--warning.hint--left:before{border-left-color:#c09854}.hint--warning.hint--right:before{border-right-color:#c09854}.hint--info:after{background-color:#3986ac;text-shadow:0 -1px 0 #1a3c4d}.hint--info.hint--top-left:before,.hint--info.hint--top-right:before,.hint--info.hint--top:before{border-top-color:#3986ac}.hint--info.hint--bottom-left:before,.hint--info.hint--bottom-right:before,.hint--info.hint--bottom:before{border-bottom-color:#3986ac}.hint--info.hint--left:before{border-left-color:#3986ac}.hint--info.hint--right:before{border-right-color:#3986ac}.hint--success:after{background-color:#458746;text-shadow:0 -1px 0 #1a321a}.hint--success.hint--top-left:before,.hint--success.hint--top-right:before,.hint--success.hint--top:before{border-top-color:#458746}.hint--success.hint--bottom-left:before,.hint--success.hint--bottom-right:before,.hint--success.hint--bottom:before{border-bottom-color:#458746}.hint--success.hint--left:before{border-left-color:#458746}.hint--success.hint--right:before{border-right-color:#458746}.hint--always:after,.hint--always:before{opacity:1;visibility:visible}.hint--always.hint--top:before{-webkit-transform:translateY(-8px);-moz-transform:translateY(-8px);transform:translateY(-8px)}.hint--always.hint--top:after{-webkit-transform:translateX(-50%) translateY(-8px);-moz-transform:translateX(-50%) translateY(-8px);transform:translateX(-50%) translateY(-8px)}.hint--always.hint--top-left:before{-webkit-transform:translateY(-8px);-moz-transform:translateY(-8px);transform:translateY(-8px)}.hint--always.hint--top-left:after{-webkit-transform:translateX(-100%) translateY(-8px);-moz-transform:translateX(-100%) translateY(-8px);transform:translateX(-100%) translateY(-8px)}.hint--always.hint--top-right:after,.hint--always.hint--top-right:before{-webkit-transform:translateY(-8px);-moz-transform:translateY(-8px);transform:translateY(-8px)}.hint--always.hint--bottom:before{-webkit-transform:translateY(8px);-moz-transform:translateY(8px);transform:translateY(8px)}.hint--always.hint--bottom:after{-webkit-transform:translateX(-50%) translateY(8px);-moz-transform:translateX(-50%) translateY(8px);transform:translateX(-50%) translateY(8px)}.hint--always.hint--bottom-left:before{-webkit-transform:translateY(8px);-moz-transform:translateY(8px);transform:translateY(8px)}.hint--always.hint--bottom-left:after{-webkit-transform:translateX(-100%) translateY(8px);-moz-transform:translateX(-100%) translateY(8px);transform:translateX(-100%) translateY(8px)}.hint--always.hint--bottom-right:after,.hint--always.hint--bottom-right:before{-webkit-transform:translateY(8px);-moz-transform:translateY(8px);transform:translateY(8px)}.hint--always.hint--left:after,.hint--always.hint--left:before{-webkit-transform:translateX(-8px);-moz-transform:translateX(-8px);transform:translateX(-8px)}.hint--always.hint--right:after,.hint--always.hint--right:before{-webkit-transform:translateX(8px);-moz-transform:translateX(8px);transform:translateX(8px)}.hint--rounded:after{border-radius:4px}.hint--no-animate:after,.hint--no-animate:before{-webkit-transition-duration:0s;-moz-transition-duration:0s;transition-duration:0s}.hint--bounce:after,.hint--bounce:before{-webkit-transition:opacity .3s ease,visibility .3s ease,-webkit-transform .3s cubic-bezier(.71,1.7,.77,1.24);-moz-transition:opacity .3s ease,visibility .3s ease,-moz-transform .3s cubic-bezier(.71,1.7,.77,1.24);transition:opacity .3s ease,visibility .3s ease,transform .3s cubic-bezier(.71,1.7,.77,1.24)}</style>";
	$('body').prepend(newStyle);

	// The sources of BS information.
	var bsDetectorLinks = [
		'100percentfedup.com',
		'21stcenturywire.com',
		'24extremeworld.com',
		'24newsflash.com',
		'365usanews.com',
		'70news.wordpress.com',
		'800whistleblower.com',
		'abcnews.com.co',
		'abcnewsgo.co',
		'about2day.com',
		'abriluno.com',
		'aceflashman.wordpress.com',
		'activistpost.com',
		'addictinginfo.org',
		'adobochronicles.com',
		'aldipest.com',
		'allgoodsides.com',
		'allpoliticsnews.com',
		'americanlookout.com',
		'americannews.com',
		'americannewsx.com',
		'americantoday.news',
		'amplifyingglass.com',
		'amusmentic.com',
		'anonnews.co',
		'antiwar.com',
		'automotostar.com',
		'awesomethings4you.com',
		'banoosh.com',
		'beehivebugle.com',
		'beforeitsnews.com',
		'berniesanders24.com',
		'berniesandersnews.org',
		'betootaadvocate.com',
		'bients.com',
		'bigamericannews.com',
		'bigbluedimension.com',
		'bigbluevision.com',
		'bigbluevision.org',
		'bigpzone.com',
		'bipartisanreport.com',
		'bluenationreview.com',
		'borowitzreport.com',
		'breitbart.com',
		'bvanews.com',
		'callthecops.net',
		'cap-news.com',
		'celebtricity.com',
		'centralnewsamerica.com',
		'chaser.com.au',
		'checkoutthehealthyworld.com',
		'christiantimesnewspaper.com',
		'christwire.org',
		'chronicle.su',
		'cityworldnews.com',
		'civictribune.com',
		'clickhole.com',
		'cnnnext.com',
		'coasttocoastam.com',
		'collective-evolution.com',
		'concisepolitics.com',
		'consciouslifenews.com',
		'conservativeoutfitters.com',
		'conspiracywire.com',
		'cosmo-politics.com',
		'countdowntozerotime.com',
		'counterpsyops.com',
		'creambmp.com',
		'crystalair.com',
		'daily-magazine.news',
		'dailybuzzlive.com',
		'dailycurrant.com',
		'dailydemocraticnews.com',
		'dailyintestingthings.com',
		'dailyleak.org',
		'dailynews24-7.com',
		'dailynewsbin.com',
		'dailypolitics.info',
		'dailypoliticsusa.com',
		'dailysquib.co.uk',
		'dailystormer.com',
		'davidduke.com',
		'dailywire.com',
		'davidwolfe.com',
		'dcclothesline.com',
		'dcgazette.com',
		'delectabledietofpics.net',
		'departed.co',
		'der-postillon.com',
		'derfmagazine.com',
		'dineal.com',
		'disclose.tv',
		'diversitychronicle.wordpress.com',
		'doctorhealth365.com',
		'donaldtrumpnews.co',
		'drudgereport.com.co',
		'duffleblog.com',
		'duhprogressive.com',
		'eatinghealthytricks.com',
		'elelephantintheroom.blogspot.com',
		'elitereaders.com',
		'elkoshary.com',
		'elmundotoday.com',
		'embols.com',
		'empireherald.com',
		'empirenews.com',
		'empirenews.net',
		'empiresports.co',
		'enabon.com',
		'endingthefed.com',
		'enduringvision.com',
		'english.ruvr.ru',
		'eutimes.net',
		'everydayworldnews.com',
		'everythingnewdaily.com',
		'extraclubmagazine.com',
		'fakingnews.com',
		'fantasticword.com',
		'federalistpress.com',
		'fognews.ru',
		'fprnradio.com',
		'freepatriot.org',
		'freewoodpost.com',
		'fromthetrenchesworldreport.com',
		'geoengineeringwatch.org',
		'globalresearch.ca',
		'gomerblog.com',
		'gonzoglobe.com',
		'gossipknowledge.com',
		'govtslaves.info',
		'guardianlv.com',
		'gulagbound.com',
		'hangthebankers.com',
		'healthimpactnews.com',
		'holyobserver.com',
		'humansarefree.com',
		'huzlers.com',
		'ifyouonlynews.com',
		'igrewupinusa.info',
		'ijr.com',
		'indiaarising.com',
		'informetoday.com',
		'infowars.com',
		'instaworldnews.com',
		'intellihub.com',
		'intrendtoday.com',
		'inquisitor.com',
		'itaglive.com',
		'iwanttoexplore.com',
		'jesus-is-savior.com',
		'jonesreport.com',
		'landoverbaptist.org',
		'latestnews5.com',
		'legorafi.fr',
		'lewrockwell.com',
		'liberalamerica.org',
		'liberalbias.com',
		'libertymovementradio.com',
		'libertynews.com',
		'libertytalk.fm',
		'libertyunyielding.com',
		'libertyvideos.org',
		'lifeandabout.com',
		'lifeprevention.com',
		'lightlybraisedturnip.com',
		'livefreelivenatural.com',
		'livevote.com',
		'lushforlife.com',
		'madworldnews.com',
		'mediamass.net',
		'mediazone.news',
		'megafreshnews.com',
		'megynkelly.us',
		'miniplanet.us',
		'morningnewsusa.com',
		'mrconservative.com',
		'msnbc.website',
		'mydailyrelaxation.com',
		'nahadaily.com',
		'nationalreport.net',
		'naturalcuresnotmedicine.com',
		'naturalnews.com',
		'nbcpolitics.org',
		'nbcpoll.com',
		'ncscooper.com',
		'newcenturytimes.com',
		'news-hound.com',
		'news-hound.org',
		'newsbbc.net',
		'newsbiscuit.com',
		'newscenterusa.com',
		'newsexaminer.net',
		'newsfrompolitics.com',
		'newslo.com',
		'newsmutiny.com',
		'newsopening.com',
		'newsthump.com',
		'newstoad.net',
		'newswire-24.com',
		'nodisinfo.com',
		'notallowedto.com',
		'now8news.com',
		'nowtheendbegins.com',
		'nymeta.co',
		'nyuzer.com',
		'objectiveministries.org',
		'occupydemocrats.com',
		'occupyliberals.com',
		'odgossip.com',
		'openmindmagazine.com',
		'other98.com',
		'pakalertpress.com',
		'politicalblindspot.com',
		'politicalears.com',
		'politicalo.com',
		'politicalsitenews.com',
		'politicaltimes.org',
		'politicsbreaking.com',
		'politicsinformation.com',
		'politicsinfotoday.com',
		'politicsintheusa.com',
		'politicsinusa.com',
		'politicsusa.com',
		'powerpoliticians.com',
		'presidentialvoting2016.com',
		'press24.us',
		'presstv.ir',
		'prisonplanet.com',
		'prisonplanet.tv',
		'private-eye.co.uk',
		'projectveritas.com',
		'proudemocrat.com',
		'randpaulreview.com',
		'rawforbeauty.com',
		'rawws.com',
		'realfarmacy.com',
		'realnewsrightnow.com',
		'realplanetnews.com',
		'realprogress.online',
		'redflagnews.com',
		'reductress.com',
		'rense.com',
		'responsibletechnology.org',
		'rilenews.com',
		'rockcitytimes.com',
		'rt.com',
		'satiratribune.com',
		'satirewire.com',
		'scrappleface.com',
		'secretsofthefed.com',
		'shadowproof.com',
		'sott.net',
		'sourceplanet.net',
		'southweb.org',
		'speciallifeentertainment.com',
		'speld.nl',
		'spinzon.com',
		'sportspickle.com',
		'stneotscitizen.com',
		'stuppid.com',
		'suggesthealthytips.com',
		'superstation95.com',
		'theautogear.com',
		'thebeaverton.com',
		'thecarsmagazine.com',
		'thecivilian.co.nz',
		'thecommonsenseshow.com',
		'thecontroversialfiles.net',
		'thedailymash.co.uk',
		'thedailysheeple.com',
		'thedailywtf.com',
		'thedemocratic.site',
		'thefreethoughtproject.com',
		'thelapine.ca',
		'thelastgreatstand.com',
		'themideastbeast.com',
		'thenewamerican.com',
		'thenewsnerd.com',
		'theonion.com',
		'theoxymoron.co.uk',
		'thepeoplescube.com',
		'thepoke.co.uk',
		'theracketreport.com',
		'therightplanet.com',
		'therightstuff.biz',
		'therundownlive.com',
		'thespoof.com',
		'theunrealtimes.com',
		'theuspatriot.com',
		'thevalleyreport.com',
		'theworldstyle.com',
		'thisismynewworld.com',
		'topekasnews.com',
		'topinfopost.com',
		'topnewspolitics.com',
		'totalworldnews.com',
		'trendingnewsguide.com',
		'trendingnewstoday.net',
		'tribuneherald.net',
		'truthandaction.org',
		'truthbroadcastnetwork.com',
		'truthfeed.com',
		'truthfrequencyradio.com',
		'tunerspeed.com',
		'turnerradionetwork.com',
		'tyronetribulations.com',
		'twitchy.com',
		'unconfirmedsources.com',
		'undergroundhealth.com',
		'universepolitics.com',
		'usa2016elections.com',
		'usadailypolitics.com',
		'usadailytime.com',
		'usahitman.com',
		'usainfobox.com',
		'usajournalist.com',
		'usalinepolitics.com',
		'usalinepoliticsnow.com',
		'usamagazinestudio.com',
		'usanews24hrs.com',
		'usanewsflash.com',
		'usanewshome.com',
		'usanewsinsider.com',
		'usanewspolitics.com',
		'usanewsstudio.com',
		'usaonlinepolitics.com',
		'usaonlinetoday.com',
		'usaphase.com',
		'usapoliticsdaily.com',
		'usapoliticsnow.com',
		'usapoliticus.com',
		'usapowernews.com',
		'usascan.com',
		'usasupreme.com',
		'usatoday.com.co',
		'usatwentyfour.com',
		'usblastingnews.com',
		'usfanzone.com',
		'uslifetoday.com',
		'usmediacenter.com',
		'uspolitics24.com',
		'uspoliticslive.com',
		'usuncut.com',
		'usviewer.com',
		'veteranstoday.com',
		'vonpress.com',
		'votocrat.com',
		'wakingupwisconsin.com',
		'waterfordwhispersnews.com',
		'weeklyworldnews.com',
		'westernjournalism.com',
		'whydontyoutrythis.com',
		'wideawakeamerica.com',
		'winkprogress.com',
		'winningdemocrats.com',
		'witscience.org',
		'wnd.com',
		'world24monitor.com',
		'worldcallyoutoday.com',
		'worlddaily.info',
		'worldnewsdailyreport.com',
		'worldrumor.com',
		'worldstoriestoday.com',
		'worldtruth.tv',
		'worldwidehealthy.com',
		'wundergroundmusic.com',
		'yourfunpage.com',
		'yournewswire.com',
		'zaytung.com'
	];

	/**
	 * Loop over every link in the page to check the source.
	 */
	function linkWarning() {
		// Loop over each given source.
		$.each(bsDetectorLinks, function(index, url) {
			// Add to links.
			var badLink = 'a[href*="' + url + '"]';
			$(badLink).each(function() {
				if (!$(this).hasClass('bs-detector-processed')) {
					$(this).addClass('hint--error hint--large hint--bottom bs-detector-processed');
					$(this).attr('aria-label', 'This website is considered a questionable source.');
				}
			});
		});
	};

	// Execute the warnings.
	linkWarning();

	// When the user scrolls, check again.
	$(window).scroll(function() {
		linkWarning();
	});
}

// Run the detector when document ready.
$(document).ready(function() {
	_bsDetector();
});
