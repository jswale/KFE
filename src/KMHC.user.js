// ==UserScript==
// @name          KFE
// @namespace     pharoz.net
// @version       0.0.12
// @description   Pharoz.net MH Connector
// @match         http://games.mountyhall.com/*
// @require       http://code.jquery.com/jquery-2.1.0.min.js
// @downloadURL   https://github.com/jswale/KFE/raw/master/src/KMHC.user.js
// @updateURL     https://github.com/jswale/KFE/raw/master/src/KMHC.meta.js
// @grant         none
// @copyright     2014+, Miltown
// ==/UserScript==

var undefined = "undefined";
var success = "success";

var Utils = function() {
    CONF_KEY = "KMHC_";
    
    return {
        getConf : function(key) {
            return localStorage[CONF_KEY + key];
        },
        
        setConf : function(key, value) {
            localStorage[CONF_KEY + key] = value;
        },
        
        initConf : function(key, value) {
            if(typeof this.getConf(key) == undefined) {
                this.setConf(key, value);
            }
        },
        
        initConfig : function() {
            this.initConf("sendCdm","true");
            this.initConf("sendAA","true");
            this.initConf("sendIdT","true");
            this.initConf("sendProfile","true");
            this.initConf("sendView","true");
            this.initConf("monsterLevel","true");
            this.initConf("invisible","true");
            this.initConf("monsterCdmLink","true");
            this.initConf("viewTrollInfos","true");
            this.initConf("viewMonsterInfos","true");         
            this.initConf("manageTags","true");
        },
        
        getId : function(key) {
            return CONF_KEY + key;
        },
        
        formatTime : function(time) {
            var d = new Date(time*1000);
            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            var date = d.getDate();
            var hour = d.getHours();
            var min = d.getMinutes();
            var sec = d.getSeconds();
            return (date < 10 ? "0" : "") + date + "/" + (month < 10 ? "0" : "") + month + '/' + year + (' ' + (hour < 10 ? "0" : "") + hour + ':' + (min < 10 ? "0" : "") + min + ':' + (sec < 10 ? "0" : "") + sec);
        },
        
        getDateDiff : function (date1, date2){
            var diff = {}                           // Initialisation du retour
            var tmp = date2 - date1;
            
            tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
            diff.sec = tmp % 60;                    // Extraction du nombre de secondes
            
            tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
            diff.min = tmp % 60;                    // Extraction du nombre de minutes
            
            tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
            diff.hour = tmp % 24;                   // Extraction du nombre d'heures
            
            tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
            diff.day = tmp;
            
            if(diff.day > 5) {
                return ">5j";
            }
            
            return $.grep([diff.day > 0 ? diff.day +"j" : null, 
                           diff.hour > 0 ? diff.hour +"h" : null, 
                           diff.min > 0 ? diff.min +"m" : null, 
                           diff.sec > 0 ? diff.sec +"s" : null], function(o){return o;}).join(" ");
        },
        
        addGlobalStyle : function(css) {
            var head, style;
            head = document.getElementsByTagName('head')[0];
            if (!head) { return; }
            style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = css;
            head.appendChild(style);
        }
        
    }
}();

