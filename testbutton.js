radiobtnMTmax = document.getElementById("MTmax");
radiobtnMTmin = document.getElementById("MTmin");
radiobtnMTmin.checked = true;
radiobtnMatTmax = document.getElementById("MatTmax");
radiobtnMatTmin = document.getElementById("MatTmin");
radiobtnMatTmin.checked = true;
radiobtnCTmax = document.getElementById("CTmax");
radiobtnCTmin = document.getElementById("CTmin");
radiobtnCTmin.checked = true;
radiobtnNTmax = document.getElementById("NTmax");
radiobtnNTmin = document.getElementById("NTmin");
radiobtnNTmin.checked = true;
radiobtnKTmax = document.getElementById("KTmax");
radiobtnKTmin = document.getElementById("KTmin");
radiobtnKTmin.checked = true;
radiobtnOPmax = document.getElementById("OPmax");
radiobtnOPmin = document.getElementById("OPmin");
radiobtnOPmin.checked = true;

var x1 = -1; 
var x2 = -1; 
var x3 = -1; 
var x4 = -1; 
var x5 = -1; 
var x6 = -1; 

const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)/100;

var y0 = berekenY(x1,x2,x3,x4,x5,x6); 
drawSlice(y0);
tableCreate();

radiobtnMTmax.addEventListener('click', function(){
  x1 = 1
  y0 = berekenY(x1,x2,x3,x4,x5,x6); 
  drawSlice(y0);  
}, true);

radiobtnMTmin.addEventListener('click', function(){
  x1 = -1
  y0 = berekenY(x1,x2,x3,x4,x5,x6); 
  drawSlice(y0);
}, true);

radiobtnOPmax.addEventListener('click', function(){
  x2 = 1
  y0 = berekenY(x1,x2,x3,x4,x5,x6); 
  drawSlice(y0);
}, true);

radiobtnOPmin.addEventListener('click', function(){
  x2 = -1
  y0 = berekenY(x1,x2,x3,x4,x5,x6); 
  drawSlice(y0);
}, true);

radiobtnMatTmax.addEventListener('click', function(){
  x3 = 1
  y0 = berekenY(x1,x2,x3,x4,x5,x6); 
  drawSlice(y0);
}, true);

radiobtnMatTmin.addEventListener('click', function(){
  x3 = -1
  y0 = berekenY(x1,x2,x3,x4,x5,x6); 
  drawSlice(y0);
}, true);

radiobtnKTmax.addEventListener('click', function(){
  x4 = 1
  y0 = berekenY(x1,x2,x3,x4,x5,x6); 
  drawSlice(y0);
}, true);

radiobtnKTmin.addEventListener('click', function(){
  x4 = -1
  y0 = berekenY(x1,x2,x3,x4,x5,x6); 
  drawSlice(y0);
}, true);

radiobtnCTmax.addEventListener('click', function(){
  x5 = 1
  y0 = berekenY(x1,x2,x3,x4,x5,x6); 
  drawSlice(y0);
}, true);

radiobtnCTmin.addEventListener('click', function(){
  x5 = -1
  y0 = berekenY(x1,x2,x3,x4,x5,x6); 
  drawSlice(y0);
}, true);

radiobtnNTmax.addEventListener('click', function(){
  x6 = 1
  y0 = berekenY(x1,x2,x3,x4,x5,x6); 
  drawSlice(y0);
}, true);

radiobtnNTmin.addEventListener('click', function(){
  x6 = -1
  y0 = berekenY(x1,x2,x3,x4,x5,x6); 
  drawSlice(y0);
}, true);


