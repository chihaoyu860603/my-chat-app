// 1. 引進伺服器套件
const express = require('express'); // 引入架站工具
const http = require('http');       // 引入 Node.js 內建的網路功能
const { Server } = require('socket.io'); // 引入即時通訊工具

// 2. 初始化並啟動這些工具
const app = express();              // 建立一個 Express 網站應用程式
const server = http.createServer(app); // 用 http 把這個網站包裝起來，準備給 Socket.io 使用
const io = new Server(server);      // 讓 Socket.io 寄生在我們的伺服器上，開啟即時通訊功能

// 3. 設定網頁檔案放在哪裡
// 這行代表：當有人連上我們的網站時，直接把跟 server.js 放在同一個資料夾底下的網頁（index.html）傳給他看
app.use(express.static(__dirname));

// 4. 核心邏輯：當有人跟伺服器建立「即時連線」時
io.on('connection', (socket) => {
    // socket 代表進來聊天室的「某一個特定的使用者」
    console.log('一個使用者連線了！');

    // 聽（監聽）：當這個使用者從前端發送了一個叫做 'chat message' 的訊息過來時
    socket.on('chat message', (msg) => {
        // 說（廣播）：伺服器收到後，立刻把這個訊息轉發給「所有人」（包含發送者自己）
        // 標籤同樣叫做 'chat message'，內容是 msg
        io.emit('chat message', msg);
    });

    // 聽（監聽）：當這個使用者關掉網頁、斷開連線時
    socket.on('disconnect', () => {
        console.log('使用者離開了。');
    });
});

// 5. 讓伺服器開始在 3000 這個通訊埠（Port）收聽
server.listen(3000, () => {
    console.log('聊天室伺服器已啟動！請打開瀏覽器輸入: http://localhost:3000');
});