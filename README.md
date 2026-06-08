# 🚀 Node.js 即時聊天室 (Real-time Chat App)

這是一個基於 **Node.js** 與 **WebSocket** 技術開發的即時通訊聊天室。專案旨在解決傳統 HTTP 協議無法做到實時雙向通訊的痛點，適合用於展示網頁即時動態資料傳輸的實作能力。

---

## 💡 核心亮點與技術選型

* **後端環境 (Backend):** 使用 **Node.js** 搭配 **Express** 框架，快速建構輕量化的 Web 伺服器。
* **即時通訊 (Real-time):** 捨棄傳統的輪詢 (Polling) 機制，採用 **Socket.io (WebSocket)** 建立持久性的雙向連線管道，達到如 LINE 般低延遲、零時差的訊息傳送。
* **前端介面 (Frontend):** 採用原生 JavaScript (Vanilla JS) 進行 DOM 操作，並透過 CSS 打造現代、乾淨的使用者互動介面 (UI)。
* **動態功能:** 實作**使用者自訂暱稱機制**，將資料結構化（包含用戶名與訊息內容）後由後端進行多人群播 (Broadcast)。

---

## 🛠️ 開發習慣與實踐

在開發過程中，我遵循了業界標準的開發流程：
1. **語意化 Commit:** 嚴格遵守 Git 提交規範（例如使用 `feat:` 標記新功能）。
2. **非同步流程優化:** 在前端處理表單送出時，透過 `preventDefault()` 阻止網頁重新整理，確保 WebSocket 連線不中斷，提供流暢的使用者體驗。

---

## 💻 如何在本地運行此專案

### 1. 複製專案庫 (Clone)
```bash
git clone [https://github.com/chihaoyu860603/my-chat-app.git](https://github.com/chihaoyu860603/my-chat-app.git)
cd my-chat-app