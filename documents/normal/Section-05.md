# Section 5 : CSSデザインパターン 1

## カード風のスタイル

```html
<article class="card">
  <p class="card__title">ryokohbato</p>
  <p class="card__date">2021/09/06 04:06</p>
  <p class="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</article>
```

```css
.card {
  border-radius: 16px;
  box-shadow: 0 0 4px 4px #3332;
  height: 120px;
  margin-left: 32px;
  margin-top: 32px;
  overflow: hidden;
  padding: 12px 18px;
  width: 320px;
}

.card__title {
  display: inline-block;
  font-size: 16px;
  margin: 0;
  margin-bottom: 8px;
}

.card__date {
  color: #666;
  display: inline-block;
  font-size: 12px;
  margin: 0;
  margin-left: 16px;
}

.card__text {
  color: #333;
  font-size: 14px;
  margin: 0;
  margin-left: 8px;

  /* 3点リーダー */
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
}
```

### 影の描画

#### [box-shadowプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/box-shadow)

以下の形式で記述し、影を描画します。

```
box-shadow: offset-x | offset-y | blur-radius | spread-radius | color
```

#### [filterプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/filter)

透過PNG画像等には、`box-shadow`プロパティでは正しく影を描画できないため、`filter`プロパティを使用します。<br>
`filter`プロパティを使用して影を描画するには、以下の形式で記述します。

```
filter: drop-shadow(offset-x | offset-y | blur-radius | color);
```

`filter`プロパティを用いることで、影の描画以外にも様々な視覚効果を得ることができます。

```html
<svg class="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
```

```css
.heart {
  /* box-shadowではうまく影を落とせない */
  /* box-shadow: 0 0 0 8px red; */
  filter: drop-shadow(0 0 8px red);
  height: 60px;
  width: 60px;
}
```

### [overflowプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/overflow)

要素の内容が多かった場合に、どのように表示するかを指定します。

#### 溢れた要素を非表示にする

```html
<div class="container">
  <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
```

```css
.container {
  border: solid 1px black;
  height: 100px;
  overflow: hidden;
  width: 200px;
}

.content {
  font-size: 16px;
}
```

#### スクロールバーを表示する

```html
<div class="container">
  <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
```

```css
.container {
  border: solid 1px black;
  height: 100px;
  overflow: hidden scroll;
  width: 200px;
}

.content {
  font-size: 16px;
}
```

`overflow`プロパティに2つの値を指定した場合、1つめの値でx軸方向、2つめの値でy軸方向の表示を指定します。

### marginの相殺

CSSでは隣接要素の垂直方向のmarginがお互いに打ち消し合います。(marginの相殺)<br>
以下の場合、2つの長方形の間隔は `80px (=30px+50px)` ではなく、`50px (30px<50px)` になります。

```html
<div class="rect-1"></div>
<div class="rect-2"></div>
```

```css
.rect-1 {
  background-color: red;
  height: 200px;
  margin: 30px;
  width: 80%;
}

.rect-2 {
  background-color: blue;
  height: 200px;
  margin: 50px;
  width: 80%;
}
```

marginの相殺は、`margin-top`または`margin-bottom`のうち常に一方のみを指定することで回避できます。

### displayプロパティ

#### ブロックレベル要素とインライン要素

正確にはブロック要素とインライン要素は定義されなくなり、[Section A - ブロックレベル要素とインライン要素](https://github.com/kmc-jp/css-study-seminar/blob/main/documents/advanced/Section-A.md#%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%83%A2%E3%83%87%E3%83%AB%E3%81%A8%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%82%AB%E3%83%86%E3%82%B4%E3%83%AA%E3%83%BC) で紹介したコンテンツカテゴリーによって分類されます。ここでは便宜上、ブロックレベル要素とインライン要素という名称を使用します。<br>

ブロックレベル要素とインライン要素の違いは以下の通りです。

- ブロックレベル要素は、インライン要素と他のブロックレベル要素を含むことができます
- ブロックレベル要素は新しい行から始まり、インライン要素は行内のどこからでも開始することができます

以下の例で、`div`タグや`p`タグがブロックレベル要素であり、`span`タグがインライン要素であることが分かります。

```html
<div>あいうえお<span>かきくけこ</span>さしすせそ</div>

<div>あいうえお<p>かきくけこ</p>さしすせそ</div>
```

`display`プロパティを使用することで、要素をブロック要素・インライン要素のどちらとして扱うかを変更することができます。<br>
また、それ以外の用途にも`display`プロパティを使用します。

#### block

要素をブロック要素として扱います。

```css
display: block;
```

#### inline

要素をインライン要素として扱います。

```css
display: inline;
```

#### inline-block

要素はインライン要素のように、改行を挟まずに横並びになりますが、要素に対して`height`や`width`など、インライン要素には指定できないプロパティも指定できるようになります。

```css
display: inline-block;
```

#### none

要素を非表示にします。

```css
diplay: none;
```

この他のプロパティ値についても、今後扱う予定です。

### ニューモーフィズムデザイン

コードを一部変更することで、ニューモーフィズムと呼ばれるデザインを作成することもできます。

```css
/* 背景色をやや暗い白色に変更 */
body {
  background-color: #eee;
}

.card {
  border-radius: 16px;
  /* 明るい影と暗い影を描画 */
  box-shadow: 2px 2px 2px 2px #3331,
              -2px -2px 2px 2px #fff9;
  height: 120px;
  margin-left: 32px;
  margin-top: 32px;
  overflow: hidden;
  padding: 12px 18px;
  width: 320px;
}

.card__title {
  display: inline-block;
  font-size: 16px;
  margin: 0;
  margin-bottom: 8px;
}

.card__date {
  color: #666;
  display: inline-block;
  font-size: 12px;
  margin: 0;
  margin-left: 16px;
}

.card__text {
  color: #333;
  font-size: 14px;
  margin: 0;
  margin-left: 8px;

  /* 3点リーダー */
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
}
```
