// cookies used in direct data storing in the browser

//hama browser ma cookies lane ka liye request send karta ha web server ko 
// using set cookie http-header . next time when the request is send to the same domain
// to es baar browser send the cookie using set cookies http-header that why the web server know who send the request

//eg => hmna phele client ko set cookies ki madat se cookie 1 da de or dusra client ko cookies-2 de di
// ab ma phir se request send karna chata hu
// ab second vala client cookie bhej raha ha server ko tab ma uska cookies ko read kar luga
// that way ma uniquely client ko uniquely identify kar luga
// in cookies ma hmna agar cookie set kar de to browser aapki har request par 
// cookie ko send karega to web server that why the web server know who send the request
console.log(document.cookie)
document.cookie = "name=harry112244880"// set call
document.cookie = "name2=harry112233444"
document.cookie = "name=harry"
// esma ham cookies add kar dete ha replace nahi hote add ho gate hs

let key = prompt("enter your key")
let value = prompt("enter your value")
//document.cookie= (`${key}=${value}`)
//semi colon ka baad cookie end ho gati ha
// agar ham key ma semicolon use karta ha to vo uska aaga
// ka print nahi karega
// to ham phele encode karege phir decode
document.cookie = (`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
// baad ma console ma he jaha hmna semocolon lagaya ha usko ham sirf usko decodeURIComponent kar dege
console.log(document.cookie)


// cookie ke help sa directly data store kar diya browser ma


