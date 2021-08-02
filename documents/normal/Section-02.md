# Section 2 : 基本的なタグ 2

## 基本的なタグ 2

### [em](https://developer.mozilla.org/ja/docs/Web/HTML/Element/em)

テキストを強調します。

```html
<em>英数字8文字以上</em>で入力してください。
```

### [strong](https://developer.mozilla.org/ja/docs/Web/HTML/Element/strong)

重要、重大、または緊急性の高いテキストを表します。

```html
電源ボタンを<strong>3秒間長押し</strong>することで、強制的に終了します。
```

### [ol](https://developer.mozilla.org/ja/docs/Web/HTML/Element/ol)

順序付きのリストを表します。<br>
`ol`タグは、中に1つ以上の`li`要素を含めて使用します。

```html
<ol>
  <li>東京</li>
  <li>大阪</li>
  <li>神奈川</li>
</ol>
```

### [ul](https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul)

箇条書き (順序なしのリスト) を表します。<br>
`ul`タグも、中に1つ以上の`li`要素を含めて使用します。

```html
<ul>
  <li>リンゴ</li>
  <li>ミカン</li>
  <li>スイカ</li>
</ul>
```

### [li](https://developer.mozilla.org/ja/docs/Web/HTML/Element/li)

リストの項目を表します。<br>
`li`タグは、上述の`ol`タグまたは`ul`タグの中に配置して使用します。

#### リスト作成時の注意点

`ol`タグと`ul`タグの中に含められるタグは、基本的に`li`要素のみです。

### [button](https://developer.mozilla.org/ja/docs/Web/HTML/Element/button)

ボタンを表します。

```html
<button>Submit</button>
```

### [input](https://developer.mozilla.org/ja/docs/Web/HTML/Element/input)

データ入力用の様々なコントロールを作成します。<br>
作成するコントロールの種類は`type`属性で指定します。

#### テキスト (1行) 入力用コントロール

```html
<input type="text" name="user-name" id="user-name">
```

#### メールアドレス入力用コントロール
```html
<input type="email" name="email-address" id="email-address">
```

#### パスワード入力用コントロール

```html
<input type="password" name="user-password" id="user-password">
```

#### 数字入力用コントロール

```html
<input type="number" name="age" id="age">
```

#### ボタン

```html
<input type="button" value="ボタン">
```

#### チェックボックス
```html
<input type="checkbox" name="has-read" id="has-read">
```

#### ラジオホタン

```html
<input type="radio" name="contact" id="contact-email">
```

#### 日付選択用コントロール
```html
<input type="date" name="birthday" id="birthday">
```

#### 時間入力用コントロール
```html
<input type="time" name="start-time" id="start-time">
```

#### ファイル選択用コントロール
```html
<input type="file" name="profile-icon" id="profile-icon">
```

#### スライダーコントロール

```html
<input type="range" name="volume" id="volume">
```

#### 色選択用コントロール
```html
<input type="color" name="text-color" id="text-color">
```

#### リセット用コントロール

```html
<input type="reset" value="リセット">
```

### [label](https://developer.mozilla.org/ja/docs/Web/HTML/Element/label)

`label`要素は、`input`要素とともに用いられることが多く、主に`input`要素のヒット領域を広げる目的で使用されます。

`input`要素と`label`要素を関連付ける方法は、以下の2つがあります。<br>
この方法を用いることで、テキスト部分をクリックすることで`input`要素の切り替えを行うことができます。

#### `label`要素で`input`要素を囲む

```html
<label>
  <input type="checkbox" name="is-kmc-member" id="is-kmc-member">
  KMC部員
</label>
```

#### `label`要素の`for`属性を使用する

```html
<input type="checkbox" name="is-kmc-member" id="is-kmc-member">
<label for="is-kmc-member">KMC部員</label>
```

### [progress](https://developer.mozilla.org/ja/docs/Web/HTML/Element/progress)

タスクの進捗を表します。

```html
<progress max="100" value="70"></progress>
```

### [select](https://developer.mozilla.org/ja/docs/Web/HTML/Element/select)

選択式メニューを作成します。<br>
`option`要素を用いてメニューを作成します。

```html
<option>
  <option value="dog">犬</option>
  <option value="cat">猫</option>
  <option value="rabbit">うさぎ</option>
</option>
```

### [option](https://developer.mozilla.org/ja/docs/Web/HTML/Element/option)