var MH_Page = function() {
    return {
        
        utils : Utils,
        
        load : function() {
            console.log("Module initializing");
            this.init();
        },
        
        init : function() {
            console.log("Not yet implemented");
        },
        
        log : function() {
            console.log.apply(console, arguments);
        },
        
        debug : function() {
            console.debug.apply(console, arguments);
        },
        
        warn : function() {
            console.warn.apply(console, arguments);
        },
        
        error : function() {
            console.error.apply(console, arguments);
        },
        
        
        isInitialized : function() {
            return  (typeof Utils.getConf("login") != undefined)
            &&  (typeof Utils.getConf("pswd")  != undefined);
        },
        
        callAPIConnected : function(conf) {
            if(!this.isInitialized()) {
                this.error("Authentification required");
                return;
            }
            conf.data = $.extend(conf.data, {"login" : Utils.getConf("login"),"password" : Utils.getConf("pswd")})
            this.callAPI(conf);
        },
        
        callAPI : function(conf) {
            this.log("Calling API", conf);
            $.ajax({
                type: "POST",
                url: "http://pharoz.net/MH/outil/api.php?rnd=" + new Date().getTime(),
                //contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
                data : $.extend(conf.data, {"page" : conf.api, "popup" : 0, "encoding" : "UTF-8"})
            }).done($.proxy(function(data, result, request){
                if(result == success) {
                    if(typeof conf.callback == "undefined") {
                        this.warn("No callback found");
                    } else {
                        this.debug("Result", data);
                        conf.callback.apply(this, arguments);
                    }
                } else {
                    this.error("Error while executing the API call");
                    this.error(arguments);
                }
            }, conf.scope || this));
        },
        
        
        addCssToLabel : function(o) {
            return o
            .css("float", "left")
            .css("font-weight", "bold")
            .css("padding", "5px")
            .css("text-align", "left")
            .css("width", "250px");
        },
        
        addCssToInput : function(o) {
            return o
            .css("border", "1px solid #1E2A63")
            .css("font-size", "12px")
            .css("background-color", "#FFFFEE")
            .css("padding", "1px");
        },            
        
        addConfigPanel : function(items) {
            
            $("<div/>")
            .attr("id", Utils.getId("page-options"))
            .addClass("mh_tdpage")
            .css("position", "fixed")
            .css("display", "none")
            .css("right", "50px")
            .css("top", "0px")
            .css("border", "1px solid black")
            .css("padding", "5px 10px")
            .css("width", "500px")
            .append(
                $("<fieldset/>")
                .attr("id", "KMHC_form")
                .append($("<legend/>").text("Page options"))
                .append($.map(items, $.proxy(function(item){
                    var fieldValue = Utils.getConf(item.option) || undefined;
                    var field = $("<input/>")
                    .attr("id", Utils.getId("page-options-"+item.option))
                    .attr("type", item.type)
                    .attr("name", item.option);
                    
                    if(item.type == "checkbox") {
                        field.prop("checked", fieldValue == "true");                                            
                    } else {
                        field.val(fieldValue);                                            
                    }
                    
                    return [
                        this.addCssToLabel($("<label/>").text(item.label)),
                        this.addCssToInput(field), 
                        $("<br/>").css("clear","left")
                    ];                    
                },this)
                             ))
                .append(
                    $("<input/>")
                    .addClass("mh_form_submit")
                    .css("margin","auto 0px")
                    .attr("type","button")
                    .attr("value", "Enregistrer")
                    .click($.proxy(function(){
                        $.each(items, $.proxy(function(id, item){
                            var field = $("#" + Utils.getId("page-options-"+item.option));
                            var value = field.val();
                            if(item.type == "checkbox") {
                                value = field.prop("checked");
                            }
                            Utils.setConf(item.option, value);
                        }, this));
                        $("#" + Utils.getId("page-options")).toggle();
                    },this))
                )
                .append($("<br/>").css("clear","left"))
                .append("<i>Les changements seront pris en compte au prochain affichage de cette page</i>")
            )
            .appendTo($("body"));
            
            $('<svg height="40" version="1.1" width="40" xmlns="http://www.w3.org/2000/svg">'+
              '<defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">'+
              '<linearGradient id="27190-_0050af-_002c62" x1="0" y1="1" x2="0" y2="0" gradientTransform="matrix(1,0,0,1,-4,-4)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">'+
              '<stop offset="0%" stop-color="#D05900" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></stop>'+
              '<stop offset="100%" stop-color="#642A00" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></stop>'+
              '</linearGradient>'+
              '</defs>'+
              '<path fill="none" stroke="#ffffff" d="M31.229,17.736C31.293,17.165,31.333,16.588,31.333,16S31.293,14.834,31.229,14.263L26.852,12.706C26.634,11.99,26.348,11.305,26.001,10.655999999999999L27.994,6.463999999999999C27.269,5.5539999999999985,26.445,4.729999999999999,25.536,4.004999999999999L21.343000000000004,5.998999999999999C20.696000000000005,5.651999999999999,20.009000000000004,5.366999999999999,19.294000000000004,5.149999999999999L17.736000000000004,0.7719999999999985C17.165,0.708,16.588,0.667,16,0.667S14.834,0.7080000000000001,14.263,0.772L12.707,5.15C11.991000000000001,5.367,11.306000000000001,5.652,10.657,5.9990000000000006L6.464,4.005C5.554,4.73,4.73,5.554,4.005,6.464L5.999,10.656C5.651999999999999,11.304,5.367,11.99,5.1499999999999995,12.706L0.7719999999999994,14.263C0.708,14.834,0.667,15.412,0.667,16S0.7080000000000001,17.165,0.772,17.736L5.15,19.294C5.367,20.009,5.652,20.695,5.9990000000000006,21.343L4.005000000000001,25.536C4.73,26.445,5.554,27.269000000000002,6.464,27.994L10.656,26.001C11.304,26.348000000000003,11.99,26.634,12.706,26.852L14.263,31.229C14.834,31.293,15.411,31.333,16,31.333C16.588,31.333,17.165,31.293,17.736,31.229L19.294,26.852C20.009,26.634,20.693,26.348,21.343,26.001L25.536,27.994C26.445,27.269,27.269000000000002,26.445,27.994,25.536L26.001,21.343000000000004C26.348000000000003,20.696000000000005,26.634,20.009000000000004,26.852,19.294000000000004L31.229,17.736ZM16,20.871C13.31,20.871,11.128,18.689,11.128,15.999999999999998C11.128,13.309999999999999,13.31,11.127999999999998,16,11.127999999999998C18.689,11.127999999999998,20.871000000000002,13.309999999999999,20.871000000000002,15.999999999999998C20.871,18.689,18.689,20.871,16,20.871Z" stroke-width="3" stroke-linejoin="round" opacity="0" transform="matrix(1,0,0,1,4,4)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linejoin: round; opacity: 0;"></path>'+
              '<path fill="url(#27190-_0050af-_002c62)" stroke="none" d="M31.229,17.736C31.293,17.165,31.333,16.588,31.333,16S31.293,14.834,31.229,14.263L26.852,12.706C26.634,11.99,26.348,11.305,26.001,10.655999999999999L27.994,6.463999999999999C27.269,5.5539999999999985,26.445,4.729999999999999,25.536,4.004999999999999L21.343000000000004,5.998999999999999C20.696000000000005,5.651999999999999,20.009000000000004,5.366999999999999,19.294000000000004,5.149999999999999L17.736000000000004,0.7719999999999985C17.165,0.708,16.588,0.667,16,0.667S14.834,0.7080000000000001,14.263,0.772L12.707,5.15C11.991000000000001,5.367,11.306000000000001,5.652,10.657,5.9990000000000006L6.464,4.005C5.554,4.73,4.73,5.554,4.005,6.464L5.999,10.656C5.651999999999999,11.304,5.367,11.99,5.1499999999999995,12.706L0.7719999999999994,14.263C0.708,14.834,0.667,15.412,0.667,16S0.7080000000000001,17.165,0.772,17.736L5.15,19.294C5.367,20.009,5.652,20.695,5.9990000000000006,21.343L4.005000000000001,25.536C4.73,26.445,5.554,27.269000000000002,6.464,27.994L10.656,26.001C11.304,26.348000000000003,11.99,26.634,12.706,26.852L14.263,31.229C14.834,31.293,15.411,31.333,16,31.333C16.588,31.333,17.165,31.293,17.736,31.229L19.294,26.852C20.009,26.634,20.693,26.348,21.343,26.001L25.536,27.994C26.445,27.269,27.269000000000002,26.445,27.994,25.536L26.001,21.343000000000004C26.348000000000003,20.696000000000005,26.634,20.009000000000004,26.852,19.294000000000004L31.229,17.736ZM16,20.871C13.31,20.871,11.128,18.689,11.128,15.999999999999998C11.128,13.309999999999999,13.31,11.127999999999998,16,11.127999999999998C18.689,11.127999999999998,20.871000000000002,13.309999999999999,20.871000000000002,15.999999999999998C20.871,18.689,18.689,20.871,16,20.871Z" transform="matrix(1,0,0,1,4,4)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 1; fill-opacity: 1;" opacity="1" fill-opacity="1"></path>'+
              '<rect x="0" y="0" width="32" height="32" r="0" rx="0" ry="0" fill="#000000" stroke="#000" opacity="0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 0;"></rect>'+
              '</svg>')
            .attr("alt", "Options d'affichage")
            .css("position", "fixed")
            .css("top", "10px")
            .css("right", "10px")
            .click($.proxy(function(){
                $("#" + Utils.getId("page-options")).toggle();
            }, this))
            .appendTo($("body"));
        }
    }
}();