function berekenY(x1, x2, x3, x4, x5, x6) {
  var bfac = 100000;
  var Y0 = 0.26066971; //hoofdterm

  //factor X1 Massatemperatuur [265 285]
  var X1 = [265, 285];
  var rel_val1 = (NormSInv(Math.random())*0.001)+1;
  var coef1 = 0.001959975;
  var factor1 = -(X1[1]-X1[0])/(Math.pow(X1[0]-bfac,2)-Math.pow(X1[1]-bfac,2));
  if (x1 == -1){
    var yval1 = X1[0];
  }
  else if (x1 == 1){
    var yval1 = X1[1];
  }
  var Y1 = coef1*(factor1*Math.pow(yval1*rel_val1-bfac,2)-0.5*(X1[1]-X1[0])-factor1*Math.pow(X1[0]-bfac,2));

  
  // factor X2 Omschakelpunt [1.6 2.0]
  var X2 = [1.6 , 2.0];
  var rel_val2 = (NormSInv(Math.random())*0.001)+1;
  var coef2 = 0.1169514;
  var factor2 = -(X2[1]-X2[0])/(Math.pow(X2[0]-bfac,2)-Math.pow(X2[1]-bfac,2));
  if (x2 == -1){
    yval2 = X2[0];
  } 
  else if (x2 == 1){
    yval2 = X2[1];
  }
  var Y2 = coef2*(factor2*Math.pow(yval2*rel_val2-bfac,2)-0.5*(X2[1]-X2[0])-factor2*Math.pow(X2[0]-bfac,2));
  
  // factor X3 Matrijstemperatuur [25 65]
  var X3 = [25,  65];
  var rel_val3 = (NormSInv(Math.random())*0.001)+1;
  var coef3 = -0.00379775;
  var factor3 = -(X3[1]-X3[0])/(Math.pow(X3[0]-bfac,2)-Math.pow(X3[1]-bfac,2));
  if (x3 == -1){
    yval3 = X3[0];
  } 
  else if (x3 == 1){
    yval3 = X3[1]; 
  }
  var Y3 = coef3*(factor3*Math.pow(yval3*rel_val3-bfac,2)-0.5*(X3[1]-X3[0])-factor3*Math.pow(X3[0]-bfac,2));

  // factor X4 Koeltijd [1.7 4.0]
  var X4 = [1.7, 4.0];
  var rel_val4 = (NormSInv(Math.random())*0.001)+1;
  var coef4 = 0.00878;
  var factor4 = -(X4[1]-X4[0])/(Math.pow(X4[0]-bfac,2)-Math.pow(X4[1]-bfac,2));
  if (x4 == -1){
    yval4 = X4[0];
  } 
  else if (x4 == 1){
    yval4 = X4[1];
  }
  var Y4 = coef4*(factor4*Math.pow(yval4*rel_val4-bfac,2)-0.5*(X4[1]-X4[0])-factor4*Math.pow(X4[0]-bfac,2));

  // factor X5 Coiningtijd [0.09 0.20]
  var X5 = [0.09, 0.2];
  var rel_val5 = (NormSInv(Math.random())*0.001)+1;
  var coef5 = -1.858978;
  var factor5 = -(X5[1]-X5[0])/(Math.pow(X5[0]-bfac,2)-Math.pow(X5[1]-bfac,2));
  if (x5 == -1){
    yval5 = X5[0];
  } 
  else if (x5 == 1){
    yval5 = X5[1];
  }
  var Y5 = coef5*(factor5*Math.pow(yval5*rel_val5-bfac,2)-0.5*(X5[1]-X5[0])-factor5*Math.pow(X5[0]-bfac,2));

  // factor X6 Nadruktijd [0.2 0.6]
  var X6 = [0.2, 0.6];
  var rel_val6 = (NormSInv(Math.random())*0.001)+1;
  var coef6 = 0.2085078;
  var factor6 = -(X6[1]-X6[0])/(Math.pow(X6[0]-bfac,2)-Math.pow(X6[1]-bfac,2));
  if (x6 == -1){
    yval6 = X6[0];
  } 
  else if (x6 == 1){
    yval6 = X6[1];
  }    
  var Y6 = coef6*(factor6*Math.pow(yval6*rel_val6-bfac,2)-0.5*(X6[1]-X6[0])-factor6*Math.pow(X6[0]-bfac,2));
  
  // interactie x1x3
  var coef13 = -0.0114;
  var Y13 = coef13*rel_val1*x1*x3;

  // interactie x1x4
  var coef14 = 0.0135355;
  var Y14 = coef14*rel_val1*x1*x4;

  // interactie x1x5
  var coef15 = -0.00921525;
  var Y15 = coef15*rel_val1*x1*x5;

  // interactie x2x6
  var coef26 = -0.01637216;
  var Y26 = coef26*rel_val2*x2*x6;

  // interactie x3x4
  var coef34 = 0.023115;
  var Y34 = coef34*rel_val3*x3*x4;

  // totale Y
  return Y0+Y1+Y2+Y3+Y4+Y5+Y6+Y13+Y14+Y15+Y26+Y34;

}


