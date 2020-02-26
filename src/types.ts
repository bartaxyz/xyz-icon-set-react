import { IconTheme } from 'xyz-icon-set';

export interface IconProps extends React.SVGProps<SVGElement> {
	width?: number;
	height?: number;
	fillOpacity?: number;
	theme?: IconTheme;
}