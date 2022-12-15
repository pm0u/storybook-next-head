module.exports = {
  "stories": ["../components/**/*.stories.*"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    docsPage: "automatic"
  }
};