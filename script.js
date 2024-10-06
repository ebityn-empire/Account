const loop = document.getElementById('loop');
let count = 3;

function join () {
  // 文字列用のテキストボックス
  const message = document.createElement('p')
  message.innerHTML = ':支払い元         :支払い先'
  message.style.cssText = "margin: 0;"
  loop.appendChild(message)
  const textTextBox = document.createElement('input');
  textTextBox.type = 'text';
  textTextBox.id = "A" + count;
  textTextBox.placeholder = 'ここに名前を入力';
  loop.appendChild(textTextBox);
  const yazi = document.createElement('span');
  yazi.innerHTML = '　→　';
  loop.appendChild(yazi);
  const textTextBox2 = document.createElement('input');
  textTextBox2.type = 'text';
  textTextBox2.id = "B" + count;
  textTextBox2.placeholder = 'ここに名前を入力';
  loop.appendChild(textTextBox2);
  const message2 = document.createElement('p')
  message2.innerHTML = '数字を入力してください。'
  message2.style.cssText = "margin: 0;"
  loop.appendChild(message)
  // 数字用のテキストボックス
  for (let i = 1; i <= 40; i++){
  const numberTextBox = document.createElement('input');
  numberTextBox.type = 'number';
  numberTextBox.id = "C" + count + "V" + i
  numberTextBox.style.cssText = "width: 8%;"
  loop.appendChild(numberTextBox);}
  count++
};
function Account() {
   let url = 'result.html?count='+count;
   for(let hen=1; hen < count; hen++){
    var a = document.getElementById("A"+hen).value;
    var b = document.getElementById("B"+hen).value;
    if(a !== "" && b !== ""){
     var pp = []
     for(let o = 1; o <= 40; o++){
      var p = document.getElementById("C"+hen+"V"+o).value;
      pp.push(p);}
      var c = pp.reduce(function(sum,element){return sum+Number(element);},0);
      var bb = []
      var b2 = []
      for(let i = 1; i < count; i++) {
       var b1 = document.getElementById("B"+i).value;
       bb.push(b1)}
      bb.forEach((element, index) => {
      if (element === a) b2.push(index);});
   if(!(b2[0] == null)){
     for(let j = 0;j < b2.length;j++){
      var a1 = document.getElementById("A"+(b2[j]+1)).value
      if(a1 == b){
     var qq = []
     for(let k = 1; k <= 40; k++){
      var q= document.getElementById("C"+(b2[j]+1)+"V"+k).value;
      qq.push(q);}
      var cc = qq.reduce(function(sum,element){return sum+Number(element);},0);
      }
     }if(c-cc > 0){url += `&A${hen}=${a}&B${hen}=${b}&C${hen}=${(c-cc)}`};
   }else if(c-cc > 0){url += `&A${hen}=${a}&B${hen}=${b}&C${hen}=${pp}`;}
   }
 window.location.href = url;
 }
}
