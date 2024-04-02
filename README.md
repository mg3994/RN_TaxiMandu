# USES
Use of Type not interface => as interface offers object map but Type can be used with Strings , Nymbers and Objects
**Prefered Way**

# Starter
*
```
react-native init Taximandu --package-name=com.taximandu.user
```


# Learning Curve 
## ToDo's 
  - > **Screens**
----
* RESPONSIVE
* Splash
* Onboarding
* Welcome
* Login/SignUp
* Social Login
* Home
* ThemeScreen
* Bottom Navbar
* Alert
* Snackbar
* Side Navigatiion Drawer
* Image Slider
* List Data
* Selection Of Datwa from list
* Navigation InBetween
* Local DataBase
* Map Screen
* Stack NAVIGATION
* Courasal Slider 
* Image view
* Svg View
* Shader Views
* Custom ----
* Lottie
* API Request
* Loader
* Search BAR
  


# TODO Learn
## Steps
* > **Taken Steps**
  ---

* Folder Structure
* Solid Principle
* Responsive Design
* Theme
* Route
* Locale
* Deeplinking
* Navigation
* Storage






Testing: Write unit tests and integration tests to ensure the reliability of your app.
Documentation: Document your codebase thoroughly to help other developers understand your implementation.
Performance: Optimize your app's performance by minimizing re-renders and reducing unnecessary computations.
Accessibility: Ensure your app is accessible to all users by following accessibility best practices.



# Folder Structure
```bash
- src/
  - assets/
    - images/
    - fonts/
    - svgs/
  - components/
    - Button/
      - Button.tsx
      - Button.styles.ts
    - TextInput/
      - TextInput.tsx
      - TextInput.styles.ts
  - screens/
    - Home/
      - HomeScreen.tsx
      - HomeScreen.styles.ts
    - Profile/
      - ProfileScreen.tsx
      - ProfileScreen.styles.ts
  - navigation/
    - MainNavigator.tsx
  - services/
    - AuthService.ts
    - ApiService.ts
  - utils/
    - helpers.ts
  - theme/
    - colors.ts
    - typography.ts
  - localization/
    - en.json
    - fr.json

```
[Navigation](https://reactnavigation.org/)
[responsive](https://www.npmjs.com/package/react-native-responsive-dimensions)

# PAckages Used
> yarn add @react-navigation/native
> yarn add react-native-screens react-native-safe-area-context
> yarn add @react-navigation/native-stack
> yarn add react-native-responsive-dimensions
> yarn add @react-native-async-storage/async-storage
> yarn add axios



```bash
 yarn add @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/native-stack react-native-responsive-dimensions
yarn add v1.22.22
[1/5] Validating package.json...
[2/5] Resolving packages...
[3/5] Fetching packages...
[4/5] Linking dependencies...
[5/5] Building fresh packages...

success Saved lockfile.
success Saved 15 new dependencies.
info Direct dependencies
├─ @react-navigation/native-stack@6.9.26
├─ @react-navigation/native@6.1.17
├─ react-native-responsive-dimensions@3.1.1
├─ react-native-safe-area-context@4.9.0
└─ react-native-screens@3.30.1
info All dependencies
├─ @react-navigation/core@6.4.16
├─ @react-navigation/elements@1.3.30
├─ @react-navigation/native-stack@6.9.26
├─ @react-navigation/native@6.1.17
├─ @react-navigation/routers@6.1.9
├─ decode-uri-component@0.2.2
├─ filter-obj@1.1.0
├─ query-string@7.1.3
├─ react-freeze@1.0.4
├─ react-native-responsive-dimensions@3.1.1
├─ react-native-safe-area-context@4.9.0
├─ react-native-screens@3.30.1
├─ split-on-first@1.1.0
├─ strict-uri-encode@2.0.0
```
```bash
 yarn install
yarn install v1.22.22
info No lockfile found.
[1/5] Validating package.json...
[2/5] Resolving packages...
warning react-native > @react-native/codegen > jscodeshift > @babel/plugin-proposal-class-properties@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-class-properties instead.
warning react-native > @react-native/codegen > jscodeshift > @babel/plugin-proposal-nullish-coalescing-operator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-nullish-coalescing-operator instead.
warning react-native > @react-native/codegen > jscodeshift > @babel/plugin-proposal-optional-chaining@7.21.0: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-optional-chaining instead.
warning react-native > @react-native/community-cli-plugin > @react-native/metro-babel-transformer > @react-native/babel-preset > @babel/plugin-proposal-class-properties@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-class-properties instead.
warning react-native > @react-native/community-cli-plugin > @react-native/metro-babel-transformer > @react-native/babel-preset > @babel/plugin-proposal-nullish-coalescing-operator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-nullish-coalescing-operator instead.
warning react-native > @react-native/community-cli-plugin > @react-native/metro-babel-transformer > @react-native/babel-preset > @babel/plugin-proposal-optional-chaining@7.21.0: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-optional-chaining instead.
warning react-native > @react-native/community-cli-plugin > @react-native/metro-babel-transformer > @react-native/babel-preset > @babel/plugin-proposal-numeric-separator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-numeric-separator instead.
warning react-native > @react-native/community-cli-plugin > @react-native/metro-babel-transformer > @react-native/babel-preset > @babel/plugin-proposal-object-rest-spread@7.20.7: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-object-rest-spread instead.
warning react-native > @react-native/community-cli-plugin > @react-native/metro-babel-transformer > @react-native/babel-preset > @babel/plugin-proposal-async-generator-functions@7.20.7: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-async-generator-functions instead.
warning react-native > @react-native/community-cli-plugin > @react-native/metro-babel-transformer > @react-native/babel-preset > @babel/plugin-proposal-optional-catch-binding@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-optional-catch-binding instead.
[3/5] Fetching packages...
[4/5] Linking dependencies...
[5/5] Building fresh packages...

success Saved lockfile.
```

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.


```bash
"enum": [
            "AGPL-3.0-only",
            "Apache-2.0",
            "BSD-2-Clause",
            "BSD-3-Clause",
            "BSL-1.0",
            "CC0-1.0",
            "CDDL-1.0",
            "CDDL-1.1",
            "EPL-1.0",
            "EPL-2.0",
            "GPL-2.0-only",
            "GPL-3.0-only",
            "ISC",
            "LGPL-2.0-only",
            "LGPL-2.1-only",
            "LGPL-2.1-or-later",
            "LGPL-3.0-only",
            "LGPL-3.0-or-later",
            "MIT",
            "MPL-2.0",
            "MS-PL",
            "UNLICENSED"
          ]
```


# ToDO's
```
*iOS*
After installing the npm package, we need to install the pod.

$ (cd ios && pod install)
# --- or ---
$ npx pod-install
Enabling Google Maps
If you want to enable Google Maps on iOS, obtain the Google API key and edit your AppDelegate.m(m) as follows:

+ #import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate
...

(BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
+  [GMSServices provideAPIKey:@"_YOUR_API_KEY_"]; // add this line using the api key obtained from Google Console
...
```