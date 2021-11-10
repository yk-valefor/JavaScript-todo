import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し入力内容を初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // divの中に各要素を設定
  div.appendChild(li);

  //未完了リストに追加
  document.getElementById("uncomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
