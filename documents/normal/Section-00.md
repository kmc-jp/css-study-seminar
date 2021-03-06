# Section 0 : 環境構築

## コマンドライン基本操作

はじめに、コマンドラインの基本操作について説明をします。本資料ではしばしば、以下のような記述が登場します。
```
$  echo "Hello, World!"
Hello, World!
```
これは、`echo "Hello, World!"`というコマンドを実行し、その実行結果として`Hello, World!`という出力が得られたことを表しています。`$`マークがコマンドの前に記述されることが多いですが、これはコマンドには含まれません。<br>

### 基本操作

#### ディレクトリ (フォルダ) の移動
- Windows / Linux

  ```
  $  cd bin
  ```

#### 現在いるディレクトリ (フォルダ) のパスを表示
- Windows

  ```
  $  cd
  C:\Windows\System32
  ```

- Linux

  ```
  $  pwd
  /home/ryokohbato/develop/css-study-seminar/normal
  ```

#### 現在いるディレクトリの内容を表示
- Windows
  ```
  $  dir
  2021/07/29  06:23    <DIR>          .
  2021/07/29  06:23    <DIR>          ..
  2021/07/29  06:23    <DIR>          obj
  2021/07/29  06:23               195 Program.cs
  2021/07/29  06:23               171 sampleProject.csproj
  ```

- Linux
  ```
  $  ls -al
  drwxr-xr-x   - ryokohbato 29  7月 15:09 obj
  .rw-r--r-- 176 ryokohbato 29  7月 15:09 Program.cs
  .rw-r--r-- 163 ryokohbato 29  7月 15:09 sample.csproj
  ```

#### ディレクトリ (フォルダ) を作成
- Windows / Linux

  ```
  $  mkdir bin
  ```

#### ファイルをコピー
- Windows

  ```
  $  copy test.txt dist\
  ```

- Linux

  ```
  $  cp test.txt dist/
  ```

#### ファイルを削除
- Windows

  ```
  $  del test.txt
  ```

- Linux

  ```
  $  rm test.txt
  ```

コマンドラインからファイルを削除した場合、もとに戻せない (ゴミ箱から復元できない) ので、注意が必要です。

## 環境構築

1. Node.jsをインストール ([n](https://github.com/tj/n)などのNode.jsバージョン管理用ツールを使用する場合は、各ツールの指示に従ってください。)

以下のようにして、Node.jsがインストールされたことを確認することができます。

```
$  node --version
v14.17.3
```

2. GitHubから、任意のフォルダにリポジトリをクローン (以下はSSHの例)

```
$  git clone git@github.com:kmc-jp/css-study-seminar.git
```

3. 動作確認

Normal用のフォルダに移動

```
$  cd css-study-seminar/normal/
```

必要なパッケージをインストール
```
$  npm install
```

サンプルプロジェクトを起動
```
$  npm run sample
```

ここまでで、自動的にウェブブラウザが起動し、以下の画面が表示されていれば、環境構築および動作確認は完了です。

![サンプルプロジェクト起動画面](../images/sample-project.png)
