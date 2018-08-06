import ReactHTMLParser from 'react-html-parser';
import XYZIconSet from 'xyz-icon-set';

const categories = Object.keys(XYZIconSet);

const icons = {};

categories.forEach((category) => {
    const iconKeys = Object.keys(XYZIconSet[category]);

    icons[category] = [];
    iconKeys.forEach((iconKey) => {
        const iconObject = XYZIconSet[category][iconKey];
        const name = iconObject.name;
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

        icons[category][capitalizedName] = (props) => {
            return ReactHTMLParser(iconObject.source);
        }; 
    })
});

export default icons;
