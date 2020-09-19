chrome.contextMenus.create({
	type: "normal",
	title: "Speak out the selected content with Voixt",
	contexts: ["selection"],
	onclick: function(info, tabs) {
		var s = info.selectionText;
		if(s && s.length) {
			narrate(s, function(response) {
				if(response) { console.log(response); }
			});
		} else {
			console.log("Nothing to narrate.");
		}
	}
}, 
function() {
	if(chrome.runtime.lastError !== undefined) { 
		console.error("Runtime error:", chrome.runtime.lastError.message); 
	}
});