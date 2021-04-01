# King Of Time で残業時間を計算するための bookmarklet

## 使い方

- `dist/bookmarklet.js` の内容をブラウザのブックマークに追加
- King Of Time にログインし、登録したブックマークレットをクリック
- アラート画面に今月の残業時間の合計が表示

## 開発者向け

### 技術スタック

- Typescript
- Google Closure Compiler
  - Minify javascript
- Prettier
  - Formatter

### 開発手順

- `src/index.ts` を修正
- `yarn build:bookmarklet`
- コンソールに表示された javascrypt のコードをコピー
- ブラウザを開き Chrome Developer Tools を開く
  - Ctrl + Shift + i
- console を開く
- ペーストして Enter
