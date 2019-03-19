var editBtn = document.querySelector("#editBtn");

editBtn.addEventListener('click', function () {

    var todoList = document.getElementById("todoList");

    if (todoList.contentEditable == "false") {

        todoList.setAttribute("contentEditable", true);
        editBtn.value = "Save";
        todoList.focus();

    } else {
        todoList.setAttribute("contentEditable", false);
        editBtn.value = "Edit";
        saveList();
    }

});

/*icerik kaydet*/

function saveList() {
    var todoList = document.querySelector("#todoList").innerHTML;
    localStorage["storageList"] = todoList;
}


/*icerikTemizle - metodu*/
var clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener('click', function () {

    localStorage.clear();
    window.location.reload();
});


/*icerik yenileme - depoda tutma - otomatik yenileme*/

document.addEventListener("DOMContentLoaded", refreshList, false);

function refreshList() {
    var list = localStorage["storageList"];
    if (list != undefined) {
        document.querySelector("#todoList").innerHTML = list;
    }
}

var btnAdd = document.querySelector('#btnAdd');
btnAdd.addEventListener('click', function () {
    var text = document.querySelector('#text').value;
    Reset();
    if (text == "") {
        alert("Boş değer girdiniz.");
    } else {
        var ol = document.querySelector('#todoList');
        var li = document.createElement('li');
        var textLi = document.createTextNode(text);
        li.appendChild(textLi);
        ol.appendChild(li);
        saveList();
    }
});

function Reset() {
    document.getElementById('text').value = "";
}
