# 問題3 AI への頼み方（ひな形）

コピーして、AI のチャット欄に1つずつ貼りつけて使います。
AI が実行したら、**かならず自分の目で結果を確かめてから**次へ進みます。

---

## ① 最新を受け取って、枝を作る

```
git pull で main ブランチを最新にしてください。
そのあと、practice3 という名前の新しいブランチを作って、そのブランチに切りかえてください。
```

✅ 自分で確かめる：ターミナルで `git branch` → `* practice3` になっていれば OK

---

## ② コードを書いてもらう（3つの要素で頼む）

```
【どこを】practice3_grade/script.js の grade 関数の中だけを書きかえてください。ほかのファイルはさわらないでください。
【何を】if と else を使って、score が 80 以上なら show("A")、それ以外なら show("B") と表示する処理を書いてください。
【確認】90 を入れたら「A」、80 を入れたら「A（ちょうどの値）」、70 を入れたら「B」になるようにしてください。
```

✅ 自分で確かめる：`practice3_grade/index.html` をブラウザで開いて、上の3つの値を試す

---

## ③ 記録する（add・commit）

```
practice3_grade フォルダの変更を git add して、
「成績 A・B の判定を追加」というメッセージで git commit してください。
```

✅ 自分で確かめる：`git status` で「nothing to commit」、`git log --oneline` でメッセージが見えれば OK

---

## ④ GitHub に送る（push）

```
practice3 ブランチを GitHub に push してください。
```

✅ 自分で確かめる：GitHub のページで、ブランチの一覧に `practice3` が出ていれば OK
