# typescript-workout

The repository contains microprograms based on [The TypeScript Workshop](https://www.packtpub.com/product/the-typescript-workshop/9781838828493) and other TypeScript exercises.

- Authors repository: [link](https://github.com/PacktWorkshops/The-TypeScript-Workshop)

# Content

- [CHAPTER 1](./CHAP-1/) - Fundamentals
- [CHAPTER 2](./CHAP-2/) - Declaration files
- [CHAPTER 3](./CHAP-3/) - Functions
- [CHAPTER 4](./CHAP-4/) - Classes and objects
- [CHAPTER 5](./CHAP-5/) - Interfaces and inheritance
- [CHAPTER 6](./CHAP-6/) - Advanced types
- [CHAPTER 7](./CHAP-7/) - Decorators
- [CHAPTER 8](./CHAP-8/) - Dependency injection
- [CHAPTER 9](./CHAP-9/) - Types with parameterized and conditional
- [CHAPTER 10](./CHAP-10/) - Event loops and asynchronous behavior
- [CHAPTER 11](./CHAP-11/) - Higher order functions and callback
- [CHAPTER 12](./CHAP-12/) - Promises
- [CHAPTER 13](./CHAP-13/) - Functionality async/await 
- [CHAPTER 14](./CHAP-14/) - React

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