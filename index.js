import http from "http"
import myDateTime from "./date.js"
import {getParamsURL, getPath} from "./getURL.js"
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html;charset=urf-8'});
    res.write(myDateTime()+ "<br");
    res.write(getPath(req)+"<br>");
    res.write(getParamsURL(req)+"<br>")
    res.write('Hello KTPM0121, chuc ban thanh cong voi Node.js');
    res.end();
}).listen(8080);

