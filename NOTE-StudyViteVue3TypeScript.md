# study-vite-vue3-typescript

## git の準備

```sh
git config user.name yuyaasai
git config user.email 74097794+yuyaasai@users.noreply.github.com
git config url.git@github.com:.pushInsteadOf https://github.com/
```

## vscode の設定
拡張機能 Vue.volar を入れる。
また、 [テイクオーバーモードを有効化](https://www.google.com/search?q=vue3+テイクオーバーモード) する

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


## VueRouter4 の導入
### installation
`npm install vue-router@4`
### router.ts の作成
`code src/router.ts` でファイル作成して、ここにルーターの空の定義を記述
```ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: "/",
        name: "Login",
        component: Login
    },
    {
        path: "/view",
        name: "View",
        component: ViewLayout,
        children: [
            {
                path: "sample",
                name: "sample",
                component: Sample
            },
            {
                path: "targetStatus",
                name: "targetStatus",
                component: TargetStatus
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;

```

```ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../components/Login.vue";
import ViewLayout from "../components/view/ViewLayout.vue";
import Sample from "../components/view/Sample.vue";
import TargetStatus from "../components/view/TargetStatus.vue";

const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: "/",
        name: "Login",
        component: Login
    },
    {
        path: "/view",
        name: "View",
        component: ViewLayout,
        children: [
            {
                path: "sample",
                name: "sample",
                component: Sample
            },
            {
                path: "targetStatus",
                name: "targetStatus",
                component: TargetStatus
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
```


## TODO:
- [ ] ローカルでhttpsを使う
- [ ] idTokenをパスから除去する方法がわからない

- typescript
    - [TypeScript の"is"と"in"を理解する - Qiita](https://qiita.com/ryo2132/items/ce9e13899e45dcfaff9b)
    - [typescript is type - Google 検索](https://www.google.com/search?q=typescript+is+type&rlz=1C1GCEU_jaJP1000JP1001)
    - [typescript readonly array - Google 検索](https://www.google.com/search?q=typescript+readonly+array&rlz=1C1GCEU_jaJP1000JP1001)
    - [【TypeScript】関数型の部分型関係ってややこしくて SuperType、SubType って書きまくったら理解できた（返り値の型による部分型関係） - Qiita](https://qiita.com/daishiman/items/91d4ea25fe391217a00b)
    - [【TypeScript】Utility Typesをまとめて理解する - Qiita](https://qiita.com/k-penguin-sato/items/e2791d7a57e96f6144e5)
    - [【TypeScript】 オブジェクトのnullableなプロパティをnon-nullに変換する【型定義】](https://zenn.dev/kotaesaki/articles/f927aaff02d621)
    - [TypeScript の命名規則ってなんだ](https://zenn.dev/ikura1/articles/a1e91ce077d2c4d585dc)
    - [typescript コード規約 定数 - Google 検索](https://www.google.com/search?q=typescript+%E3%82%B3%E3%83%BC%E3%83%89%E8%A6%8F%E7%B4%84+%E5%AE%9A%E6%95%B0&rlz=1C1GCEU_jaJP1000JP1001)
- vite
    - [ ] Vitesの環境変数
    - [環境変数とモード | Vite](https://ja.vitejs.dev/guide/env-and-mode.html)
    - [Vite環境で環境変数が使われているファイルをテストする - Qiita](https://qiita.com/diskszk/items/ed6362e35e15f2fd790e)
- vue3
    - [Options API | Vue.js](https://v3.ja.vuejs.org/api/options-api.html)
- pinia
    - [Vue.js Piniaを使って状態管理(データの共有)を行ってみよう | アールエフェクト](https://reffect.co.jp/vue/vue-pinia#Store)
    - [Piniaを使ったコンポーネントのテスト - Qiita](https://qiita.com/RINYU_DRVO/items/cecd258d08cf9c479304)

- vue router
    - [vue-cliで作成したプロジェクトでVue Routerを設定 | アールエフェクト](https://reffect.co.jp/vue/vue-cli-vue-router-setting)
    - [Vue Router 4を基礎から理解(Composition API＋Vite環境) | アールエフェクト](https://reffect.co.jp/vue/vite-vue-router#Vue_Router)
    - [はじめに | Vue Router](https://v3.router.vuejs.org/ja/guide/#html)
    - [Getting Started | Vue Router](https://router.vuejs.org/guide/#router-link)
    - [vue-routerチートシート - Qiita](https://qiita.com/morrr/items/873ea25a806167c8d426)
- [Vite+TypescriptのプロジェクトにVitestを導入する方法 | NullNull](https://nullnull.dev/blog/how-to-introduce-vitest-into-a-vitetypescript-project/)
