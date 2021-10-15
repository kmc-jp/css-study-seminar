# Section G : ウェブアクセシビリティ

様々な理由で、ウェブサイトを閲覧する際にスクリーンリーダーを使用したり、キーボードしか使用できなかったりする場合があります。そのような場合でも、快適にウェブページを閲覧できるようにしておくべきです。

> [アクセシビリティとは？ | MDN](https://developer.mozilla.org/ja/docs/Learn/Accessibility/What_is_accessibility)

## 例

`div`タグを用いて作られたボタンと`button`タグを用いて作られたボタンがあります。一見これらは全く同じに見えますが、キーボードでの操作を受け付けられるのは後者のみです。

```html
<div class="form-view--submit">
  確認
</div>

<button class="form-view--submit">
  確認
</button>
```

```css
.form-view--submit {
  background-color: #555;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 24px;
  height: 60px;
  line-height: 60px;
  margin: 100px;
  text-align: center;
  width: 180px;

  overflow: hidden;
  position: relative;
}

.form-view--submit:hover {
  background-color: #666;
}

.form-view--submit:active {
  background-color: #5d5d5d;
}
```

このような違いが生まれるのは、`button`タグを用いた場合にボタンとしての機能を予め持った状態で要素が生成されるためです。

## アクセシビリティを向上させるには

まず初めに検討すべきことは、コンテンツモデルに従った正しいHTMLを記述することです。

> [Section A : HTMLの構造とコンテンツモデル - コンテンツモデルとコンテンツカテゴリー](https://github.com/kmc-jp/css-study-seminar/blob/main/documents/advanced/Section-A.md#%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%83%A2%E3%83%87%E3%83%AB%E3%81%A8%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%82%AB%E3%83%86%E3%82%B4%E3%83%AA%E3%83%BC)

次に、配色に問題がないか、キーボードで操作可能か、スクリーンリーダーで正しく読み上げ可能か、などを確認していきます。

### 配色・フォーカス

- [x] 配色は十分に考慮されているか
- [x] フォーカス状態が十分に見やすいか

隣接した色同士が十分に識別可能であるかをテストするためのツールが数多く用意されています。これらのツールを用いてアクセシビリティチェックを行っておくと良いです。

> [アクセシビリティツール | Adobe Color](https://color.adobe.com/ja/create/color-contrast-analyzer)

フォーカスリングは、`outline`プロパティや`outline-offset`プロパティを用いて、フォーカスリングをスタイリングし、フォーカスが当たっているかどうかをわかりやすくしておくと良いです。

```css
.form-view--submit:focus {
  outline: gray dotted 1px;
  outline-offset: 4px;
}
```

### キーボードでの操作

- [x] Tabキーで必要な要素にアクセス可能かどうか
- [x] ボタンをShiftキーやEnterキーで押すことができるか
- [x] 折りたたみ要素をShiftキーやEnterキーで開閉することができるか

> [Section A : HTMLの構造とコンテンツモデル - tabindex](https://github.com/kmc-jp/css-study-seminar/blob/main/documents/advanced/Section-A.md#tabindex)

もちろんここに書いたことだけではありません。また、次項のWAI-ARIAも参考にしてください。

## WAI-ARIA

HTML要素に意味を持った属性を追加することで、本来HTML要素単体では持っていない意味を付与することができます。正しく使用することにより、非常に強力に働きます。

### 使用例

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">Tab label</button>
```

`role="tab"`は、タブコンテンツを選択するための仕組み (つまり所謂タブ) であることを示します。`aria-selected="true"`は、現在選択状態であることを示します。`aria-controls="tabpanel-id"`では、この要素が`tabpanel-id`というIDを持った要素によって制限されていることを示します。(`role="tabpanel"`属性はタブ要素のコンテナ要素に指定されます。)

WAI-ARIAを使用することで、HTMLだけではボタンであることしか伝えることができなかったのが、「選択中のタブ要素」であることが分かるようになりました。

> [ARIA: tab ロール - 例 | MDN](https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/Tab_Role#example)

WAI-ARIAはあまりに多機能であるため、その全てを一度に紹介することはできません。重要なもののみをピックアップして紹介します。

- `role="list"`: listitem要素を含むセクションを表す
- `role="listitem"`: リストのアイテムを表す
- `role="search"`: 検索用の領域を表す
- `role="tab"`: タブ要素を表す
- `role="tabpanel"`: タブのコンテナ要素を表す
- `aria-disabled`: 要素の無効化状態を表す
- `aria-label`: 説明用のラベルを表す (スクリーンリーダーの読み上げの対象になる場合もある)
- `aria-selected`: 選択状態を表す

> [WAI-ARIAの基本 | MDN](https://developer.mozilla.org/ja/docs/Learn/Accessibility/WAI-ARIA_basics)

### CSSでの使用例

WAI-ARIAを補助的なものとしてではなく、WAI-ARIAベースで状態管理を行うことで、無理なくアクセシビリティの向上を図ることができます。<br>
以下の例では、ボタンの状態管理をWAI-ARIAの`aria-disabled`属性で行っています。

```css
.button__base {
  background-color: #222;
}

.button__base[aria-disabled="true"] {
  background-color: #777;
}
```