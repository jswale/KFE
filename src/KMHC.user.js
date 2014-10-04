// ==UserScript==
// @name          KFE
// @namespace     pharoz.net
// @version       0.0.30-4
// @description   Pharoz.net MH Connector
// @match         http://games.mountyhall.com/*
// @require       http://code.jquery.com/jquery-2.1.0.min.js
// @downloadURL   https://github.com/jswale/KFE/raw/master/src/KMHC.user.js
// @updateURL     https://github.com/jswale/KFE/raw/master/src/KMHC.meta.js
// @grant         GM_addStyle
// @copyright     2014+, Miltown, Grul & disciple
// ==/UserScript==

/*
 *
 * jQuery Editables 1.0.1
 *
 * Date: Aug 11 2012
 * Source: www.tectual.com.au, www.arashkarimzadeh.com
 * Author: Arash Karimzadeh (arash@tectual.com.au)
 *
 * Copyright (c) 2012 Tectual Pty. Ltd.
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
(function($){

$.fn.editables = function(options){

  var opts = $.extend( {}, $.fn.editables.options, options );

  if(!$.isArray(opts.freezeOn)) opts.freezeOn = [opts.freezeOn];
  if(!$.isArray(opts.editOn)) opts.editOn = [opts.editOn];

  $('[data-type=editable]', this).each(
    function(){
      var $this = $(this);
      var fn = function(ev){
        var t = $($this.data('for'));
        if(opts.beforeFreeze.call(t, $this, ev)==false) return;
        t.hide();
        $this.show();
        t.trigger('onFreeze');
      };
      var evs= {};
      $.each( opts.freezeOn, function(){ evs[this] = fn; } );
      $($this.data('for')).hide().bind('onFreeze', opts.onFreeze).bind(evs);

      var fn = function(ev){
        var t = $($this.data('for'));
        if(opts.beforeEdit.call($this, t, ev)==false) return;
        $this.hide();
        t.show().focus();
        $this.trigger('onEdit');
      }
      var evs = {};
      $.each( opts.editOn, function(){ evs[this] = fn; } );
      $this.bind('onEdit', opts.onEdit).bind(evs);
    }
  );
  return this;
}
$.fn.editables.options = {
  editOn: 'click',      /* Event, Array[Events]: All jquery events */
  beforeEdit: $.noop,   /* Function: It is called before conversion, you can stop it by returning false */
  onEdit: $.noop,       /* Function: This function bind to editable item as event */
  freezeOn: 'blur',     /* Event, Array[Events]: All jquery events */
  beforeFreeze: $.noop, /* Function: It is called before conversion, you can stop it by returning false */
  onFreeze: $.noop      /* Function: This function bind to edit field as event */
}

})(jQuery);

// Here we are...
var Utils = function() {
    var CONF_KEY = "KMHC_",
        VAL_KEY  = "KMHV_";

    return {
        success: "success",

        isUndefined : function(value) {
            return typeof value === 'undefined';
        },

        isDefined : function(value) {
            return typeof value !== 'undefined';
        },

        getConf : function(key) {
            return localStorage[CONF_KEY + key];
        },

        setConf : function(key, value) {
            localStorage[CONF_KEY + key] = value;
        },

        initConf : function(key, value) {
            if(this.isUndefined(typeof this.getConf(key))) {
                this.setConf(key, value);
            }
        },

        initConfig : function() {
            this.initConf("mountyzilla","false");
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
            return (date < 10 ? "0" : "") + date + "/" + (month < 10 ? "0" : "") + month + '/' + year + (' à ' + (hour < 10 ? "0" : "") + hour + ':' + (min < 10 ? "0" : "") + min + ':' + (sec < 10 ? "0" : "") + sec);
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
            if($.isArray(css)) css = css.join('\n');

            // cf. http://stackoverflow.com/a/2692861
            $('head').append('<style type="text/css">\n' + css + '\n</style>');
        },

        getValue : function(key) {
            return localStorage[VAL_KEY + key];
        },
        setValue : function(key, value) {
            localStorage[VAL_KEY + key] = value;
        },
        getSessionValue : function(key) {
            return sessionStorage[VAL_KEY + key];
        },
        setSessionValue : function(key, value) {
            sessionStorage[VAL_KEY + key] = value;
        },

        cleanup : function(str) {
            return $.trim(str.replace(/<br\/?>/gi, "\r\n")
                             .replace(/<\/p>/gi, "\r\n")
                             .replace(/<tr[^>]*>/gi, "\r\n")
                             .replace(/<\/t[dh][^>]*>/gi," ")
                             .replace(/<\/?[^>]+>/gi,"")
                             .replace(/\s+/gi," "));
        }
    }
}();

