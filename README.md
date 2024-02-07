# Storybook - Expo NativeWind Boilerplate

React Native Expo boilerplate to design RN Components with [Storybook](https://storybook.js.org/), for Native **AND** Web, using [NativeWind](https://www.nativewind.dev/v4/overview) styling (Reanimated included for animations).

This is based on [dannyhw/expo-template-storybook](https://github.com/dannyhw/expo-template-storybook) with NativeWind on top. 🧂

![image](https://user-images.githubusercontent.com/3481514/145904252-92e3dc1e-591f-410f-88a1-b4250f4ba6f2.png)

# Getting Started

```sh
npx create-expo-app --template expo-nativewind-template-storybook AwesomeStorybookForAllPlatforms
```

# App

This will start your regular RN App.

```sh
yarn start
```

# Storybook

To start the Storybook instance, you have 2 options:
- ondevice: run the React Native version of your components. Best for: native, but works for web as well (no hot-reloading on the web)
- web: run a full Storybook version with more advanced features, including hot-reloading for Web. Doesn't run on native devices.

# Ondevice

In this template you can now run `yarn storybook` to start ondevice storybook or `yarn start` to start your expo app.
This works via env variables and expo constants.

```sh
# either
yarn storybook

# ios
yarn storybook:ios

# android
yarn storybook:android
```

If you add new stories on the native (ondevice version) you either need to have the watcher running or run the stories loader

To update the stories one time

```sh
yarn storybook-generate
```

# Web

Start react native web storybook:

```
yarn storybook:web
```

build react native web storybook:

```sh
yarn build-storybook
```
