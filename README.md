# 2025 蛇年過三關 🐍

一個具有農曆新年主題的井字遊戲，使用Next.js 14、TypeScript和Tailwind CSS開發。

## 🎮 遊戲特色

- 🎨 新年主題設計
- 🤖 三種AI難度
- 🎉 勝利煙花效果
- 📱 響應式界面
- 🎯 Minimax算法實現

## 🛠 技術棧

- Next.js 14
- TypeScript
- Tailwind CSS
- Radix UI
- Canvas Confetti

## 🚀 開始使用

1. 克隆專案：

```bash
git clone https://github.com/yourusername/2025-lunar-new-year-game.git
```

2. 安裝依賴：

```bash
yarn install
```

3. 運行開發服務器：

```bash
yarn dev
```

4. 打開瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

## 🎯 遊戲玩法

- 玩家使用 🧧 (紅包)，電腦使用 🐍 (蛇)
- 選擇難度：
  - 🌸 花開富貴（簡單）
  - 🎋 竹報平安（中等）
  - 🔥 蛇舞鳳翔（困難）
- 三子連線獲勝

## 🧪 代碼質量

- ESLint 配置
- Prettier 格式化
- TypeScript 類型檢查
- Husky 預提交鉤子
- Lint-staged 暫存區檢查

## 📁 專案結構

```
2025-lunar-new-year-game/
├── app/
│   ├── components/
│   │   ├── TicTacToe.tsx    # 主遊戲組件
│   │   ├── Board.tsx        # 遊戲板組件
│   │   └── Cell.tsx         # 單元格組件
│   ├── utils/
│   │   └── gameLogic.ts     # 遊戲邏輯
│   ├── page.tsx             # 首頁
│   └── layout.tsx           # 應用布局
├── public/                   # 靜態資源
└── package.json             # 項目配置
```

## 📄 授權

MIT License - 查看 [LICENSE](LICENSE) 文件了解更多詳情

## 👨‍💻 作者

Edison Un - [GitHub](https://github.com/Chonwai)
