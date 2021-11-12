import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得、入力内容を初期化する
  const text = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createUncompleteList(text);
};

//　【関数】未完了リストから指定の要素を削除
const deleteFromUncompleteList = (target) => {
  document.getElementById("uncomplete-list").removeChild(target);
};

// 【関数】未完了リストにtodoを追加する
// →　『追加ボタンからtodo追加』『完了リストから戻すボタン押して未完了リストにtodoを戻す』が共通化できるため
const createUncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了button生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // ★★★完了ボタンがクリックされた時の関数
  completeButton.addEventListener("click", () => {
    /*　TODOを未完了リストから完了リストへ 
        ①未完了リストからtodoを削除
        ②完了リストに追加するための中身生成
        ③完了リストに追加　*/
    // ★①未完了リストから削除
    const addTarget = completeButton.parentNode; //押した完了ボタンのdivのかたまりを選択
    deleteFromUncompleteList(addTarget);
    // ★②完了リストに追加するための中身生成
    const text = addTarget.firstElementChild.innerText; //todoの内容を取得
    addTarget.textContent = null; //divの中身を消去(divだけにする)
    const li = document.createElement("li"); //liタグ生成
    li.innerText = text; //todo内容をliに入れる
    const backButton = document.createElement("button"); //戻すbutton生成
    backButton.innerText = "戻す";

    //  ★★★戻すボタン押した時の関数
    backButton.addEventListener("click", () => {
      /*　TODOを完了リストから未完了リストへ 
        ①完了リストからtodoを削除
        ②未完了リストに追加するための中身生成
        ③未完了リストに追加　*/
      //　★①完了リストから削除
      const deleteTarget = backButton.parentNode; //押した戻すボタンのdivのかたまりを取得
      document.getElementById("complete-list").removeChild(deleteTarget); //完了リストから削除
      // ★②未完了リストに追加するための中身生成
      const text = deleteTarget.firstElementChild.innerText; //todoの内容を取得
      // ★③未完了リストに追加(この関数をもう一回やる)
      createUncompleteList(text);
    });

    div.appendChild(li); //divの中にli要素を設定
    div.appendChild(backButton); //divの中にbutton要素を設定
    //　★③完了リストにtodo追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除button生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  //　★★★削除ボタン押した時の関数
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

//　追加ボタン押した時の関数
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
