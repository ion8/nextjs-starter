/**
 * Color data from Tailwind config
 * This file dynamically imports the Tailwind config to keep colors in sync
 */

// Import the Tailwind config
import tailwindConfig from '../../tailwind.config.js';

// Extract colors from the config
const colors = tailwindConfig.theme.extend.colors;

// Transform the colors into the format needed for the design elements page
export const colorFamilies = Object.entries(colors)
  .filter(([key]) => {
    // Skip non-object colors (like 'deep-blue', 'cobalt', etc.)
    return typeof colors[key] === 'object' && !Array.isArray(colors[key]);
  })
  .map(([familyName, shades]) => {
    // Convert family name to title case (e.g., 'light-blue' -> 'Light Blue')
    const formattedName = familyName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Create the color objects
    const colorObjects = Object.entries(shades).map(([shade, value]) => {
      // Format the label (e.g., 'r900' -> 'Red R900')
      const prefix =
        familyName === 'red'
          ? 'R'
          : familyName === 'orange'
            ? 'OR'
            : familyName === 'green'
              ? 'G'
              : familyName === 'blue'
                ? 'B'
                : familyName === 'light-blue'
                  ? 'LB'
                  : familyName === 'oxford'
                    ? 'OX'
                    : familyName === 'yellow'
                      ? 'Y'
                      : familyName === 'purple'
                        ? 'P'
                        : familyName === 'turquoise'
                          ? 'T'
                          : familyName === 'burnt-sienna'
                            ? 'BS'
                            : familyName === 'deep-blue'
                              ? 'DB'
                              : familyName === 'neutral'
                                ? 'N'
                                : familyName === 'teal'
                                  ? 'T'
                                  : 'X';

      return {
        name: shade,
        value: `bg-${familyName}-${shade}`,
        label: `${formattedName} ${prefix}${shade.slice(1)}`,
      };
    });

    return {
      name: formattedName,
      colors: colorObjects,
    };
  });
