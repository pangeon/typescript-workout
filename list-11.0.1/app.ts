/// <reference types="node" />
import * as http from "http"

http.createServer((req: any, res: any) => {
    res.write("Hello World")
    res.end();
}).listen(3000, () => {
    console.log("Server running on port 3000");
}); 
