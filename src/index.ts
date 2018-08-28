import ReactHTMLParser from 'react-html-parser';
import XYZIconSet, { IconTheme, IconComponents } from 'xyz-icon-set';

export interface IconProps {
	theme: IconTheme;
}

const iconKeys = Object.keys(XYZIconSet);
const iconComponents = {};

const prepareIconSource = source => {
	return source
		.replace('xmlns:xlink', 'xmlnsXlink')
		.replace('xml:space', 'xmlSpace');
};

iconKeys.forEach(iconKey => {
	const iconObject = XYZIconSet[iconKey];
	const name = iconObject.regular.name;
	const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

	iconComponents[`${capitalizedName}Icon`] = (props: IconProps) => {
		const theme = props.theme || 'regular';
		return ReactHTMLParser(prepareIconSource(iconObject[theme].source));
	};
});

export default iconComponents as IconComponents;
