document.write('KST (한국 표준시):<br />',       getWorldTime(+9), '<br /><br />');
document.write('PST (태평양 표준시):<br />',     getWorldTime(-8), '<br /><br />');
document.write('PDT (태평양 표준시 DST):<br />', getWorldTime(-7), '<br /><br />');
document.write('EST (뉴욕 시간):<br />',         getWorldTime(-5), '<br /><br />');
document.write('EDT (뉴욕 시간 DST):<br />',     getWorldTime(-4), '<br /><br />');
document.write('CET (파리 시간):<br />',         getWorldTime(+1), '<br /><br />');
document.write('CEST (파리 시간 DST):<br />',    getWorldTime(+2), '<br /><br />');
document.write('CST (중국 표준시):<br />',       getWorldTime(+8), '<br /><br />');
document.write('UTC (세계 표준시):<br />',       getWorldTime(0),  '<br /><br />');
 
 
function getWorldTime(tzOffset) { // 24시간제
  var now = new Date();
  var tz = now.getTime() + (now.getTimezoneOffset() * 60000) + (tzOffset * 3600000);
  now.setTime(tz);
 
 
  var s =
    leadingZeros(now.getHours(), 2) + ':' +
    leadingZeros(now.getMinutes(), 2)  
  return s;
}
 
function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();
 
  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}
 