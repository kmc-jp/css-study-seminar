# Section 1 : HTMLの構造と基本的なタグ

## 開発環境について

開発環境が用意されているので、資料内のサンプルコードを貼り付けて、実際に動かせるようになっています。

### 使い方

1. `normal`フォルダに移動

```bash
$  cd normal
```

2. 以下のコマンドを実行

```bash
$  npm run dev
```

3. `normal/src/index.html`を編集すれば、自動的にブラウザの表示が更新されます。

## 絶対パスと相対パス

パスとは、ファイル等の場所を表す文字列であり、しばしば住所に例えられます。<br>

### 絶対パス

絶対パスは、現在いる場所に依らない、絶対的な場所を表します。<br>
例えば、Windowsで、デスクトップ上の画像ファイル`image.jpg`のパスは、`C:\Users\ryokohbato\Desktop\image.png`となります。<br>
`http(s)://`から始まるURL表記も、一種の絶対パスです。

### 相対パス

これに対して相対パスは、現在いるフォルダから見た場所を表します。<br>
相対パス表記において、`.`は現在いるフォルダ、`..`は現在いるフォルダの1つ上の階層を表します。<br>
例えば、以下のようなフォルダ/ファイル群を考えます。

```
 parent
├─  child
│   └─  child1.txt
└─  child2.txt
```

`parent`フォルダから見た、`child1.txt`の相対パスは、`./child/child1.txt`と表されます。<br>
また、`child1.txt`から見た`child2.txt`の相対パスは、`../child2.txt`と表されます。

## HTMLの基本構造

