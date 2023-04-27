- Run app on CHAP-12/12.0.6
    ```
    npx ts-node main.ts
    ```
- Your api is on port 3000: http://localhost:3000/promise

- Run transpiler on CHAP-12/lib-12.0.1 and create js output file
    ```
    tsc app.ts --target es2020
    ```
- Run index.html in other application server, use
**Live Server**