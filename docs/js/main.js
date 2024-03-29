// Импортируем другие js-файлы
/*! js-cookie v3.0.0-beta.0 | MIT */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self,function(){var t=e.Cookies,o=e.Cookies=n();o.noConflict=function(){return e.Cookies=t,o}}())}(this,function(){"use strict";function e(){for(var e={},n=0;n<arguments.length;n++){var t=arguments[n];for(var o in t)e[o]=t[o]}return e}function n(e){return e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)}return function t(o){function r(n,t,r){if("undefined"!=typeof document){"number"==typeof(r=e(i.defaults,r)).expires&&(r.expires=new Date(1*new Date+864e5*r.expires)),r.expires&&(r.expires=r.expires.toUTCString()),t=o.write?o.write(t,n):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var f in r)r[f]&&(c+="; "+f,!0!==r[f]&&(c+="="+r[f].split(";")[0]));return document.cookie=n+"="+t+c}}var i={defaults:{path:"/"},set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],r={},i=0;i<t.length;i++){var c=t[i].split("="),f=c.slice(1).join("=");'"'===f.charAt(0)&&(f=f.slice(1,-1));try{var u=n(c[0]);if(r[u]=(o.read||o)(f,u)||n(f),e===u)break}catch(e){}}return e?r[e]:r}},remove:function(n,t){r(n,"",e(t,{expires:-1}))},withConverter:t};return i}(function(){})});




var clickEvent = (function() {
  if ('ontouchstart' in document.documentElement === true)
    return 'touchstart';
  else
    return 'click';
})();

function setRole(role){
  if(!role) role = 'start';
  Cookies.set('role', role)
  document.querySelector('body').className = role
  role = role == 'start' ? 'male' : role;
  document.querySelectorAll('[data-dark]').forEach(function(el){
    if (el.dataset.dark == role) el.classList.add('dark')
    else el.classList.remove('dark')
  })
}

document.querySelector('.show-price').addEventListener( clickEvent ,
  function(){
    let role = (!Cookies.get('role') || Cookies.get('role') == 'start') ? 'male' : Cookies.get('role');
    if(!!this.dataset[role]){
      document.querySelector(".price__list-item."+role).classList.remove('list-item_show')
      this.dataset[role] = ''
    }else{
      document.querySelector(".price__list-item."+role).classList.add('list-item_show')
      this.dataset[role] = '1'
    };
  })

window.onload = function() {
  setRole(Cookies.get('role'))
  document.querySelectorAll('.change-role').forEach(function(v){
    v.addEventListener( clickEvent , function(){
      setRole(v.dataset.role)
    })
  })
}