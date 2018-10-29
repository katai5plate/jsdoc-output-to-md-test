# test-jsdoc-output-to-md
http://tonbi.jp/Game/RPGMakerMV/ をMarkdown化できないか実験

- `in` ディレクトリに入ってるページはすべて http://tonbi.jp/Game/RPGMakerMV/ から拝借したものです。

## Usage
- 要 `Node.js` `npm` `gulp`
```
npm install && npm run build
```

## How 2 Use
1. `in` ディレクトリにJSDocから出力されたHTMLファイルをぶっこむ
2. `npm run build` を実行
3. `docs` に変換されたMarkdownファイルが出力される

## Architecture
0. （ `JSDoc` からHTMLが出力される）
1. `gulp-html-beautify` でHTMLを整形する（ 2 で変換しやすいように）
2. `gulp-breakdance` でHTMLをMarkdownに変換
3. `gulp-rename` で拡張子を変更
4. `docs` に出力
5. （ `GitHub-Pages` でWEBデプロイする）
