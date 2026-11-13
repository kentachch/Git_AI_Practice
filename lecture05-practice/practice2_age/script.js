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

// ===== 上記は さわらなくて OK =====
// ===== ここから下を AI に書いてもらう =====
function checkAge(age) {
  // AI がここに処理を書く
}
