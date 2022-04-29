import { existsSync, mkdirSync, writeFileSync } from "fs";
import * as rimraf from "rimraf";
import * as XYZIconSet from "xyz-icon-set";

const { iconNames } = XYZIconSet;

const iconsFolder = `${__dirname}/icons`;

// Remove existing icons folder
if (existsSync(iconsFolder)) {
  rimraf.sync(iconsFolder);
}

// (Re)create icons folder
mkdirSync(iconsFolder);

const themes = Object.keys(
  new XYZIconSet.PaperPlaneIcon().source
) as XYZIconSet.IconTheme[];

const getIconNameWithTheme = (
  iconName: string,
  theme: XYZIconSet.IconTheme
) => {
  if (theme === "regular") {
    return iconName;
  } else {
    const capitalizedTheme = theme.replace(/^([a-z])/, (g) => g.toUpperCase());
    return iconName.replace("Icon", `${capitalizedTheme}Icon`);
  }
};

// Generate React components for all icons
iconNames.map((iconName) => {
  const IconConstructor = XYZIconSet[iconName];

  themes.map((theme) => {
    const iconInstance = new IconConstructor({ theme });

    const iconString = iconInstance.toString();

    const iconNameWithTheme = getIconNameWithTheme(iconName, theme);

    const fileLines: string[] = [
      `import * as React from 'react';`,
      `import { IconProps } from '../types';`,
      "",
      `export const ${iconNameWithTheme}: React.FC<IconProps> = ({`,
      "\twidth = 24,",
      "\theight = 24,",
      "\tfillOpacity = 0,",
      "\t...props",
      `}) => (`,
      "\t" +
        iconString
          .replace('width="24px"', "width={`${width}px`}")
          .replace('height="24px"', "height={`${height}px`}")
          .replace('xmlns="http://www.w3.org/2000/svg"', "{...props}")
          .replace('fill-opacity="0"', "fillOpacity={fillOpacity}")
          // Replace dash-case to camelCase
          .replace(/-([a-z])/g, (g) => g[1].toUpperCase()),
      `);`,
    ];

    writeFileSync(
      `${iconsFolder}/${iconNameWithTheme}.tsx`,
      fileLines.join("\n")
    );
  });
});

// Create icons/index.ts and export all icons
writeFileSync(
  `${iconsFolder}/index.ts`,
  iconNames
    .map((iconName) => {
      return themes
        .map((theme) => {
          return `export * from './${getIconNameWithTheme(iconName, theme)}';`;
        })
        .join("\n");
    })
    .join("\n")
);
