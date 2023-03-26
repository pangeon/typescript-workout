# typescript-workout

- exercises from: [link](https://www.packtpub.com/product/the-typescript-workshop/9781838828493)
- authors repository: [link](https://github.com/PacktWorkshops/The-TypeScript-Workshop)

# Requirements

- [Node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Typescript](https://www.npmjs.com/package/typescript)

```
npm install -g typescript
```

# Start

1. Compile ts file:
```
tsc <file_name>.ts
```

2. Run js output file:
```
node <file_name>.js
```
3. Run typescript file without js

```
npx ts-node <file_name>.ts
```

# Test using
Documentation: [JEST - Getting Started](https://jestjs.io/docs/getting-started)

1. Add tsconfig.json
```
tsc --init 
```

2. Install npm packages:
```
npm install -D jest ts-jest @types/jest
```

3. Add basic config:
```
npx ts-jest config:init
```

4. Add in packages.json:
```
"scripts": {
    "test": "jest --coverage"
},
```

5. Run tests:
```
npm test
```

# Dependencies

- @angular-devkit/build-angular@15.2.4
- @angular/animations@15.2.4
- @angular/cli@15.2.4
- @angular/common@15.2.4
- @angular/compiler-cli@15.2.4
- @angular/compiler@15.2.4
- @angular/core@15.2.4
- @angular/forms@15.2.4
- @angular/platform-browser-dynamic@15.2.4
- @angular/platform-browser@15.2.4
- @angular/router@15.2.4
- @types/express@4.17.17
- @types/http-server@0.12.1
- @types/jasmine@4.3.1
- @types/jest@29.5.0
- @types/lodash@4.14.191
- @types/mocha@10.0.1
- @types/node-fetch@2.6.2
- @types/node@18.15.10
- express@4.18.2
- inversify@6.0.1
- jasmine-core@4.5.0
- jest@29.5.0
- karma-chrome-launcher@3.1.1
- karma-coverage@2.2.0
- karma-jasmine-html-reporter@2.0.0
- karma-jasmine@5.1.0
- karma@6.4.1
- lodash@4.17.21
- node-fetch@2.6.9
- reflect-metadata@0.1.13
- rxjs@7.8.0
- ts-jest@29.0.5
- ts-node@10.9.1
- tslib@2.5.0
- typescript@4.9.5
- zone.js@0.12.0