window.onload = function()
{
	const expandedClass = 'expanded';

	var expandButtons = document.getElementsByClassName('button-expand');

	for (var i = 0; i < expandButtons.length; i++)
	{
		var button = expandButtons[i];
		var container = button.closest(".collapsible");

		// if our url#hash exists, get the #hash, remove the # and compare to element id.
		// if it matches, open the section by default
		if(window.location.hash && window.location.hash.substring(1) === container.id)
		{
			SetContainerOpen(container, true);
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
		ToggleContainerOpen(container);
		e.preventDefault();
		return false;
	}

	function ToggleContainerOpen(container)
	{
		SetContainerOpen(container, !container.classList.contains(expandedClass));
	}

	function SetContainerOpen(container, isOpen)
	{
		if(isOpen && !container.classList.contains(expandedClass)) {
			container.classList.add(expandedClass);
		}
		else if(!isOpen && container.classList.contains(expandedClass)) {
			container.classList.remove(expandedClass);
		}
	}
};