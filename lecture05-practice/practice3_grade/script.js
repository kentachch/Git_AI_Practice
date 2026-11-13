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
  const score = Number(input.value);
  grade(score);
});

// ===== 上記は さわらなくて OK =====

// ===== ここから下を AI に書いてもらい、pushまで行ってください。 =====
function grade(score) {
  // やること: if と else を使って、80点以上なら「A」、それ以外は「B」と show() で表示する
  // ここから書き始めてください。
}
