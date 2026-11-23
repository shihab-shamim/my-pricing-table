import { __ } from '@wordpress/i18n';

const Theme = ({ attributes }) => {
	const { theme = 'demo-1', tables = [] } = attributes;

	if (!tables || !tables.length) {
		return null;
	}

	const renderFeatures = (features = [], isChecklist = false) => (
		<ul>
			{features.map((feat, idx) => {
				const isDis = isChecklist && feat.enabled === false;
				return (
					<li key={idx} className={isDis ? 'disable' : ''}>
						{feat.text}
					</li>
				);
			})}
		</ul>
	);

	switch (theme) {
		case 'demo-1':
			return (
				<div className="bppt_pricing">
					{tables.map((tbl, i) => {
						const scheme = tbl.colorScheme && tbl.colorScheme !== 'default' ? tbl.colorScheme : '';
						return (
							<div key={i} className={`plan ${scheme}`.trim()}>
								<div className="plan-inner">
									{tbl.isFeatured && tbl.badge && <div className="hot">{tbl.badge}</div>}
									<div className="plan-entry-title">
										<h3>{tbl.name}</h3>
										<div className="price">
											{tbl.currency}{tbl.price}
											<span>/{tbl.unit}</span>
										</div>
									</div>
									{tbl.features && tbl.features.length > 0 && (
										<div className="plan-entry-content">
											{renderFeatures(tbl.features)}
										</div>
									)}
									<div className="bttn">
										<a href={tbl.btnLink || '#'}>{tbl.btnText || __('Choose Plan', 'bpricing')}</a>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			);

		case 'demo-2':
			return (
				<div className="bppt_container">
					{tables.map((tbl, i) => {
						const scheme = tbl.colorScheme && tbl.colorScheme !== 'default' ? tbl.colorScheme : '';
						return (
							<div key={i} className={`pricingTableTwo ${scheme}`.trim()}>
								<div>
									<div className="pricingTable-header">
										<h3 className="title">{tbl.name}</h3>
									</div>
									<div className="price-value">
										{tbl.currency}{tbl.price}
										<span>/{tbl.unit}</span>
									</div>
									{tbl.features && tbl.features.length > 0 && (
										<div className="pricing-content">
											{renderFeatures(tbl.features)}
										</div>
									)}
									<div className="pricingTable-signup">
										<a href={tbl.btnLink || '#'}>{tbl.btnText || __('Choose Plan', 'bpricing')}</a>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			);

		case 'demo-3':
			return (
				<div className="bppt_table3">
					{tables.map((tbl, i) => {
						const scheme = tbl.colorScheme && tbl.colorScheme !== 'default' ? tbl.colorScheme : '';
						return (
							<div key={i} className={`pricingTable ${scheme}`.trim()}>
								<div className="pricingTable-header">
									<h3 className="title">{tbl.name}</h3>
								</div>
								<div className="price-value">
									<span className="amount">
										{tbl.currency}{tbl.price}
									</span>
									<span className="duration">/{tbl.unit}</span>
								</div>
								{tbl.features && tbl.features.length > 0 && (
									<div className="pricing-content">
										{renderFeatures(tbl.features)}
									</div>
								)}
								<div className="pricingTable-signup-three">
									<a href={tbl.btnLink || '#'}>{tbl.btnText || __('Choose Plan', 'bpricing')}</a>
								</div>
							</div>
						);
					})}
				</div>
			);

		case 'demo-4':
			return (
				<div className="priceTableBGBefore columns-3 columns-tablet-2 columns-mobile-1">
					{tables.map((tbl, i) => {
						const scheme = tbl.colorScheme && tbl.colorScheme !== 'default' ? tbl.colorScheme : '';
						return (
							<div key={i} className={`pricingTableFour ${scheme}`.trim()}>
								<div className="pricingContent">
									<div>
										<div className="pricingHeader">
											<h3 className="title">{tbl.name}</h3>
										</div>
										{tbl.features && tbl.features.length > 0 && (
											<ul className="pricingFeatures">
												{tbl.features.map((feat, fIdx) => (
													<li key={fIdx} className={feat.enabled === false ? 'disable' : ''}>
														{feat.text}
													</li>
												))}
											</ul>
										)}
									</div>
									<div>
										<div className="pricingValue">
											<span className="amount">
												{tbl.currency}{tbl.price}
											</span>
											<span className="duration">{tbl.unit}</span>
										</div>
										<div className="pricingSignUp">
											<a href={tbl.btnLink || '#'}>{tbl.btnText || __('Choose Plan', 'bpricing')}</a>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			);

		case 'demo-5':
		default:
			return (
				<div className="priceTableGradient columns-3 columns-tablet-2 columns-mobile-1">
					{tables.map((tbl, i) => {
						const scheme = tbl.colorScheme && tbl.colorScheme !== 'default' ? tbl.colorScheme : '';
						return (
							<div key={i} className={`pricingTable ${scheme}`.trim()}>
								<div>
									<div className="pricingHeader">
										<h3 className="title">{tbl.name}</h3>
									</div>
									<div className="pricingValue">
										<span className="amount">
											{tbl.currency}{tbl.price}
										</span>
										<span className="duration">/{tbl.unit}</span>
									</div>
									{tbl.features && tbl.features.length > 0 && (
										<ul className="pricingFeatures">
											{tbl.features.map((feat, fIdx) => (
												<li key={fIdx} className={feat.enabled === false ? 'disable' : ''}>
													{feat.text}
												</li>
											))}
										</ul>
									)}
								</div>
								<div className="pricingSignUp">
									<a href={tbl.btnLink || '#'}>{tbl.btnText || __('Choose Plan', 'bpricing')}</a>
								</div>
							</div>
						);
					})}
				</div>
			);
	}
};

export default Theme;