HTMLは、[タグ](https://developer.mozilla.org/ja/docs/Glossary/Tag)とそれに付随する部分によって表される[要素](https://developer.mozilla.org/ja/docs/Glossary/Element)から構成されています。それぞれのタグは、以下のような形をしています。<br>

```html
<foo></foo>
```
`<foo>`の形をしたものを開始タグ、`</foo>`の形をしたものを終了タグと呼びます。ただし、開始タグと終了タグをセットで使用しなければならないタグと、開始タグのみを記述し、終了タグを記述してはいけないタグがあります。<br>

例えば`div`タグは、開始タグと終了タグをセットで記述する必要があります。
```html
<div></div>
```

逆に`br`タグは、開始タグのみを記述し、終了タグは記述してはいけません。
```html
<br>
```

また、タグは入れ子にする (タグの中にタグを入れる) ことができます。divタグの中にpタグが入れ子になっている状態は、以下のように表されます。
```html
<div>
  <p></p>
</div>
```

また、タグの中には他のタグだけでなく文字列が入るものがあり、以下のような見た目になります。

```html
<div>
  <h1>KMC</h1>
  <p>京大マイコンクラブ</p>
</div>
```

どのタグの中に何を入れることができるのかは予め定められており、コンテンツモデルと呼ばれています。詳しくは、[Section A - コンテンツモデルとコンテンツカテゴリー](https://github.com/kmc-jp/css-study-seminar/blob/main/documents/advanced/Section-A.md#%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%83%A2%E3%83%87%E3%83%AB%E3%81%A8%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%82%AB%E3%83%86%E3%82%B4%E3%83%AA%E3%83%BC)で解説します。


### DOM

HTMLは、ウェブサイトの構造を表すために用いられます。<br>
この構造を理解していると、正しいHTMLを書くことができるだけでなく、インデント (字下げ) を読みやすく行うことができます。<br>
HTMLは、ウェブページの構造を、[Document Object Model (DOM)](https://developer.mozilla.org/ja/docs/Glossary/DOM) を用いて表します。<br>
上記のHTMLによって表されるDOMは、以下のようなツリー状の集合で表され、これをDOMツリーと呼びます。

```
div
├─ h1
└─ p
```

> [DOM の紹介 | MDN](https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model/Introduction)

### id, class, 属性

各タグには、id, class, 属性を付けることができます。必ず付けなければならないものではありません。

#### [id](https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/id)

詳しくはCSSの回で説明しますが、idは任意のタグに付けることができます。<br>
idを用いることで、タグを一意に識別できるようにすることができます。また、id名は自由に付けることができますが、空白を含めるべきではありません。

```html
<p id="description">GitHub is where over 65 million developers shape the future of software, ...</p>
```

#### [class](https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/class)

こちらも詳しくはCSSの回で説明しますが、classも任意のタグに付けることができます。<br>
classを用いることで、タグを識別できるようにできます。また、class名は自由に・複数付けることができます。この点がidとの違いです。<br>classを複数付けるときは、クラス名を空白で区切って記述します。

```html
<p id="description" class="title-content sub-text">GitHub is where over 65 million developers shape the future of software, ...</p>
```

#### [属性](https://developer.mozilla.org/ja/docs/Glossary/Attribute)

こちらも詳しくはCSSの回で説明しますが、属性も任意のタグに付けることができ、タグに対して情報を付与することができます。属性は`name="value"`の形を取りますが、等号以降を省略して書かれることもあります。

```html
<input type="checkbox" checked>
```

上記の例では、`input`要素に`type`属性と`checked`属性が付与されています。<br>
`type`属性の値は`checkbox`ですが、`checked`属性の属性値は省略されています。詳細は [Section A - 真偽値を表す属性](https://github.com/kmc-jp/css-study-seminar/blob/main/documents/advanced/Section-A.md#%E7%9C%9F%E5%81%BD%E5%80%A4%E3%82%92%E8%A1%A8%E3%81%99%E5%B1%9E%E6%80%A7)で説明します。

### HTMLの雛形

ここで、HTMLの雛形を示します。この状態では、まだ画面上には何も表示されません。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

titleタグ内に、ウェブページのタイトル文字列を設定します。<br>
一般的には、ここにもう少し手を加えたものが実際に雛形として使用されます。詳しくは、[Section A - HTMLの雛形](https://github.com/kmc-jp/css-study-seminar/blob/main/documents/advanced/Section-A.md#html%E3%81%AE%E9%9B%9B%E5%BD%A2)で解説します。

## 基本的なタグ

### [html](https://developer.mozilla.org/ja/docs/Web/HTML/Element/html)

HTMLの最上位に記述されるタグです。他の全てのHTML要素は、このタグによって作られるhtml要素の子孫要素となります。

### [head](https://developer.mozilla.org/ja/docs/Web/HTML/Element/head)

このタグによって作られるhead要素は、画面には表示されません。<br>
htmlタグの中に1つだけ配置できます。

### [body](https://developer.mozilla.org/ja/docs/Web/HTML/Element/body)

HTMLのうち、画面上に表示される部分は全てbodyタグの中に書かれます。<br>
htmlタグの中に1つだけ配置できます。

### [link](https://developer.mozilla.org/ja/docs/Web/HTML/Element/link)

headタグ内に記述します。詳しくはCSSの回で扱います。

```html
<link rel="stylesheet" href="style.css">
```

### [h1, h2, h3, h4, h5, h6](https://developer.mozilla.org/ja/docs/Web/HTML/Element/Heading_Elements)

見出しを表示するために使用します。h1は最上位、h2, h3, ...の順に見出しレベルが下がります。<br>
見出しレベルは飛ばしてはいけません。また、h1の複数回の使用は避けるのが無難です。<br>

#### 見出し要素の使用に関する注意点

一般的なウェブブラウザでは、見出し要素は大きなフォントサイズ・太字で描画されます。しかし、HTMLは文章の構造を表すためのものであり、**スタイルの調整にHTMLを用いてはいけません。** スタイルは全てCSSを用いて調整します。**文字サイズを大きくする目的で見出し要素を使用してはいけません。**<br>
詳しくは、CSSの回でさらに掘り下げて扱います。

```html
<h1>KMC</h1>

<!-- 省略 -->

<h2>KMCの活動</h2>

<!-- 省略 -->

<h2>今後の予定</h2>

<!-- 省略 -->

```

### [p](https://developer.mozilla.org/ja/docs/Web/HTML/Element/p)

テキストを表示する際に使用します。

```html
<p>カラスは黒い鳥</p>
```

### [br](https://developer.mozilla.org/ja/docs/Web/HTML/Element/br)

テキストを改行する際に使用します。終了タグを記述しない点が特徴です。

```html
<p>カラスは黒い鳥<br>黒くない鳥はカラスではない</p>
```

#### 改行要素の使用に関する注意点

要素間にスペースを開けるために、brを使用してはいけません。スペースを調整するためには、CSSを用います。<br>
これについても、CSSの回で詳しく扱います。

### [a](https://developer.mozilla.org/ja/docs/Web/HTML/Element/a)

ハイパーリンクの作成に使用します。リンク先を指定するには、`href`属性を使用します。また、リンク先を新しいタブで開くようにする場合は、`target`属性を用いて`target="_blank"`と指定します。

```html
<a href="https://example.com" target="_blank">テストリンク</a>
```

#### ページ内リンクの作成

ページ内リンクを貼る場合は、`href`属性の値に`#{飛ぶ先の要素のid名}`を指定します。

```html
<h1>予約サイト</h1>
<p>
  <a href="#register-form">予約はこちら</a>
</p>

<!-- 省略 -->

<h2 id="register-form">予約</h2>
<div>
  <p>お名前</p>
  <input type="text">
  <p>メール</p>
  <input type="email">
</div>
```

### [img](https://developer.mozilla.org/ja/docs/Web/HTML/Element/img)

画像を表示するために使用します。表示する画像のパスを、`src`属性を用いて記述します。<br>
`alt`属性は必須ではありませんが、特別な理由がない限り、必ず書くようにすべきです。詳しくは、アクセシビリティの回で扱います。

```html
<img src="./kmc-logo.png" alt="KMC Logo">
```

### [div](https://developer.mozilla.org/ja/docs/Web/HTML/Element/div)

divタグは、複数の要素をまとめるために使用します。CSSの回で詳しく説明します。

```html
<div>
  <p>お名前</p>
  <input type="text">
  <p>メール</p>
  <input type="email">
</div>
```

### [span](https://developer.mozilla.org/ja/docs/Web/HTML/Element/span)

spanタグも、複数の要素をまとめるために使用します。divタグと非常に似ていますが、詳しくはCSSの回で説明します。

```html
<span><a href="https://example.com" target="_blank">ここ</a>をクリック</span>
```

### コメントアウト

以下の形式でコメントアウトが可能です。

```html
<!-- ここはコメント -->
```