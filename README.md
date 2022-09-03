npm i -D msw

# モック作成手順
1. browser.ts作成
2. handlers.ts作成
3. npx msw init public --save
4. index.tsに開発環境のみ実行の条件追記
5. 取得処理の実装