var MH_Page = function() {
    return {

        utils : Utils,

        load : function() {
            console.log("Module initializing");
            this.init();
            console.log("Module initialized");
        },

        init : function() {
            console.log("Not yet implemented");
        },

        log : function() {
            console.log(arguments);
        },

        debug : function() {
            console.debug(arguments);
        },

        warn : function() {
            console.warn(arguments);
        },

        error : function() {
            console.error(arguments);
        },

        isInitialized : function() {
            return  (Utils.isDefined(typeof Utils.getConf("login")))
            &&  (Utils.isDefined(typeof Utils.getConf("pswd")));
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
            this.debug("Calling API", conf);
            $.ajax({
                type: "POST",
                url: "http://pharoz.net/MH/outil/api.php?rnd=" + new Date().getTime(),
                //contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
                data : $.extend(conf.data, {"page" : conf.api, "popup" : 0, "encoding" : "UTF-8"})
            }).done($.proxy(function(data, result, request){
                if(result == Utils.success) {
                    if(Utils.isUndefined(typeof conf.callback)) {
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

        mhButton : function(label, callback) {
            return $("<input/>")
                    .addClass("mh_form_submit")
                    .css("margin", "auto 0px")
                    .attr("type", "button")
                    .attr("value", label)
                    .on('click', callback);
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

        addConfigPanel : function(items, callback) {
            var self = this;
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
                    var fieldValue = Utils.getConf(item.option) || "undefined";
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
                    self.mhButton("Enregistrer", function(){
                        $(this).val("Enregistré");
                        $.each(items, $.proxy(function(id, item){
                            var field = $("#" + Utils.getId("page-options-"+item.option));
                            var value = field.val();
                            if(item.type == "checkbox") {
                                value = field.prop("checked");
                            }
                            Utils.setConf(item.option, value);
                        }, this));
                        if(typeof(callback) == "function") {
                            callback.apply(this);
                        } else {
                            $("#" + Utils.getId("page-options")).toggle();
                        }
                      })
                )
                .append($("<br/>").css("clear","left"))
                .append("<i>Les changements seront pris en compte au prochain affichage de cette page</i>")
                .append($("<br/>"))
                .append($("<span/>"))
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
            .on('click', $.proxy(function(){
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
                label : "Mot de passe",
                option : "pswd",
                type : "password"
            },
            {
                label : "Mountyzilla activé",
                option : "mountyzilla",
                type : "checkbox"
            }
        ], this.checkConnect);
    },

    checkConnect : function() {
        this.callAPI({
            api : "isLog",
            data : {
                "login" : Utils.getConf("login"),
                "password" : Utils.getConf("pswd")
            },
            callback : function(data) {
                var msg = $("#KMHC_form span:first");
                if(data.indexOf("Une erreur est survenue lors de votre identification, veuillez recommencer") > -1) {
                    msg
                    .css("color", "#990000")
                    .text("Une erreur est survenue lors de votre identification, veuillez vérifier votre mot de passe.");
                } else {
                    msg
                    .css("color", "#009900")
                    .text("Identifiants de connexion validés");
                }
            },
            scope : this
        });
    }
});

var MH_Play_Actions_Competences_Play_a_Competence16 = $.extend({}, MH_Page, { // CdM

    init : function() {
        this.tune();
        this.showInfo();
    },

    tune : function() {
        $("select option:contains('Gowap')").css("color", "#808080");
    },

    showInfo : function() {
        var monsterIds = $("select option[value!='']").map(function(){
            return $(this).prop("value").match(/(\d+)/)[1];
        }).get();

        this.callAPIConnected({
            api : "viewInfo",
            data : {
                "invi" : 0,
                "m" : monsterIds
            },
            callback : function(datas) {
                var json = $.parseJSON(datas);
                $.each(json.tags, $.proxy(function(key, data) {
                    var tmp = key.split(";");
                    if(tmp[0] == "1") {
                        var o = $("select option[value='ME_" + tmp[1] + "']");
                        o.text(o.text() + " " + data.tag);
                    }
                },this));

                $.each(json.monsters, $.proxy(function(key, data) {
                    var o = $("select option[value='ME_" + key + "']");
                    o.text(o.text() + " (CdM: " + this.utils.getDateDiff(new Date(data.cdmDate*1000), new Date()) + ")");
                },this));
            }
        });
    }
});


var MH_Play_Actions_Competences_Play_a_Competence16b = $.extend({}, MH_Page, { // CdM
    init : function() {
        var result = Utils.cleanup($("form[name='ActionForm']:first").html());
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
});

var MH_Play_Actions_Sorts_Play_a_Sort13 = $.extend({}, MH_Page, { // TP
    init : function() {
        Utils.setConf("action", "Sort13");
    }
});

var MH_Play_Actions_Sorts_Play_a_Sort20 = $.extend({}, MH_Page, { // AA
    init : function() {
        Utils.setConf("action", "Sort20");
    }
});

var MH_Play_Actions_Play_a_PickTresor_Abstract = $.extend({}, MH_Page, {
    suffix : '',

    init : function() {
        var tresorIds = $("select option[value!='']").map(function(){
            return $(this).prop("value");
        }).get();

        this.callAPIConnected({
            api : "viewInfo",
            data : {
                "invi" : 0,
                "o" : tresorIds
            },
            callback : function(datas) {
                var json = $.parseJSON(datas);
                $.each(json.tags, $.proxy(function(key, data){
                    var tmp = key.split(";");
                    if(tmp[0] == "3") {
                        var o = $("select option[value='" + tmp[1] + this.suffix + "']");
                        o.text(o.text() + " - " + data.tag);
                    }
                },this));
            }
        });

    }
});


var MH_Play_Actions_Sorts_Play_a_Sort24 = $.extend({}, MH_Play_Actions_Play_a_PickTresor_Abstract, { // TELEK
});

var MH_Play_Actions_Play_a_PickTresor = $.extend({}, MH_Play_Actions_Play_a_PickTresor_Abstract, {
    suffix : '_TE'
});

var MH_Play_Actions_Sorts_Play_a_Sort10 = $.extend({}, MH_Page, { // IdT
    init : function() {
        Utils.setConf("action", "Sort10");
        this.injectInfo();
    },

    injectInfo : function() {
         var tresorIds = $("select option[value!='']").map(function(){
            return $(this).prop("value").substr(2);
        }).get();

        this.callAPIConnected({
            api : "viewInfo",
            data : {
                "invi" : 0,
                "o" : tresorIds
            },
            callback : function(datas) {
                var json = $.parseJSON(datas);
                $.each(json.tags, $.proxy(function(key, data){
                    var tmp = key.split(";");
                    if(tmp[0] == "3") {
                        var o = $("select option[value='2_" + tmp[1] + "']");
                        o.text(o.text() + " - " + data.tag);
                    }
                },this));
            }
        });
    }
});

var MH_Play_Actions_Play_a_SortResult = $.extend({}, MH_Page, {
    init : function() {
        var result = $($("table")[2]).text();
        if(result.indexOf("Vous avez RÉUSSI à utiliser ce sortilège") > -1) {

            if(Utils.getConf("action") == "Sort20") { // AA
                // Appel de l'API
                this.callAPIConnected({
                    api : "aa",
                    data : {
                        "aa" : result
                    }
                });
            }

            if(Utils.getConf("action") == "Sort13") { // TP

            }

            if(Utils.getConf("action") == "Sort10") { // IdT
                var data = /L'identification a donné le résultat suivant :\s*(\d+)\s*-\s*([^\)]+\))/.exec(result);

                // Appel de l'API
                this.callAPIConnected({
                    api : "tag",
                    data : {
                        "type" : 3,
                        "num" : data[1],
                        "tag" : data[2],
                    }
                });
            }
        }
        Utils.setConf("action", "");
    }
});

var MH_Play_Play_profil = $.extend({}, MH_Page, {
    init : function() {
        this.sendData();
        this.removeAds();
        this.tuneIHM();
    },

    convertDate : function(date) {
        return new Date(date.replace(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+):(\d+)/, "$2/$1/$3 $4:$5:$6"));
    },

    io2 : function(i) {
        return (i < 10 ? "0" : "") + i;
    },

    dateToString : function(d) {
        return [this.io2(d.getDate()), this.io2(d.getMonth()+1), this.io2(d.getFullYear())].join('/')+' '+ [this.io2(d.getHours()), this.io2(d.getMinutes()), this.io2(d.getSeconds())].join(':');
    },

    tuneIHM : function() {
        var stats = this.getStats();

        var getContainer = function(id) {
            return $("table.mh_tdborder:first > tbody > tr:nth-child(" + id + ") > td:nth-child(2)");
        };

        // Echéance du Tour
        {
            var ctn = getContainer(2);
            var nextDla = this.convertDate(stats.dla.next);
            nextDla.setHours(nextDla.getHours() + stats.dla.duration.total.hour);
            nextDla.setMinutes(nextDla.getMinutes() + stats.dla.duration.total.min);
            console.log(nextDla);
            ctn.append($("<p/>").append($("<b/>").text("---> Prochaine DLA (estimée)............: " + this.dateToString(nextDla))));
        }

        // Expérience
        {
            var ctn = getContainer(4);

            var pi_nextLvl = stats.xp.level * (stats.xp.level + 3) * 5;
            var px_ent = 2 * stats.xp.level;
            var px = stats.xp.PX.public + stats.xp.PX.private;
            if(stats.xp.level < 3) {
                px_ent = Math.max(px_ent, Math.min(px, 5));
            }
            var nb_ent = Math.ceil((pi_nextLvl - stats.xp.PI.all) / px_ent);
            ctn.html(ctn.html().replace("PI)", 'PI | Niveau ' + (stats.xp.level + 1) + ' : ' + pi_nextLvl + ' PI => ' + nb_ent + ' entraînement' + (nb_ent > 1 ? 's' : '') + ")"));

            var trainingMsg;
            if(px < px_ent) {
                trainingMsg = 'Il vous manque ' + (px_ent - px) + ' PX pour vous entraîner.';
            } else {
                trainingMsg = 'Entraînement possible. Il vous restera ' + (px - px_ent) + ' PX.';
            }
            ctn.html(ctn.html().replace(/(PI\.\.\.)/, "<i>" + trainingMsg + '</i><br/>$1'));
        }

        // Point de Vie
        {
            var ctn = getContainer(5);

            var pvmax = stats.hp.max.value + stats.hp.max.bonus;

            ctn.find("table table tr td img").attr("title", '1 PV de perdu = +'+Math.floor(250 / pvmax) +' min ' + (Math.floor(15000/pvmax)%60) + ' sec');

            // Différence PV p/r à équilibre de temps (propale R')
            if(stats.hp.current > 0) {
                var bmt = stats.dla.duration.bonus.hour * 60 + stats.dla.duration.bonus.min;
                var pdm = stats.dla.duration.stuf.hour * 60 + stats.dla.duration.stuf.min;
                var pvdispo = stats.hp.current - pvmax - Math.ceil((bmt + pdm)*pvmax/250);
                var texte = false;
                if(bmt + pdm >= 0) {
                    texte = 'Vous ne pouvez compenser aucune blessure actuellement.';
                } else if(pvdispo > 0) {
                    texte = 'Vous pouvez encore perdre <b>'+Math.min(pvdispo,stats.hp.current) +' PV</b> sans malus de temps.';
                } else if(pvdispo<0) {
                    texte = 'Il vous manque <b>'+(-pvdispo) +' PV</b> pour ne plus avoir de malus de temps.';
                }
                if(texte) {
                    ctn.find("table:first td:nth-child(2)").append("<p><i>" + texte + "</i></p>");
                }
            }
        }

        // MM/RM
        {
            var ctn = getContainer(10);
            var rmmax = stats.magie.rm.value + stats.magie.rm.bonus;
            var mmmax = stats.magie.mm.value + stats.magie.mm.bonus;
            ctn.html(ctn.html().replace(/(Résistance[^<]+)/, "$1 (" + rmmax + ")")
                               .replace(/(Maîtrise[^<]+)/, "$1 (" + mmmax + ")"));
        }

//        console.log(ctn);

    },

    getStats : function() {
        var stats = {};

        var getText = function(id) {
            return $("table.mh_tdborder:first tr:nth-child(" + id + "):first").text().replace(/[\n\r\t]+/gi,"").replace(/\s+/gi," ");
        };

        // Echéance du Tour
        var text = getText(2);
        var tmp = /Echéance du Tour Date Limite d'Action : (\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}) Il me reste (\d+) PA sur un total de 6 Durée normale de mon Tour.............: (\d+) heures et (\d+) minutes Bonus\/Malus sur la durée.................: (-?\d+) heures et (-?\d+) minutes. Augmentation due aux blessures.......: (\d+) heures et (\d+) minutes. Poids de l'équipement......................: (\d+) heures et (\d+) minutes. ---> Durée de mon prochain Tour.....: (\d+) heures et (\d+) minutes./.exec(text);
        stats.pa = parseInt(tmp[2]);
        stats.dla = {
            next :tmp[1],
            duration : {
                normal : {
                    hour : parseInt(tmp[3]),
                    min : parseInt(tmp[4])
                },
                bonus : {
                    hour : parseInt(tmp[5]),
                    min : parseInt(tmp[6])
                },
                injuries : {
                    hour : parseInt(tmp[7]),
                    min : parseInt(tmp[8])
                },
                stuf : {
                    hour : parseInt(tmp[9]),
                    min : parseInt(tmp[10])
                },
                total : {
                    hour : parseInt(tmp[11]),
                    min : parseInt(tmp[12])
                }
            }
        };

        // Vue
        var text = getText(3);

        var tmp = /Position X = (-?\d+) \| Y = (-?\d+) \| N = (-?\d+).* Vue.......: (-?\d+) Cases ([+-]\d+)/.exec(text);
        stats.position = {
            x : parseInt(tmp[1]),
            y : parseInt(tmp[2]),
            n : parseInt(tmp[3]),
        };

        stats.view = {
            range : parseInt(tmp[4]),
            bonus : parseInt(tmp[5])
        };

        // XP
        var text = getText(4);
        var tmp = /Expérience Niveau........: (\d+) \((\d+) PI\) PX..............: (\d+) PX Personnels...... : (\d+) PI..............: (\d+)/.exec(text);
        stats.xp = {
            level : parseInt(tmp[1]),
            PI : {
                all : parseInt(tmp[2]),
                current : parseInt(tmp[5])
            },
            PX : {
                public : parseInt(tmp[3]),
                private : parseInt(tmp[4])
            }
        };
        tmp = /PM.............: (\d+) Niveau Calculé : (\d+)/.exec(text);
        stats.xp.PM = tmp ? parseInt(tmp[1]) : stats.xp.PI.all;
        stats.xp.vlevel = tmp ? parseInt(tmp[2]) : stats.xp.level;
        tmp = /Karma.........: (.*) /.exec(text);
        stats.karma = tmp[1];

        // HP
        var text = getText(5);
        var tmp = /Point de Vie Actuels............: (\d+) Maximum.........: (\d+)\s?([+-]\d+)? Fatigue............: (.*) \( (\d+) \)/.exec(text);
        console.log('"tmp"', tmp);
        stats.hp = {
            current : parseInt(tmp[1]),
            max : {
                value : parseInt(tmp[2]),
                bonus : parseInt(tmp[3] ? tmp[3] : 0)
            },
            fatigue : {
                display : tmp[4],
                value : parseInt(tmp[5])
            }
        };

        // Caracs
        var text = getText(6);
        var tmp = /Caractéristiques Régénération.....: (\d+) D3 ([+-]\d+) ([+-]\d+) Attaque............: (\d+) D6 ([+-]\d+) ([+-]\d+) Esquive.............: (\d+) D6 ([+-]\d+) ([+-]\d+) Dégâts..............: (\d+) D3 ([+-]\d+) ([+-]\d+) Armure.............: (\d+) D3 ([+-]\d+) ([+-]\d+) Caractéristiques Déduites :-Corpulence.....: (\d+)points- Agilité.............: (\d+)points/.exec(text);
        stats.regen = {
            des : parseInt(tmp[1]),
            stuff : parseInt(tmp[2]),
            mouche : parseInt(tmp[3])
        };
        stats.attaque = {
            des : parseInt(tmp[4]),
            stuff : parseInt(tmp[5]),
            mouche : parseInt(tmp[6])
        };
        stats.esquive = {
            des : parseInt(tmp[7]),
            stuff : parseInt(tmp[8]),
            mouche : parseInt(tmp[9])
        };
        stats.degat = {
            des : parseInt(tmp[10]) ,
            stuff : parseInt(tmp[11]),
            mouche : parseInt(tmp[12])
        };
        stats.armure = {
            des : parseInt(tmp[13]),
            stuff : parseInt(tmp[14]),
            mouche : parseInt(tmp[15])
        };
        stats.corpulence = parseInt(tmp[16]);
        stats.agilite = parseInt(tmp[17]);

        // Combat
        var text = getText(7);
        var tmp = /Combat Pour ce tour : - Dés d'attaque en moins ................: (\d+) - Dés d'esquive en moins ................: (\d+) - Dés d'armure en moins .................: (\d+) Nombre d'Adversaires tués......: (\d+) Nombre de Décès...................: (\d+)/.exec(text);
        stats.roundMalus = {
            attaque : parseInt(tmp[1]),
            esquive : parseInt(tmp[2]),
            armure : parseInt(tmp[3]),
        };
        stats.kills = parseInt(tmp[4]);
        stats.deaths = parseInt(tmp[5]);

        // Magie
        var text = getText(10);
        var tmp = / Magie Résistance à la Magie...................: (\d+) points ([+-]\d+) Maîtrise de la Magie....................: (\d+) points ([+-]\d+) Bonus de Concentration : (\d+) %/.exec(text);
        stats.magie = {
            rm : {
                value : parseInt(tmp[1]),
                bonus : parseInt(tmp[2])
            },
            mm : {
                value : parseInt(tmp[3]),
                bonus : parseInt(tmp[4])
            }
        };
        stats.concentration = parseInt(tmp[5]);

        return stats;
    },

    removeAds : function () {
        $("iframe").parent("td").remove();
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
    },

    analyseMessage : function() {
        var title = $.trim($("table:first tr:first td:first font:first").text());
        var body = $.trim($("table:first tr:nth-child(5) td:first").html().replace(/<br>/g, "\r\n")).replace(/<\/?[^>]+>/gi,"");

        var api = null;
        var data = {};

        if(title.indexOf("Compétence : Connaissance des Monstres") > -1) {
            api = "cdm";
            data = {
                "cdm" : body
            };
        }

        if(title.indexOf("Sortilège : Analyse Anatomique") > -1) {
            api = "aa";
            data = {
                "aa" : body
            };
        }

        if(title.indexOf("Sortilège : Identification des trésors") > -1) {
            var tmp = /L'identification a donné le résultat suivant :\s*(\d+)\s*-\s*([^\)]+\))/.exec(body);
            api = "tag";
            data =  {
                "type" : 3,
                "num" : tmp[1],
                "tag" : tmp[2],
            };
        }

        if(title.indexOf("Sortilège : Téléportation") > -1) {
            var tmp = /Vous avez créé un Portail de Téléportation\s*\((\d+)\).*(Il conduit en[^\.]*)/.exec(body);
            api = "tag";
            data =  {
                "type" : 5,
                "num" : tmp[1],
                "tag" : tmp[2],
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
        this.sendView();
        this.highlightTreasures();
        this.addTagEdition();

        if(Utils.getConf("mountyzilla") != "true") {
            this.addMonsterLevel();
            this.addSharingUI();
        }

        this.addMonsterCdmLink();

        this.addInfos();

        // Tune ihm
        $("#mh_vue_hidden_monstres table:first tr.mh_tdpage td:nth-child(" + this.getColumnId("mh_vue_hidden_monstres", "Nom") + ") a:contains('Gowap Apprivoisé')").css("color", "#000");

        /*
        this.addConfigPanel([
            {
                label : "Mountyzilla activé ?",
                option : "mountyzilla",
                type : "checkbox"
            }
        ]);
        */
    },

    highlightTreasures : function() {
        var refColId = this.getColumnId("mh_vue_hidden_tresors", "Type");

        $("#mh_vue_hidden_tresors table:first tr.mh_tdpage td:nth-child("+refColId+")").each(function(){
            $(this).html((function(txt) {
                $.each(
                    [
                        ["Gigots de Gob'", "<b style='color:#ff8000'>piécettes à Miltown</b>"],
                        [/(Gigots de Gob)/, "<b style='color:#ff8000'>$1</b>"],
                        [/(Carte|Coquillage|Conteneur|Minerai|Parchemin|Spécial)/, "<b style='color:#900090'>$1</b>"]
                    ], function(i, r) {
                        txt = txt.replace(r[0], r[1]);
                    });
                return txt;
            })($(this).html()));
        });
    },

    addTagEditionForCell : function(cell, refColId, nomColId, type) {
        var ref = $(cell.children("td:nth-child(" + refColId + ")")).text();
        cell.children("td:nth-child(" + nomColId + ")")
        .append(
            $("<span/>")
            .append(
                $("<label/>")
                .addClass("editable")
                .attr("data-type", "editable")
                .attr("data-for", "#tag_" + ref)
                .text(""))
            .append(
                $("<input/>")
                .attr("id", "tag_" + ref)
                .attr("data-tag-type", type)
                .attr("data-tag-id", ref))
                .on("paste", function(){
                    var input = this;
                    setTimeout(function() {
                        $(input).attr('size', $(input).val().length + 2);
                    }, 10);
                })
        )
    },

    addTagEdition: function() {
        Utils.addGlobalStyle([
            '.editable { margin-left: 10px; }',
            '.editable:after { content: ""; display: none; opacity: 1; margin-left: 8px; width: 13px; height: 13px; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAABdSURBVHjalNLdCgAQDIZh5JJ3F9s9T3Ygf/uMUpKn3pBVNb2GiNghIsq20RGazKz7OgR2WFDSyJkS3bxbEsx7gQNFwIKiYKAfYOh2rQgsyHsXF0WS5lnd/wVGE2AAupiLqNBm6B0AAAAASUVORK5CYII=); }',
            'tr.mh_tdpage:hover .editable:after {display:inline-block; }',
            '.editable + input { margin-left: 10px; font-family: monospace; border: none; display: none; }'
        ]);

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
                $("#" + data[0] + " table:first tr.mh_tdpage").each($.proxy(function(iTr, tr) {
                    this.addTagEditionForCell($(tr), refColId, nomColId, data[3]);
                }, this));
            }, this)
        );
    },

    handleTagEdition: function() {
        var self = this;
        $('body').editables({
            editOn: 'click',
            freezeOn: ['blur', 'keyup'],
            beforeEdit: function(field) {
                field.data('undo', this.text());
                field.val(this.text());
                field.attr('size', field.val().length + 2);
            },
            beforeFreeze: function(display, ev) {
                display.text(this.val());
                //console.log(ev);
                if(ev.type == 'keyup') {
                    if(ev.which == 13) return true;
                    if(ev.which == 27) {
                        display.text(this.data('undo'));
                        this.val(this.data('undo'));
                        return true;
                    }
                    this.attr('size', this.val().length + 2);
                    return false;
                }
                return true;
            },
            onFreeze: function() {
                if($(this).val() != $(this).data('undo')) {
                    self.callAPIConnected({
                        api : "tag",
                        data : {
                            "type" : $(this).attr("data-tag-type"),
                            "num" : $(this).attr("data-tag-id"),
                            "tag" : $(this).val()
                        },
                        callback : $.noop,
                        scope : self
                    });
                }
            }
        });
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
            td  .empty()
            .append(
                $("<a/>")
                .attr("href", "javascript:void(0)")
                .attr("title", "Voir la CdM de " + monsterName + " [" + monsterId + "]")
                .text(monsterId)
                .on('click', function(){
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

    addSharingUI : function() {
        var self = this,
            shareCallback = function() {
                var ids = [];
                $("#mh_vue_hidden_trolls table:first tr.mh_tdpage td:nth-child(3) input:checked").each(function() {
                    ids.push($(this).val());
                });
                window.open(
                    (
                        $("#mh_vue_hidden_trolls table:first").parents("table").prev().find("#radioPX").is(':checked')
                        ? "Actions/Play_a_DonPX.php?cat=8&dest="
                        : "../Messagerie/MH_Messagerie.php?cat=3&dest="
                    ) + ids.join(','),
                    "Contenu"
                );
            },
            selectCallback = function() {
                var refColId = self.getColumnId("mh_vue_hidden_trolls", "Réf.");

                $("#mh_vue_hidden_trolls table:first tr.mh_tdtitre:first td:nth-child(2)").after($("<td/>"));
                $("#mh_vue_hidden_trolls table:first tr.mh_tdpage").each(function() {
                    var trollId = $(this).children("td:nth-child("+refColId+")").text();
                    $(this).children('td:nth-child(2)').after(
                        $("<td/>")
                        .attr("width", 5)
                        .append(
                            $("<input/>")
                            .attr("type", "checkbox")
                            .val(trollId)
                        )
                    );
                });

                $(this)
                .before(
                    self.mhButton("Annuler", function() {
                        $("#mh_vue_hidden_trolls table:first tr.mh_tdtitre:first td:nth-child(3)").remove();
                        $("#mh_vue_hidden_trolls table:first tr.mh_tdpage td:nth-child(3)").remove();

                        $(this).siblings("span").remove();
                        $(this).next()
                        .off()
                        .on('click', selectCallback);
                        $(this).remove();
                    })
                )
                .after(
                    $("<span/>")
                    .append(
                        $("<label/>")
                        .append(
                            $("<input/>")
                            .attr("type", "radio")
                            .attr("name", "envoiPXMP")
                            .attr("id", "radioPX")
                            .attr("checked", "checked")
                        )
                        .append(" des PX ")
                    )
                    .append(
                        $("<label/>")
                        .append(
                            $("<input/>")
                            .attr("type", "radio")
                            .attr("name", "envoiPXMP")
                        )
                        .append(" un MP")
                    )
                )
                .off()
                .on('click', shareCallback);
            };
        $("#mh_vue_hidden_trolls table:first").parents("table").prev().find("a[name=trolls]").parent()
        .attr("width", 50)
        .after(
            $("<td/>")
            .attr("align", "left")
            .append(self.mhButton("Envoyer...", selectCallback))
        );
    },

    getTrollIds : function() {
        var refColId = this.getColumnId("mh_vue_hidden_trolls", "Réf.");
        var nameColId = this.getColumnId("mh_vue_hidden_trolls", "Nom");

        // Fix
        $("#mh_vue_hidden_trolls table:first tr.mh_tdpage td:nth-child("+nameColId+")").css("width", "45%");

        var    ids = $("#mh_vue_hidden_trolls table:first tr.mh_tdpage td:nth-child("+refColId+")").map(function(){
            var id = $(this).text();
            $(this).parent("tr").attr("data-troll-info", id);
            return id;
        }).get();
        ids.push(Utils.getConf("login"));
        return ids;
    },

    getMonsterIds : function() {
        var refColId = this.getColumnId("mh_vue_hidden_monstres", "Réf.");

        return $("#mh_vue_hidden_monstres table:first tr.mh_tdpage td:nth-child("+refColId+")").map(function(){
            var id = $(this).text();
            $(this).parent("tr").attr("data-monster-info", id);
            return id;
        }).get();

    },

    getTresorIds : function() {
        var refColId = this.getColumnId("mh_vue_hidden_tresors", "Réf.");

        return $("#mh_vue_hidden_tresors table:first tr.mh_tdpage td:nth-child("+refColId+")").map(function(){
            var id = $(this).text();
            $(this).parent("tr").attr("data-tresor-info", id);
            return id;
        }).get();
    },

    getLieuIds : function() {
        var refColId = this.getColumnId("mh_vue_hidden_lieux", "Réf.");

        return $("#mh_vue_hidden_lieux table:first tr.mh_tdpage td:nth-child("+refColId+")").map(function(){
            var id = $(this).text();
            $(this).parent("tr").attr("data-lieu-info", id);
            return id;
        }).get();

    },

    addInfos : function() {
        var txt = $("form[name='LimitViewForm']").text();

        var x = parseInt(txt.match(/.*X = (-?\d+)/)[1]);
        var y = parseInt(txt.match(/.*Y = (-?\d+)/)[1]);
        var n = parseInt(txt.match(/.*N = (-?\d+)/)[1]);
        var r = txt.match(/L'affichage est limité à (\d+) cases horizontalement et (\d+) verticalement/);
        var rH = parseInt(r[1]);
        var rV = parseInt(r[2]);

        // Fix
        $("#mh_vue_hidden_trolls table:first tr.mh_tdpage td:nth-child("+this.getColumnId("mh_vue_hidden_trolls", "Nom")+")").css("width", "45%");

        this.callAPIConnected({
            api : "viewInfo",
            data : {
                "xMin" : x - rH,
                "xMax" : x + rH,
                "yMin" : y - rH,
                "yMax" : y + rH,
                "nMin" : n - rV,
                "nMax" : n + rV,
                "m" : this.getMonsterIds(),
                "t" : this.getTrollIds(),
                "o" : this.getTresorIds(),
                "l" : this.getLieuIds(),
                "c" : []
            },
            callback : function(datas) {
                var json = $.parseJSON(datas);

                var isInvisible = false;

                $.each(json.invis, $.proxy(function(trollId, data){
                    if(trollId == Utils.getConf("login")) {
                        isInvisible = true;
                    }
                    var d = Math.max(Math.abs(data.x-x), Math.abs(data.y-y), Math.abs(data.n-n));

                    var previous = [];
                    var pd = d;
                    do {
                        previous = $("#mh_vue_hidden_trolls table:first tr.mh_tdpage td:nth-child(1)").filter(function() {
                            return $(this).text() == pd;
                        }).last().parent("tr");
                        pd--;

                    } while(pd > 0 && previous.length == 0);

                    if(previous.length == 0) {
                        previous = $("#mh_vue_hidden_trolls table:nth-child(1) tr.mh_tdtitre").first();
                    }

                    var tr = $("<tr/>")
                    .attr("data-troll-info", trollId)
                    .addClass("mh_tdpage")
                    .append($("<td/>").text(d))
                    .append($("<td/>").text(trollId))
                    .append($("<td/>").append('<a href="javascript:EPV(' + trollId + ')" class="mh_trolls_0">' + data.name + '</a> [' + (data.camou ? "Camouflé" : "") + (data.invi ? "Invisible" : "") + ']'))
                    .append($("<td/>").text(data.lvl))
                    .append($("<td/>").text(data.race))
                    .append($("<td/>").append(data.guildId ? ('<a href="javascript:EAV(' + data.guildId + ',750,550)" class="mh_links">' + data.guildName + '</a>') : ''))
                    .append($("<td/>").text(data.x).attr("align", "center"))
                    .append($("<td/>").text(data.y).attr("align", "center"))
                    .append($("<td/>").text(data.n).attr("align", "center"))
                    .insertAfter(previous)
                    ;

                    this.addTagEditionForCell(tr, this.getColumnId("mh_vue_hidden_trolls", "Réf."), this.getColumnId("mh_vue_hidden_trolls", "Nom"), 2);
                }, this));

                $.each(json.trolls, $.proxy(function(trollId, data){

                    // Création de la ligne pour son troll
                    if(trollId == Utils.getConf("login") && !isInvisible) {
                        var tr = $("<tr/>")
                        .attr("data-troll-info", trollId)
                        .addClass("mh_tdpage")
                        .append($("<td/>").text(0))
                        .append($("<td/>").text(trollId))
                        .append($("<td/>").text('Mon troll'))
                        .append($("<td/>").text('-'))
                        .append($("<td/>").text('-'))
                        .append($("<td/>").text('-'))
                        .append($("<td/>").text(x).attr("align", "center"))
                        .append($("<td/>").text(y).attr("align", "center"))
                        .append($("<td/>").text(n).attr("align", "center"))
                        .insertAfter(
                            $("#mh_vue_hidden_trolls table:first tr.mh_tdtitre:first")
                        );
                        this.addTagEditionForCell(tr, this.getColumnId("mh_vue_hidden_trolls", "Réf."), this.getColumnId("mh_vue_hidden_trolls", "Nom"), 2);
                    }

                    var pvMin = data.pv;
                    var pvMax = Math.max(data.pv, data.pvMax);
                    $("[data-troll-info='" + trollId + "'] td:nth-child("+this.getColumnId("mh_vue_hidden_trolls", "Nom")+")")
                    .append(
                        $("<div/>")
                        .css("float", "right")
                        .css("margin", "2px 2px 2px 0px")
                        .css("width", "100")
                        .css("height", "14")
                        .css("border", "1px solid black")
                        .css("background-color", "#FFFFFF")
                        .css("position", "relative")
                        .attr("title", "MAJ: " + this.utils.getDateDiff(new Date(data.updateDate*1000), new Date()))
                        .append(
                            $("<div/>")
                            .css("height", "100%")
                            .css("width", Math.min(100, Math.round(pvMin/pvMax*100)) + "%")
                            .css("background-color", "#FF0000")
                        )
                        .append(
                            $("<div/>")
                            .css("height", "100%")
                            .css("width", "100%")
                            .css("color", "#000")
                            .css("font-size", "11px")
                            .css("text-align", "center")
                            .css("position", "absolute")
                            .css("top", "0")
                            .css("left", "0")
                            .text(pvMin != pvMax ? (pvMin + " / " + pvMax) : '')
                        )
                    )
                    .append(
                        $("<div/>")
                        .css("float", "right")
                        .css("margin", "2px 0px")
                        .css("width", "30")
                        .css("height", "14")
                        .css("border", "1px solid black")
                        .css("border-right", "0px")
                        .css("background-color", "#FFF")
                        .css("position", "relative")
                        .attr("title", "DLA " + this.utils.formatTime(data.dla))
                        .append(
                            $("<div/>")
                            .css("height", "100%")
                            .css("width", Math.round(data.pa/6*100) + "%")
                            .css("background-color", "#000")
                        )
                        .append(
                            $("<div/>")
                            .css("height", "100%")
                            .css("width", "100%")
                            .css("color", "#999")
                            .css("font-size", "11px")
                            .css("text-align", "center")
                            .css("position", "absolute")
                            .css("top", "0")
                            .css("left", "0")
                            .text(data.pa + " PA")
                        )
                    )
                    ;
                }, this));

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

                    $("[data-monster-info='" + monsterId + "'] td:nth-child("+this.getColumnId("mh_vue_hidden_monstres", "Nom")+")").append(
                        $("<div/>")
                        .css("float", "right")
                        .css("margin", "2px 2px 2px 0px")
                        .css("width", "100")
                        .css("height", "14")
                        .css("border", "1px solid black")
                        .css("background-color", "#FFFFFF")
                        .css("position", "relative")
                        .attr("title",  "MAX: " + data.pvRange + " Pv / MAJ: " + this.utils.getDateDiff(new Date(data.cdmDate*1000), new Date()))
                        .append(
                            $("<div/>")
                            .css("height", "100%")
                            .css("width", (100-data.bless) + "%")
                            .css("background-color", "#FF0000")
                        )
                        .append(
                            $("<div/>")
                            .css("height", "100%")
                            .css("width", "100%")
                            .css("color", "#000")
                            .css("font-size", "11px")
                            .css("text-align", "center")
                            .css("position", "absolute")
                            .css("top", "0")
                            .css("left", "0")
                            .text((data.bless > 0 ? (pvActMin + "-" + pvActMax) : data.pvRange))
                        )
                    );
                }, this));

                // populate tags and start handling
                $.each(json.tags, $.proxy(function(key, tag){
                    key = key.split(";");
                    $("[data-tag-type='" + key[0] + "'][data-tag-id='" + key[1] + "']").prev()
                    .attr("title",  "Par " + tag.trollName + " le " + this.utils.formatTime(tag.date))
                    .text(tag.tag);
                }, this));
                this.handleTagEdition();
            },
            scope : this
        });
    }

});

var MH_Play_Play_menu = $.extend({}, MH_Page, {
    init : function(){
        Utils.setConf("login", $("input[name='ai_IdPJ']").val());

        $("<div/>")
        .css("position", "absolute")
        .css("top", "35px")
        .css("left", "35px")
        .append(
            $("<a/>")
            .css("margin", "5px")
            .css("color", "#ffffcc")
            .attr("href", "http://pharoz.net/MH/outil/")
            .attr("target", "KM_outil")
            .text("Outil")
        )
        .append("|")
            .css("color", "#ffffcc")
        .append(
            $("<a/>")
            .css("margin", "5px")
            .css("color", "#ffffcc")
            .attr("href", "http://pharoz.net/MH/forum/")
            .attr("target", "KM_forum")
            .text("Forum")
        )
        .append("|")
            .css("color", "#ffffcc")
        .append(
            $("<a/>")
            .css("margin", "5px")
            .css("color", "#ffffcc")
            .attr("href", "https://github.com/jswale/KFE/raw/master/src/KMHC.user.js")
            .text("MAJ")
        )
        .appendTo($("body"))
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

var MH_Lieux_Lieu_Description = $.extend({}, MH_Page, {
    init : function(){
    }
});

var Messagerie_MH_Messagerie = $.extend({}, MH_Page, {
    init : function() {
        if(document.location.search.match(/^\?cat=3/)) {
            var ti = $("input[name=Titre]"),
                ta = $("textarea[name='Message']"),
                bt = $("input[name='bsSend']"),
                pr = (function(bt) {
                  bt.closest( "tr" )
                  .after(
                    $("<tr>")
                      .addClass("mh_tdpage")
                    .append(
                      $("<td>")
                        .attr("colspan", 4)
                      .append(
                        $("<div>")
                          .attr("id", "preview")
                      )
                    )
                  );
                  return $('#preview');
                })(bt),
                render = function(from, to) {
                  to.html((function/*wordwrap*/(str, width, brk, cut){
                    brk = brk || '\n';
                    width = width || 75;
                    cut = cut || false;
                    if(!str)  return str;
                    var regex = '.{0,' + width + '}(\\s|$)' + (cut ? '|.{' + width + '}|.+$' : '|\\S+?(\\s|$)');
                    return str.match(RegExp(regex, 'g')).join(brk);
                  })(from.val(), 75, '<br/>'));
                },
                enclose = function(ta, ts, te) {
                  var beg = ta[0].selectionStart,
                      end = ta[0].selectionEnd,
                      sel = ta.val().substring(beg, end) || "copier le texte ici";
                  ta.val(ta.val().substring(0, beg) + ts + sel + te + ta.val().substring(end, ta.val().length));
                  ta.trigger("change");
                };
            bt.parent().append("&nbsp;&nbsp;&nbsp;");
            $.each([
                ["Citer",
                function() {
                    var reply = Utils.getValue('lastReply');
                    if(reply) {
                        reply = '> ' + reply.replace(/<br\/?>/gm, '\n> ');
                        ta.val(reply);
                    }
                }],
                ["Mémo.", function() { Utils.setValue('savedMsg', ta.val()); Utils.setValue('savedTitle', ti.val()); }],
                ["Rappel", function() { ta.val(Utils.getValue('savedMsg')); ti.val(Utils.getValue('savedTitle')); }],
                ["G", function() { enclose(ta, "<b>", "</b>"); }],
                ["I", function() { enclose(ta, "<i>", "</i>"); }],
                ["S", function() { enclose(ta, "<u>", "</u>"); }],
                ["Quote", function() { enclose(ta, "<fieldset><legend></legend>", "</fieldset>"); }],
                ["Trõlldûctéûr",
                function() {
                    ta.val(
                        ta.val()
                        .replace(/°*y°*/g, '°y°')
                        .replace(/a/g, 'à').replace(/e/g, 'é').replace(/i/g, 'ï').replace(/o/g, 'õ').replace(/u/g, 'û')
                        .replace(/A/g, 'À').replace(/E/g, 'É').replace(/I/g, 'Ï').replace(/O/g, 'Õ').replace(/U/g, 'Û')
                    );
                    ta.trigger("change");
                }]], $.proxy(function(i, e) {
                    bt.parent().append(this.mhButton(e[0], e[1])).append(" ");
                }, this));
            ta.on('keyup change', function(e) { render($(this), pr); });
            ti.val(function(i, v) {
              if(v){
                  var re1 = /Re\s*:\s*/ig,
                      n = (v.match(re1) || []).length,
                      re2 = /Re\s*\(\d+\)\s*:\s*/ig;
                  n += (function() {
                      var p = 0,
                          a = (v.match(re2) || []).join().match(/\d+/g);
                      for(var i = 0; i < a.length; ++i) p += 1 * a[i];
                      return p; })();
                  v = v.replace(re1, '').replace(re2, '').replace(/^\s+/g,'');
                  var t = v.match(/^\[.*\]\s?/);
                  v = ((n > 1) ? ("Re(" + n + ") : ") : "Re : ") + v;
                  if(t) v = t + v.replace(t, '');
              }
              return v;
            });
        }
    }
});

var Messagerie_ViewMessage = $.extend({}, MH_Page, {
    init : function() {
        $("input[name='bAnswer'],input[name='bAnswerToAll']").on('click', function(e) {
            var reply = $($(this).closest('tr').prev().children()[0]).html();
            Utils.setValue('lastReply', reply);
        });
    }
});

var MH_Play_Play_action = $.extend({}, MH_Page, {
    init : function() {
        $('select').find('optgroup').each(function(){
            if($(this).prop('label') == "** Actions Spéciales **") {
              $(this).css("background-color", "#99CCFF");
              $(this).parent().css("background-color", "#99CCFF");
            }
        });
    }
});

var MH_Play_Liste_Vente_ListeVente_view = $.extend({}, MH_Page, {
    init : function() {
        var img = $("<img src='/mountyhall/Images/fleche_bas.gif' alt='v'>")
            .appendTo($("form[name='VenteForm'] table:first table:first td:first"))
            .on('mouseover', function() { $(this).css("cursor", "pointer"); })
            .on('click', function() {
                var cbs = $(this).parents('tbody').find("input[type='checkbox']");
                cbs.prop("checked", ! cbs.prop("checked"));
            });
    }
});

$(document).ready(function() {
    // Initialisation de la configuration
    Utils.initConfig();

    // Chargement du module spécifique
    var pathname = document.location.pathname;
    var moduleName = pathname.replace(/\/mountyhall\/(.*).php.*$/, "$1").replace(/\//g, "_");
    console.log("Searching for module " + moduleName + " by URL " + pathname);

    var module;
    try {
        module = eval(moduleName);
    } catch(e) {}

    if(Utils.isUndefined(typeof module)) {
        console.log("Unable to find the module " + moduleName + " for URL " + pathname);
    } else {
        module.load();
    }
});
