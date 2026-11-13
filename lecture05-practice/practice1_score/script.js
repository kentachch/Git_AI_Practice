const input = document.getElementById("num");
const button = document.getElementById("run");
const result = document.getElementById("result");

function show(text) {
  const li = document.createElement("li");
  li.textContent = text;
  result.appendChild(li);
}

button.addEventListener("click", () => {
  result.innerHTML = "";
  const score = Number(input.value);
  judge(score);
});
// ===== 上記は さわらなくて OK =====

// ===== ここから下を AI に書いてもらう =====
// 2. やること: if と else を使い、score が 60 以上なら「合格」、
//    それ以外なら「不合格」と show() で表示する。

// 3. AI に渡すプロンプト（この順に進めてもらう）:

// 「1) git pull で main ブランチを最新にする。
//   2) practice1-自分の名前 ブランチを作って切りかえる（例: practice1-tanaka）。
//   3) practice1_score/script.js の judge 関数の中だけを if/else で実装する。
//      score が 60 以上なら show("合格")、それ以外は show("不合格")。
//   4) practice1_score フォルダの変更を git add する。
//   5) 『合格・不合格の判定を追加』というメッセージで git commit する。
//   6) practice1-自分の名前 ブランチを GitHub に git push する。」
function judge(score) {
  // AI がここに処理を書く
}
