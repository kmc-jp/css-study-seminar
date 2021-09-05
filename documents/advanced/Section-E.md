# Section E : CSSデザインパターン 2

## 疑似要素を用いたデザインの例

```html
<div class="notifications-icon-wrapper">
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" class="notifications-icon"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
</div>
```

```css
.notifications-icon {
  fill: #1D9BF0;
  height: 36px;
  margin: 0px;
  width: 36px;
}

.notifications-icon-wrapper {
  display: inline-block;
  margin: 50px;
  position: relative;
}

.notifications-icon-wrapper::before {
  background-color: #1D9BF0;
  border: solid 2px white;
  border-radius: 50%;
  color: white;
  content: '2';
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  height: 16px;
  line-height: 16px;
  position: absolute;
  text-align: center;
  right: -4px;
  top: -4px;
  width: 16px;
}
```

### 疑似要素の使用

[Section C - 疑似要素](https://github.com/kmc-jp/css-study-seminar/blob/main/documents/advanced/Section-C.md#%E7%96%91%E4%BC%BC%E8%A6%81%E7%B4%A0)で紹介した、`after疑似要素`および`before疑似要素`は、[`content`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/content)を用いてテキストを表示します。

> [content | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/content)

### 単一行テキストを上下左右中央に配置する

```css
text-align: center;
line-height: <heightと同じ値>;
```

のように指定すると、単一行のテキストを上下左右中央に配置することができます。

> [text-align | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/text-align)

> [line-height | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/line-height)

### 相対的位置決定

ある要素の位置から相対的な位置に要素を配置したい場合、[`position`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/position)を用いると便利です。<br>
基準とする要素に

```css
position: relative;
```

を記述し、配置する要素の位置を、[`top`](https://developer.mozilla.org/ja/docs/Web/CSS/top), [`bottom`](https://developer.mozilla.org/ja/docs/Web/CSS/bottom), [`left`](https://developer.mozilla.org/ja/docs/Web/CSS/left), [`right`](https://developer.mozilla.org/ja/docs/Web/CSS/right)プロパティを用いて決定します。それと同時に、

```css
position: absolute;
```

と記述します。

> [position | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/position)

> [top | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/top)

> [bottom | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/bottom)

> [left | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/left)

> [right | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/right)

## 要素の中央に要素を重ねるテクニック

```html
<div class="container">
  <p class="content">KMC</p>
</div>
```

```css
.container {
  background-image: url("https://www.kyoto-u.ac.jp/sites/default/files/styles/scale_crop_1600x481/public/2020-11/trim_IMG_5071-3%20(1).webp?itok=l-40nwzn");
  background-size: cover;
  height: 300px;
  position: relative;
  width: 600px;
}

.content {
  background-color: #3337;
  backdrop-filter: blur(8px);
  color: #fff;
  display: inline-block;
  font-size: 80px;
  left: 50%;
  margin: 0;
  padding: 8px 24px;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
```

### 要素の中央に要素を置く

親要素に

```css
position: relative;
```

子要素に

```css
position: absolute;
left: 50%;
top: 50%;
transform: translateX(-50%) translateY(-50%);
```

を指定します。

> [transform | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/transform)

### 背景画像の表示

[`background-image`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/background-image)を使用します。
また、背景画像のサイズを指定するには[`background-size`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/background-size)を使用します。

> [background-image | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/background-image)

> [background-size | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/background-size)

### 背景へのフィルター

[`backdrop-filter`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/backdrop-filter)を使用して、[`filter`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/filter)と同じ効果を要素の背景に適用できます。

> [backdrop-filter | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/backdrop-filter)

> [filter | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/filter)

ただし、現段階ではFireFoxでは非対応です。

> [backdrop-filter | Can I use](https://caniuse.com/?search=backdrop-filter)
