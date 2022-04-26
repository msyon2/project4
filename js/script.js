let langWrapper = $(".lang_box"),
langBox = langWrapper.find(".lang"),
langOption = langWrapper.find("li.lang_option");

//language option box toggle open
langBox.on({
	click: function (e) {
		e.preventDefault();
		langBox.toggleClass("open")
	}
})
//language option select
langOptionToggle = $.each(langOption, function(i,e){
	current = $(this);
	current.click(function (e) {
		e.preventDefault();

		langOption.removeClass("active");
		langOption.eq(i).addClass("active");
		langBox.removeClass("open");
	})
})
langOption.eq(0).addClass("active");



