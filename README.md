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



