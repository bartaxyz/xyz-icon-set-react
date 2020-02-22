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

	iconComponents[iconName] = ({
		theme = 'regular',
		fillOpacity = 0,
	}: IconProps) => {
		const icon = new IconClass({ theme });
		const iconSource = icon.toString({ fillOpacity });
		return ReactHTMLParser(prepareIconSource(iconSource));
	};
});

export type IconType = (props: IconProps) => ReturnType<typeof ReactHTMLParser>

export default iconComponents as IconComponents<IconType>;
