window.onload = function()
{
	function findAncestor (el, sel) {
	    while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el,sel)));
	    return el;
	}

	var expandButtons = document.getElementsByClassName('button-expand');

	for (var i = 0; i < expandButtons.length; i++) {
		var button = expandButtons[i];

		window.a = button;

		console.log(button);

		button.addEventListener("click", function(e){
			console.log(this);
			
			var container = findAncestor(this, ".collapsible");

			if(container.classList.contains('expanded'))
			{
				container.classList.remove('expanded');
			}
			else
			{
				container.classList.add('expanded');
			}
			
			e.preventDefault();
			return false;

		}, false);
	}

	function expandOrCollapseParent(button)
	{
	}
};