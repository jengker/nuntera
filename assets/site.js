/* Penerbit Nuntera — interaksi situs */
(function(){
  "use strict";

  /* Header: bayangan saat scroll */
  var header = document.querySelector("header");
  if(header){
    var onScroll = function(){ header.classList.toggle("scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, {passive:true});
    onScroll();
  }

  /* Menu mobile: tombol disuntik bila belum ada */
  var nav = document.querySelector(".nav");
  var menu = document.querySelector("nav.menu");
  if(nav && menu && !document.querySelector(".nav-toggle")){
    var btn = document.createElement("button");
    btn.className = "nav-toggle";
    btn.setAttribute("aria-label", "Buka menu");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
    nav.appendChild(btn);
    var close = function(){
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    };
    btn.addEventListener("click", function(){
      var open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("menu-open", open);
    });
    menu.addEventListener("click", function(e){ if(e.target.closest("a")) close(); });
    window.addEventListener("keydown", function(e){ if(e.key === "Escape") close(); });
  }

  /* Tombol WhatsApp mengambang (bukan di halaman kontak — kanalnya sudah lengkap) */
  var page = location.pathname.split("/").pop() || "index.html";
  if(!document.querySelector(".wa-float") && page !== "kontak.html"){
    var wa = document.createElement("a");
    wa.className = "wa-float";
    wa.href = "https://wa.me/6285141068902";
    wa.target = "_blank";
    wa.rel = "noopener";
    wa.setAttribute("aria-label", "Chat WhatsApp Penerbit Nuntera");
    wa.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.1.6 4.1 1.6 5.9L4 29l8.4-1.6c1.7.9 3.6 1.4 5.6 1.4 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.3l-.4-.2-5 1 1-4.8-.3-.4c-1-1.6-1.6-3.5-1.6-5.2 0-5.5 4.6-10 10.4-10s10.4 4.5 10.4 10-4.7 10.9-10.5 10.9zm5.7-7.8c-.3-.2-1.9-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.7-1.8-1-2.4-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.6 5.6 5 .8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.6-.4z"/></svg><span>Chat WhatsApp</span>';
    document.body.appendChild(wa);
  }
})();
