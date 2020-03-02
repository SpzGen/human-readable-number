module.exports = function toReadable (number) {
  let st = String(number);
  if (st.length===1 && st[0]==='0') {
    return 'zero'
  } else if (st.length === 3) {
    return sto(st) + des(st) + ed(st);
  } else if (st.length === 2) {
    return des(st) + ed(st);
  } else if (st.length === 1) {
    return ed(st);
  } else {
    return 'Out of reach!!!'
  }
}

function sto(st) {
  return (st[0] === '1') ? 'one hundred' :
  (st[0] === '2') ? 'two hundred' :
  (st[0] === '3') ? 'three hundred' :
  (st[0] === '4') ? 'four hundred' :
  (st[0] === '5') ? 'five hundred' :
  (st[0] === '6') ? 'six hundred' :
  (st[0] === '7') ? 'seven hundred' :
  (st[0] === '8') ? 'eight hundred' : 'nine hundred' ;
}
  
function des(st) {
  if (st[st.length-2] === '1' && st.length === 3) {
    return (st[st.length-1] === '0') ? ' ten' :
    (st[st.length-1] === '1') ? ' eleven' :
    (st[st.length-1] === '2') ? ' twelve' :
    (st[st.length-1] === '3') ? ' thirteen' :
    (st[st.length-1] === '4') ? ' fourteen' :
    (st[st.length-1] === '5') ? ' fifteen' :
    (st[st.length-1] === '6') ? ' sixteen' :
    (st[st.length-1] === '7') ? ' seventeen' :
    (st[st.length-1] === '8') ? ' eighteen' : ' nineteen' ;
  } else if (st[st.length-2] === '1' && st.length === 2) {
    return (st[st.length-1] === '0') ? 'ten' :
    (st[st.length-1] === '1') ? 'eleven' :
    (st[st.length-1] === '2') ? 'twelve' :
    (st[st.length-1] === '3') ? 'thirteen' :
    (st[st.length-1] === '4') ? 'fourteen' :
    (st[st.length-1] === '5') ? 'fifteen' :
    (st[st.length-1] === '6') ? 'sixteen' :
    (st[st.length-1] === '7') ? 'seventeen' :
    (st[st.length-1] === '8') ? 'eighteen' : 'nineteen' ; 
  } else if (st[st.length-2] !== '1' && st.length === 2) {
    return (st[st.length-2] === '1') ? 'eleven' :
    (st[st.length-2] === '2') ? 'twenty' :
    (st[st.length-2] === '3') ? 'thirty' :
    (st[st.length-2] === '4') ? 'forty' :
    (st[st.length-2] === '5') ? 'fifty' :
    (st[st.length-2] === '6') ? 'sixty' :
    (st[st.length-2] === '7') ? 'seventy' :
    (st[st.length-2] === '8') ? 'eighty' : 'ninety' ; 
  } else {
    return (st[st.length-2] === '0') ? '' :
    (st[st.length-2] === '2') ? ' twenty' :
    (st[st.length-2] === '3') ? ' thirty' :
    (st[st.length-2] === '4') ? ' forty' :
    (st[st.length-2] === '5') ? ' fifty' :
    (st[st.length-2] === '6') ? ' sixty' :
    (st[st.length-2] === '7') ? ' seventy' :
    (st[st.length-2] === '8') ? ' eighty' : ' ninety' ;
  }
}



function ed(st) {
  if (st.length===1) {
    return (st[st.length-1] === '0') ? '' :
    (st[st.length-1] === '1') ? 'one' :
    (st[st.length-1] === '2') ? 'two' :
    (st[st.length-1] === '3') ? 'three' :
    (st[st.length-1] === '4') ? 'four' :
    (st[st.length-1] === '5') ? 'five' :
    (st[st.length-1] === '6') ? 'six' :
    (st[st.length-1] === '7') ? 'seven' :
    (st[st.length-1] === '8') ? 'eight' : 'nine' ;
  } else {
    return (st[st.length-1] === '1' && st[st.length-2] !== '1') ? ' one' :
    (st[st.length-1] === '2' && st[st.length-2] !== '1') ? ' two' :
    (st[st.length-1] === '3' && st[st.length-2] !== '1') ? ' three' :
    (st[st.length-1] === '4' && st[st.length-2] !== '1') ? ' four' :
    (st[st.length-1] === '5' && st[st.length-2] !== '1') ? ' five' :
    (st[st.length-1] === '6' && st[st.length-2] !== '1') ? ' six' :
    (st[st.length-1] === '7' && st[st.length-2] !== '1') ? ' seven' :
    (st[st.length-1] === '8' && st[st.length-2] !== '1') ? ' eight' : 
    (st[st.length-1] === '9' && st[st.length-2] !== '1') ? ' nine' : '';
  }
}