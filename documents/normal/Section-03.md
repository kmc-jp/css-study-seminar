# Section 3 : CSSの基本

手元で動かす環境を作成するため、以下のコマンドを実行してください。<br>
ただし、[Section 2.5 : HTML演習](https://github.com/kmc-jp/css-study-seminar/blob/main/documents/normal/Section-02_5.md)を行っている場合、手元でファイルの変更が行われている影響で実行時にエラーが出たときは、`git commit`を行う必要があります。

```bash
git pull
```

## CSSの基本構造

CSSは以下のような構造から成ります。

```css
p {
  color: red;
}
```

`p`の部分を`セレクター`、`color`の部分を`プロパティ`、`red`の部分を`プロパティ値`と呼びます。<br>
セレクターはCSSの適用対象を表し、適用されるCSSはプロパティとそれに対応するプロパティ値によって表現されます。<br>
例えば、上記のCSSは全てのpタグのテキスト色を赤色に変更します。

1つのセレクターに対してプロパティとプロパティ値の組は複数記述することができます。

```css
p {
  border: 1px solid black;
  color: red;
  width: 500px;
}

div {
  background-color: blue;
  border: 1px solid yellow;
}
```

## セレクターの基本記法

### [要素による指定](https://developer.mozilla.org/ja/docs/Web/CSS/Type_selectors)

要素名を直接記述します。

```css
body {
  background-color: #333;
  color: white;
}

a {
  color: #ccc;
  text-decoration: none;
}
```

全ての要素に対してCSSを割り当てる場合は、`*`を記述します。

> [全称セレクター | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/Universal_selectors)

```css
* {
  color: white;
}
```

### [idによる指定](https://developer.mozilla.org/ja/docs/Web/CSS/ID_selectors)

id名の前に`#`を付けて指定します。

```css
#alert {
  background-color: rgba(255, 192, 203, 0.3);
  display: inline-block;
  padding: 8px;
}
```

### [クラスによる指定](https://developer.mozilla.org/ja/docs/Web/CSS/Class_selectors)

クラス名の前に`.`を付けて指定します。

```css
.article-card {
  border-radius: 8px;
  box-shadow: 0 0 4px #7777;
  display: inline-block;
  padding: 8px;
}
```

### [属性による指定](https://developer.mozilla.org/ja/docs/Web/CSS/Attribute_selectors)

`[{属性名}={属性値}]`の形式で指定します。属性値が存在しない場合は、`[{属性名}]`の形式で指定します。<br>
(属性値が存在しない場合というのは、[Section A - 真偽値を表す属性](https://github.com/kmc-jp/css-study-seminar/blob/main/documents/advanced/Section-A.md#%E7%9C%9F%E5%81%BD%E5%80%A4%E3%82%92%E8%A1%A8%E3%81%99%E5%B1%9E%E6%80%A7)で扱ったように、その属性が真偽値を表す属性である場合です。)

```css
[aria-selected="true"] {
  background-color: #7773;
}
```

## 基本的なプロパティ

### テキスト色

テキストの色を指定するには、[`color`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/color)を使用します。

```css
p {
  color: black;
}
```

```css
p {
  color: #eee;
}
```

```css
p {
  color: rgb(34, 12, 64, 0.6);;
}
```

```css
p {
  color: rgba(34, 12, 64, 0.6);;
}
```

### 背景色

要素の背景色を指定するには、[`background-color`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/background-color)を使用します。

```css
div {
  background-color: gray;
}
```

```css
div {
  background-color: rgb(255, 255, 128); 
}
```

```css
div {
  background-color: rgba(117, 190, 218, 0.5);
}
```

```css
div {
  background-color: rgba(117, 190, 218, 0.5);
}
```

### 背景画像

### フォント
フォントの指定には、[`font-family`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/font-family)を使用します。

```css
.article {
  font-family: Gill Sans Extrabold, sans-serif;
}
```

フォントサイズの指定には、[`font-size`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/font-size)を使用します。

```css
.article {
  font-size: 12px;
}
```

```css
.article {
  font-size: 1.2em;
}
```

```css
.article {
  font-size: smaller;
}
```

### 太字・斜体

太字の指定には、[`font-weight`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/font-weight)を使用します。

```css
.title {
  font-weight: bold;
}
```

```css
.descriptions {
  font-weight: lighter;
}
```

斜体の指定には、[`font-style`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/font-style)を使用します。

```css
.article-main {
  font-style: italic;
}
```

### テキスト修飾

テキスト装飾の指定には、[`text-decoration`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/text-decoration)を使用します。

```css
.message-important {
  text-decoration: underline;
}
```

```css
.format-error {
  text-decoration: red wavy underline;
}
```

### 文字間隔

文字間隔の指定には、[`letter-spacing`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/letter-spacing)を使用します。

```css
.article {
  letter-spacing: .2rem;
}
```

```css
.article {
  letter-spacing: -1px;
}
```

### 行の高さ

行の高さの指定には、[`line-height`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/line-height)を使用します。<br>
`line-height`プロパティには、単位のない値を指定するのが好ましいとされています。

```css
.article {
  line-height: 2;
}
```

### 改行規則

改行規則の指定には、いくつかのプロパティが使用されます。

- [word-break](https://developer.mozilla.org/ja/docs/Web/CSS/word-break)
- [line-break](https://developer.mozilla.org/ja/docs/Web/CSS/line-break)
- [overflow-wrap](https://developer.mozilla.org/ja/docs/Web/CSS/overflow-wrap)

```css
.logo-text {
  word-break: keep-all;
}
```

### 枠線

枠線の指定には、[`border`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/border)を使用します。

```css
.button-submit {
  border: 1px solid orange;
}
```

```css
.button-submit {
  border: thick double #32a1ce;
}
```

### 角丸

角丸の指定には、[`border-radius`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/border-radius)を使用します。

```css
.card {
  border-radius: 32px;
}
```

```css
.icon-header {
  border-radius: 50%;
}
```

```css
.logo {
  border-radius: 25% 10%;
}
```

### 透明度

要素全体の指定には、[`opacity`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/opacity)を使用します。<br>
このプロパティは子要素にも継承されます。<br>
背景色のみを透過したり、テキスト色のみを透過したりする場合は、背景色やテキスト色を透明度付きの色で指定してください。

```css
[aria-disabled="true"] {
  opacity: 0.5;
}
```
