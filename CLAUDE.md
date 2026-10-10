# 泰山流護身術・逮捕術 サイト

静的 Astro サイト + Cloudflare Pages Functions（コンタクトフォーム）。

## コマンド

```bash
npm run dev         # 開発サーバー起動（静的ページのみ）
npm run dev:pages   # フルスタック開発（API含む）※ビルドが走るため初回は時間がかかる
npm run build       # 静的ビルド → dist/
```

## デプロイ

```bash
npm run build
npx wrangler pages deploy dist --project-name peaceful-mountain-system
```

GitHub の `main` ブランチへの push で GitHub Actions が自動デプロイ。

## 主要ファイル

| ファイル | 役割 |
| --- | --- |
| `src/data/videos.ts` | 動画データ（道場・武術・指圧お客様の声） |
| `src/data/members.ts` | 門下生データ |
| `src/data/news.ts` | お知らせデータ |
| `src/data/gallery.ts` | ギャラリー写真・賞状データ |
| `functions/api/contact.ts` | コンタクトフォーム API（Cloudflare Pages Function） |
| `src/layouts/Base.astro` | 共通レイアウト |
| `wrangler.jsonc` | Cloudflare Pages 設定 |

## コンテンツ更新方法

`src/data/` 以下の TypeScript ファイルを直接編集してください。

- 動画を追加する → `src/data/videos.ts` に追記
- 門下生を追加する → `src/data/members.ts` に追記
- お知らせを追加する → `src/data/news.ts` に追記

編集後は `git push origin main` でデプロイされます。

## 環境変数

### ローカル開発（`npm run dev:pages` で使用）

`.dev.vars.example` をコピーして `.dev.vars` を作成し、実際の値を設定する。

```bash
cp .dev.vars.example .dev.vars
# .dev.vars を編集して RESEND_API_KEY を設定
```

### 本番（Cloudflare Pages シークレット）

`RESEND_API_KEY` は平文 vars ではなくシークレットとして設定すること。

```bash
wrangler pages secret put RESEND_API_KEY --project-name taizanryu-site
```

または Cloudflare ダッシュボード → taizanryu-site → Settings → Environment Variables で設定。

- `RESEND_API_KEY` — Resend のAPIキー（コンタクトフォームメール送信用）
- `CONTACT_FROM_EMAIL` — 送信元（`wrangler.jsonc` の vars に設定済み）
- `CONTACT_TO_EMAIL` — 送信先（`wrangler.jsonc` の vars に設定済み）

> **注意**: `CONTACT_FROM_EMAIL` のドメイン（`peacefulmountainsystem.com`）は Resend のダッシュボードでドメイン認証が必要。
