# Keeping Color Data in Sync with Tailwind Config

This document explains how the `color-data.js` file stays in sync with your Tailwind configuration.

## Overview

The `color-data.js` file is used to display the color palette in the Design Elements page. It automatically stays in sync with the colors defined in your Tailwind configuration (`tailwind.config.js`) through direct import.

## Implementation

The `color-data.js` file directly imports the Tailwind config and processes the colors at runtime:

```javascript
import tailwindConfig from '../../tailwind.config.js';
const colors = tailwindConfig.theme.extend.colors;
// Process colors and export colorFamilies
```

This approach ensures that:

1. The color data is always up-to-date with your Tailwind config
2. No manual steps are required when you update colors
3. The Design Elements page always displays the latest color palette

## How It Works

When the `color-data.js` file is imported, it:

1. Imports the Tailwind config file
2. Extracts the colors from the config
3. Filters out non-object colors (like 'deep-blue', 'cobalt', etc.)
4. Formats the color family names and labels
5. Exports the processed color data as `colorFamilies`

## Benefits

- **Automatic Synchronization**: No need to run scripts or manually update files
- **Real-time Updates**: Changes to the Tailwind config are immediately reflected
- **Simplified Workflow**: Just update your Tailwind config, and the Design Elements page will show the latest colors

## Troubleshooting

If you encounter issues with the color data:

1. Make sure your Tailwind config is properly formatted
2. Check that the import path to the Tailwind config is correct
3. Verify that the color structure in your Tailwind config matches what the code expects

## Additional Notes

- The `color-data.js` file is used by the Design Elements page to display the color palette
- Changes to the Tailwind config will be reflected in the Design Elements page automatically
- The code in `color-data.js` can be customized to handle additional color formats or properties as needed 