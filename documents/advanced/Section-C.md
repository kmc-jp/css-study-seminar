# Section C : 複雑なセレクターの指定

## 複雑なセレクターの記法

### 疑似セレクターによる指定

#### 擬似クラス

疑似クラスは、要素の特定の状態を表すキーワードです。<br>
例えば、マウスの真下にある要素には、`:hover`擬似クラスが対応します。以下のCSSは、マウスカーソルが乗っている`button`要素に適用されます。

```css
button:hover {
  border: 1px solid orange;
}
```

ここでは、よく使われるものに絞って紹介します。

- [:first-child](https://developer.mozilla.org/ja/docs/Web/CSS/:first-child)
- [:last-child](https://developer.mozilla.org/ja/docs/Web/CSS/:last-child)
- [:nth-child()](https://developer.mozilla.org/ja/docs/Web/CSS/:nth-child)
- [:not()](https://developer.mozilla.org/ja/docs/Web/CSS/:not)
- [:focus](https://developer.mozilla.org/ja/docs/Web/CSS/:focus)
- [:focus-visible](https://developer.mozilla.org/ja/docs/Web/CSS/:focus-visible) (Experimental)
- [:hover](https://developer.mozilla.org/ja/docs/Web/CSS/:hover)
- [:visited](https://developer.mozilla.org/ja/docs/Web/CSS/:visited)
- [:root](https://developer.mozilla.org/ja/docs/Web/CSS/:root)
- [:has()](https://developer.mozilla.org/ja/docs/Web/CSS/:has) (Experimental)
- [:is()](https://developer.mozilla.org/ja/docs/Web/CSS/:is) (Experimental)

すべての擬似クラスは、以下から参照可能です。

> [標準擬似クラスの索引 | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/Pseudo-classes#index_of_standard_pseudo-classes)

#### 疑似要素

疑似要素は、要素の特定の部分を表すキーワードです。<br>
例えば、段落の最初の行には、`::first-line`疑似要素が対応します。以下のCSSは、`p`要素の第1行に適用されます。

```css
p::first-line {
  font-size: 1.5em;
}
```

ここでも、よく使われるものに絞って紹介します。

- [::after](https://developer.mozilla.org/ja/docs/Web/CSS/::after)
- [::before](https://developer.mozilla.org/ja/docs/Web/CSS/::before)
- [::first-letter](https://developer.mozilla.org/ja/docs/Web/CSS/::first-letter)
- [::first-line](https://developer.mozilla.org/ja/docs/Web/CSS/::first-line)
- [::selection](https://developer.mozilla.org/ja/docs/Web/CSS/::selection)

すべての擬似要素は、以下から参照可能です。

> [標準の擬似要素の索引 | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/Pseudo-elements#index_of_standard_pseudo-elements)

### 複数のセレクターとの組み合わせ

`,`で区切ることで、複数のセレクターのうちいずれか1つに当てはまる要素に対するCSSを完結に記述することができます。<br>
以下のCSSは、`title`クラスを持つ要素と、`article`クラスを持つ要素の両方に一致します。

> [セレクターリスト | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/Selector_list)

```css
.title, .article {
  font-family: sans-serif;
}
```

間隔を空けずに複数のセレクターを繋げて記述することで、複数のセレクターのうち全てに当てはまる要素に対するCSSを記述することができます。<br>
以下のCSSは、`aria-disabled`属性を持ち、その属性値として`true`を持つ`button`要素に一致します。

```css
button[aria-disabled="true"] {
  color: #0007;
}
```

### 子孫と兄弟の指定

#### [直下の子要素に対する指定](https://developer.mozilla.org/ja/docs/Web/CSS/Child_combinator)

以下の例では、`header-item`クラスを持つ`ul`要素の**直下の**`li`要素に適用されます。

```css
ul.header-item > li {
  list-style: none;
}
```

#### [子孫の要素に対する指定](https://developer.mozilla.org/ja/docs/Web/CSS/Descendant_combinator)

以下の例では、`header-container`クラスを持つ要素の下 (直下の要素である必要はない) にある全ての`a`要素に適用されます。

```css
.header-container a {
  transition: color .3s;
}
```

#### [直後の兄弟要素に対する指定](https://developer.mozilla.org/ja/docs/Web/CSS/Adjacent_sibling_combinator)

以下の例では、`img`要素の直後の兄弟要素が`p`要素であった場合、当該の`p`要素のみに適用されます。

```css
img + p {
  font-style: bold;
}
```

#### [兄弟要素に対する指定](https://developer.mozilla.org/ja/docs/Web/CSS/General_sibling_combinator)

以下の例では、直後だけでなく全ての兄弟要素に適用されます。

```css
p ~ span {
  color: red;
}
```