var MH_Play_Play_option = $.extend({}, MH_Page, {
    init : function() {
        this.addConfigPanel([
            {
                label : "Identifiant",
                option : "login",
                type : "text"                    
            },   
            {
                label : "Mot de passe",
                option : "pswd",
                type : "password"                    
            },   
            {
                label : "Envoi automatique des CdM",
                option : "sendCdm",
                type : "checkbox"
            },
            {
                label : "Envoi automatique des AA",
                option : "sendAA",
                type : "checkbox"
            },
            {
                label : "Envoi automatique les identifications",
                option : "sendIdT",
                type : "checkbox"
            },
            {
                label : "Envoi automatique du profile",
                option : "sendProfile",
                type : "checkbox"
            },
            {
                label : "Afficher le niveau",
                option : "monsterLevel",
                type : "checkbox"
            },
            {
                label : "Afficher les invisibles",
                option : "invisible",
                type : "checkbox"
            },
            {
                label : "Afficher les données des trolls",
                option : "viewTrollInfos",
                type : "checkbox"
            },                
            {
                label : "Afficher les données des monstres",
                option : "viewMonsterInfos",
                type : "checkbox"
            },                
            {
                label : "Envoi automatique de la vue",
                option : "sendView",
                type : "checkbox"
            },
            {
                label : "Ajout du lien vers la CdM",
                option : "monsterCdmLink",
                type : "checkbox"         
            },
            {
                label : "Activer les tags",
                option : "manageTags",
                type : "checkbox"                    
            }   
        ]);        
    }    
});


var MH_Play_Actions_Competences_Play_a_Competence16 = $.extend({}, MH_Page, {
    init : function() {
        this.addConfigPanel([
            {
                label : "Envoi automatique des CdM",
                option : "sendCdm",
                type : "checkbox"
            }
        ]);        
    }    
});


