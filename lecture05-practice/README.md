# Lecture 05 Git × AI 実践

このフォルダを **VS Code にドラッグ＆ドロップ** して開き、AI に Git の操作を頼みながら問題を解きます。

## 問題

| 問題 | フォルダ | 内容 | 進め方 |
|---|---|---|---|
| 問題1 | `practice1_score/` | 60点以上なら合格、それ以外は不合格（if・else） | 先生といっしょに |
| 問題2 | `practice2_age/` | 18歳以上なら成人、それ以外は未成年（if・else） | じぶんで（必須） |
| 問題3 | `practice3_grade/` | 80点以上なら A、それ以外は B（if・else） | じぶんで（チャレンジ） |

## 毎回の流れ（5つのコマンド、この順番で）

1. `git pull` … GitHub の最新を受け取る
2. `git checkout -b practiceN` … 自分の枝を作る
3. （AI にコードを書いてもらい、ブラウザで確かめる）
4. `git add` → `git commit -m "メッセージ"` … 箱に入れて、封をしてメモ
5. `git push` … GitHub へ送る

AI への頼み方は `prompts/` フォルダのひな形を使ってください。

## 約束

- Git の操作は AI に頼んで OK。でも **結果はかならず自分で確かめる**
- 迷ったら `git status`（今の状態）と `git branch`（今いる枝）
- 書きかえるのは各問題の `script.js` の「ここから下」だけ
- 次の問題に進むときは、まず main に戻ってから（「main ブランチに切りかえて pull して」と AI に頼む）
