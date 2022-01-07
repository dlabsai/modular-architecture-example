# Modular Architecture example
This repository is an example of Modular Architecture in use based on a fragment from our *WBT Kalkulator* application.

## Configuration instructions

### Prerequisites
 - Node >= 14.18.2
 - NPM >= 6.14.15
 - Yarn >= 1.22.1

### General setup
 1. Install required prerequisites
 2. In the project root run `yarn && yarn bootstrap`
 3. [Only for iOS] Navigate to `packages/mobile/ios` and run `pod install`

### Run core
 1. In the project root run `yarn start:core`
### Run web
 1. In the project root run `yarn start:web`

### Run mobile
#### Android
 1. In separate terminals, in the project root run `yarn start:core`
 2. then `yarn start:android`

#### iOS
 1. In separate terminals, in the project root run `yarn start:core`
 2. then `yarn start:ios`

## Linting and testing
To run unit tests for all of the packages, in the project root run `yarn test`.

To lint all the packages, in the project root run `yarn lint`.

## Known issues
 - When encountering build errors for the iOS app on M1 Mac, use Rosetta for Xcode and terminal.