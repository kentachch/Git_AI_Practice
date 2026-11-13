# Git_AI_Practice

AI に Git の操作を頼みながら、かんたんな JavaScript の問題を解きます。

## はじめに

1. このリポジトリを clone する
2. `lecture05-practice` フォルダを VS Code で開く

## 問題

| 問題 | 書きかえる場所 | やること | 確かめる値 | 進め方 |
| --- | --- | --- | --- | --- |
| 1 | `practice1_score/script.js` の `judge` | 60点以上なら「合格」、それ以外は「不合格」 | 80・60・40 | 先生といっしょに |
| 2 | `practice2_age/script.js` の `checkAge` | 18歳以上なら「成人です」、それ以外は「未成年です」 | 20・18・15 | じぶんで（必須） |
| 3 | `practice3_grade/script.js` の `grade` | 80点以上なら「A」、それ以外は「B」 | 90・80・70 | じぶんで（チャレンジ） |

各問題の `index.html` をブラウザで開き、値を入れて［実行］を押すと確かめられます。

## AI に渡すプロンプト

「自分の名前」はローマ字の名前に書きかえてから渡してください（例：`practice1-tanaka`）。
ほかの人と同じブランチ名にならないようにするためです。

### 問題1

```text
1) main ブランチに切りかえて、git pull してください。
2) practice1-自分の名前 ブランチを作って、切りかえてください。
3) practice1_score/script.js の judge 関数の中だけを、if/else で書いてください。
   score が 60 以上なら show("合格")、それ以外は show("不合格") と表示してください。
   ほかのファイルはさわらないでください。
4) practice1_score/script.js を git add してください。
5) 『合格・不合格の判定を追加』というメッセージで git commit してください。
6) practice1-自分の名前 ブランチを GitHub に git push してください。
```

### 問題2

```text
1) main ブランチに切りかえて、git pull してください。
2) practice2-自分の名前 ブランチを作って、切りかえてください。
3) practice2_age/script.js の checkAge 関数の中だけを、if/else で書いてください。
   age が 18 以上なら show("成人です")、それ以外は show("未成年です") と表示してください。
   ほかのファイルはさわらないでください。
4) practice2_age/script.js を git add してください。
5) 『成人・未成年の判定を追加』というメッセージで git commit してください。
6) practice2-自分の名前 ブランチを GitHub に git push してください。
```

### 問題3

プロンプトは自分で書きます。次のことを AI に頼んでください。

- main ブランチに切りかえて、git pull する
- practice3-自分の名前 ブランチを作って、切りかえる
- practice3_grade/script.js の grade 関数の中だけを、if/else で書く（score が 80 以上なら「A」、それ以外は「B」）
- practice3_grade/script.js を git add する
- 『成績 A・B の判定を追加』というメッセージで git commit する
- practice3-自分の名前 ブランチを GitHub に git push する

## 約束

- Git の操作は AI に頼んで OK。でも**結果はかならず自分で確かめる**
- 迷ったら `git status`（今の状態）と `git branch`（今いるブランチ）
- 書きかえるのは各 `script.js` の「ここから下」だけ
