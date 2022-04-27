let langWrapper = $(".lang_box"),
langBox = langWrapper.find(".lang");

//language option box toggle open
langBox.on({
	click: function (e) {
		e.preventDefault();
		langBox.toggleClass("open");
	}
})



