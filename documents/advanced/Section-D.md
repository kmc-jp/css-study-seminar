# Section D : Emmet

[Section B - Emmet](https://github.com/kmc-jp/css-study-seminar/blob/main/documents/advanced/Section-B.md#emmet) でも少し扱いましたが、Emmetを用いることで素早くHTML/CSSを記述することができます。

特によく用いる記法に絞って紹介します。全ての記法は以下のドキュメントから参照可能です。

> [Emmet Documentation](https://docs.emmet.io)

## [HTML](https://docs.emmet.io/abbreviations/syntax/#abbreviations-syntax)

CSSと同様に、`+`は兄弟要素、`>`は子要素として解釈されます。

```
div+div>p>span+em 
```

上記のテキストは、以下のHTMLに展開されます。

```html
<div></div>
<div>
  <p><span></span><em></em></p>
</div>
```

`*`を用いて、複数の要素をまとめて生成できます。

```
ul>li*5
```

これは、以下のHTMLに展開されます。

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

また、`()`を用いてグルーピングが可能です。

```
div>(header>ul>li*2>a)+footer>p
```

これは、以下のHTMLに展開されます。

```html
<div>
  <header>
    <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>
```

CSSと同様に、`#`はID、`.`はクラスを表し、`[]`は属性を表します。

```
div#header+div.page+div#footer.class1.class2.class3
```

これは、以下のHTMLに展開されます。

```html
<div id="header"></div>
<div class="page"></div>
<div id="footer" class="class1 class2 class3"></div>
```

```
td[title="Hello world!" colspan=3]
```

またこれは、以下のHTMLに展開されます。

```html
<td title="Hello world!" colspan="3"></td>
```

`$`を用いて連番が生成できます。

```
ul>li.item$*5
```

これは、以下のHTMLに展開されます。

```html
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
</ul>
```

`{}`を用いると、タグ内のテキストも同時に生成できます。

```
a{Click me}
```

```html
<a href="">Click me</a>
```

## [CSS](https://docs.emmet.io/css-abbreviations/)

プロパティを略記できます。

```
m10
```

上記のテキストは、以下のCSSに展開されます。

```css
margin: 10px;
```

複数のプロパティ値が必要な場合は`-`で繋ぎます。ただし、負の値を指定する際も`-`を用います。

```
m10-20
```

これは、以下のCSSに展開されます。

```css
margin: 10px 20px;
```

```
m-10--20
```

またこれは、以下のCSSに展開されます。

```css
margin: -10px -20px;
```

```
bd4-s-orange
```

またこれは、以下のCSSに展開されます。

```
border: 4px solid orange;
```
