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

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // TODOを未完了リストから完了リストへ

    // ★未完了リストから削除
    deleteFromUncompleteList(completeButton.parentNode);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // TODOを未完了リストから削除
    deleteFromUncompleteList(deleteButton.parentNode);
  });

  // divの中に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("uncomplete-list").appendChild(div);
};

//　【関数】未完了リストから指定の要素を削除
const deleteFromUncompleteList = (target) => {
  document.getElementById("uncomplete-list").removeChild(target);
};

//　追加ボタン
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
