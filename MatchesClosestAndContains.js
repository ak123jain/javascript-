let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)
// es id ka andar jo element ha vo print karan aha = div

console.log(id1.matches(".class"))

// id1 .class ko match karta ha ki nahi
 

console.log(id1.matches(".box"))

// .box is ancestor

console.log(sp1.closest(".box"))
// sp1 aapna closest ma .box ko search karega or baad ma phir vo aapna parent ma search karega


console.log(id1.contains(sp1))
// agar id1 ka andar sp1 hua to true return agar dono same ha to bhi true return
// sp1 is ancestor
console.log(sp1.contains(id1))

// matches closest contain are css selector or enka andar jo hma search karni hoti ha vo ansestor

