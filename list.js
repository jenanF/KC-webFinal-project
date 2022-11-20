

let mlist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mlist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mlist[i].appendChild(span);
}



let listy = document.getElementById("listdo").appendChild(li);


if (localStorage.getItem("listy")){
  let parseList = localStorage.getItem("listy").split(`,`);
  listy = parseList;

  for (i = 0; i < mlist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    mlist[i].appendChild(span);
  }
}





let close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}


let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("taskinp").value;
  let t = document.createTextNode(inputValue);
  localStorage.setItem("listy", listy);
  li.appendChild(t);
  if (inputValue === '') {
    console.error('الرجاء ادخال قيمة');
    alert('الرجاء ادخال قيمة');
  } else {
    document.getElementById("listdo").appendChild(li);
  }
  document.getElementById("taskinp").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