var MH_Play_Actions_Competences_Play_a_Competence16b = $.extend({}, MH_Page, {
    init : function() {
        if(Utils.getConf("sendCdm") == "true") {
            var result = $("form[name='ActionForm']:first").html();
            result = result.replace(/<br\/?>/gi, "\r\n");
            result = result.replace(/<\/p>/gi, "\r\n");
            result = result.replace(/<tr[^>]*>/gi, "\r\n");
            result = result.replace(/<\/?[^>]+>/gi,"");
            
            if(result.indexOf("Vous avez RÉUSSI à utiliser cette compétence") > -1) {
                // Appel de l'API
                MH_Page.callAPIConnected({
                    api : "cdm",
                    data : {
                        "cdm" : result
                    }
                });
            }
        }
    }    
});

var MH_Play_Actions_Sorts_Play_a_Sort20 = $.extend({}, MH_Page, {
    init : function() {
        Utils.setConf("action", "Sort20");
        this.addConfigPanel([
            {
                label : "Envoi automatique des AA",
                option : "sendAA",
                type : "checkbox"
            }
        ]);        
    }    
});

var MH_Play_Actions_Sorts_Play_a_Sort10 = $.extend({}, MH_Page, {
    init : function() {
        Utils.setConf("action", "Sort10");
        this.addConfigPanel([
            {
                label : "Envoi automatique les identifications",
                option : "sendIdT",
                type : "checkbox"
            }
        ]);        
    }    
});

var MH_Play_Actions_Play_a_SortResult = $.extend({}, MH_Page, {
    init : function() {
        
        if(Utils.getConf("action") == "Sort20" && Utils.getConf("sendAA") == "true") {
            var result = $($("table")[2]).text();
            if(result.indexOf("Vous avez RÉUSSI à utiliser ce sortilège") > -1) {
                // Appel de l'API
                this.callAPIConnected({
                    api : "aa",
                    data : {
                        "aa" : result
                    }
                });
            }
        }        
        
        if(Utils.getConf("action") == "Sort10" && Utils.getConf("sendIdT") == "true") {
            var result = $($("table")[2]).text();
            if(result.indexOf("Vous avez RÉUSSI à utiliser ce sortilège") > -1) {
                var data = /L'identification a donné le résultat suivant :\s*(\d+)\s*-\s*([^\)]+\))/.exec($($("table")[2]).text());
                
                // Appel de l'API
                this.callAPIConnected({
                    api : "addTag",
                    data : {
                        "type" : 3,
                        "ref" : data[1],
                        "tag" : data[2],
                    }
                });                 
            }
        }
    }    
}); 

var MH_Play_Play_profil = $.extend({}, MH_Page, {
    init : function() {
        if(Utils.getConf("sendProfile") == "true") {
            this.sendData();
        }
        
        this.removeAdds();
        
        this.addConfigPanel([
            {
                label : "Envoi automatique du profile",
                option : "sendProfile",
                type : "checkbox"
            }
        ]);        
    },
    
    removeAdds : function () {
        $("iframe").remove();
    },
    
    sendData : function() {
        var result = $($("table")[1]).text();
        result = result.replace(/<\/(TD|TH)[^>]*>/gi,"");
        result = result.replace(/<\/(TABLE|TR)[^>]*>/gi,"\n");
        result = result.replace(/<\/?[^>]+>/gi,"");
        result = result.replace(/[\n\r\t]+/gi,"");
        result = result.replace(/ +/gi," ");        
        
        var troll = result.match(/.*Identifiants[^\d]*(\d+)/)[1];        
        
        // Appel de l'API
        this.callAPIConnected({
            api : "profile",
            data : {
                "profile" : result
                //,"troll" : troll
            }
        });        
    }
}); 

var Messagerie_ViewMessageBot = $.extend({}, MH_Page, {
    init : function() {
        this.analyseMessage();
        this.addConfigPanel([
            {
                label : "Envoi automatique des CdM",
                option : "sendCdm",
                type : "checkbox"
            },
            {
                label : "Envoi automatique des AA",
                option : "sendAA",
                type : "checkbox"
            }
        ]);
    },
    
    analyseMessage : function() {
        var title = $.trim($("table:first tr:first td:first font:first").text());
        var body = $.trim($("table:first tr:nth-child(5) td:first").html().replace(/<br>/g, "\r\n"));        
        
        this.log(body);
        
        var api = null;
        var data = {};
        
        if(Utils.getConf("sendCdm") == "true" && title.indexOf("Compétence : Connaissance des Monstres") > -1) {
            api = "cdm";
            data = {
                "cdm" : body
            };
        }
        
        if(Utils.getConf("sendAA") == "true" && title.indexOf("Sortilège : Analyse Anatomique") > -1) {
            api = "aa";
            data = {
                "aa" : body
            };
        }
        
        if(null == api) {
            return;
        }
        
        // Appel de l'API
        this.callAPIConnected({
            api : api,
            data : data
        });        
    }
});     


