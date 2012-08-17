(function ($) {
	$.fn.money_field = function (options) {
		var defaults = {
			width: null
		};
		var options = $.extend(defaults, options);

		return this.each(function () {
			obj = $(this);
			if (options.width)
				obj.css('width', options.width + 'px');
			obj.wrap("<div class='input-prepend'>");
			obj.before("<span class='dropdown'>" +
	"<div class='dropdown-toggle add-on'>" +
	'<span>$</span><b class="caret"></b></div>' +
	'<ul class="dropdown-menu" style="min-width:inherit">' +
		'<li><a href="#">$</a></li>' +
		'<li><a href="#">&pound;</a></li>' +
		'<li><a href="#">&euro;</a></li>' +
	'</ul>' +
	"</span>");
			obj.prev().find('.dropdown-toggle').dropdown();
			obj.prev().find('li').click(function () {
				obj.prev().find('.add-on > span').text($(this).text());
			});
		});
	};
})(jQuery);