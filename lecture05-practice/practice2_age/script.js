// ===== ここは さわらなくて OK =====
const input = document.getElementById("num");
const button = document.getElementById("run");
const result = document.getElementById("result");

// show("文字") で、結果に1行ずつ表示します
function show(text) {
  const li = document.createElement("li");
  li.textContent = text;
  result.appendChild(li);
}

button.addEventListener("click", () => {
  result.innerHTML = "";
  const age = Number(input.value);
  checkAge(age);
});

// 1. やること: if と else を使い、age が 18 以上なら「成人です」、
//    それ以外なら「未成年です」と show() で表示する。

// 2. AI に渡すプロンプト（この順に進めてもらう）:

// 「1) git pull で main ブランチを最新にする。
//   2) practice2-自分の名前 ブランチを作って切りかえる（例: practice2-tanaka）。
//   3) practice2_age/script.js の checkAge 関数の中だけを if/else で実装する。
//      age が 18 以上なら show("成人です")、それ以外は show("未成年です")。
//   4) practice2_age フォルダの変更を git add する。
//   5) 『成人・未成年の判定を追加』というメッセージで git commit する。
//   6) practice2-自分の名前 ブランチを GitHub に git push する。」


function checkAge(age) {
  // AI がここに処理を書く
}
