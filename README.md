# Intoruction to NativeScript
## Instructor: [Keyvan Kasaei](https://tutsplus.com/authors/keyvan-kasaei)

NativeScript is a framework for building cross-platform native mobile apps. It allows developers to use Javascript, Typescript or Angular to build apps for IOS & Android.
Unlike Cordova, which uses WebView for rendering the UI of the app, NativeScript uses the native platform's rendering engine and accesses the Native API, which means that it provides a truly native user experience. 

In this hort course, Tutsplus Author Keyvan Kasaei will introduce you to Nativescript, and step by step helps you to get started building a simple application, get familier with it's simple workflow and finally we disover why you should consider Nativescript for your next mobile app project.




## Source Files Description

This repository contains the a NativeScript example Application written in pure JavaScript and covers various aspects. The app is a mini browser for github. Users will login with their github Credentials and then are taken to Details screen which shows User Profile's Meta Information and fianlly the last screen is the repositories List.


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