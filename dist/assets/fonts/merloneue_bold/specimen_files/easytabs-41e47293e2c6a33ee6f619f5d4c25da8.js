(function(t){t.fn.easyTabs=function(e){var a=jQuery.extend({fadeSpeed:"fast",defaultContent:1,activeClass:"active"},e)
t(this).each(function(){var e="#"+this.id
if(""==a.defaultContent&&(a.defaultContent=1),"number"==typeof a.defaultContent)var n=t(e+" .tabs li:eq("+(a.defaultContent-1)+") a").attr("href").substr(1)
else n=a.defaultContent
function s(){t(e+" .easytabs-tab-content").hide()}function f(n){s(),t(e+" .tabs li").removeClass(a.activeClass),t(e+" .tabs li a[href=#"+n+"]").closest("li").addClass(a.activeClass),"none"!=a.fadeSpeed?t(e+" #"+n).fadeIn(a.fadeSpeed):t(e+" #"+n).show()}t(e+" .tabs li a").each(function(){var e=t(this).attr("href").substr(1)
t("#"+e).addClass("easytabs-tab-content")}),s(),f(n),t(e+" .tabs li").click(function(){return f(t(this).find("a").attr("href").substr(1)),!1})})}})(jQuery)
