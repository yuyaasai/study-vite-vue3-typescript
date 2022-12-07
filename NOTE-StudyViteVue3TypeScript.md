# study-vite-vue3-typescript

## git の準備

```sh
git config user.name yuyaasai
git config user.email 74097794+yuyaasai@users.noreply.github.com
git config url.git@github.com:.pushInsteadOf https://github.com/
```

## e6888c38: vite + vue3 + typescript のプロジェクトを作成

`npm create vite@latest ./ --template vue-ts` を実行する。
README.md がすでに存在したため
「Current directory is not empty. Remove existing files and continue?」
と質問されたので yes を選択

作成されたテンプレートを git add . してコミット

## 5bd0c76b: eslint + prettier の導入

0. まだ `npm install` していないならやっておく
1. `npx eslint --init` で `.eslintrc.cjs` を作成。
2. eslint で必要なモジュールをインストール
   `npm install --save-dev eslint-config-standard-with-typescript eslint-plugin-import eslint-plugin-n eslint-plugin-promise @vue/eslint-config-typescript @rushstack/eslint-patch`
3. prettier で必要なモジュールをインストール
   `npm install --save-dev eslint-config-prettier eslint-plugin-prettier`
4. `tsconfig.eslint.json` のファイルを作成: typescript(eslint) の設定
5. `.prettierrc.json` のファイルを作成: フォーマット設定
6. `study-vite-vue3-typescript.code-workspace` のファイルを作成: vscode の自動フォーマット設定
