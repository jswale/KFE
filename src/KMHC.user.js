// ==UserScript==
// @name          KFE
// @namespace     pharoz.net
// @version       0.0.32-11
// @description   Pharoz.net MH Connector
// @match         http://games.mountyhall.com/*
// @require       http://code.jquery.com/jquery-2.1.0.min.js
// @downloadURL   https://github.com/jswale/KFE/raw/master/src/KMHC.user.js
// @updateURL     https://github.com/jswale/KFE/raw/master/src/KMHC.meta.js
// @grant         GM_addStyle
// @copyright     2014+, Miltown, Grul & disciple
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAUDBQwKBxQKBBwKEBkTBBwaJCQUBCQcCS4cBzASBDwWBDIeGCQGJDweLCwjETQkDjQqFDw0HDQqNDw2NEAeFEAlCkIsCkElF0EsFkwpEUwuHEQzFkw0ElwtH1w6BFQ1EVM8FVw5F14+GEEqLEwiNEE1J0wzLE88LFgsNFQzKV40Jl88KWw+HGQzN2E7N2w2NEQ+THA+QFRDIFZELFxCIFxKJFxNMl9VP2dEGmRLGXRLF2dEKWhMJ2ZENGdNOmJSLmxUK2xXP3RKLHdMP3BeKHdaL3pUInRfOnhVMWRaRGheSH9FR3dVQ3ZaQHReRnRmTHxhRn9pV39xZ4A8RIRMOIRXKYxWJIxfJ4xaPIBgKYFgNoNnNY9oMY1pPoRwNJBhNpFvPZxvPpxwMpx3P6RsOKRyPKR4O4RNSIxGVJBSRJZYT4NnRo9gRIRiVIxiXIRwR45wToRwVIR2WJBnTpxnRJR4QJx+RJJ4U5R+VJxwVpx9UIxqYIxyZI94YZJ+YJx+YpR+cKluSad6T6d+T6l+Qax6QLRuTLR+QLR6XKR4YKR+bJ+FObCEO52DXYyCZJCEbJyKfKOESqGNX6yFWK+MXbKER7GMSbyDRryNR7SFXLyLWbyTT7SUXbyaVKGDcayUYK6QbqSRda+YeLSaZLyWYbyZb7efd7ySfLqgZrymcMSRQcSRT8SXTcyXTMufU8maXMeVY9ShW9imX8agbcugYMyqbMSmfsimccqsf9ambNSrZdytZtSseNyybNyweOC3dey+f4yOnJSGiKyKhKyYiLSSlLCgiLSmjLylibSqlLasnryskLyyqLy2xMSihMWskc+0gceyl8i2mNS4k9S+mNy5ksi5psq+ptS8qNy+tOS+gOC+lNzClMzCrNTEp9TKrN/Eo9jFt9rMtuTEjOzDi/DLlPzKnPTVmuDLqO7NqOTOtuzSoePTuvDVsPvdtPzevPzisOTaw+zUwe/cwu3dzeTa1Pbjw/TmzPzmzvzuxPvr1Pzy2fz35/z+9AAAAEG26sQAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAAGHRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjOM5pdQAAAGpElEQVRIS3WVD1wT5xnHwdUVWjacW9XQ4Ay6mipqV4MYyRlgeJBVtGrrXBKoiXRxBWxo1WXEqRXoulbSDUkiGqZAhVlJAiFX/oSYuI6mTLryJzUytTQ5SE0woHAsSd9j7EISTJT9Pnef5O6e7+d9nz/v80TMzKcJ4vZ6/f8f0byA2+QBAJsMPIVrPgC4unFsEP0POgoCb+YEwHyAt6fO9hWGT0+jk48QwNUzD4D3J4lu251O5323wxN45xcY+jP2OIBbSBKjpvl8/Q3tLac1ZAkAHNwB/DEAR2lS7YEDfHaaBBbobwQIL/EzeYNXiz/qNHCPMivfTaGvjIshQXACz9DqIqJLhMxhba/IvEDsMAwAU66b74jY8fE02s6XxLxqmCI3mKe9k6OD7cPVXHqWi1gnDJhAMeeO5zZGXXca9H36yuqa+N9ViD4UVUjlytPbIFENRtiEAhiKtZftQKVv3Ws8myNuq79YKTpDid4k5qZx2XDq7z/q9cUsFEBd7Tnxe77LO26WSYUFJ0XaUvFRFpmzS1TfWl8i7euz+QIQCngGoGcXbn5Qmd4ugeITV1MvZm08mgtxahrqilrtw87BKZ9RuA806o+//3bq5peTf/LzPSTG0qjVUAJLUl0vhaX3xlB0NsJhgGtVDHUXPTryiU//9feXYkm7agqfYRZIeq3adgxDv/HbhAL48Zi64Za9UYvWrGEyIRhyOHjiHSdQYL73wG2Z8GcwFAA26pC9hU1axjiULhR1s3giWFtd5PgcM1swy1zhhgKmz+82yzctJtcWFTR0pwspDL09Ncssue29iWFB+1AAN7VpK7kbY6Ph9LdS02tEsUkNPTRR20AtioGHp+8hgHc9ly7kMVY9sWzFy5bS/SIJZ8ni2B9JHA6LryLmNAeAgRN1EmHiD3+wujY5Op7COipnc5PJ5LQTJhBqPwcAy8d3jTr51lXH+h4c/+lpYZ4MptRB2hK4ogEPO0UBALi67C1NVQJ+cycy3MC+XCfN48HiZO5eurTPn7CggoBpuFOlbGxENE2I/njMSs4+saQoOyq1Gkq73D7PCvjN1hG1SqVSNjUXM0kLnqSXCugwi0rKkm6BOdqw5uEHQJdV5wNapBsWREZGbuTw8pI4/ByYDlfwc5tNjwHeyW57CwF0Nq+JjFwYtZDGgOvTuI1yAb/k/JH89485QohZAPx70K5TqzsNGd9bsGjRCgqtIO6AXNGmVZz9Y/5vX3yzuAaftZ1VALDZr3Yavn1/2ZMMiJ7CyTpDl6k62trUZ0/lv5KRnlHY+7DR+oH+HvzuvfG/rSdlCtj7c3icPq5cqdFfrpadyj+YuPPF7X/qm8u2H3Blf2azntwaBwnKeILSbtbFitN/RZDLFysOH8zftfXgkcYRR7D8ZoEZ0Lth/dq1MYvS+GV5PGl3Lixmy5s6Pvm44kj+YeHWQuSWEwumzw98d/PCH06KukzUndvgJEkuFyqAfoMYblsr39jOpK4vREbGgCuQPj/g6f3HByezPzicben5cHMydSmZxeLpjE5n9ivPpzNfKOkYGQdfYziOE67PAtO2C8UU8tIV8UuSsk7Umfp3xybmZiLG+wOJr65//mcZMt3I2HQtaefuWsIRHzBt2XMoDuKWyWT8fSkUyqYzPe8sZaXIDO6eTH7hwe2vNiFGO/72U8uXr81GfQMFdJGfSYK1ROY0KqWy/LUt8TuOQfp1ZYZxS+6l+uJzJUqdcWScxsjPf2P5bgIAJg68hDncqfQVn1KtuVKembghtyRFph9zceq1JeebEN1Ve83KPNmpvUUOEOEZ7dX/KmHgLqJUNaqUGm0rckWw8hfbEnhKg9OTxZFfamrp0F2tZu2vUr7OHyJ88Ixixl8Lh+7riNNwRYm0tSLKqn3wFnY5MuL97y9JcJ5coZALeLz3zr5e4psuEa5Dfbc4wtfM9mvGlsYqRUcH0qQSHJCX6+xW9PpiMo2Tk1dWXi57793SL2eTHdHPWsfJTYQozALxJY1GTVxqZXl5y1V9EZVMToI4ZQo1olYotOZAbUTMuBrERQlLoqOfejqOUXyuqpHYgEDxyY3eAfQbq9V6x2y+fcfhwnxDLgAAAMa+6v4L81wZn7WOkcFicY5+dAfz4tM4Tnxye9xTYX1mNtNegIOucWOnRrY/Ey6oG5xwT019gdps6KjLHdYBCPlricjeP4fG7deuIdKGUa9vcExd//QLFO1/2FODCgJet8VC7Hhg0BM0mQDA65uCjygIENuasKFE2w08/h/NzPwPOHaIyvrbq40AAAAASUVORK5CYII=
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

        convertDate : function(date) {
            return new Date(date.replace(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+):(\d+)/, "$2/$1/$3 $4:$5:$6"));
        },

        io2 : function(i) {
            return (i < 10 ? "0" : "") + i;
        },

        sign : function(i) {
            return (i >=0 ? '+' : '') + i;
        },

        getPortee : function(param) {
            return Math.ceil( Math.sqrt( 2*param+10.75 )-3.5 );
            // ça devrait être floor, +10.25, -2.5
        },

        resiste : function(ddeg,bm) {
            // version naive mais compréhensible ^^
            if(!bm) return Math.floor(ddeg);
            return Math.floor(ddeg)+Math.round(bm/2);
        },

        addS : function(i) {
            return i>1 ? 's' : '';
        },

        dateToString : function(d) {
            return [ this.io2(d.getDate()), this.io2(d.getMonth() + 1), this.io2(d.getFullYear()) ].join('/') + ' '
                + [ this.io2(d.getHours()), this.io2(d.getMinutes()), this.io2(d.getSeconds()) ].join(':');
        },

        formatTime : function(time) {
            return this.dateToString(new Date(time * 1000));
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

var MH_Play_Play_news = $.extend({}, MH_Page, {

    init : function() {
        this.jubilaire();
    },

    jubilaire : function() {
        $.get("http://mountyzilla.tilk.info/scripts/anniv.php",
            function(data) {
                var p = $($("p > a:contains('messagerie')")[0]).parent();
                console.log("'p'", p);
                p.before($("<table/>")
                    .addClass("mh_tdborder")
                    .attr("cellSpacing", 1)
                    .attr("cellPadding", 1)
                    .css({"maxWidth": "98%",
                          "marginLeft": "auto",
                          "marginRight": "auto"
                        })
                    .append($("<tr/>")
                        .addClass("mh_tdtitre")
                        .append($("<td/>")
                            .append($("<span/>")
                                .attr("title", "Envoyez leur un message ou un cadeau !")
                                .text("Les Trõlls qui fêtent leur anniversaire aujourd'hui:")
                            )
                        )
                    )
                    .append($("<tr/>")
                        .addClass("mh_tdpage")
                        .append($("<td/>")
                            .css("text-align", "center")
                            .append($("<small/>")
                                .html((function(list){
                                    if(!list || list.length == 0) return "...";
                                    var text = [],
                                        trolls = list.split("\n");
                                    $.each(trolls, function(i, t) {
                                        var r = t.split(";");
                                        if(r.length != 3 || r[2] === '0') return;
                                        text.push("<a href='javascript:EPV(" + r[0] +")'>" + r[1] + "</a> (" + r[2] + " an" + Utils.addS(r[2]) + ")");
                                    });
                                    return text.join(", ");
                                })(data))
                            )
                        )
                    )
                );
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
                var tmp = /Vous avez créé un Portail de Téléportation\s*\((\d+)\).*Il (conduit en[^\.]*)/.exec(result);
                // Appel de l'API
                this.callAPIConnected({
                    api : "tag",
                    data : {
                        "type" : 5,
                        "num" : tmp[1],
                        "tag" : tmp[2]
                    }
                });
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
        var tmp = /Point de Vie Actuels............: (\d+) Maximum.........: (\d+)\s?([+-]\d+)? Fatigue............: (.*) \( (\d+)\s?([+-]\d+)? \)/.exec(text);
        stats.hp = {
            current : parseInt(tmp[1]),
            max : {
                value : parseInt(tmp[2]),
                bonus : (tmp[3] ? parseInt(tmp[3]) : 0)
            },
            fatigue : {
                display : tmp[4],
                value : parseInt(tmp[5]),
                bm : (tmp[6] ? parseInt(tmp[6]) : 0)
            }
        };

        // Caracs
        var text = getText(6);
        var tmp = /Caractéristiques Régénération.....: (\d+) D3 ([+-]\d+) ([+-]\d+) Attaque............: (\d+) D6 ([+-]\d+) ([+-]\d+) Esquive.............: (\d+) D6 ([+-]\d+) ([+-]\d+) Dégâts..............: (\d+) D3 ([+-]\d+) ([+-]\d+) Armure.............: (\d+) D3 ([+-]\d+) ([+-]\d+) Caractéristiques Déduites :-Corpulence.....: (\d+)points- Agilité.............: (\d+)points/.exec(text);
        stats.regen = {
            des : parseInt(tmp[1]),
            physique : parseInt(tmp[2]),
            magique : parseInt(tmp[3])
        };
        stats.attaque = {
            des : parseInt(tmp[4]),
            physique : parseInt(tmp[5]),
            magique : parseInt(tmp[6])
        };
        stats.esquive = {
            des : parseInt(tmp[7]),
            physique : parseInt(tmp[8]),
            magique : parseInt(tmp[9])
        };
        stats.degat = {
            des : parseInt(tmp[10]) ,
            physique : parseInt(tmp[11]),
            magique : parseInt(tmp[12])
        };
        stats.armure = {
            des : parseInt(tmp[13]),
            physique : parseInt(tmp[14]),
            magique : parseInt(tmp[15])
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

        // Computed
        stats.dla.duration.normal.total = stats.dla.duration.normal.hour * 60 + stats.dla.duration.normal.min;
        stats.dla.duration.bonus.total = stats.dla.duration.bonus.hour * 60 + stats.dla.duration.bonus.min;
        stats.dla.duration.injuries.total = stats.dla.duration.injuries.hour * 60 + stats.dla.duration.injuries.min;
        stats.dla.duration.stuf.total = stats.dla.duration.stuf.hour * 60 + stats.dla.duration.stuf.min;
        stats.dla.duration.total.total = stats.dla.duration.total.hour * 60 + stats.dla.duration.total.min;

        stats.hp.fatigue.total = stats.hp.fatigue.value + stats.hp.fatigue.bm;

        stats.view.total = stats.view.range + stats.view.bonus;

        stats.hp.max.total = stats.hp.max.value + stats.hp.max.bonus;

        stats.attaque.bm = stats.attaque.physique + stats.attaque.magique;
        stats.degat.bm   = stats.degat.physique + stats.degat.magique;
        stats.esquive.bm = stats.esquive.physique + stats.esquive.magique;

        stats.attaque.desReel = Math.max(stats.attaque.des - stats.roundMalus.attaque, 0);
        stats.esquive.desReel = Math.max(stats.esquive.des - stats.roundMalus.esquive, 0);
        stats.armure.desReel = Math.max(stats.armure.des - stats.roundMalus.armure, 0);
        stats.degat.desReel = stats.degat.des;

        stats.attaque.moy = 3.5 * stats.attaque.desReel + stats.attaque.bm;
        stats.degat.moy = 2 * stats.degat.desReel + stats.degat.bm;

        return stats;
    },

    tuneIHM : function() {
        var stats = this.getStats();

        var getContainer = function(id) {
            return $("table.mh_tdborder:first > tbody > tr:nth-child(" + id + ") > td:nth-child(2)");
        };

        // Echéance du Tour
        {
            var ctn = getContainer(2);
            var nextDla = Utils.convertDate(stats.dla.next);
            for(i = 1 ; i < 3 ; i++) {
                nextDla.setHours(nextDla.getHours() + stats.dla.duration.total.hour);
                nextDla.setMinutes(nextDla.getMinutes() + stats.dla.duration.total.min);
                ctn.find("p").last().append("<br/>").append($("<b/>").text("---> Prochaine DLA " + i + " (estimée)..........: " + Utils.dateToString(nextDla)));
            }
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

            var pvmax = stats.hp.max.total;

            ctn.find("table table tr td img").attr("title", '1 PV de perdu = +'+Math.floor(250 / pvmax) +' min ' + (Math.floor(15000/pvmax)%60) + ' sec');

            // Différence PV p/r à équilibre de temps (propale R')
            if(stats.hp.current > 0) {
                var bmt = stats.dla.duration.bonus.total;
                var pdm = stats.dla.duration.stuf.total;
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

        // Caracs
        {
            var ctn = getContainer(6),
                caracs = [
                [
                    stats.regen.des * 2   + stats.regen.physique + stats.regen.magique,
                    stats.regen.des       + stats.regen.physique + stats.regen.magique,
                    stats.regen.des * 3   + stats.regen.physique + stats.regen.magique
                ],
                [
                    stats.attaque.moy,
                    stats.attaque.desReel       + stats.attaque.bm,
                    stats.attaque.desReel * 6   + stats.attaque.bm,
                    stats.attaque.desReel * 3.5 + stats.attaque.magique,
                    stats.attaque.desReel       + stats.attaque.magique,
                    stats.attaque.desReel * 6   + stats.attaque.magique
                ],
                [
                    stats.esquive.desReel * 3.5 + stats.esquive.physique + stats.esquive.magique,
                    stats.esquive.desReel       + stats.esquive.physique + stats.esquive.magique,
                    stats.esquive.desReel * 6   + stats.esquive.physique + stats.esquive.magique
                ],
                [
                    stats.degat.moy,
                    stats.degat.des     + stats.degat.bm,
                    stats.degat.des * 3 + stats.degat.bm,
                    stats.degat.des * 2 + stats.degat.magique,
                    stats.degat.des     + stats.degat.magique,
                    stats.degat.des * 3 + stats.degat.magique
                ],
                [
                    stats.armure.desReel * 2 + stats.armure.physique + stats.armure.magique,
                    stats.armure.desReel     + stats.armure.physique + stats.armure.magique,
                    stats.armure.desReel * 3 + stats.armure.physique + stats.armure.magique,
                    stats.armure.desReel * 2 + stats.armure.magique,
                    stats.armure.desReel     + stats.armure.magique,
                    stats.armure.desReel * 3 + stats.armure.magique
                ]
            ];
            $.each(caracs, function(i, v) {
                var row = ctn.find("table tr:nth-child(" + (i + 1) + ")");
                if(i == 0) {
                    row.append(
                        $("<td/>")
                        .attr("rowspan", caracs.length)
                        .attr("width", "40")
                        .attr("align", "center")
                        .append("=&gt;"));
                }
                row.append(
                    $("<td/>")
                    .attr("width", "30")
                    .attr("align", "right")
                    .append(v[0]))
                .append(
                    $("<td/>")
                    .attr("align", "left")
                    .append("&nbsp;[ " + v[1] + " - " + v[2] + " ]")
                );
                if(v.length > 3) {
                    row.append(
                        $("<td/>")
                        .attr("width", "30")
                        .attr("align", "right")
                        .append(v[3]))
                    .append(
                        $("<td/>")
                        .attr("align", "left")
                        .append("&nbsp;[ " + v[4] + " - " + v[5] + " ]")
                    );
                } else {
                    row.append("<td/>").append("<td/>");
                }
            });
            ctn.find("table tr:first").before($("<tr/>")
                .append("<td/>").append("<td/>").append("<td/>").append("<td/>").append("<td/>")
                .append($("<td/>").append("<b>Physique</b>")
                                  .attr("colspan", 2)
                                  .attr("align", "center"))
                .append($("<td/>").append("<b>Magique</b>")
                                  .attr("colspan", 2)
                                  .attr("align", "center"))
            );

            var stabilite_des = Math.floor(2 * (stats.esquive.des + stats.regen.des) / 3),
                stabilite_bonus = stats.esquive.physique + stats.esquive.magique;
            ctn.find("p").last()
            .append("<br/>")
            .append("- Stabilité..........: " + stabilite_des + ' D6 ' + (function(v) { return (v >= 0 ? "+" : "-") + v; })(stabilite_bonus)
                + " => " + (3.5 * stabilite_des + stabilite_bonus)
                + " ( " + (stabilite_des + stabilite_bonus)
                + " - " + (stabilite_des * 6 + stabilite_bonus) + " )");
        }

        // MM/RM
        {
            var ctn = getContainer(10);
            var rmmax = stats.magie.rm.value + stats.magie.rm.bonus;
            var mmmax = stats.magie.mm.value + stats.magie.mm.bonus;
            ctn.html(ctn.html().replace(/(Résistance[^<]+)/, "$1 (" + rmmax + ")")
                               .replace(/(Maîtrise[^<]+)/, "$1 (" + mmmax + ")"));
        }

        var database = {
            "Comp" : {
                1  : {
                    name : "Botte Secrète",
                    description : function(stats) {
                        var att = stats.attaque.desReel;
                        var attbm = stats.attaque.bm;
                        var degbm = stats.degat.bm;
                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Attaque :"))
                            .append($("<td/>").html("<b>" + Math.floor(2*att/3) + "</b> D6"))
                            .append($("<td/>").html(Utils.sign(Math.floor(attbm/2))))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").html("<b>" + Math.round(3.5*Math.floor(2*att/3)+Math.floor(attbm/2)) +"</b>"))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Dégâts :"))
                            .append($("<td/>").html("<b>" + Math.floor(att/2) + "</b> D3"))
                            .append($("<td/>").html(Utils.sign(Math.floor(degbm/2))))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").html("<b>" + (2*Math.floor(att/2)+Math.floor(degbm/2)) + '/' + (2*Math.floor(1.5*Math.floor(att/2))+Math.floor(degbm/2)) +"</b>"))
                        );
                        return ctn;
                    }
                },
                2  : {
                    name : "Régénération Accrue",
                    description : function(stats) {
                        var pvmax = stats.hp.max.total;

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Régénération :"))
                            .append($("<td/>").html("<b>" + Math.floor(pvmax/15) + "</b> D3"))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").html("<b>" + 2*Math.floor(pvmax/15) +"</b> PV"))
                        );
                        return ctn;
                    }
                },
                3  : {
                    name : "Accélération du Métabolisme",
                    description : function(stats) {
                        var fatig = stats.hp.fatigue.value;
                        var fatigtotal = stats.hp.fatigue.total;
                        var minParPV = fatigtotal > 4 ? Math.floor(120/( fatigtotal*(1+Math.floor(fatigtotal/10)) )) : 30;

                        var ctn = $("<div/>");
                        ctn.append("<b>1</b> PV = <b>" + minParPV + "</b> minute" + Utils.addS(minParPV));
                        return ctn;
                    }
                },
                4 : {
                    name : "Camouflage",
                    description : function(stats, levels) {
                        var camou = levels[1];

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<td/>").attr("colspan", 2).html("Pour conserver son camouflage, il faut réussir un jet sous :"))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Déplacement :"))
                            .append($("<td/>").html(Math.floor(0.75*camou) + "%"))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Attaque :"))
                            .append($("<td/>").html("perte automatique"))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Projectile Magique :"))
                            .append($("<td/>").html(Math.floor(0.25*camou) + "%"))
                        );
                        return ctn;
                    }
                },
                5  : {
                    name : "Identification des Champignons",
                    description : function(stats) {
                        var vuetotale = stats.view.total;
                        var viewH = Math.ceil(vuetotale / 2);
                        var viewV = Math.ceil(vuetotale / 4);

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").html("<b>" + viewH + "</b> cases" + Utils.addS(viewH)))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").html("<b>" + viewV + "</b> cases" + Utils.addS(viewV)))
                        );
                        return ctn;
                    }
                },
                6 : {
                    name : "Balayage",
                    description : function(stats) {
                        var att = stats.attaque.desReel;
                        var attbm = stats.attaque.bm;

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<td/>").attr("colspan", 5).html("<u>Effet</u> : Met à terre l'adversaire"))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Déstabilisation :"))
                            .append($("<td/>").html("<b>" + att + "</b> D6"))
                            .append($("<td/>").html(Utils.sign(attbm)))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").html("<b>" + (Math.round(3.5*att)+attbm) +"</b>"))
                        );
                        return ctn;
                    }
                },
                7  : {
                    name : "Frénésie",
                    description : function(stats) {
                        var att = stats.attaque.desReel;
                        var attbm = stats.attaque.bm;
                        var attmoy = stats.attaque.moy;

                        var deg = stats.degat.desReel;
                        var degbm = stats.degat.bm;
                        var degmoy = stats.degat.moy;

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Attaque :"))
                            .append($("<td/>").html("<b>" + Math.floor(att) + "</b> D6"))
                            .append($("<td/>").html(Utils.sign(attbm)))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").html("<b>" + attmoy +"</b>"))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Dégâts :"))
                            .append($("<td/>").html("<b>" + deg + "</b> D3"))
                            .append($("<td/>").html(Utils.sign(degbm)))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").html("<b>" + degmoy + '/' + (degmoy+2*Math.floor(deg/2)) +"</b>"))
                        );
                        return ctn;
                    }
                },
                8  : {
                    name : "Coup de Butoir",
                    description : function(stats, levels) {
                        var att = stats.attaque.desReel;
                        var attbm = stats.attaque.bm;
                        var attmoy = stats.attaque.moy;

                        var deg = stats.degat.desReel;
                        var degbm = stats.degat.bm;
                        var degmoy = stats.degat.moy;

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Attaque :"))
                            .append($("<td/>").html("<b>" + Math.floor(att) + "</b> D6"))
                            .append($("<td/>").html(Utils.sign(attbm)))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").html("<b>" + attmoy +"</b>"))
                        );

                        var pc, lastmax=0, espdeg=0;
                        var notMaxedOut = false;
                        var niveau = levels.length - 1;
                        for(var i= Math.min(niveau, 6) ; i>0 ; i--) {
                            pc = levels[i] || 0;
                            if(lastmax!=0 && pc<=lastmax) continue;

                            var jetdeg = 2*Math.min(Math.floor(1.5*deg),deg+3*i)+degbm;
                            ctn.append(
                                $("<tr/>")
                                .append($("<th/>").html("Dégâts (niveau " + i + " : " + pc + "%) :"))
                                .append($("<td/>").html("<b>" + Math.min(Math.floor(deg * 1.5),deg+3 * i) + "</b> D6"))
                                .append($("<td/>").html(Utils.sign(degbm)))
                                .append($("<td/>").html(" => "))
                                .append($("<td/>").html("<b>" + jetdeg + '/' + (jetdeg+2*Math.floor(deg/2)) +"</b>"))
                            );
                            if(i<=niveau) {
                                espdeg += (pc-lastmax)*jetdeg;
                                if(i<niveau) notMaxedOut = true;
                            }
                            lastmax = pc;
                        }
                        if(notMaxedOut) {
                            ctn.append(
                                $("<tr/>")
                                .append($("<th/>").html("Dégâts moyens (si réussite) :"))
                                .append($("<td/>").attr("colspan", "4").html("<b>" + Math.floor(10*espdeg/lastmax)/10 + '/' + (Math.floor(10*espdeg/lastmax)/10+2*Math.floor(deg/2)) + "</b>"))
                            );
                        }
                        return ctn;
                    }
                },
                9  : {
                    name : "Attaque Précise",
                    description : function(stats, levels) {
                        var att = stats.attaque.desReel;
                        var attbm = stats.attaque.bm;
                        var attmoy = stats.attaque.moy;

                        var deg = stats.degat.desReel;
                        var degbm = stats.degat.bm;
                        var degmoy = stats.degat.moy;

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Attaque :"))
                            .append($("<td/>").html("<b>" + Math.floor(att) + "</b> D6"))
                            .append($("<td/>").html(Utils.sign(attbm)))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").html("<b>" + attmoy +"</b>"))
                        );

                        var pc, lastmax=0, espatt=0;
                        var notMaxedOut = false;
                        var niveau = levels.length - 1;
                        for(var i= Math.min(niveau, 5) ; i>0 ; i--) {
                            pc = levels[i] || 0;
                            if(lastmax!=0 && pc<=lastmax) continue;

                            var jetatt = Math.round(3.5*Math.min(Math.floor(1.5*att),att+3*i))+attbm;
                            ctn.append(
                                $("<tr/>")
                                .append($("<th/>").html("Attaque (niveau " + i + " : " + pc + "%) :"))
                                .append($("<td/>").html("<b>" + Math.min(Math.floor(att*1.5),att+3*i) + "</b> D6"))
                                .append($("<td/>").html(Utils.sign(attbm)))
                                .append($("<td/>").html(" => "))
                                .append($("<td/>").html("<b>" + jetatt +"</b>"))
                            );
                            if(i<=niveau) {
                                espatt += (pc-lastmax)*jetatt;
                                if(i<niveau) notMaxedOut = true;
                            }
                            lastmax = pc;
                        }
                        if(notMaxedOut) {
                            ctn.append(
                                $("<tr/>")
                                .append($("<th/>").html("Attaque moyenne (si réussite) :"))
                                .append($("<td/>").attr("colspan", "4").html("<b>" +Math.floor(10*espatt/lastmax)/10 + "</b>"))
                            );
                        }
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Dégâts :"))
                            .append($("<td/>").html("<b>" + deg + "</b> D3"))
                            .append($("<td/>").html(Utils.sign(degbm)))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").html("<b>" + degmoy + '/' + (degmoy+2*Math.floor(deg/2)) + "</b>"))
                        );

                        return ctn;
                    }
                },
                10 : {
                    name : "Parer",
                    description : function(stats) {
                        var att = stats.attaque.desReel;
                        var attbm = stats.attaque.bm;
                        var esq = stats.esquive.desReel;
                        var esqbm = stats.esquive.bm;

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Jet de parade :"))
                            .append($("<td/>").html("<b>" + Math.floor(att/2) + "</b> D6"))
                            .append($("<td/>").html(Utils.sign(Math.floor(attbm/2))))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").html("<b>" + (Math.round(3.5*Math.floor(att/2)+Math.floor(attbm/2))) +"</b>"))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Equivalent esquive :"))
                            .append($("<td/>").html("<b>" + (Math.floor(att/2)+esq) + "</b> D6"))
                            .append($("<td/>").html(Utils.sign(Math.floor(attbm/2)+esqbm)))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").html("<b>" + (Math.round(3.5*(Math.floor(att/2)+esq)+Math.floor(attbm/2))+esqbm) +"</b>"))
                        );
                        return ctn;
                    }
                },
                11 : {
                    name : "Contre-Attaquer",
                    description : function(stats) {
                        var att = stats.attaque.desReel;
                        var attbm = stats.attaque.bm;
                        var deg = stats.degat.desReel;
                        var degbm = stats.degat.bm;
                        var degmoy = stats.degat.moy;

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("'Attaque :"))
                            .append($("<td/>").html("<b>" + Math.floor(att/2) + "</b> D6"))
                            .append($("<td/>").html(Utils.sign(Math.floor(attbm/2))))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").html("<b>" + (Math.round(3.5*Math.floor(att/2)+Math.floor(attbm/2))) +"</b>"))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Dégâts :"))
                            .append($("<td/>").html("<b>" + deg + "</b> D3"))
                            .append($("<td/>").html(Utils.sign(degbm)))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").html("<b>" + degmoy + "/" + (degmoy+2*Math.floor(deg/2)) +"</b>"))
                        );
                        return ctn;
                    }
                },
                12 : {
                    name : "Déplacement Eclair",
                    description : "Permet d'économiser <b>1</b> PA par rapport au déplacement classique"
                },
                14 : {
                    name : "Charger",
                    description : function(stats) {
                        var pv = stats.hp.current;
                        if(pv <=0 ) {
                            return $("<div/>").append("Vous ne pouvez charger personne... Vous êtes mort !");
                        } else {
                            var reg = stats.regen.des;
                            var fatigue = stats.hp.fatigue.total;
                            var vuetotale = stats.view.total;
                            var portee = Math.min(Utils.getPortee(reg+Math.floor(pv/10))-Math.floor((fatigue)/5), vuetotale);

                            if(portee < 1) {
                                return $("<div/>").append("Impossible de charger !");
                            } else {
                                var att = stats.attaque.desReel;
                                var attbm = stats.attaque.bm;
                                var attmoy = stats.attaque.moy;
                                var deg = stats.degat.des;
                                var degbm = stats.degat.bm;
                                var degmoy = stats.degat.moy;

                                var ctn = $("<table/>");

                                ctn.append(
                                    $("<tr/>")
                                    .append($("<th/>").html("Attaque :"))
                                    .append($("<td/>").html("<b>" + att + "</b> D6"))
                                    .append($("<td/>").html(Utils.sign(attbm)))
                                    .append($("<td/>").html(" => "))
                                    .append($("<td/>").html("<b>" + attmoy +"</b>"))
                                );
                                ctn.append(
                                    $("<tr/>")
                                    .append($("<th/>").html("Dégâts :"))
                                    .append($("<td/>").html("<b>" + deg + "</b> D3"))
                                    .append($("<td/>").html(Utils.sign(degbm)))
                                    .append($("<td/>").html(" => "))
                                    .append($("<td/>").html("<b>" + degmoy + "/" + (degmoy+2*Math.floor(deg/2)) +"</b>"))
                                );
                                ctn.append(
                                    $("<tr/>")
                                    .append($("<th/>").html("Portée :"))
                                    .append($("<td/>").attr("colspan", 4).html("<b>" + portee + "</b> case" + Utils.addS(portee)))
                                );

                                return ctn;
                            }
                        }
                    }
                },
                15 : {
                    name : "Construire un piège",
                    description : function(stats, levels, actionName) {
                        var vue = stats.view.range;
                        var esq = stats.esquive.desReel;

                        if(actionName.indexOf('Glue') != -1) {
                            return $("<div/>").append("Et si vous colliez vos adversaires au sol ?");
                        }

                        var ctn = $("<table/>");
                        if(actionName.indexOf('Feu')!=-1) {
                            ctn.append(
                                $("<tr/>")
                                .append($("<td/>").attr("colspan", 4).html("Et si on faisait péter quelque chose ?"))
                            );
                            ctn.append(
                                $("<tr/>")
                                .append($("<th/>").html("Dégats du piège à feu :"))
                                .append($("<td/>").html("<b>" + Math.floor((esq+vue)/2) + "</b> D3"))
                                .append($("<td/>").html(" => "))
                                .append($("<td/>").html("<b>" + (2*Math.floor((esq+vue)/2)) + " (" + Utils.resiste((esq+vue)/2) + ")" +"</b>"))
                            );
                        }

                        return ctn;
                    }
                },
                16 : {
                    name : "Connaissance des Monstres",
                    description : function(stats) {
                        var vuetotale = stats.view.total;
                        var viewH = vuetotale;
                        var viewV = Math.ceil(vuetotale/2);

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").html("<b>" + viewH + "</b> case" + Utils.addS(viewH)))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").html("<b>" + viewV + "</b> case" + Utils.addS(viewV)))
                        );
                        return ctn;
                    }
                },
                17 : {
                    name : "Hurlement Effrayant",
                    description : "Fait fuir un monstre si tout se passe bien.<br/>Lui donne de gros bonus sinon..."
                },
                18 : {
                    name : "Insultes",
                    description : function(stats) {
                        var vuetotale = stats.view.total;
                        var portee = Math.min(vuetotale,1);

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").html("<b>" + portee + "</b> case" + Utils.addS(portee)))
                        );
                        return ctn;
                    }
                },
                19 : {
                    name : "Ecriture Magique",
                    description : "Réaliser la copie d'un sortilège après en avoir découvert la formule nécessite de réunir les composants de cette formule, d'obtenir un parchemin vierge sur lequel écrire, et de récupérer un champignon adéquat pour confectionner l'encre."
                },
                21 : {
                    name : "Pistage",
                    description : function(stats) {
                        var vuetotale = stats.view.total;
                        var viewH = 2 * vuetotale;
                        var viewV = 2 * Math.ceil(vuetotale/2);

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").html("<b>" + viewH + "</b> case" + Utils.addS(viewH)))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").html("<b>" + viewV + "</b> case" + Utils.addS(viewV)))
                        );
                        return ctn;
                    }
                },
                23 : {
                    name : "Lancer de potions",
                    description : function(stats) {
                        var vuetotale = stats.view.total;
                        var viewH = (2+Math.floor(vuetotale/5));

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").html("<b>" + viewH + "</b> case" + Utils.addS(viewH)))
                        );
                        return ctn;
                    }
                },
                24 : {
                    name : "Bidouille",
                    description : "Bidouiller un trésor permet de compléter le nom d'un objet de votre inventaire avec le texte de votre choix."
                },
                25 : {
                    name : "Mélange Magique",
                    description : "Cette Compétence permet de combiner deux Potions pour en réaliser une nouvelle dont l'effet est la somme des effets des potions initiales."
                },
                26 : {
                    name : "Grattage",
                    description : "Permet de confectionner un Parchemin Vierge à partir de composants et de Gigots de Gob"
                },
                27 : {
                    name : "Dressage",
                    description : "Le dressage permet d'apprivoiser un gowap redevenu sauvage ou un gnu sauvage."
                },
                28 : {
                    name : "Shamaner",
                    description : "Permet de contrecarrer certains effets des pouvoirs spéciaux des monstres en utilisant des champignons (de 1 à 3)."
                },
                29 : {
                    name : "Miner",
                    description : function(stats) {
                        var vuetotale = stats.view.total;
                        var viewH = 2 * vuetotale;
                        var viewV = 2 * Math.ceil(vuetotale/2);

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").html("<b>" + viewH + "</b> case" + Utils.addS(viewH)))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").html("<b>" + viewV + "</b> case" + Utils.addS(viewV)))
                        );
                        return ctn;
                    }
                },
                30 : {
                    name : "Tailler",
                    description : "Permet d'augmenter sensiblement la valeur marchande de certains minerais. Mais cette opération délicate n'est pas sans risques..."
                },
                33 : {
                    name : "Nécromancie",
                    description : "La Nécromancie permet à partir des composants d'un monstre de faire \"revivre\" ce monstre."
                },
                35 : {
                    name : "Planter un Champignon",
                    description : "Planter un Champignon est une compétence qui vous permet de créer des colonies d'une variété donnée de champignon à partir de quelques exemplaires préalablement enterrés."
                },
                37 : {
                    name : "Marquage",
                    description : "Marquage permet de rajouter un sobriquet à un monstre. Il faut bien choisir le nom à ajouter car celui-ci sera définitif. Il faut se trouver dans la même caverne que le monstre pour le marquer"
                },
                38 : {
                    name : "Retraite",
                    description : "Vous jugez la situation avec sagesse et estimez qu'il serait préférable de préparer un repli stratégique pour déconcerter l'ennemi et lui foutre une bonne branlée ... plus tard. MOUAHAHA ! Quelle intelligence démoniaque."
                },
                40 : {
                    name : "Réparation",
                    description : "Marre de ces arnaqueurs de forgerons ? Prenez quelques outils, et réparez vous-même votre matériel !"
                },
                41 : {
                    name : "Golémologie",
                    description : "Animez votre golem en assemblant divers matériaux autour d'un cerveau minéral."
                },
                42 : {
                    name : "RotoBaffe",
                    description : function(stats, levels) {
                        var att = stats.attaque.desReel;
                        var attbm = stats.attaque.bm;
                        var deg = stats.degat.desReel;
                        var degbm = stats.degat.bm;
                        
                        var niveau = levels.length - 1;

                        var ctn = $("<table/>");
                        for(var i = 1; i < niveau + 1; i++) {                                                        
                            ctn.append(
                                $("<tr/>")
                                .append($("<th/>").html("<u>Attaque n°" + i + " :</u>"))
                            );
                            ctn.append(
                                $("<tr/>")
                                .append($("<th/>").html("Attaque :"))
                                .append($("<td/>").html("<b>" + att + "</b> D6"))
                                .append($("<td/>").html(Utils.sign(attbm)))
                                .append($("<td/>").html(" => "))
                                .append($("<td/>").html("<b>" + ((Math.round(3.5*att)+attbm)) +"</b>"))
                            );
                            ctn.append(
                                $("<tr/>")
                                .append($("<th/>").html("Dégâts :"))
                                .append($("<td/>").html("<b>" + deg + "</b> D6"))
                                .append($("<td/>").html(Utils.sign(degbm)))
                                .append($("<td/>").html(" => "))
                                .append($("<td/>").html("<b>" + (2*deg+degbm) +"</b>"))
                            );
	               			att = Math.floor(0.75*att);
							deg = Math.floor(0.75*deg);
                        }
                        return ctn;
                    }
                },
                43 : {
                    name : "Baroufle",
                    description : "Vous voulez encourager vos compagnons de chasse ? Ramassez quelques Coquillages, et en avant la musique !"
                },
                44 : {
                    name : "Course",
                    description : function(stats, levels) {
                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Déplacement gratuit :"))
                            .append($("<td/>").html("<b>" + Math.floor(levels[1]/2) + "%</b> de chance"))
                        );
                        return ctn;
                    }
                },
                45 : {
                    name : "S'interposer",
                    description : function(stats) {
                        var reg = stats.regen.des;
                        var esq = stats.esquive.desReel;
                        var esqbm = stats.esquive.bm;
                        var deg = stats.degat.desReel;
                        var degbm = stats.degat.bm;

                        var ctn = $("<table/>");
                        ctn.append(
                                $("<tr/>")
                                .append($("<th/>").html("Jet de réflexe :"))
                                .append($("<td/>").html("<b>" + Math.floor(2*(esq+reg)/3) + "</b> D6"))
                                .append($("<td/>").html(Utils.sign(esqbm)))
                                .append($("<td/>").html(" => "))
                                .append($("<td/>").html("<b>" + (Math.round(3.5*Math.floor(2*(esq+reg)/3)+esqbm)) +"</b>"))
                        );
                        return ctn;
                    }
                },
                46 : {
                    name : "Painthure de Guerre",
                    description : "Grimez vos potrõlls et réveillez l'esprit guerrier qui sommeille en eux ! Un peu d\'encre, une Tête Réduite pour s'inspirer, et laissez parler votre créativité."
                }
            },
            "Sort" : {
                1 :  {
                    name : "Projectile Magique",
                    description : function(starts) {
                        var vue = stats.view.range,
                            vuetotale = stats.view.total,
                            attbmm = stats.attaque.magique,
                            degbmm = stats.degat.magique,
                            portee = Utils.getPortee(vuetotale);

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Attaque :"))
                            .append($("<td/>").html("<b>"+ vue + "</b> D6"))
                            .append($("<td/>").html(Utils.sign(attbmm)))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").attr("colspan", "2").html("<b>" + (Math.round(3.5*(vue))+attbmm) + "</b>"))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Dégâts :"))
                            .append($("<td/>").html("<b>"+ Math.floor(vue/2)+ "</b> D3"))
                            .append($("<td/>").html(Utils.sign(degbmm)))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").html("<b>" + (2*(Math.floor(vue/2))+degbmm) + "/" + (2*(Math.floor(1.5*Math.floor(vue/2)))+degbmm) + "</b>"))
                            .append($("<td/>").html("(" + Utils.resiste(Math.floor(vue/2), degbmm) + "/" + Utils.resiste(1.5*Math.floor(vue/2), degbmm) + ")"))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée :"))
                            .append($("<td/>").attr("colspan", "5").html("<b>"+ portee + "</b> case" + Utils.addS(portee)))
                        );
                        return ctn;
                    }
                },
                2  : {
                    name : "Hypnotisme",
                    description : function(stats) {
                        var esq = stats.esquive.des;

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Esquive (Full) :"))
                            .append($("<td/>").html("<b>-"+Math.floor(1.5*esq)+"</b> Dés"))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Esquive (Résistée) :"))
                            .append($("<td/>").html("<b>-"+Math.floor(esq/3)+"</b> Dés"))
                        );
                        return ctn;
                    }
                },
                3  : {
                    name : "Vampirisme",
                    description : function(stats) {
                        var deg = stats.degat.des;
                        var attbmm = stats.attaque.magique;
                        var degbmm = stats.degat.magique;

   						var modA = 0;                        
                        var modD = 0;  
                        // TODO
                        var pcA = false;
                        var pcD = false;
                        // ---
                        
                        if(pcA) {
                            modA = parseInt(Math.floor(2*deg/3)*pcA/100);
                        }
                        if(pcD) {
                        	modD = parseInt(deg*pcD/100);                        
                        }
                        
                        var ctn = $("<table/>");                        
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Attaque :"))
                            .append($("<td/>").html("<b>" + Math.floor(2*deg/3) + "</b> D6"))
                            .append($("<td/>").html(pcA ? ("<i>" + Utils.sign(modA) + " D6</i>") : ""))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").html("<b>" + Math.round(3.5*(Math.floor(2*deg/3)+modD)+attbmm)+ "</b>"))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Dégâts :"))
                            .append($("<td/>").html("<b>" + deg + "</b> D3"))
                            .append($("<td/>").html(pcD ? ("<i>" + Utils.sign(modD) + " D3</i>") : ""))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").html("<b>" +(2*(deg+modD)+degbmm)+'/'+(2*(Math.floor(1.5*deg)+modD)+degbmm) +' ('+Utils.resiste(deg+modD,degbmm)+'/'+Utils.resiste(1.5*deg+modD,degbmm)+")</b>"))
                        );
                        
                        return ctn;
                    }
                },
                4  : {name : "Rafale Psychique"},
                5  : {
                    name : "Augmentation des Dégats",
                    description : function(stats) {
                        var deg = stats.degat.des;
                        var bonus = 1+Math.floor((deg-3)/2);

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Bonus :"))
                            .append($("<td/>").html("<b>" + Utils.sign(bonus) + "</b>"))
                        );
                        return ctn;
                    }
                },
                6  : {
                    name : "Augmentation de l´Attaque",
                    description : function(stats) {
                        var att = stats.attaque.des;
                        var bonus = 1+Math.floor((att-3)/2);

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Bonus :"))
                            .append($("<td/>").html("<b>" + Utils.sign(bonus) + "</b>"))
                        );
                        return ctn;
                    }
                },
                7  : {
                    name : "Augmentation de l´Esquive",
                    description : function(stats) {
                        var esq = stats.esquive.des;
                        var bonus = 1+Math.floor((esq-3)/2);

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Bonus :"))
                            .append($("<td/>").html("<b>" + Utils.sign(bonus) + "</b>"))
                        );
                        return ctn;
                    }
                },
                8  : {
                    name : "Explosion",
                    description : function(stats) {
                        var deg = stats.degat.desReel,
                            pvbase = stats.hp.max.value;

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Dégâts :"))
                            .append($("<td/>").html("<b>" + Math.floor( 1+(deg+Math.floor(pvbase/10))/2 ) + "</b> D3"))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").html("<b>" + 2*Math.floor( 1+(deg+Math.floor(pvbase/10))/2 ) + "</b>"))
                            .append($("<td/>").html("(" + Utils.resiste( 1+(deg+Math.floor(pvbase/10))/2 ) + ")"))
                        );
                        return ctn;
                    }
                },
                9  : {
                    name : "Vision lointaine",
                    description : "En ciblant une zone située n'importe où dans le Monde Souterrain, votre Trõll peut voir comme s'il s'y trouvait."
                },
                10 : {
                    name : "Identification des trésors",
                    description : "Permet de connaitre les caractéristiques et effets précis d'un trésor."
                },
                11 : {
                    name : "Vision Troublée",
                    description : function(stats) {
                        var vue = stats.view.range,
                            vuetotale = stats.view.total,
                            ph = Math.min(1,vuetotale),
                            v = Math.floor(vue/3);
                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").html("<b>" + ph + "</b> case" + Utils.addS(ph)))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Vue :"))
                            .append($("<td/>").html("<b>-" + v + "</b> case" + Utils.addS(v)))
                        );

                        return ctn;
                    }
                },
                12 : {
                    name : "Faiblesse Passagère",
                    description : function(stats) {
                        var pv = stats.hp.current;
                        if(pv <= 0) {
                            return $("<div/>").append("Dans votre état, vous n'affaiblirez personne...");
                        }
                        var vuetotale = stats.view.total,
                            deg = stats.degat.desReel,
                            ph = Math.min(1,vuetotale);

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").attr("colspan", "2").html("<b>" + ph + "</b> case" + Utils.addS(ph)))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Dégâts physiques :"))
                            .append($("<td/>").html("<b>-" + Math.ceil( (Math.floor(pv/10)+deg-5)/4 ) + "</b>"))
                            .append($("<td/>").html("(-" + Math.ceil( (Math.floor(pv/10)+deg-5)/8 ) + ")"))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Dégâts magiques :"))
                            .append($("<td/>").html("<b>-" + Math.floor( (Math.floor(pv/10)+deg-4)/4 ) + "</b>"))
                            .append($("<td/>").html("(-" + Math.floor( (Math.floor(pv/10)+deg-2)/8 ) + ")"))
                        );
                        return ctn;
                    }
                },
                13 : {
                    name : "Téléportation",
                    description : function(stats) {
                        var posX = stats.position.x;
                        var posY = stats.position.y;
                        var posN = stats.position.n;
                        var mmTroll = stats.magie.mm.value + stats.magie.mm.bonus;
                        var portee = Utils.getPortee(mmTroll/5);
                        var vue = stats.view.total;
                        var pmh = (20+vue+portee);
                        var pmv = 3+Math.floor(portee/3);

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").html("<b>" + pmh + "</b> case" + Utils.addS(pmh)))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").html("<b>" + pmv + "</b> case" + Utils.addS(pmv)))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("X compris entre :"))
                            .append($("<td/>").html((posX-pmh) + ' et ' + (posX+pmh)))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Y compris entre :"))
                            .append($("<td/>").html((posY-pmh) + ' et ' + (posY+pmh)))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("N compris entre :"))
                            .append($("<td/>").html((posN-pmv) + ' et ' + Math.min(-1,posN+pmv)))
                        );
                        return ctn;
                    }
                },
                14 : {name : "Siphon des âmes"},
                15 : {
                    name : "Invisibilité",
                    description : "Un troll invisible est indétectable même quand on se trouve sur sa zone. Toute action physique ou sortilège d'attaque fait disparaître l'invisibilité."
                },
                16 : {
                    name : "Armure Ethérée",
                    description : function(stats) {
                        var reg = stats.regen.des;
                        var bonus = reg;

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Bonus :"))
                            .append($("<td/>").html("<b>" + Utils.sign(bonus) + "</b>"))
                        );
                        return ctn;
                    }
                },
                17 : {
                    name : "Sacrifice",
                    description : function(stats) {
                        var pv = stats.hp.current;
                        var pvmax = stats.hp.max.total;
                        if(pv <=0 ) {
                            return $("<div/>").append("Vous ne pouvez soigner personne... Vous êtes mort !");
                        }

                        var perteSacro = function (sac) {
                            return ' (-'+(sac+2*Math.floor(sac/5)+2)+' PV)';
                        }
                        var vuetotale = stats.view.total;

                        var bmt = stats.dla.duration.bonus.total;
                        var pdm = stats.dla.duration.stuf.total;
                        var pvdispo = stats.hp.current - pvmax - Math.ceil((bmt + pdm)*pvmax/250);

                        var sac = Math.floor((pv-1)/2);
                        var sacOpti = Math.floor(pvdispo/1.4)-1;
                        var viewH = Math.min(1,vuetotale);

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").html("<b>" + viewH + "</b> case" + Utils.addS(viewH)))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Soin maximal :"))
                            .append($("<td/>").html("<b>" + sac + "</b> PV" + perteSacro(sac)))
                        );
                        if(sacOpti>0) {
                            ctn.append(
                                $("<tr/>")
                                .append($("<th/>").html("Soin maximal sans malus de temps :"))
                                .append($("<td/>").html("<b>" + sacOpti + "</b> PV" + perteSacro(sacOpti)))
                            );
                        }
                        if(sacOpti>3) {
                            sacOpti = 5*Math.floor((sacOpti+1)/5)-1;
                            ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Soin optimal sans malus de temps :"))
                            .append($("<td/>").html("<b>" + sacOpti + "</b> PV" + perteSacro(sacOpti)))
                            );
                        }

                        return ctn;
                    }
                },
                18 : {
                    name : "Glue",
                    description : function(stats) {
                        var vuetotale = stats.view.total;
                        var viewH = (1+Math.floor(vuetotale/3));

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").html("<b>" + viewH + "</b> case" + Utils.addS(viewH)))
                        );
                        return ctn;
                    }
                },
                19 : {
                    name : "Flash Aveuglant",
                    description : function(stats) {
                        var vue = stats.view.range;

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Vue, Attaque, Esquive :"))
                            .append($("<td/>").html("<b>-" + (1+Math.floor(vue/5)) + "</b>"))
                        );
                        return ctn;
                    }
                },
                20 : {
                    name : "Analyse Anatomique",
                    description : function(stats) {
                        var vuetotale = stats.view.total;
                        var viewH = Math.ceil(vuetotale/2);
                        var viewV = Math.floor((vuetotale+1)/4);

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").html("<b>" + viewH + "</b> case" + Utils.addS(viewH)))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").html("<b>" + viewV + "</b> case" + Utils.addS(viewV)))
                        );
                        return ctn;
                    }
                },
                21 : {
                    name : "Projection",
                    description : "Si le jet de résistance de la victime est raté:<br/>la victime est <b>déplacée</b> et perd <b>1D6</b> d'esquive<hr>Si le jet de résistance de la victime est réussi:<br/>la victime ne <b>bouge pas</b> mais perd <b>1D6</b> d'esquive."
                },
                22 : {
                    name : "Vision Accrue",
                    description : function(stats) {
                        var vue = stats.view.range;

                        var bonus = Math.floor(vue/2);

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Bonus :"))
                            .append($("<td/>").html("<b>" + Utils.sign(bonus) + "</b> case" + Utils.addS(bonus)))
                        );
                        return ctn;
                    }
                },
                23 : {
                    name : "Voir le Caché",
                    description : function(stats) {
                        var vue = stats.view.range;
                        var vuetotale = stats.view.total;

                        var viewOnMe = Math.min(5,Utils.getPortee(vue));
                        var viewAway = Utils.getPortee(vuetotale);

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale (sur soi) :"))
                            .append($("<td/>").html("<b>" + viewOnMe + "</b> case" + Utils.addS(viewOnMe)))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale (a distance) :"))
                            .append($("<td/>").html("<b>" + viewAway + "</b> case" + Utils.addS(viewAway)))
                        );
                        return ctn;
                    }
                },
                24 : {
                    name : "Télékinésie",
                    description : function(stats) {
                        var vuetotale = stats.view.total;
                        var vt = Math.floor(vuetotale/2)+2;

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Portée horizontale :"))
                            .append($("<td/>").html("<b>" + vt + "</b> case" + Utils.addS(vt)))
                        );
                        var strList = ['d\'une Plum\' ou Très Léger','Léger', 'Moyen','Lourd','Très Lourd ou d\'une Ton\''];
                        for(var i=0 ; i<strList.length ; i++) {
                            ctn.append(
                                $("<tr/>")
                                .append($("<th/>").html("<i>Trésor " + strList[i] + "</i>:"))
                                .append($("<td/>").html("<b>" + vt + "</b> case" + Utils.addS(vt)))
                            );

                            vt = Math.max(0,vt-1);
                        }

                        return ctn;
                    }
                },
                27 : {
                    name : "Bulle Anti-Magie",
                    description : function(stats) {
                        var rm = stats.magie.rm.value;
                        var mm = stats.magie.mm.value;
                        var rmbm = stats.magie.rm.bonus;
                        var mmbm = stats.magie.mm.bonus;

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("RM :"))
                            .append($("<td/>").html("<b>" + rm + "</b>"))
                            .append($("<td/>").html("(Total : <b>" + (2*rm+rmbm) + "</b>)"))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("MM :"))
                            .append($("<td/>").html("<b>" + mm + "</b>"))
                            .append($("<td/>").html("(Total : <b>" + mmbm + "</b>)"))
                        );
                        return ctn;
                    }
                },
                28 : {
                    name : "Griffe du Sorcier",
                    description : function(stats) {
                        var att = stats.attaque.desReel,
                            attbm = stats.attaque.bm,
                            attmoy = stats.attaque.moy,
                            deg = stats.degat.des,
                            degbm = stats.degat.bm,
                            pvbase = stats.hp.max.total,
                            reg = stats.regen.des,
                            vue = stats.view.total;

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Attaque :"))
                            .append($("<td/>").html("<b>" + att + "</b> D6"))
                            .append($("<td/>").html(Utils.sign(attbm)))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").attr("colspan", "2").html("<b>" + attmoy +"</b>"))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("Dégâts :"))
                            .append($("<td/>").html("<b>" + deg + "</b> D3"))
                            .append($("<td/>").html(Utils.sign(degbm)))
                            .append($("<td/>").html(" => "))
                            .append($("<td/>").html("<b>" + (2*(Math.floor(deg/2))+degbm) + "/" + (2*(Math.floor(deg/2)+Math.floor(deg/4))+degbm) +"</b>"))
                            .append($("<td/>").html("(" + Utils.resiste(Math.floor(deg/2),degbm) + "/" + Utils.resiste(Math.floor(deg/2)+Math.floor(deg/4),degbm) + ")"))
                        );
                        var addVenin = function(ctn, type, effet, duree) {
                            var dred = Math.max(Math.floor(duree/2),1);
                            ctn.append($("<tr/>").append($("<td/>").attr("colspan", "6").html("<hr/>")));
                            ctn.append(
                                $("<tr/>")
                                .append($("<th/>").html("Venin " + type + " :"))
                                .append($("<td/>").html("<b>" + effet + "</b> D3"))
                                .append($("<td/>").html("pendant <b>" + duree + "</b> tour" + Utils.addS(duree)))
                                .append($("<td/>").html(" => "))
                                .append($("<td/>").html("<b>" + 2*effet + " x " + duree + " = " + 2*effet*duree + "</b>"))
                                .append($("<td/>").html("(" + 2*effet + " x " + dred + " = " + 2*effet*dred + ")"))
                            );
                        };
                        var effet = 1+Math.floor((Math.floor(pvbase/10)+reg)/3);
                        addVenin(ctn, 'insidieux', effet, 2+Math.floor(vue/5));
                        effet = Math.floor(1.5*effet);
                        addVenin(ctn, 'virulent', effet, 1+Math.floor(vue/10));
                        return ctn;
                    }
                },
                29 : {
                    name : "Bulle Magique",
                    description : function(stats) {
                        var rm = stats.magie.rm.value;
                        var mm = stats.magie.mm.value;
                        var rmbm = stats.magie.rm.bonus;
                        var mmbm = stats.magie.mm.bonus;

                        var ctn = $("<table/>");
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("RM :"))
                            .append($("<td/>").html("<b>" + rm + "</b>"))
                            .append($("<td/>").html("(Total : <b>" + rmbm + "</b>)"))
                        );
                        ctn.append(
                            $("<tr/>")
                            .append($("<th/>").html("MM :"))
                            .append($("<td/>").html("<b>" + mm + "</b>"))
                            .append($("<td/>").html("(Total : <b>" + (2*mm+mmbm) + "</b>)"))
                        );
                        return ctn;
                    }
                },
                33 : {
                    name : "Lévitation",
                    description : "Prendre un peu de hauteur permet parfois d'éviter les ennuis. Comme les pièges ou les trous par exemple..."
                },
                34 : {name : "Précision Magique"},
                35 : {name : "Puissance Magique"}
            }
        };

        $("<style type='text/css'> div.actionPopup th { text-align:right;} </style>").appendTo("head");

        var showPopup = function(stats, entry, levels, actionName) {
             // Description
            var description = null;
            if($.isFunction(entry.description)) {
                description = entry.description(stats, levels, actionName);
            } else if(Utils.isDefined(entry.description)) {
                description = $("<i>" + entry.description + "</i>");
            }

            if(null == description) {
                return;
            }

            var div = $("<div/>")
            .addClass("actionPopup")
            .css("max-width", "700px")
            .css("border", "1px solid #CCC")
            .css("background-color", "#FFF")
            .css("border-radius", "5px");

            // Title
            var level = levels.length - 1;
            var title = $("<h2/>")
            .css("background", "#333")
            .css("border", "1px solid #111")
            .css("padding", "5px 10px")
            .css("font-size", "14px")
            .css("color", "white")
            .css("text-shadow", "0 -1px 0 rgba(0, 0, 0, 0.5)")
            .css("letter-spacing", "0")
            .css("border-radius", "5px 5px 0 0")
            .css("font-weight", "normal")
            .css("margin-bottom", "0px")
            .css("margin-top", "0px")
            .css("overflow", "hidden")
            .text(entry.name + " [niv." + level + " : " + levels[level] + "%]");
            div.append(title);

            // content
            div.append($("<div/>")
            .css("padding", "10px")
            .append(description));

            // Attach to DOM
            div.prependTo($("#footer2"));

            return div;
        };

        if(false) {
            $.each(["Comp", "Sort"], function(idx, actionType) {
                $.each(Object.keys(database[actionType]), function(idx, actionId) {
                    var entry = database[actionType][actionId];
                    var actionName = entry.name;
                    var levels = [null, 90,90];
                    var popup = showPopup(stats, entry, levels, actionName);
                });
                $("<div/>").append(actionType).prependTo($("#footer2"));
            });
        }

        $($("table.mh_tdborder:first").next().find("table.mh_tdpage")).find("a.AllLinks")
        .hover(function() {
            var link = $(this);
            var popupId = link.attr("data-popup");
            if(Utils.isDefined(popupId)) {
                var popup = $('[action-popup-id="' + popupId + '"]');
                popup.toggle();
                return;
            }

            var tmp = /javascript:Enter(Comp|Sort)\((\d+)\)/.exec(link.attr("href"));
            var actionType = tmp[1];
            var actionId = parseInt(tmp[2]);
            var actionName = link.text().trim();
            popupId = "info-" + actionType + "-" + actionId;

            link.attr("data-actionType", actionType);
            link.attr("data-actionId", actionId);
            link.attr("data-popup", popupId);

            // Extract levels
            var tmp = link.parents("tr:first").find("td:nth-child(3)").text().replace(/[\n\s->niveau%\)]/g, "").split("(");
            var levels = [];
            for(var j = 0; j < tmp.length; ++j) {
                var f = (tmp[j]).split(":");
                levels[f[0]] = f[1];
            }
            // ----------------

            var entry = database[actionType][actionId];
            if(Utils.isUndefined(entry)) {
                console.log("Entry not found for " + actionName + " [" + actionId + "] in category " + actionType);
                return;
            }

            var pos = link.position();

            var popup = showPopup(stats, entry, levels, actionName);
            popup.css("position", "absolute")
            popup.css("top", pos.top - popup.height() + "px");
            popup.css("left", (pos.left) + "px");
            popup.attr("action-popup-id", popupId);

        }, function() {
            var link = $(this);
            var popupId = link.attr("data-popup");
            var popup = $('[action-popup-id="' + popupId + '"]');
            popup.toggle();
        });