var MH_Play_Play_vue = $.extend({}, MH_Page, {
    init : function(){
        if(Utils.getConf("sendView") == "true") {
            this.sendView();
        }            
        
        if(Utils.getConf("manageTags") == "true") {        
            this.addTagEdition();  
        }
        
        if(Utils.getConf("monsterLevel") == "true") {
            this.addMonsterLevel();
        }
        
        if(Utils.getConf("monsterCdmLink") == "true") {
            this.addMonsterCdmLink();
        }
        
        this.addInfos();                     
        
        this.addConfigPanel([
            {
                label : "Afficher le niveau",
                option : "monsterLevel",
                type : "checkbox"
            },
            {
                label : "Afficher les invisibles",
                option : "invisible",
                type : "checkbox"
            },
            {
                label : "Afficher les données des trolls",
                option : "viewTrollInfos",
                type : "checkbox"
            },                
            {
                label : "Afficher les données des monstres",
                option : "viewMonsterInfos",
                type : "checkbox"
            },                
            {
                label : "Envoi automatique de la vue",
                option : "sendView",
                type : "checkbox"
            },
            {
                label : "Ajout du lien vers la CdM",
                option : "monsterCdmLink",
                type : "checkbox"                    
            },
            {
                label : "Activer les tags",
                option : "manageTags",
                type : "checkbox"                                    
            }                            
        ]);
    },
    
    addTagEditionForCell : function(cell, refColId, nomColId, type) {
        cell.children("td:nth-child("+nomColId+")")
        .append(
            $("<span/>")
            .addClass("editable")            
            .attr("contenteditable", "true")
            .attr("data-tag-type", type)
            .attr("data-tag-id", $(cell.children("td:nth-child("+refColId+")")).text())
            .text("")
            .keydown(function(){
                $(this).attr("data-tag-edited", "true");
            })
            .focusout($.proxy(function(event){
                var span = $(event.target);
                if(!span.attr("data-tag-edited")) {
                    return;
                }                            
                
                var type = span.attr("data-tag-type");
                var ref = span.attr("data-tag-id");
                var tag = span.text();               
                
                this.callAPIConnected({
                    api : "tag",
                    data : {
                        "type" : type,
                        "num" : ref,
                        "tag" : tag,
                    },
                    callback : function() {
                        span.removeAttr("data-tag-edited");                                    
                    },
                    scope : this
                });     
            }, this))
        );        
    },
    
    addTagEdition : function() {
        Utils.addGlobalStyle('.editable { margin-left: 10px; }');
        Utils.addGlobalStyle('.editable:after { content: ""; display: none; opacity: 1; margin-left: 8px; width: 13px; height: 13px; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAABdSURBVHjalNLdCgAQDIZh5JJ3F9s9T3Ygf/uMUpKn3pBVNb2GiNghIsq20RGazKz7OgR2WFDSyJkS3bxbEsx7gQNFwIKiYKAfYOh2rQgsyHsXF0WS5lnd/wVGE2AAupiLqNBm6B0AAAAASUVORK5CYII=); }');
        Utils.addGlobalStyle('tr.mh_tdpage:hover .editable:after {display:inline-block; }');
        
        $.each(
            [
                ["mh_vue_hidden_monstres", "Réf.", "Nom", 1], 
                ["mh_vue_hidden_trolls", "Réf.", "Nom", 2],
                ["mh_vue_hidden_tresors", "Réf.", "Type", 3],
                //["mh_vue_hidden_champignons", "", "", 4],
                ["mh_vue_hidden_lieux", "Réf.", "Nom", 5]
            ], $.proxy(function(i, data) {
                var refColId = this.getColumnId(data[0], data[1]);            
                var nomColId = this.getColumnId(data[0], data[2]);
                $("#" + data[0] + " table:first tr.mh_tdpage").each($.proxy(function(iTr, tr){
                    this.addTagEditionForCell($(tr), refColId, nomColId, data[3]);
                }, this));   
            }, this));        
    },
    
    sendView : function() {
        function extractData(id, title) {
            var data = [];
            data.push("");
            data.push(title);
            data.push($("#" + id + " table:first tr.mh_tdtitre td").map(function(){
                return $(this).text();
            }).get().join("\t"));
            data.push($("#" + id + " table:first tr.mh_tdpage").map(function(){
                return $(this).children("td").map(function(){
                    return $(this).text();
                }).get().join("\t")
            }).get().join("\r\n"));
            return data;
        }
        
        var result = [];
        result.push($("form[name='LimitViewForm']").text());
        result = result.concat(extractData("mh_vue_hidden_monstres", "MONSTRES ERRANTS"));
        result = result.concat(extractData("mh_vue_hidden_trolls", "TROLLS"));
        result = result.concat(extractData("mh_vue_hidden_tresors", "TRÉSORS"));
        result = result.concat(extractData("mh_vue_hidden_champignons", "CHAMPIGNONS"));
        result = result.concat(extractData("mh_vue_hidden_lieux", "LIEUX"));
        result = result.concat(extractData("mh_vue_hidden_cadavres", "CÉNOTAPHES"));            
        
        result = result.join("\r\n");            
        
        // Appel de l'API
        this.callAPIConnected({
            api : "view",
            data : {
                "view" : result
            }
        });        
    },
    
    getColumnId : function(id, name) {
        var i = null;
        $("#" + id + " table:first tr.mh_tdtitre td").each(function(idx){
            if($(this).text().indexOf(name) > -1) {
                i = idx+1;
            }
        });
        return i;
    },
    
    addMonsterCdmLink : function() {
        var refColId = this.getColumnId("mh_vue_hidden_monstres", "Réf.");
        var nomColId = this.getColumnId("mh_vue_hidden_monstres", "Nom");            
        
        // Extraction des données
        $("#mh_vue_hidden_monstres table:first tr.mh_tdpage").each(function(){
            var monsterName = $($(this).children("td:nth-child("+nomColId+")")).text();
            var td = $($(this).children("td:nth-child("+refColId+")"));
            var monsterId = td.text();                    
            td	.empty()
            .append(
                $("<a/>")
                .attr("href", "javascript:void(0)")
                .attr("title", "Voir la CdM de " + monsterName + " [" + monsterId + "]")
                .text(monsterId)
                .click(function(){
                    window.open("http://pharoz.net/MH/outil/popup.php4?popupWidth=700&popupHeight=400&page=bestiary/detail2&fullName=" + monsterName + "&ref=" + monsterId, "karlaakiPopup", "width=700, height=400, resizable=yes,menubar=no,scrollbars=yes,status=no");
                })
            );
        });            
    },
    
    
    addMonsterLevel : function() {
        var refColId = this.getColumnId("mh_vue_hidden_monstres", "Réf.");
        var nomColId = this.getColumnId("mh_vue_hidden_monstres", "Nom");
        var levelColId = this.getColumnId("mh_vue_hidden_monstres", "Niveau");
        
        if(levelColId != null) {
            this.warn("Colonne niveau déjà présente");
            return;
        }
        
        var monsterNames = [];
        var monsterIds = [];
        
        // Ajout de a colonne titre
        $("#mh_vue_hidden_monstres table:first tr.mh_tdtitre:first td:nth-child(2)").after('<td width="50px"><b>Niveau</b></td>');
        
        // Extraction des données
        $("#mh_vue_hidden_monstres table:first tr.mh_tdpage").each(function(){
            var monsterId = $(this).children("td:nth-child("+refColId+")").text();
            monsterIds.push(monsterId);
            
            var monsterName = $($(this).children("td:nth-child("+nomColId+")")).text();
            monsterNames.push(monsterName);
            
            $(this).children('td:nth-child(2)').after(
                $("<td/>")
                .css("text-align", "center")                            
                .attr("id", "view-monster-id-" + monsterId)
                .text("-")
            );
        });
        
        // Appel de l'API
        this.callAPIConnected({
            api : "monsterLvl",
            data : {
                "n" : monsterNames,
                "i" : monsterIds
            },
            callback : function(datas) {
                // bouchon
                var json = $.parseJSON(datas);
                $.each(json, function(i, data){
                    $("#view-monster-id-" + data[0]).text(data[1]);
                });
            },
            scope : this
        });
    },    
    
    addInfos : function() {
        var txt = $("form[name='LimitViewForm']").text();
        
        var x = parseInt(txt.match(/.*X = (-?\d+)/)[1]);
        var y = parseInt(txt.match(/.*Y = (-?\d+)/)[1]);
        var n = parseInt(txt.match(/.*N = (-?\d+)/)[1]);
        var r = txt.match(/L'affichage est limité à (\d+) cases horizontalement et (\d+) verticalement/);
        var rH = parseInt(r[1]);
        var rV = parseInt(r[2]);        
        
        var trollIds = [];
        if(Utils.getConf("viewTrollInfos") == "true") {
            var refColId = this.getColumnId("mh_vue_hidden_trolls", "Réf.");
            
            trollIds = $("#mh_vue_hidden_trolls table:first tr.mh_tdpage td:nth-child("+refColId+")").map(function(){
                var id = $(this).text();
                $(this).parent("tr").attr("data-troll-info", id);
                return id;
            }).get();      
        }
        
        var monsterIds = [];        
        if(Utils.getConf("viewMonsterInfos") == "true") {
            var refColId = this.getColumnId("mh_vue_hidden_monstres", "Réf.");         
            
            monsterIds = $("#mh_vue_hidden_monstres table:first tr.mh_tdpage td:nth-child("+refColId+")").map(function(){
                var id = $(this).text();
                $(this).parent("tr").attr("data-monster-info", id);
                return id;
            }).get();     
        }                 
        
        
        var tresorIds = [];        
        if(Utils.getConf("manageTags") == "true") {
            var refColId = this.getColumnId("mh_vue_hidden_tresors", "Réf.");         
            
            tresorIds = $("#mh_vue_hidden_tresors table:first tr.mh_tdpage td:nth-child("+refColId+")").map(function(){
                var id = $(this).text();
                $(this).parent("tr").attr("data-tresor-info", id);
                return id;
            }).get();     
        }                 
        
        var lieuIds = [];
        if(Utils.getConf("manageTags") == "true") {
            var refColId = this.getColumnId("mh_vue_hidden_lieux", "Réf.");         
            
            lieuIds = $("#mh_vue_hidden_lieux table:first tr.mh_tdpage td:nth-child("+refColId+")").map(function(){
                var id = $(this).text();
                $(this).parent("tr").attr("data-lieu-info", id);
                return id;
            }).get();     
        }  
        
        var champigonIds = [];
        
        this.callAPIConnected({
            api : "viewInfo",
            data : {
                "xMin" : x - rH,
                "xMax" : x + rH,
                "yMin" : y - rH,
                "yMax" : y + rH,
                "nMin" : n - rV,
                "nMax" : n + rV,
                "m" : monsterIds,                
                "t" : trollIds,
                "l" : lieuIds,
                "o" : tresorIds,
                "c" : champigonIds
            },
            callback : function(datas) {
                var json = $.parseJSON(datas);
                
                if(Utils.getConf("invisible") == "true") {
                    $.each(json.invis, function(i, data){
                        var d = Math.max(Math.abs(data[0]-x), Math.abs(data[1]-y), Math.abs(data[2]-n));                   
                        var tr = $("<tr/>")
                        .addClass("mh_tdpage")
                        .append($("<td/>").text(d))
                        .append($("<td/>").text(data[3]))
                        .append($("<td/>").append('<a href="javascript:EPV(' + data[3] + ')" class="mh_trolls_0">' + data[4] + '</a> [' +(data[7] ? "Camouflé" : "Invisible") + ']'))
                        .append($("<td/>").text(data[6]))
                        .append($("<td/>").text(data[5]))
                        .append($("<td/>").append(data[8] ? ('<a href="javascript:EAV(' + data[8] + ',750,550)" class="mh_links">' + data[9] + '</a>') : ''))
                        .append($("<td/>").text(data[0]).attr("align", "center"))
                        .append($("<td/>").text(data[1]).attr("align", "center"))
                        .append($("<td/>").text(data[2]).attr("align", "center"))
                        .insertAfter(
                            $("#mh_vue_hidden_trolls table:first tr.mh_tdpage td:nth-child(1)").filter(function() {
                                return $(this).text() == d;
                            })
                            .last()
                            .parent("tr")
                        );
                        var refColId = this.getColumnId("mh_vue_hidden_trolls", "Réf.");            
                        var nomColId = this.getColumnId("mh_vue_hidden_trolls", "Nom");
                        this.addTagEditionForCell(tr, refColId, nomColId, 2);
                    });       
                }                    
                
                var nomColId = this.getColumnId("mh_vue_hidden_trolls", "Nom");    
                $.each(json.trolls, $.proxy(function(trollId, data){
                    var pvMin = data.pv;
                    var pvMax = Math.max(data.pv, data.pvMax);
                    $("[data-troll-info='" + trollId + "'] td:nth-child("+nomColId+")")
                    .append(
                        $("<div/>")
                        .css("float", "right")
                        .css("margin", "2px 2px 2px 0px")
                        .css("width", "100")
                        .css("height", "14")
                        .css("border", "1px solid black")
                        .css("background-color", "#FFFFFF")
                        .attr("title", pvMin + " / " + pvMax + " PV (MAJ: " + this.utils.getDateDiff(new Date(data.updateDate*1000), new Date()) + ")")
                        .append(
                            $("<div/>")
                            .css("height", "100%")
                            .css("width", Math.min(100, Math.round(pvMin/pvMax*100)) + "%")
                            .css("background-color", "#FF0000")
                        )
                    )
                    .append(
                        $("<div/>")
                        .css("float", "right")
                        .css("margin", "2px 0px")
                        .css("padding", "0px 2px")
                        .css("height", "14")
                        .css("border", "1px solid black")
                        .css("background-color", "#000")
                        .css("color", "#FFF")
                        .css("font-size", "11px")
                        .text(data.pa + " PA")
                        .attr("title", "DLA " + this.utils.formatTime(data.dla))
                    )
                    ;                        
                }, this));
                
                var nomColId = this.getColumnId("mh_vue_hidden_monstres", "Nom");    
                $.each(json.monsters, $.proxy(function(monsterId, data){
                    var pvs = data.pvRange.split("-");
                    var pvMin = pvs[0];
                    var pvMax = Math.max(pvs[0],pvs[1]);
                    var pvActMin = pvMin;
                    var pvActMax = Math.max(pvMin, pvMax);                        
                    
                    if(data.bless > 0) {
                        pvActMin = Math.max(1, Math.round((100 - data.bless - 5) * pvMin / 100));
                        pvActMax = Math.min(pvMax, Math.round((100 - data.bless + 5) * pvMax / 100));
                    }
                    
                    $("[data-monster-info='" + monsterId + "'] td:nth-child("+nomColId+")").append(                                                   
                        $("<div/>")
                        .css("float", "right")
                        .css("margin", "2px 2px 2px 0px")
                        .css("width", "100")
                        .css("height", "14")
                        .css("border", "1px solid black")
                        .css("background-color", "#FFFFFF")
                        .attr("title", (data.bless > 0 ? ("Reste: " + pvActMin + "-" + pvActMax + " PV sur ") : "") + data.pvRange + " PV (MAJ: " + this.utils.getDateDiff(new Date(data.cdmDate*1000), new Date()) + ")")
                        .append(
                            $("<div/>")
                            .css("height", "100%")
                            .css("width", (100-data.bless) + "%")
                            .css("background-color", "#FF0000")
                        )
                    );                        
                }, this));                
                
                
                if(Utils.getConf("manageTags") == "true") {                    
                    $.each(json.tags, $.proxy(function(key, tag){
                        key = key.split(";");
                        $("[data-tag-type='" + key[0] + "'][data-tag-id='" + key[1] + "']").text(tag);
                    }, this));  
                }
                
            },
            scope : this
        });        
    }
    
    
    
    
});

var MH_Play_PlayStart = $.extend({}, MH_Page, {
    
    init : function(){
        $("<div/>")
        .addClass("mh_tdpage")
        .css("border", "1px solid black")
        .css("margin", "10px auto")
        .css("padding", "5px 10px 10px")
        .css("width", "500px")
        .append(
            $("<fieldset/>")
            .attr("id", "KMHC_form")
            .append($("<legend/>").text("Karlaaki MH Connector"))
            .append(this.addCssToLabel($("<label/>").text("Identifiant")))
            .append(this.addCssToInput($("<input/>").attr("type", "text").attr("name", "login").attr("value", Utils.getConf("login") || "")))
            .append($("<br/>").css("clear","left"))
            .append(this.addCssToLabel($("<label/>").text("Mot de passe")))
            .append(this.addCssToInput($("<input/>").attr("type", "password").attr("name", "password").attr("value", Utils.getConf("pswd") || "")))
            .append($("<br/>").css("clear","left"))
            .append(
                $("<input/>")
                .addClass("mh_form_submit")
                .attr("type","button")
                .attr("value", "Enregistrer")
                .click($.proxy(this.checkConnect,this))
            )
            .append($("<br/>"))
            .append($("<span/>"))
        )
        .insertAfter($("#loginform"));
    },    
    
    showMsg : function(msg, color) {
        $("#KMHC_form span:first")
        .css("color", color)
        .text(msg);
    },
    
    checkConnect : function() {
        var login = $("#KMHC_form input[name=login]:first").val();
        var pswd  = $("#KMHC_form input[name=password]:first").val();
        
        this.callAPI({
            api : "isLog",
            data : {
                "login" : login,
                "password" : pswd
            },
            callback : function(data) {
                if(data.indexOf("Une erreur est survenue lors de votre identification, veuillez recommencer") > -1) {
                    this.showMsg("Une erreur est survenue lors de votre identification, veuillez recommencer", "#990000");
                } else {
                    this.save(login, pswd);
                }
            },
            scope : this
        });
    },
    
    save : function(login, pswd) {
        Utils.setConf("login", login);
        Utils.setConf("pswd", pswd);
        this.showMsg("Identifiants de connexion enregistrés", "#009900");
    }
    
});

var MH_Play_Play_menu = $.extend({}, MH_Page, {
    init : function(){
        $("<div/>")
        .css("margin", "0px auto")
        .css("position", "absolute")
        .css("top", "30px")
        .css("left", "54px")
        .append(
            $("<a/>")
            .css("margin", "5px")
            .css("color", "#ffffcc")
            .attr("href", "http://pharoz.net/MH/outil/")
            .attr("target", "blank")
            .text("Outil")
        )
        .append("|")
        .css("color", "#ffffcc")
        .css("margin", "5px")
        .append(
            $("<a/>")
            .css("margin", "5px")
            .css("color", "#ffffcc")
            .attr("href", "http://pharoz.net/MH/forum/")
            .attr("target", "blank")
            .text("Forum")
        ).
        appendTo($("body"))
    }        
});

var MH_Play_TurnStart = $.extend({}, MH_Page, {
    init : function(){
        if(!this.isInitialized()) {
            this.error("Authentification required");
            return;
        }
        this.autoConnect();
    },    
    
    autoConnect : function() {
        $("body")
        .append(
            $("<iframe/>")
            .css("display", "none")
            .attr("src", "http://pharoz.net/MH/outil/index.php4?login=" + Utils.getConf("login") + "&password=" + Utils.getConf("pswd"))
            .attr("name", "KMHC_hidden_form")
            .on("load", function() {
                $(this).remove();
            })
        );      
    }
});


$(document).ready(function() {
    // Initialisation de la configuration
    Utils.initConfig();
    
    // Chargement du module spécifique
    var pathname = document.location.pathname;
    var moduleName = pathname.replace(/\/mountyhall\/(.*).php.*$/, "$1").replace(/\//g, "_");
    console.log("Loading module " + moduleName + " for URL " + pathname);
    
    var module;
    try {
        module = eval(moduleName);
    } catch(e) {}
    
    if(typeof module == undefined) {
        console.log("Unable to find the module " + moduleName + " for URL " + pathname);
    } else {
        module.load();
    }
});
