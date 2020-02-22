import ReactHTMLParser from 'react-html-parser';
import XYZIconSet, {
	IconOptions,
	IconComponents,
	iconNames,
	IconContstructorOptions,
} from 'xyz-icon-set';
import { FunctionComponent } from 'react';

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

iconNames.forEach(iconName => {
	const IconClass = XYZIconSet[iconName];

	const IconComponent = ({
		theme = 'regular',
		fillOpacity = 0,
	}: IconProps) => {
		const icon = new IconClass({ theme });
		const iconSource = icon.toString({ fillOpacity });
		return ReactHTMLParser(iconSource);
	};

	iconComponents[iconName] = IconComponent;
});

export type IconType = FunctionComponent<IconProps>;

export default iconComponents as IconComponents<IconType>;
