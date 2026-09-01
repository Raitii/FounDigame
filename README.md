# FounDigame Mock v0.2

「未完成ゲームを探す → 遊ぶ → フィードバック → 応援 → 更新後に再プレイ」というMVP体験を確認するための、Next.js製インタラクティブモックです。

## 起動

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いてください。

## 実装済み

- ホーム / ゲーム一覧・検索・ジャンル絞り込み
- ゲーム詳細 / お気に入り / 応援ポイント配分
- 20秒のプレイ体験 / 評価・コメント送信
- モックログイン / プレイヤーマイページ
- Creatorダッシュボード / 3ステップの作品登録
- Admin審査キュー / 承認・要修正
- PC・スマートフォン向けレスポンシブ表示
- LocalStorageによるお気に入り・ポイント・フィードバックの保持

## モックの範囲

データベース、実認証、iframeゲーム配信、ファイルアップロード、サーバー側の権限検証は未実装です。次段階では画面内のモックデータをPrisma/PostgreSQLへ置き換え、Better Authと役割別アクセス制御を追加する想定です。

## GitHub Pages

`main`ブランチへpushすると、GitHub Actionsが静的サイトをビルドしてGitHub Pagesへ自動デプロイします。

- 公開予定URL: `https://raitii.github.io/FounDigame/`
- ローカルビルド: `npm run build`
- 静的成果物: `out/`

初回のみGitHubのリポジトリ画面で **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定してください。