メニュー項目を作成します。

### [textarea](https://developer.mozilla.org/ja/docs/Web/HTML/Element/textarea)

```html
<textarea name="answer" id="answer" cols="30" rows="10">KMC</textarea>
```

### [form](https://developer.mozilla.org/ja/docs/Web/HTML/Element/form)

フォーム (サーバーに情報を送るパーツ) を表します。

以下は、`form`要素と`input`要素の使用方法の例です。フィールドを必須項目にするには、`required`属性を使用します。

```html
  <form action="">
    <div>
      <input type="checkbox" name="can-read-lang" id="can-read-en">
      <label for="can-read-en">英語</label>
      <input type="checkbox" name="can-read-lang" id="can-read-ja">
      <label for="can-read-ja">日本語</label>
      <input type="checkbox" name="can-read-lang" id="can-read-fr">
      <label for="can-read-fr">フランス語</label>
    </div>
    <div>
      <label for="text-color">色の選択</label>
      <input type="color" name="text-color" id="text-color">
    </div>
    <div>
      <label for="birthday">生年月日</label>
      <input type="date" name="birthday" id="birthday">
    </div>
    <div>
      <label for="start-time">開始時刻</label>
      <input type="time" name="start-time" id="start-time">
    </div>
    <div>
      <label for="user-name">氏名</label>
      <input type="text" name="user-name" id="user-name">
    </div>
    <div>
      <label for="email-address">メールアドレス</label>
      <input type="email" name="email-address" id="email-address">
    </div>
    <div>
      <label for="age">年齢</label>
      <input type="number" name="age" id="age">
    </div>
    <div>
      <label for="profile-icon">プロフィールアイコン</label>
      <input type="file" name="profile-icon" id="profile-icon">
    </div>
    <div>
      <label for="user-password">パスワード</label>
      <input type="password" name="user-password" id="user-password">
    </div>
    <div>
      <input type="radio" name="contact" id="contact-email">
      <label for="contact-email">メール</label>
      <input type="radio" name="contact" id="contact-phone">
      <label for="contact-phone">電話</label>
    </div>
    <div>
      <input type="range" name="volume" id="volume">
    </div>
    <div>
      <input type="reset" value="リセット">
      <input type="button" value="送信">
    </div>
  </form>
```

### [dl](https://developer.mozilla.org/ja/docs/Web/HTML/Element/dl)

`dl`タグ、`dt`タグ、`dd`タグを用いて、項目の説明や定義を記述することができます。<br>
`dl`タグの中に`dt`タグと`dd`タグを配置します。

### [dt](https://developer.mozilla.org/ja/docs/Web/HTML/Element/dt)

`dt`タグは説明/定義の対象となる用語を表します。

### [dd](https://developer.mozilla.org/ja/docs/Web/HTML/Element/dd)

`dd`タグは`dt`タグで指定した用語の説明/定義を表します。

```html
<dl>
  <dt>アメリカ</dt>
  <dd>アメリカ合衆国</dd>

  <dt>イギリス</dt>
  <dd>グレートブリテン及び北アイルランド連合王国</dd>

  <dt>日本</dt>
  <dd>日本国</dd>
</dl>
```

### [table](https://developer.mozilla.org/ja/docs/Web/HTML/Element/table)

表 (テーブル) を作成します。

### [th](https://developer.mozilla.org/ja/docs/Web/HTML/Element/th)

表のヘッダーを表します。

### [tr](https://developer.mozilla.org/ja/docs/Web/HTML/Element/tr)

表の行を表します。

### [td](https://developer.mozilla.org/ja/docs/Web/HTML/Element/td)

表のセルを定義します。

### [thead](https://developer.mozilla.org/ja/docs/Web/HTML/Element/thead)

表の列見出しを表します。

### [tbody](https://developer.mozilla.org/ja/docs/Web/HTML/Element/tbody)

表の本体部分を表します。

### [tfoot](https://developer.mozilla.org/ja/docs/Web/HTML/Element/tfoot)

表の列フッターを表します。

```html
<table>
  <thead>
    <tr>
      <th>市町村</th>
      <th>人口 (万人)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>大阪市</th>
      <td>275</td>
    </tr>
    <tr>
      <th>横浜市</th>
      <td>372</td>
    </tr>
    <tr>
      <th>名古屋市</th>
      <td>233</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>計</th>
      <td>880</td>
    </tr>
  </tfoot>
</table>
```
