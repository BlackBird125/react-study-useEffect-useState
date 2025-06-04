このアプリケーションでは以下の機能を実装しています：
useState の使用例（カウンター機能）:
count state を number 型で定義
インクリメント、デクリメント、リセットの 3 つのボタンを実装
型定義は useState<number>で明示的に指定
useEffect の使用例（時計機能）:
currentTime state を Date 型で定義
useEffect 内で setInterval を使用して 1 秒ごとに時刻を更新
クリーンアップ関数で clearInterval を実行し、メモリリークを防止
空の依存配列[]を指定することで、マウント時にのみ実行
型定義:
コンポーネントの型を React.FC で明示的に指定
各 state の型を明示的に指定（number 型と Date 型）
アプリケーションが起動したら、ブラウザで http://localhost:3000 にアクセスすると、以下の機能を試すことができます：
カウンターの増減（Increment/Decrement ボタン）
カウンターのリセット（Reset ボタン）
1 秒ごとに更新される現在時刻の表示
このシンプルな実装で、React の Hooks の基本的な使い方を学ぶことができます。特に：
useState による状態管理
useEffect によるサイドエフェクトの処理
クリーンアップ関数の実装
TypeScript での型定義
