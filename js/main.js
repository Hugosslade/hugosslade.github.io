window.onload = function()
{
	var expandButtons = document.getElementsByClassName('button-expand');

	for (var i = 0; i < expandButtons.length; i++)
	{
		var button = expandButtons[i];
		var container = button.closest(".collapsible");

		// if our url#hash exists, get the #hash, remove the # and compare to element id.
		// if it matches, open the section by default
		if(window.location.hash && window.location.hash.substring(1) === container.id)
		{
			ExpandOrCloseContainer(container);
			container.scrollIntoView(true);
		}

		button.addEventListener("click", OnExpandButtonClick, false);
	}

	function FindAncestor (el, sel)
	{
	    while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el,sel)));
	    return el;
	}

	function OnExpandButtonClick(e)
	{
		var container = this.closest(".collapsible");

		ExpandOrCloseContainer(container);
			
		e.preventDefault();
		return false;
	}

	function ExpandOrCloseContainer(container)
	{
		if (container.classList.contains('expanded'))
		{
			container.classList.remove('expanded');
		}
		else
		{
			container.classList.add('expanded');
		}
	}
};