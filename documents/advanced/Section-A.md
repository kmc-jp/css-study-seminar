# Section A : HTMLの構造とコンテンツモデル

## HTMLの雛形


Section 1 で紹介したものに少し記述を追加した以下のHTMLが、実際に雛形としてよく使用されるものです。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

`head`タグには、これ以外にも多くの項目を指定可能ですが、それについては [Section B - HTMLの雛形2](https://github.com/ryokohbato/css-study-seminar/blob/main/documents/advanced/Section-B.md#html%E3%81%AE%E9%9B%9B%E5%BD%A22) で扱います。<br>
では、この雛形を読み進めます。

### [DOCTYPE宣言](https://developer.mozilla.org/ja/docs/Glossary/Doctype)

```html
<!DOCTYPE html>
```

この部分は、DOCTYPE宣言と呼ばれ、後方互換モードに切り替わることを防ぐ目的でファイルの先頭に書かれます。

> [13.1.1 The DOCTYPE | HTML Living Standard](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype)

### [文字コードの指定](https://developer.mozilla.org/ja/docs/Web/HTML/Element/meta#attr-charset)

```html
<meta charset="UTF-8">
```

ここで、ページの文字コードを指定します。一般的には、`UTF-8`が使用されます。


### IEで開く際の指定

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

これは、Internet Explorerで閲覧する際に、IEの最新版で表示することを指定しています。ただし、Internet Explorerのサポートはじきに終了するので、近いうちにこの記述は必要なくなりそうです。

### Viewportの指定

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

レスポンシブなウェブサイトを制作する場合など、端末の画面幅による表示の指定です。<br>
Viewportの指定は複雑怪奇なので、気になったときに調べる、という程度で良いと思います。

> [レスポンシブデザイン | MDN](https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout/Responsive_Design)<br>
> [ビューポートの概念 | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/Viewport_concepts)

## Emmet

EmmetはHTMLやCSSを省略して書くことができるツールで、主要なテキストエディタであればプラングインとして提供されています。<br>
上で紹介したHTMLの雛形は、Emmetを用いると`!{Tab}`のキーバインドで簡単に生成できます。<br>
Emmetについては、順次詳しく扱います。

> [emmetio/emmet | GitHub](https://github.com/emmetio/emmet)

## 属性についての補足事項

### [tabindex](https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/tabindex)

`Tab`キーによる要素のフォーカス移動順序を指定します。<br>
詳しくは、アクセシビリティの回で扱います。

- 負の数を指定した場合<br>
  一般的には`-1`を指定しますが、この場合は`Tab`キーによる移動ではその要素にたどり着けなくなります。

  ```html
  <p tabindex="-1">いろはにほへと</p>
  ```

- 0を指定した場合<br>
  `Tab`キーによってその要素に到達することができ、`Tab`キーによるフォーカスの移動順序は出現順になります。

  ```html
  <p tabindex="0">ちりぬるを</p>
  ```

- 正の数を指定した場合<br>
  `Tab`キーによってその要素に到達することができ、`Tab`キーによるフォーカスの移動順序は値の小さい順になります。

  ```html
  <p tabindex="1">わかよたれそ</p>
  <p tabindex="2">つねならむ</p>
  ```

以下のHTMLでは、`Tab`キーによるフォーカスの移動順序は、`つねならむ`->`うゐのおくやま`->`ちりぬるを`->`わかよたれそ`->`けふこえて`->`ゑひもせす`となります。

```html
  <p tabindex="-1">いろはにほへと</p>
  <p tabindex="0">ちりぬるを</p>
  <p tabindex="0">わかよたれそ</p>
  <p tabindex="1">つねならむ</p>
  <p tabindex="2">うゐのおくやま</p>
  <p tabindex="0">けふこえて</p>
  <p tabindex="-1">あさきゆめみし</p>
  <p tabindex="0">ゑひもせす</p>
```

### 真偽値を表す属性

input要素の`checked`属性などの、真偽値を表す属性は、属性が付いているかどうかでのみ挙動が変化し、どのような属性値を与えても全く同じように動きます。

> [2.3.2 Boolean attributes | HTML Living Standard](https://html.spec.whatwg.org/#boolean-attributes)

## [コンテンツモデルとコンテンツカテゴリー](https://developer.mozilla.org/ja/docs/Web/Guide/HTML/Content_categories)

全てのHTML要素は、1つ以上のコンテンツカテゴリーに属しています。コンテンツカテゴリーは、共通した特徴を持つ要素を分類します。<br>
それぞれのタグには、内容として許容されるコンテンツカテゴリーが定義されており、MDNの該当ページ等で確認することができます。<br>

例えば、以下は[h1-h6タグのMDNのページ](https://developer.mozilla.org/ja/docs/Web/HTML/Element/Heading_Elements)の一部です。

> |||
> |:--:|:--|
> |コンテンツカテゴリ|フローコンテンツ, 見出しコンテンツ, 知覚可能コンテンツ|
> |許可されている内容|記述コンテンツ|

このようにh1タグは、フローコンテンツ, 見出しコンテンツ, 知覚可能コンテンツのコンテンツカテゴリーに属しており、記述コンテンツを含むことができます。<br>
通常の文字列は記述コンテンツに属しているので、h1タグの中に通常の文字列を含んだ以下のHTMLは、コンテンツモデルに従って書かれた正しいHTMLであると言えます。

```html
<h1>Section A</h1>
```

> [3.2.5 Content models | HTML Living Standard](https://html.spec.whatwg.org/multipage/dom.html#content-models)
