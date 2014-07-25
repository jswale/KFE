// ==UserScript==
// @name          KFE
// @namespace     pharoz.net
// @version       0.0.7
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
        },
        
        getId : function(key) {
            return CONF_KEY + key;
        }
    }
}();

var MH_Page = function() {
    return {
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
            .css("width", "200px");
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
            var result = $("form[name='ActionForm']:first").text();
            if(result.indexOf("Vous avez RÉUSSI à utiliser cette compétence") > -1) {
                // Appel de l'API
                this.callAPIConnected({
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
                    api : "idt",
                    data : {
                        "id" : data[1],
                        "name" : data[2]
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
        
        this.addConfigPanel([
            {
                label : "Envoi automatique du profile",
                option : "sendProfile",
                type : "checkbox"
            }
        ]);        
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
        var body = $.trim($("table:first tr:nth-child(5) td:first").text());        
        
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
        
        this.log(body);
        
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
        
        if(Utils.getConf("monsterLevel") == "true") {
            this.addMonsterLevel();
        }
        
        if(Utils.getConf("invisible") == "true") {
            this.addInvisibleTroll();
        }                        
        
        if(Utils.getConf("monsterCdmLink") == "true") {
            this.addMonsterCdmLink();
        }
        
        if(Utils.getConf("viewTrollInfos") == "true") {
            this.addTrollInfos();
        }
        
        if(Utils.getConf("viewMonsterInfos") == "true") {
            this.addMonsterInfos();
        }
        
        
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
            }                
        ]);
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
    
    addTrollInfos : function() {
        var refColId = this.getColumnId("mh_vue_hidden_trolls", "Réf.");
        
        var trollIds = $("#mh_vue_hidden_trolls table:first tr.mh_tdpage td:nth-child("+refColId+")").map(function(){
            var id = $(this).text();
            $(this).parent("tr").attr("data-troll-info", id);
            return id;
        }).get();            
        
        return;    
        
        // Appel de l'API
        this.callAPIConnected({
            api : "trollInfos",
            data : {
                "i" : trollIds
            },
            callback : function(datas) {
                var nomColId = this.getColumnId("mh_vue_hidden_trolls", "Nom");    
                
                // bouchon
                var json = $.parseJSON(datas);
                $.each(json, function(i, data){
                    this.injectHP($("[data-troll-info='" + data[0] + "'] td:nth-child("+nomColId+")"), "70", "XX", "YY");
                });
            },
            scope : this
        });                        
    },
    
    addMonsterInfos : function() {
        var refColId = this.getColumnId("mh_vue_hidden_monstres", "Réf.");         
        
        var monsterIds = $("#mh_vue_hidden_monstres table:first tr.mh_tdpage td:nth-child("+refColId+")").map(function(){
            var id = $(this).text();
            $(this).parent("tr").attr("data-monster-info", id);
            return id;
        }).get();            
        
        return;
        
        // Appel de l'API
        this.callAPIConnected({
            api : "monsterInfos",
            data : {
                "i" : monsterIds
            },
            callback : function(datas) {
                var nomColId = this.getColumnId("mh_vue_hidden_monstres", "Nom");    
                
                // bouchon
                var json = $.parseJSON(datas);
                $.each(json, function(i, data){
                    this.injectHP($("[data-monster-info='" + data[0] + "'] td:nth-child("+nomColId+")"), "70", "XX", "YY");
                });
            },
            scope : this
        });            
    },
    
    injectHP : function(parent, prct, pvMin, pvMax) {
        parent.append(
            $("<div/>")
            .css("float", "right")
            .css("margin", "2px 2px 2px 0px")
            .css("width", "100")
            .css("height", "14")
            .css("border", "1px solid black")
            .css("background-color", "#FFFFFF")
            .attr("title", pvMin + " / " + pvMax + " PV")
            .append(
                $("<div/>")
                .css("height", "100%")
                .css("width", prct + "%")
                .css("background-color", "#FF0000")
            )
        );
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
    
    addInvisibleTroll : function() {
        var txt = $("form[name='LimitViewForm']").text();
        
        var x = parseInt(txt.match(/.*X = (-?\d+)/)[1]);
        var y = parseInt(txt.match(/.*Y = (-?\d+)/)[1]);
        var n = parseInt(txt.match(/.*N = (-?\d+)/)[1]);
        var r = txt.match(/L'affichage est limité à (\d+) cases horizontalement et (\d+) verticalement/);
        var rH = parseInt(r[1]);
        var rV = parseInt(r[2]);
        
        this.callAPIConnected({
            api : "getInvi",
            data : {
                "xMin" : x - rH,
                "xMax" : x + rH,
                "yMin" : y - rH,
                "yMax" : y + rH,
                "nMin" : n - rV,
                "nMax" : n + rV
            },
            callback : function(datas) {
                //datas = '[[77,19,-60,666,"Troll invisible","Camou",66,true,123,"Un deux trois"]]';
                var json = $.parseJSON(datas);
                     
                $.each(json, function(i, data){
                    var d = Math.max(Math.abs(data[0]-x), Math.abs(data[1]-y), Math.abs(data[2]-n));                   
                    $("<tr/>")
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
                        )
                    ;
                });
                //API
                // X | Y | N | ID | name | race | level | Camouflé[T],Invisible[F] | team_id | team_name
                
                // IHM
                // Dist.	Réf.	Nom	Niveau	Race	Guilde	X	Y	N
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
