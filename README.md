# React Hooks Study

React Hooks の useState と useEffect の基本的な使い方を学ぶためのシンプルなアプリケーションです。

## 機能

### 1. カウンター機能 (useState)

- 現在のカウント値の表示
- インクリメント（+1）ボタン
- デクリメント（-1）ボタン
- リセット（0 に戻す）ボタン

### 2. 時計機能 (useEffect)

- 現在時刻の表示
- 1 秒ごとの自動更新

## 使用技術

- React 18
- TypeScript
- React Hooks
  - useState
  - useEffect

## 実行方法

```bash
# プロジェクトディレクトリに移動
cd study-hooks

# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm start
```

ブラウザで http://localhost:3000 を開いてアプリケーションを確認できます。

## 実装の詳細説明

### useState の実装

```typescript
const [count, setCount] = useState<number>(0);
```

- 型パラメータ`<number>`で明示的に型を指定
- `count`：現在の状態値
- `setCount`：状態を更新する関数
- `0`：初期値

### useEffect の実装

```typescript
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

- 第 1 引数：実行する副作用（エフェクト）
- 第 2 引数：依存配列（空配列の場合、マウント時のみ実行）
- クリーンアップ関数でタイマーを解除（メモリリーク防止）

### コンポーネントの型定義

```typescript
const App: React.FC = () => {
  // ...
};
```

- `React.FC`（Function Component）型を使用
- コンポーネントの型を明示的に定義

### 学習ポイント

1. **useState**

   - 状態管理の基本
   - 型安全な状態管理
   - 状態更新関数の使い方

2. **useEffect**

   - 副作用の処理方法
   - クリーンアップの重要性
   - 依存配列の意味と使い方

3. **TypeScript**

   - React コンポーネントの型定義
   - Hooks での型パラメータの使用
   - イベントハンドラーの型安全な実装

4. **パフォーマンス考慮点**
   - useEffect の依存配列の適切な使用
   - メモリリークの防止
   - 不要な再レンダリングの回避