//        console.log(ctn);

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
            var tmp = /Vous avez créé un Portail de Téléportation\s*\((\d+)\).*Il (conduit en[^\.]*)/.exec(body);
            api = "tag";
            data =  {
                "type" : 5,
                "num" : tmp[1],
                "tag" : tmp[2]
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

        // Ajout des liens vers la vue de l'outil
        $("<p><b>Vue dans l'outil</b> : <a href='http://pharoz.net/MH/outil/?page=viewGraph&viewType=1' target='_blank'>Vue 1</a> | <a href='http://pharoz.net/MH/outil/?page=viewGraph&viewType=2' target='_blank'>Vue 2</a></p>").insertAfter( "h2" );

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
            var tdName = $($(this).children("td:nth-child("+nomColId+")"));
            var monsterName = tdName.text();

            var tdRef = $($(this).children("td:nth-child("+refColId+")"));
            var monsterId = tdRef.text();
            tdRef.empty()
            .append(
                $("<a/>")
                .attr("href", "javascript:EMV(" + monsterId + ",750,550)")
                .attr("title", "Voir les évenements de " + monsterName + " [" + monsterId + "]")
                .text(monsterId)
            );

            tdName.find("a")
                .attr("href", "javascript:void(0)")
                .attr("title", "Voir la CdM de " + monsterName + " [" + monsterId + "]")
                .on('click', function(){
                    window.open("http://pharoz.net/MH/outil/popup.php4?popupWidth=700&popupHeight=400&page=bestiary/detail2&fullName=" + monsterName + "&ref=" + monsterId, "karlaakiPopup", "width=700, height=400, resizable=yes,menubar=no,scrollbars=yes,status=no");
                })
           ;
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
    init : function() {
        var tmp = /Portail de Téléportation\s+\(Lieu n° (\d+)\)/.exec($("div.titre2").text());
        if(tmp) {
            this.callAPIConnected({
                api: "tag",
                data: {
                    "type" : 5,
                    "num" : tmp[1],
                    "tag" : /(mène en[^\.]*)/.exec($("#description").text())[1]
                }
            });
        }
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
    } catch(e) {
//        console.log('catched!', e);
    }

    if(Utils.isUndefined(typeof module)) {
        console.log("Unable to find the module " + moduleName + " for URL " + pathname);
    } else {
        module.load();
    }
});
