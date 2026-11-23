// !Adjusted with post.scss
import './post.scss';

window.copybpptAdminShortcode = id => {
	var input = document.querySelector('#bpptAdminShortcode-' + id + ' input');
	var tooltip = document.querySelector('#bpptAdminShortcode-' + id + ' .tooltip');
	input.select();
	input.setSelectionRange(0, 30);
	document.execCommand('copy');
	tooltip.innerHTML = wp.i18n.__('Copied Successfully!', 'bpricing');
	setTimeout(() => {
		tooltip.innerHTML = wp.i18n.__('Copy To Clipboard', 'bpricing');
	}, 1500);
}