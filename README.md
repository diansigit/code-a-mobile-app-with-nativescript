# Code a Mobile App With NativeScript
## Instructor: [Keyvan Kasaei](https://tutsplus.com/authors/keyvan-kasaei)

NativeScript is a framework for building cross-platform native mobile apps. It allows developers to use Javascript, Typescript or Angular to build apps for IOS & Android. Unlike Cordova, which uses WebView for rendering the UI of the app, NativeScript uses the native platform's rendering engine and accesses the native APIs, so that it provides a truly native user experience. 

In this course, Keyvan Kasaei will introduce you to NativeScript, and show you step-by-step how to build a simple application. Along the way you'll learn how to implement a simple app workflow with network requests, an MVVM architecture, and some of the most important NativeScript UI components. By the end, you'll understand why you should consider NativeScript for your next mobile app project.



## Source Files Description

This repository contains the source code for the course project. The app is a mini browser for GitHub. Users will login with their GitHub credentials and then are taken to **Details** screen which shows user profile meta information. Afterward, they can click through to a list of their repositories.


## Installation Process:

### Windows Machines:
1) Download & install [Node.js](https://nodejs.org/).
2) Install NativeScript Cli      

```bash
npm install -g nativescript
```

3) Install Android requirements
```
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://www.nativescript.org/setup/win'))"
```

4) please redirect to the downloaded folder and do:
```bash
tns install
```
5) Start the Project
```bash
tns run androind   
```

### OSX Machines:

1) Install Homebrew to simplify the installation process.
```bashe
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2) Download & install [Node.js](https://nodejs.org/).       
```bash
brew install homebrew/versions/node4-lts
```

3) Install NativeScript Cli
```bash
sudo npm install -g nativescript
```

4) Install Ios & Android requirements
```bash
ruby -e "$(curl -fsSL https://www.nativescript.org/setup/mac)"
```

5) please redirect to the downloaded folder and do:

```bash
tns install
```

#### To run Android:
```bash
tns livesync android --emulator --watch    
```

#### To run IOS:
```bash
tns livesync ios --emulator --watch    
```


## Resources
-  [Windows advanced installation](https://docs.nativescript.org/start/ns-setup-win)
-  [OSX advanced installation](https://docs.nativescript.org/start/ns-setup-os-x)
-  [Troubleshooting](https://docs.nativescript.org/start/troubleshooting)
-  [NodeJs](https://nodejs.org/en/) 
------


These are source files for the Envato Tuts+ course: [Code a Mobile App With NativeScript][published url]

Available on [Envato Tuts+](https://tutsplus.com). Teaching skills to millions worldwide.

[published url]: http://code.tutsplus.com/tutorials/code-a-mobile-app-with-nativescript