function NormSInv(p) {
  var a1 = -39.6968302866538, a2 = 220.946098424521, a3 = -275.928510446969;
  var a4 = 138.357751867269, a5 = -30.6647980661472, a6 = 2.50662827745924;
  var b1 = -54.4760987982241, b2 = 161.585836858041, b3 = -155.698979859887;
  var b4 = 66.8013118877197, b5 = -13.2806815528857, c1 = -7.78489400243029E-03;
  var c2 = -0.322396458041136, c3 = -2.40075827716184, c4 = -2.54973253934373;
  var c5 = 4.37466414146497, c6 = 2.93816398269878, d1 = 7.78469570904146E-03;
  var d2 = 0.32246712907004, d3 = 2.445134137143, d4 = 3.75440866190742;
  var p_low = 0.02425, p_high = 1 - p_low;
  var q, r;
  var retVal;

  if ((p < 0) || (p > 1))
  {
      alert("NormSInv: Argument out of range.");
      retVal = 0;
  }
  else if (p < p_low)
  {
      q = Math.sqrt(-2 * Math.log(p));
      retVal = (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
  }
  else if (p <= p_high)
  {
      q = p - 0.5;
      r = q * q;
      retVal = (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q / (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
  }
  else
    {
        q = Math.sqrt(-2 * Math.log(1 - p));
        retVal = -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }

    return retVal;
}


const buttonadd = document.querySelector('.addexp');
const buttonexport = document.querySelector('.exportex');
const buttonclear = document.querySelector('.cleartab');
const buttonclearrow = document.querySelector('.clearrow');

var counter = 1;

var matrix =  Array(16).fill(Array(6).fill(0));

buttonadd.addEventListener('click', function(){
  if (counter == 17) {
    alert('The table if full. Save the data first or empty the table.');
  }
  
  else{
    for(var j = 0; j<16;j++ ){
      if (matrix[j][0]==x1 && matrix[j][1]==x2 && matrix[j][2] == x3 && matrix[j][3] == x4 && matrix[j][4] == x5 && matrix[j][5] == x6){
        if (confirm("A similar experiment already exists in the table. Do you want to add the experiment again?")) {
          break;
        } else {
          return;
        }
      }
    
    }
      
    matrix[counter-1]= [x1,x2,x3,x4,x5,x6];
    tbl.rows[counter].cells[1].innerHTML = x1;
    tbl.rows[counter].cells[2].innerHTML = x2;
    tbl.rows[counter].cells[3].innerHTML = x3;
    tbl.rows[counter].cells[4].innerHTML = x4;
    tbl.rows[counter].cells[5].innerHTML = x5;
    tbl.rows[counter].cells[6].innerHTML = x6;
    tbl.rows[counter].cells[7].innerHTML = y0.toFixed(6);
    counter = counter + 1;
       
  }
}  
, true);

buttonclear.addEventListener('click', function(){
  for (var i = 1; i<17; i++){
    for (var j = 1; j<8; j++){
      tbl.rows[i].cells[j].innerHTML = " ";
    }
  }
  counter = 1;
  matrix =  Array(16).fill(Array(6).fill(0));
}  
, true);

buttonclearrow.addEventListener('click', function(){
  if (counter == 2) {
  for (var i = 1; i<17; i++){
    for (var j = 1; j<8; j++){
      tbl.rows[1].cells[j].innerHTML = " ";
    }
  }
  }
    else if (counter == 3 {
  for (var i = 1; i<17; i++){
    for (var j = 1; j<8; j++){
      tbl.rows[2].cells[j].innerHTML = " ";
    }
  }
}
    else if (counter == 4 {
  for (var i = 1; i<17; i++){
    for (var j = 1; j<8; j++){
      tbl.rows[3].cells[j].innerHTML = " ";
    }
  }
}
    else if (counter == 5 {
  for (var i = 1; i<17; i++){
    for (var j = 1; j<8; j++){
      tbl.rows[4].cells[j].innerHTML = " ";
    }
  }
}
    else if (counter == 6 {
  for (var i = 1; i<17; i++){
    for (var j = 1; j<8; j++){
      tbl.rows[5].cells[j].innerHTML = " ";
    }
  }
}
    else if (counter == 7 {
  for (var i = 1; i<17; i++){
    for (var j = 1; j<8; j++){
      tbl.rows[6].cells[j].innerHTML = " ";
    }
  }
}
    else if (counter == 8 {
  for (var i = 1; i<17; i++){
    for (var j = 1; j<8; j++){
      tbl.rows[7].cells[j].innerHTML = " ";
    }
  }
}
    else if (counter == 9 {
  for (var i = 1; i<17; i++){
    for (var j = 1; j<8; j++){
      tbl.rows[8].cells[j].innerHTML = " ";
    }
  }
}
    else if (counter == 10 {
  for (var i = 1; i<17; i++){
    for (var j = 1; j<8; j++){
      tbl.rows[9].cells[j].innerHTML = " ";
    }
  }
}
    else if (counter == 11 {
  for (var i = 1; i<17; i++){
    for (var j = 1; j<8; j++){
      tbl.rows[10].cells[j].innerHTML = " ";
    }
  }
}
    else if (counter == 12 {
  for (var i = 1; i<17; i++){
    for (var j = 1; j<8; j++){
      tbl.rows[11].cells[j].innerHTML = " ";
    }
  }
}
    else if (counter == 13 {
  for (var i = 1; i<17; i++){
    for (var j = 1; j<8; j++){
      tbl.rows[12].cells[j].innerHTML = " ";
    }
  }
}
    else if (counter == 14 {
  for (var i = 1; i<17; i++){
    for (var j = 1; j<8; j++){
      tbl.rows[13].cells[j].innerHTML = " ";
    }
  }
}
    else if (counter == 15 {
  for (var i = 1; i<17; i++){
    for (var j = 1; j<8; j++){
      tbl.rows[14].cells[j].innerHTML = " ";
    }
  }
}
    else if (counter == 16 {
  for (var i = 1; i<17; i++){
    for (var j = 1; j<8; j++){
      tbl.rows[15].cells[j].innerHTML = " ";
    }
  }
}
    else if (counter == 17 {
  for (var i = 1; i<17; i++){
    for (var j = 1; j<8; j++){
      tbl.rows[16].cells[j].innerHTML = " ";
    }
  }
}
 
  counter = counter - 1;
  matrix =  Array(16).fill(array(6).fill(0));
}
, true);

buttonexport.addEventListener('click', function(){
  if (counter == 1){
    alert('The table is empty. Add data to the table first.');
    
  }
  if (counter >1){
    var today = new Date();
    var filename = "DoE_CreditcardData_" + today.getFullYear() + (today.getMonth()+1) + today.getDate() + "_" + today.getHours() + today.getMinutes() + today.getSeconds() +".csv";
    exportTableToCSV(filename)
  }
  }  
, true);


function downloadCSV(csv, filename) {
  var csvFile;
  var downloadLink;

  // CSV file
  csvFile = new Blob([csv], {type: "text/csv"});

  // Download link
  downloadLink = document.createElement("a");

  // File name
  downloadLink.download = filename;

  // Create a link to the file
  downloadLink.href = window.URL.createObjectURL(csvFile);

  // Hide download link
  downloadLink.style.display = "none";

  // Add the link to DOM
  document.body.appendChild(downloadLink);

  // Click download link
  downloadLink.click();
}



function exportTableToCSV(filename) {
  var csv = [];
  var tableSelect = document.getElementById("exceldata");
  var rows = tableSelect.rows;
  
  for (var i = 0; i < rows.length; i++) {
      var row = [], cols = rows[i].querySelectorAll("td, th");
      
      for (var j = 0; j < cols.length; j++) 
          row.push(cols[j].innerText);
      
      csv.push(row.join(","));        
  }

  // Download CSV file
  downloadCSV(csv.join("\n"), filename);
}






function drawSlice(y0) {
    var canvas = document.getElementById('canvas');
    canvas.width  = 39*vw;
    canvas.height = 4*vw;
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,80*vw,10*vw)
    var times = 3*vw;
    var timesv = 15*vw;
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.15*vw;
    ctx.moveTo(7.5*times, 3*vw-0.024*timesv);
    ctx.lineTo(9*times, 3*vw-0.024*timesv);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.15*vw;
    ctx.moveTo(7*times, 3*vw-(0.024-y0/10)*timesv);
    ctx.lineTo(9*times, 3*vw-(0.024-y0/10)*timesv);
    ctx.stroke();
    ctx.fillStyle = 'rgb(0, 139, 225)';
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.15*vw;
    ctx.beginPath();
    ctx.moveTo(6*times, 3*vw-0.024*timesv);
    ctx.lineTo(0*times,3*vw-0.024*timesv);
    ctx.lineTo(0*times, 3*vw-0.1*timesv);
    ctx.lineTo(6*times, 3*vw-0.1*timesv);
    ctx.lineTo(6*times,3*vw- 0.062*timesv);
    ctx.lineTo(6.5*times,3*vw- (0.062-y0/10)*timesv);
    ctx.lineTo(7*times, 3*vw-(0.062-y0/10)*timesv);
    ctx.lineTo(7.5*times,3*vw- 0.062*timesv);
    ctx.lineTo(7.5*times, 3*vw-0.1*timesv);
    ctx.lineTo(8.560*times,3*vw-0.1*timesv);
    ctx.lineTo(8.560*times,3*vw- 0.024*timesv);
    ctx.lineTo(7.5*times, 3*vw-0.024*timesv);
    ctx.lineTo(7*times, 3*vw-(0.024-y0/10)*timesv);
    ctx.lineTo(6.5*times, 3*vw-(0.024-y0/10)*timesv);
    ctx.lineTo(6*times, 3*vw-0.024*timesv);
    ctx.closePath();
    ctx.fill()
    ctx.stroke();
    ctx.font = "1.1vw Arial";
    ctx.fillStyle = 'black';
    ctx.fillText("Y = " + y0.toFixed(6) + " [mm]", 9.2*times, 3*vw-(0.024-y0/10)*timesv)
   
}


var tbl = document.getElementById("exceldata");

function tableCreate() {
  var tbl = document.getElementById("exceldata");
  tbl.align = 'center'
  tbl.setAttribute('border', '1');
  var thd = document.createElement('thead'); 
  var tr = document.createElement('tr');
  for (var i = 0; i < 8; i++) {
    var td = document.createElement('td');
    td.appendChild(document.createTextNode('\u0020'))
    td.height = vw;
    if (i == 7){td.width = 6*vw}
    else {td.width = 5*vw}
    td.bgColor = '#333';
    td.style.color = 'white';
    td.style.fontWeight = 'bolder';
    td.align = 'center';  
    tr.appendChild(td);             
  }
  thd.appendChild(tr);
   
  var tbdy = document.createElement('tbody');
  for (var i = 0; i<16; i++){
    var tr = document.createElement('tr');
      for (var j = 0; j < 8; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('\u0020'))
        td.height = vw;
        td.align = 'center'; 
        tr.appendChild(td);             
    }
    tbdy.appendChild(tr);
  }
    
  tbl.appendChild(thd);
  tbl.appendChild(tbdy);
  
  for (var i = 1; i<7; i++){
    tbl.rows[0].cells[i].innerHTML= "X" + i;
  }
  tbl.rows[0].cells[7].innerHTML= "Y";

  for (var i = 1; i<17;i++ ){
    tbl.rows[i].cells[0].innerHTML = "Exp " + i;
  }
 
}
  


