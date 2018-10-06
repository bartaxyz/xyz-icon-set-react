import ReactHTMLParser from 'react-html-parser';
import XYZIconSet, {
	IconOptions,
	IconComponents,
	iconNames,
	IconContstructorOptions,
} from 'xyz-icon-set';

export {
	IconTheme,
	IconOptions,
	IconContstructorOptions,
	IconComponents,
	IconCategory,
	IconName,
	IconComponentName,
	iconCategories,
	iconNames,
	iconComponentNames,
} from 'xyz-icon-set';

export interface IconProps {
	theme?: IconContstructorOptions['theme'];
	fillOpacity?: IconOptions['fillOpacity'];
}

const iconComponents = {};

const prepareIconSource = source => {
	return source
		.replace('xmlns:xlink', 'xmlnsXlink')
		.replace('xml:space', 'xmlSpace')
		.replace('fill-rule', 'fillRule')
		.replace('clip-rule', 'clipRule')
		.replace('fill-opacity', 'fillOpacity')
		.replace('stroke-miterlimit', 'strokeMiterlimit')
		.replace('stroke-linecap', 'strokeLinecap')
		.replace('stroke-linejoin', 'strokeLinejoin')
		.replace('viewbox', 'viewBox');
};

iconNames.forEach(iconName => {
	const IconClass = XYZIconSet[iconName];

	iconComponents[iconName] = (props: IconProps) => {
		const icon = new IconClass({
			theme: props.theme || 'regular',
		});
		const iconSource = icon.toString({
			fillOpacity: props.fillOpacity || 0,
		});
		return ReactHTMLParser(prepareIconSource(iconSource));
	};
});

export default iconComponents as IconComponents;
