# Hello World React Native

This project contains a simple CRUD cross-platform app built with React Native
and WatermelonDB written in TypeScript.

It uses the React Navigation library for managing screen transitions and route definitions.

It doesn't use any component libraries, only vanilla
components wrapped around React Native components. The only exception is React
Native Picker Select, a library that offers a reasonable component for picking
an option among a list of options (like what select does in HTML).

It uses the full-featured WatermelonDB offline database solution for storing records. Also, I've built a custom seeding mechanism for unattended
database updates.

Inspired by Ignite CLI's boilerplate project.

Tested in Android only. For learning purposes.

## Quick start

1.  **Setup your environment.**

    Follow the [official environment setup guide](https://reactnative.dev/docs/0.63/environment-setup).

1.  **Get the project code.**

    Use [degit](https://github.com/Rich-Harris/degit) to download this project.

    ```sh
    # Download the project
    npx degit felipeozalmeida/hello-world-react-native hello-world-react-native
    ```

1.  **Install the dependencies.**

    Navigate into the project's directory and install the necessary dependencies.

    ```sh
    # Navigate to the directory
    cd hello-world-react-native/

    # Install the dependencies
    yarn
    ```

1.  **Browse the app.**

    Open the app in a mobile operating system of your choice.

    ```sh
    # Open in Android
    yarn android

    # Open in iOS
    yarn ios
    ```

1.  **Debugging the app.**

    Use React DevTools for a seamless debugging experience when viewing your app's component tree.

    ```sh
    # Open React DevTools
    yarn react-devtools
    ```

1.  **Integration with Visual Studio Code.**

    Open the `Extensions` menu, search for `React Native Tools` from `Microsoft` and install it.
    You will be able to run your app using `F5` and debug inside the editor.

## References

1. [Official React Native Docs](https://reactnative.dev/docs/0.63/getting-started)
1. [Official React Native Picker Select Docs](https://github.com/lawnstarter/react-native-picker-select)
1. [Official React Navigation Docs](https://reactnavigation.org/docs/getting-started)
1. [Official WatermelonDB Docs](https://nozbe.github.io/WatermelonDB)
1. [Official Ignite CLI Repository](https://github.com/infinitered/ignite)
