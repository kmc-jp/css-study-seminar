# Section B : 基本的なタグ 3

## 基本的なタグ 3

### [details](https://developer.mozilla.org/ja/docs/Web/HTML/Element/details)

折りたたみ要素を作成します。

### [summary](https://developer.mozilla.org/ja/docs/Web/HTML/Element/summary)

detailsタグと一緒に使用して、折りたたみ要素を作成します。

```html
<details>
  <summary>v2.0での主な更新点</summary>
  <ul>
    <li>設定の同期</li>
    <li>多言語対応</li>
  </ul>
</details>
```

## 区分用要素

これらの要素は、複数のタグをまとめて論理的な区分を作成します。

### [header](https://developer.mozilla.org/ja/docs/Web/HTML/Element/header)

ヘッダー部を表します。<br>
ヘッダーには、ロゴや見出し、検索用フォームが含まれることが一般的です。

### [footer](https://developer.mozilla.org/ja/docs/Web/HTML/Element/footer)

フッター部を表します。<br>
フッターには、著作者情報や関連リンクが含まれることが一般的です。

### [main](https://developer.mozilla.org/ja/docs/Web/HTML/Element/main)

`body`要素に含まれる部分のうち、主要な要素を表します。

### [nav](https://developer.mozilla.org/ja/docs/Web/HTML/Element/nav)

ナビゲーションリンクを表します。<br>
メニューや目次などに用いられます。

### [article](https://developer.mozilla.org/ja/docs/Web/HTML/Element/article)

サイトの中で自己完結し、配信されたり再利用されたりする部分を表します。<br>
ブログの記事、商品説明欄、ユーザーのコメントなどに用いられます。

### [aside](https://developer.mozilla.org/ja/docs/Web/HTML/Element/aside)

文章のメイン部分と間接的にしか関連していない部分を表します。<br>
サイドバーやコールアウトボックス (入力フォームで文字数制限などを知らせるもの) などで用いられます。

### [section](https://developer.mozilla.org/ja/docs/Web/HTML/Element/section)

文書の中で自立した区間で、上で上げたようなタグで表すのが意味的にふさわしくない場合に用いられます。<br>
一般的に、各`section`タグはそれぞれ見出し要素を持ちます。


```html
<main>
  <h1>動物</h1>
  <section>
    <h2>イヌ</h2>
    <p>かわいい。ドッグフードを食べる。</p>
  </section>

  <section>
    <h2>ネコ</h2>
    <p>かわいい。キャットフードを食べる。にゃーん</p>
  </section>
</main>
```

### [script](https://developer.mozilla.org/ja/docs/Web/HTML/Element/script)

JavaScriptなどを埋め込むために使用します。

```html
<script>
  console.log('Hello, World!');
</script>
```

上記のように直接スクリプトを埋め込むことも可能ですが、外部のスクリプトファイルを読み込んで使用することが一般的です。

```html
<script src="main.js"></script>
```

## HTMLの雛形2

[Section A - HTMLの雛形](https://github.com/kmc-jp/css-study-seminar/blob/main/documents/advanced/Section-A.md#html%E3%81%AE%E9%9B%9B%E5%BD%A2) で解説したHTMLの雛形に、`head`タグ内の記述を追加しています。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KMC | 京大マイコンクラブ</title>
  <meta name="description" content="KMC (京大マイコンクラブ) は京都大学を中心に活動している京都大学全学公認のコンピュータサークルです。">
  <link rel="shortcut icon" type="image/png" href="logo.png">
  <link rel="apple-touch-icon-precomposed" type="image/png" href="icon.png">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  
</body>
</html>
```

#### 文字コード・タイトルの指定等

```html
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>KMC | 京大マイコンクラブ</title>
```

この部分は [Section A - HTMLの雛形](https://github.com/kmc-jp/css-study-seminar/blob/main/documents/advanced/Section-A.md#html%E3%81%AE%E9%9B%9B%E5%BD%A2) で解説したので省略します。

#### ページの概要

ページの概要を記述します。検索エンジンの検索結果に表示されることがあります。

```html
<meta name="description" content="KMC (京大マイコンクラブ) は、京都大学を中心に活動している京都大学全学公認のコンピュータサークルです。">
```

#### ロゴの表示

一般的に、ウェブブラウザのタブの左端に表示されます。

```html
<link rel="shortcut icon" type="image/png" href="logo.png">
```

#### スマホ用アイコン

スマホでサイトをホーム画面に保存した際に表示されるアイコン

```html
<link rel="apple-touch-icon-precomposed" type="image/png" href="icon.png">
```

#### CSSの読み込み

```html
<link rel="stylesheet" href="style.css">
```


`head`タグの中には、ここで紹介したもの以外にも、たくさんのタグを使用することができます。

## 特殊文字

HTMLには、直接記述することができない文字が存在します。例えば、 `<` は、タグを表すのに用いられるので、直接HTML内に文字として `<` を記述することはできません。<br>
そこで、文字参照と呼ばれる方法を用います。

> [5.3 Character references | HTML 4.01 Specification](https://www.w3.org/TR/html4/charset.html#entities)

|  文字   | 文字参照  |
|:------:|:--------:|
| 「`&`」 | `&amp;`  |
| 「`<`」 | `&lt;`   |
| 「`>`」 | `&gt;`   |
| 「`"`」 | `&quot;` |
| 「` `」 | `&nbsp;` |

これ以外にもたくさんの文字参照を使用することができます。

> [Character Entity Reference Chart | HTML5 Reference](https://dev.w3.org/html5/html-author/charref)

```html
<p>
  A &amp; B
</p>
```

## Emmet

Emmetを用いることで、HTMLを素早く記述することができます。CSSについては今後扱います。<br>

`div>ul>li`と入力して、`Tab`を打つと、以下のように展開されます。

```html
<div>
  <ul>
    <li></li>
  </ul>
</div>
```

また、`div+p+bq`と入力して、`Tab`を打つと、以下のように展開されます。

```html
<div></div>
<p></p>
<blockquote></blockquote>
```

Emmetの記法については、[Section D : Emmet](https://github.com/kmc-jp/css-study-seminar/blob/main/documents/advanced/Section-D.md#section-d--emmet)で詳しく紹介します。

> [Abbreviations Syntax | Emmet Documentation](https://docs.emmet.io/abbreviations/syntax/#abbreviations-syntax)
