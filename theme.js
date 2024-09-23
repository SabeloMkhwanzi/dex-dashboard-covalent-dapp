// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark", // This makes dark mode the default
  // useSystemColorMode: true, // Commented out since we want to enforce dark mode, not use system preferences
};

// 3. extend the theme
const theme = extendTheme({ config });

export default theme;
