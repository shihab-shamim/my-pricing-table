import { useState } from 'react';

const ClipBoard = ({ shortcode }) => {
	const [hasCopied, setHasCopied] = useState(false);

	const handleCopy = async () => {
		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(shortcode);
			} else {
				const textArea = document.createElement('textarea');
				textArea.value = shortcode;
				textArea.style.position = 'fixed';
				textArea.style.opacity = '0';
				document.body.appendChild(textArea);
				textArea.focus();
				textArea.select();
				document.execCommand('copy');
				document.body.removeChild(textArea);
			}

			setHasCopied(true);
			setTimeout(() => setHasCopied(false), 2000);
		} catch (err) {
			// Ignore clipboard errors
		}
	};

	return (
		<section style={{ marginBottom: '24px' }}>
			<div
				style={{
					textAlign: 'center',
					marginBottom: '16px'
				}}
			>
				<p
					style={{
						fontSize: '15px',
						fontWeight: 500,
						marginBottom: '10px'
					}}
				>
					Copy this shortcode and paste it into your post, page, or text widget content:
				</p>

				<button
					onClick={handleCopy}
					type="button"
					style={{
						border: 'none',
						background: '#2271b1',
						color: '#fff',
						width: '100%',
						maxWidth: '360px',
						margin: '0 auto',
						display: 'flex',
						justifyContent: 'center',
						fontSize: '15px',
						fontWeight: 600,
						padding: '10px 16px',
						borderRadius: '5px',
						cursor: 'pointer',
						transition: '0.2s'
					}}
				>
					{hasCopied ? 'Copied Successfully!' : shortcode}
				</button>
			</div>
		</section>
	);
};

export default ClipBoard;
