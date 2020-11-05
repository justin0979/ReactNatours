module.exports = {
  presets: [
    [
      "@babel/env",
      {
        useBuiltIns: "usage",
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ],
    "@babel/react",
    "@babel/typescript",
  ],
  plugins: [
    "@babel/transform-runtime",
    "@babel/proposal-class-properties",
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "&components": "./src/components",
          "&data": "./src/data",
          "&img": "./src/img",
          "&sass": "./src/sass",
          "&sections": "./src/components/sections",
          "#test": "./test",
          "&tools": "./src/components/tools",
        },
      },
    ],
  ],
};
