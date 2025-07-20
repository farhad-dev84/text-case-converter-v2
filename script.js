// گرفتن عناصر از html
const textInput = document.getElementById("textInput") ;
const uppercaseBtn = document.getElementById("uppercaseBtn") ;
const lowercaseBtn = document.getElementById("lowercaseBtn") ;
const capitalizeBtn = document.getElementById("capitalizeBtn") ;
const clearBtn = document.getElementById("clearBtn") ;
const copyBtn = document.getElementById("copyBtn") ;
const copyAlert = document.getElementById("copyAlert") ;

// تبدیل به حروف بزرگ
uppercaseBtn.addEventListener("click" , function() {
  textInput.value = textInput.value.toUpperCase() ;
}) ;

// تبدیل به حروف کوچک
lowercaseBtn.addEventListener("click" , function() {
  textInput.value = textInput.value.toLowerCase() ;
}) ;

//ابتدای کلمات بزرگ
capitalizeBtn.addEventListener("click" , function() {
  // جدا کردن کلمات با فاصله
  const words = textInput.value.split(" ") ;
  // اولین حرف بزرگ بقیه کوچک
  const capitalizedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() ;
  }) ;
  textInput.value = capitalizedWords.join(" ") ;
}) ;

// پاک کردن متن
clearBtn.addEventListener("click" , function() {
  textInput.value = "" ;
}) ;

// کپی کردن متن به کلیپ بورد
copyBtn.addEventListener("click" , function() {
  // انتخاب کل متن داخل تکست باکس
  textInput.select() ;
  // اجرای فرمان کپی
  document.execCommand("copy") ;
  
  // نمایش پیام موفقیت
  copyAlert.classList.remove("d-none") ;
  setTimeout(function() {
    copyAlert.classList.add("d-none") ;
  } , 2000 ) ;
}) ;