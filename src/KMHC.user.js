// ==UserScript==
// @name          KFE
// @namespace     pharoz.net
// @version       1.0.3.14
// @description   Pharoz.net MH Connector
// @match         http://games.mountyhall.com/*
// @match         https://games.mountyhall.com/*
// @require       http://code.jquery.com/jquery-2.1.4.min.js
// @require       https://github.com/jswale/KFE/raw/master/src/data/talents.js?v=2016-04-15_00-25
// @require       https://github.com/jswale/KFE/raw/master/src/data/monstres.js?v=2015-06-15_12-00
// @require       https://github.com/jswale/KFE/raw/master/src/data/monstreAges.js?v=2015-09-04_20-33
// @require       https://github.com/jswale/KFE/raw/master/src/data/monstreTemplates.js?v=2017-03-20_14-00
// @require       https://github.com/jswale/KFE/raw/master/src/data/monstreAlias.js?v=2015-03-09_12-00
// @require       https://github.com/jswale/KFE/raw/master/src/addon/editables.js
// @require       https://github.com/jswale/KFE/raw/master/src/addon/jquery.inherit.min.js
// @downloadURL   https://github.com/jswale/KFE/raw/master/src/KMHC.user.js
// @updateURL     https://github.com/jswale/KFE/raw/master/src/KMHC.meta.js
// @grant         GM_addStyle
// @copyright     2014+, Miltown, Grul & disciple
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAUDBQwKBxQKBBwKEBkTBBwaJCQUBCQcCS4cBzASBDwWBDIeGCQGJDweLCwjETQkDjQqFDw0HDQqNDw2NEAeFEAlCkIsCkElF0EsFkwpEUwuHEQzFkw0ElwtH1w6BFQ1EVM8FVw5F14+GEEqLEwiNEE1J0wzLE88LFgsNFQzKV40Jl88KWw+HGQzN2E7N2w2NEQ+THA+QFRDIFZELFxCIFxKJFxNMl9VP2dEGmRLGXRLF2dEKWhMJ2ZENGdNOmJSLmxUK2xXP3RKLHdMP3BeKHdaL3pUInRfOnhVMWRaRGheSH9FR3dVQ3ZaQHReRnRmTHxhRn9pV39xZ4A8RIRMOIRXKYxWJIxfJ4xaPIBgKYFgNoNnNY9oMY1pPoRwNJBhNpFvPZxvPpxwMpx3P6RsOKRyPKR4O4RNSIxGVJBSRJZYT4NnRo9gRIRiVIxiXIRwR45wToRwVIR2WJBnTpxnRJR4QJx+RJJ4U5R+VJxwVpx9UIxqYIxyZI94YZJ+YJx+YpR+cKluSad6T6d+T6l+Qax6QLRuTLR+QLR6XKR4YKR+bJ+FObCEO52DXYyCZJCEbJyKfKOESqGNX6yFWK+MXbKER7GMSbyDRryNR7SFXLyLWbyTT7SUXbyaVKGDcayUYK6QbqSRda+YeLSaZLyWYbyZb7efd7ySfLqgZrymcMSRQcSRT8SXTcyXTMufU8maXMeVY9ShW9imX8agbcugYMyqbMSmfsimccqsf9ambNSrZdytZtSseNyybNyweOC3dey+f4yOnJSGiKyKhKyYiLSSlLCgiLSmjLylibSqlLasnryskLyyqLy2xMSihMWskc+0gceyl8i2mNS4k9S+mNy5ksi5psq+ptS8qNy+tOS+gOC+lNzClMzCrNTEp9TKrN/Eo9jFt9rMtuTEjOzDi/DLlPzKnPTVmuDLqO7NqOTOtuzSoePTuvDVsPvdtPzevPzisOTaw+zUwe/cwu3dzeTa1Pbjw/TmzPzmzvzuxPvr1Pzy2fz35/z+9AAAAEG26sQAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAAGHRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjOM5pdQAAAGpElEQVRIS3WVD1wT5xnHwdUVWjacW9XQ4Ay6mipqV4MYyRlgeJBVtGrrXBKoiXRxBWxo1WXEqRXoulbSDUkiGqZAhVlJAiFX/oSYuI6mTLryJzUytTQ5SE0woHAsSd9j7EISTJT9Pnef5O6e7+d9nz/v80TMzKcJ4vZ6/f8f0byA2+QBAJsMPIVrPgC4unFsEP0POgoCb+YEwHyAt6fO9hWGT0+jk48QwNUzD4D3J4lu251O5323wxN45xcY+jP2OIBbSBKjpvl8/Q3tLac1ZAkAHNwB/DEAR2lS7YEDfHaaBBbobwQIL/EzeYNXiz/qNHCPMivfTaGvjIshQXACz9DqIqJLhMxhba/IvEDsMAwAU66b74jY8fE02s6XxLxqmCI3mKe9k6OD7cPVXHqWi1gnDJhAMeeO5zZGXXca9H36yuqa+N9ViD4UVUjlytPbIFENRtiEAhiKtZftQKVv3Ws8myNuq79YKTpDid4k5qZx2XDq7z/q9cUsFEBd7Tnxe77LO26WSYUFJ0XaUvFRFpmzS1TfWl8i7euz+QIQCngGoGcXbn5Qmd4ugeITV1MvZm08mgtxahrqilrtw87BKZ9RuA806o+//3bq5peTf/LzPSTG0qjVUAJLUl0vhaX3xlB0NsJhgGtVDHUXPTryiU//9feXYkm7agqfYRZIeq3adgxDv/HbhAL48Zi64Za9UYvWrGEyIRhyOHjiHSdQYL73wG2Z8GcwFAA26pC9hU1axjiULhR1s3giWFtd5PgcM1swy1zhhgKmz+82yzctJtcWFTR0pwspDL09Ncssue29iWFB+1AAN7VpK7kbY6Ph9LdS02tEsUkNPTRR20AtioGHp+8hgHc9ly7kMVY9sWzFy5bS/SIJZ8ni2B9JHA6LryLmNAeAgRN1EmHiD3+wujY5Op7COipnc5PJ5LQTJhBqPwcAy8d3jTr51lXH+h4c/+lpYZ4MptRB2hK4ogEPO0UBALi67C1NVQJ+cycy3MC+XCfN48HiZO5eurTPn7CggoBpuFOlbGxENE2I/njMSs4+saQoOyq1Gkq73D7PCvjN1hG1SqVSNjUXM0kLnqSXCugwi0rKkm6BOdqw5uEHQJdV5wNapBsWREZGbuTw8pI4/ByYDlfwc5tNjwHeyW57CwF0Nq+JjFwYtZDGgOvTuI1yAb/k/JH89485QohZAPx70K5TqzsNGd9bsGjRCgqtIO6AXNGmVZz9Y/5vX3yzuAaftZ1VALDZr3Yavn1/2ZMMiJ7CyTpDl6k62trUZ0/lv5KRnlHY+7DR+oH+HvzuvfG/rSdlCtj7c3icPq5cqdFfrpadyj+YuPPF7X/qm8u2H3Blf2azntwaBwnKeILSbtbFitN/RZDLFysOH8zftfXgkcYRR7D8ZoEZ0Lth/dq1MYvS+GV5PGl3Lixmy5s6Pvm44kj+YeHWQuSWEwumzw98d/PCH06KukzUndvgJEkuFyqAfoMYblsr39jOpK4vREbGgCuQPj/g6f3HByezPzicben5cHMydSmZxeLpjE5n9ivPpzNfKOkYGQdfYziOE67PAtO2C8UU8tIV8UuSsk7Umfp3xybmZiLG+wOJr65//mcZMt3I2HQtaefuWsIRHzBt2XMoDuKWyWT8fSkUyqYzPe8sZaXIDO6eTH7hwe2vNiFGO/72U8uXr81GfQMFdJGfSYK1ROY0KqWy/LUt8TuOQfp1ZYZxS+6l+uJzJUqdcWScxsjPf2P5bgIAJg68hDncqfQVn1KtuVKembghtyRFph9zceq1JeebEN1Ve83KPNmpvUUOEOEZ7dX/KmHgLqJUNaqUGm0rckWw8hfbEnhKg9OTxZFfamrp0F2tZu2vUr7OHyJ88Ixixl8Lh+7riNNwRYm0tSLKqn3wFnY5MuL97y9JcJ5coZALeLz3zr5e4psuEa5Dfbc4wtfM9mvGlsYqRUcH0qQSHJCX6+xW9PpiMo2Tk1dWXi57793SL2eTHdHPWsfJTYQozALxJY1GTVxqZXl5y1V9EZVMToI4ZQo1olYotOZAbUTMuBrERQlLoqOfejqOUXyuqpHYgEDxyY3eAfQbq9V6x2y+fcfhwnxDLgAAAMa+6v4L81wZn7WOkcFicY5+dAfz4tM4Tnxye9xTYX1mNtNegIOucWOnRrY/Ey6oG5xwT019gdps6KjLHdYBCPlricjeP4fG7deuIdKGUa9vcExd//QLFO1/2FODCgJet8VC7Hhg0BM0mQDA65uCjygIENuasKFE2w08/h/NzPwPOHaIyvrbq40AAAAASUVORK5CYII=
// ==/UserScript==

var Logger = $.inherit({
}, { // Statics
    _log : function(type, args) {
        switch(args.length) {
            case 0:
                return;
                break;
            case 1:
                args=args[0];
                break;
        }
        console[type](args);
    },

    log : function() {
        this._log("log", arguments);
    },

    debug : function() {
        this._log("debug", arguments);
    },

    warn : function() {
        this._log("warn", arguments);
    },

    error : function() {
        this._log("error", arguments);
    }
});

var Display = $.inherit({
}, { // Statics
    mhButton : function(label, callback, scope) {
        return $("<input/>")
        .addClass("mh_form_submit")
        .css("margin", "auto 0px")
        .attr("type", "button")
        .attr("value", label)
        .on('click', $.proxy(callback, scope || this));
    },

    protectMonsters : function() {
        $("select option:contains('Gowap'),select option:contains('Golem de cuir'),select option:contains('Golem de métal'),select option:contains('Golem de papier'),select option:contains('Golem de mithril')").css("color", "#808080");
    },

    normalizeFontSize : function () {
        $(".titre3, .titre4").css("font-size", "12px");
    }
});

//TODO Decouper cette classe en Storage, Parser et Utils
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
            if(this.isUndefined(this.getConf(key))) {
                this.setConf(key, value);
            }
        },

        initConfig : function() {
            this.initConf("mountyzilla","false");
        },

        getId : function(key) {
            return CONF_KEY + key;
        },

        getScriptInfo : function() {
            if(typeof GM_info !== 'undefined') {
                return {
                    name: GM_info.script.name,
                    version: GM_info.script.version,
                    downloadURL: GM_info.scriptMetaStr.match(/@downloadURL\s+(.*)\s*/i)[1]
                };
            }
            return {
                name: GM_getMetadata("name"),
                version: GM_getMetadata("version").join(''),
                downloadURL: GM_getMetadata("downloadURL")
            };
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

        getRandomInt : function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        getCoordRef : function(x,y,n, pad) {
            pad = pad || "0000";
            var ref = "";
            $.each([x, y, n], function(i, coord) {
                var fpad = "1" + pad;
                if(coord < 0) {
                    coord = -coord;
                    fpad = "2" + pad;
                }
                coord = "" + coord;
                coord = fpad.substring(0, fpad.length - coord.length) + coord;
                ref += coord;
            });

            return parseInt(ref);
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

        storeMZpos : function(id, pos) {
            if (id && pos) {
                localStorage[id + ".position.X"] = pos.x;
                localStorage[id + ".position.Y"] = pos.y;
                localStorage[id + ".position.N"] = pos.n;
            }
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

var Page = $.inherit({

    moduleName: null,
    logger : Logger,
    utils : Utils,
    display : Display,

    __constructor : function(moduleName) { // constructor
        this.moduleName = moduleName;
        this.logger.debug("> Module " + this.moduleName + " found");
    },

    load : function() {
        this.logger.debug(" -- START Module " + this.moduleName);

        Utils.addGlobalStyle([
            '.editable { margin-left: 10px; }',
            '.editable:after { content: ""; display: none; opacity: 1; margin-left: 8px; width: 12px; height: 12px; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABGdBTUEAAK/INwWK6QAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4zjOaXUAAAAFhJREFUKFOVjgEKgCAQBH1m/v8hG3N5cdWmuDCgMCM2SVN6PwR5/wiVIcYysiKk/I6mMuNc46WcG+fnl1YybMmwJcMtV5E5GezrfzJEYCIrAwuphFa8UDsBgSOr5cVAQ8gAAAAASUVORK5CYII=); }',
            '.editable_ctn:hover .editable:after {display:inline-block; }',
            '.editable + input { margin: 0 0 0 10px; font-family: monospace; font-size: 9pt; height: 14px; border: none; display: none; }'
        ]);

        this.init();

        this.pinkLady();

        this.logger.debug(" -- STOP Module " + this.moduleName);
    },

    pinkLady : function() {
        if(this.isInitialized() && ["2450", "2449"].indexOf(Utils.getConf("login")) != -1 ) {
            Utils.addGlobalStyle([
                'body { background: #FF80FF; }',
                '#mhPlay {background:inherit !important;}',
                '.mh_tdtitre {background: #D8B8D8;}',
                '#mhBanner {display:none;}',
                '.mh_tdpage {background: #EEADA2;}',
                'a.AllLinks, a.AllLinks:visited {color:#476C8E !important;}',
                '.mh_equip_standard {background: #FED6F3 !important;}'
            ]);
        }
    },

    init : function() {
        this.logger.error("  -> Not yet implemented");
    },

    /******************************************/

    injectTags : function(dataType, dataId, prefix, suffix, selectName, cb) {
        var selectSelector = "select" + (selectName ? ("[name='" + selectName + "']") : "");
        var ids = $(selectSelector + " option[value!='']").map(function(){
            var v = $(this).prop("value");
            v = v.substr(prefix.length, v.length - suffix.length);
            return v;
        }).get();

        var data = {
                "invi" : 0
            };
        data[dataType] = ids;

        this.callAPIConnected({
            api : "viewInfo",
            data : data,
            callback : $.proxy(function(datas) {
                if("" != datas) {
                    var json = $.parseJSON(datas);

                    $.each(json.tags || [], $.proxy(function(key, data){
                        var tmp = key.split(";");
                        if(tmp[0] == dataId) {
                            var o = $(selectSelector + " option[value='" + prefix + tmp[1] + suffix + "']");
                            var cleared = o.text().split(" - ").slice(1).join(" - ");
                            if(data.tag.indexOf(cleared.split("(")[0]) == 0) {
                                o.text(tmp[1] + " - " + data.tag);
                            } else {
                                o.text(o.text() + " - " + data.tag);
                            }
                        }
                    },this));

                    if("m" == dataType) {
                        $.each(json.monsters || [], $.proxy(function(key, data) {
                            var o = $(selectSelector + " option[value='" + prefix + key + suffix + "']");
                            o.text(o.text() + " (CdM: " + this.utils.getDateDiff(new Date(data.cdmDate*1000), new Date()) + ")");
                        },this));
                    }
                }
                
                if(Utils.isDefined(cb)) {
                    cb();
                }
            }, this)
        });
    },

    injectMonstresTags : function(prefix, suffix, selectName) {
        this.injectTags("m", "1", prefix, suffix, selectName);
    },

    injectTrollsTags : function(prefix, suffix, selectName) {
        this.injectTags("t", "2", prefix, suffix, selectName);
    },

    injectTresorsTags : function(prefix, suffix, selectName) {
        var cb = function() {
            // From dession
            var selectSelector = "select" + (selectName ? ("[name='" + selectName + "']") : "");
            $(selectSelector + " option[value!='']").each(function(){
                var v = $(this).prop("value");
                var id = v.substr(prefix.length, v.length - suffix.length);
                var desc = Utils.getValue("ITEM_DESC_" + id);
                if(Utils.isDefined(desc) && $(this).text().indexOf(desc) == -1) {
                    $(this).text($(this).text() + " - " + desc);
                }
            });
        };
        this.injectTags("o", "3", prefix, suffix, selectName, cb);

    },

    injectChampignonsTags : function(prefix, suffix, selectName) {
        this.injectTags("c", "4", prefix, suffix, selectName);
    },

    /******************************************/

    isInitialized : function() {
        return  (Utils.isDefined(typeof Utils.getConf("login")))
        &&  (Utils.isDefined(typeof Utils.getConf("pswd")));
    },

    callAPIConnected : function(conf) {
        if(!this.isInitialized()) {
            this.logger.error("Authentification required");
            return;
        }
        conf.data = $.extend(conf.data, {"login" : Utils.getConf("login"),"password" : Utils.getConf("pswd")})
        this.callAPI(conf);
    },

    callAPI : function(conf) {
        //this.logger.debug("Calling API", conf);
        $.ajax({
            type: "POST",
            url: "http://pharoz.net/MH/outil/api.php?rnd=" + new Date().getTime(),
            //contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
            data : $.extend(conf.data, {"page" : conf.api, "popup" : 0, "encoding" : "UTF-8"})
        }).done($.proxy(function(data, result, request){
            if(result == Utils.success) {
                if(Utils.isUndefined(conf.callback)) {
                    //this.logger.warn("No callback found");
                } else {
                    //this.logger.debug("Result", data);
                    conf.callback.apply(this, [data.replace(/\s/g, " "), result, request]);
                }
            } else {
                this.logger.error("Error while executing the API call");
                this.logger.error(arguments);
            }
        }, conf.scope || this));
    },

    callAPIMiltown : function(conf) {
        this.logger.debug("Calling API", conf);
        $.ajax({
            type: "POST",
            url: "http://mh.swale.fr/api/" + conf.api + ".php?rnd=" + new Date().getTime(),
            data : {"call" : conf.call, "encoding" : "UTF-8", "data" : conf.data}
        }).done($.proxy(function(data, result, request){
            if(result == Utils.success) {
                if(Utils.isUndefined(conf.callback)) {
                    this.logger.warn("No callback found");
                } else {
                    this.logger.debug("Result", data);
                    conf.callback.apply(this, arguments);
                }
            } else {
                this.logger.error("Error while executing the API call");
                this.logger.error(arguments);
            }
        }, conf.scope || this));
    },

    getEditionField : function(ref, type) {
        return $("<span/>")
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
        });
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

    extractPosition : function(text) {
        var tmp = /X\s*=\s*(-?\d+)\s*\|\s*Y\s*=\s*(-?\d+)\s*\|\s*N\s*=\s*(-?\d+)/.exec(text);
        return tmp ? {
            x: parseInt(tmp[1]),
            y: parseInt(tmp[2]),
            n: parseInt(tmp[3])
        } : null;
    },

    getMyPosition : function() {
        try {
            var text = $("div.infoMenu:first", window.parent.parent.parent.Sommaire.document).text();
            var myPos = this.extractPosition(text);
            return myPos;
        } catch(e) {}
        return null;
    },

    getMyId : function () {
        try {
            return $("input[name='ai_IdPJ']", window.parent.parent.parent.Sommaire.document).val();
        } catch(e) {}
        return null;
    },

    addXRules : function(title, id, after) {
      var ctnId = "data-rules-" + id,
          self = this;

      $("<div/>")
      .addClass("mh_tdtitre")
      .attr("id", ctnId)
      .css("border", "1px solid black")
      .css("margin-bottom", "10px")
      .append(
          $("<div/>")
          .css("font-weight", "bold")
          .css("text-align", "center")
          .text(title)
          .click(function(){
              $("#" + ctnId).find("textarea,input").toggle();
          })
      )
      .append(
          $("<textarea/>")
          .css("width", "100%")
          .css("height", "120px")
      )
      .append(
          $("<input/>")
          .attr("type", "button")
          .addClass("mh_form_submit")
          .css("text-align", "center")
          .val("Mettre à jour")
          .click(function(){
              var ctn = $("#" + ctnId);
              self.callAPIMiltown({
                  api : "tag",
                  call : "update",
                  data : {
                      id : id,
                      description : ctn.find("textarea").val()
                  },
                  callback : function() {
                      ctn.find("input").val("Données envoyées");
                  },
                  scope : self
              });
          })
      )
      .insertAfter(after || $("form[name='LimitViewForm']"));

      this.callAPIMiltown({
          api : "tag",
          call : "get",
          data : {
              id : id
          },
          callback : function(tag) {
              $("#" + ctnId + " textarea").val(tag);
              if("" == tag) {
                  $("#" + ctnId).find("textarea,input").toggle();
              }
          },
          scope : this
      });
    }

}, { // Statics

    showTalentPopup : function(link, newIHM, boost) {
        var popupId = link.attr("data-popup");
        if(Utils.isDefined(popupId)) {
            var popup = $('[action-popup-id="' + popupId + '"]');
            popup.toggle();
            return;
        }

        var tmp;
        if(newIHM) {
            tmp = /ai_ID(Comp|Sort)=(\d+)/.exec(link.attr("href"));
        } else {
            tmp = /javascript:Enter(Comp|Sort)\((\d+)\)/.exec(link.attr("href"));
        }
        var actionType = tmp[1];
        var actionId = parseInt(tmp[2]);
        var actionName = link.text().trim();
        popupId = "info-" + actionType + "-" + actionId;

        link.attr("data-actionType", actionType);
        link.attr("data-actionId", actionId);
        link.attr("data-popup", popupId);

        // Extract levels
        var levels = [];
        if(boost) {
            var prct = link.parents("tr:first").find("td:nth-child(2)").text().replace(/à\s+(\d+)\s+%/, "$1")
            var tmp = /([^\(]*)(?:\(niveau (\d)\))?/.exec(actionName);
            actionName = tmp[1].trim();
            var levelMax = 1;
            if(!Utils.isUndefined(tmp[2])) {
                levelMax = parseInt(tmp[2]);
            }
            for(var i = 0; i < levelMax; i++) {
                levels[i] = 90;
            }
            levels[levelMax] = parseInt(prct);

        } else {

            var id = newIHM ? (actionType == "Comp" ? 9 : 8) : 8;
            var tmp = link.parents("tr:first").find("td:nth-child(" + id + ")").text().trim().split("\n");
            for(var j = 0; j < tmp.length; ++j) {
                if(tmp[j] != "") {
                    var p = /niveau\s+(\d+)\s+:\s+(\d+)\s+%/.exec(tmp[j]);
                    levels[p[1]] = p[2];
                }
            }
        }
        // ----------------

        var entry = DB_talents[actionType][actionId];
        if(Utils.isUndefined(entry)) {
            console.log("Entry not found for " + actionName + " [" + actionId + "] in category " + actionType);
            return;
        }

        var pos = link.offset();

        var popup = this.displayTalentPopup(entry, levels, actionName);
        popup.css("position", "absolute")
        popup.css("top", pos.top - popup.height() + "px");
        popup.css("left", (pos.left) + "px");
        popup.css("zIndex", "100");
        popup.attr("action-popup-id", popupId);
    },

    hideTalentPopup : function(link) {
        var popupId = link.attr("data-popup");
        var popup = $('[action-popup-id="' + popupId + '"]');
        popup.toggle();
    },

    displayTalentPopup : function(entry, levels, actionName) {
        var stats = JSON.parse(Utils.getConf("profil_stats"));

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
        div.prependTo($("body"));

        return div;
    }
});

var MH_Play_PlayStart2 = $.inherit(Page, {
    init : function() {
        $("#viewbutton")
        .css("margin-right", "0.5em")
        .css("color", "#AEFFAE")
        .after(
            $("#loginbutton")
            .detach()
            .css("color", "#FFB7B7")
        );
    }
});

var MH_Play_TurnStart = $.inherit(Page, {
    init : function(){
        if(!this.isInitialized()) {
            this.logger.error("Authentification required");
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

var MH_Play_Play_menu = $.inherit(Page, {
    init : function () {
        //var id =  $("input[name='ai_IdPJ']").val();
        //Utils.setConf("login", id);
        var id = Utils.getConf("login");

        var pos = this.extractPosition($("div.infoMenu:first").text());
        Utils.storeMZpos(id, pos);

        this.addMenu();
        this.addTimer();
    },

    addMenu : function() {
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
            .attr("href", Utils.getScriptInfo().downloadURL)
            .attr("title", Utils.getScriptInfo().name + " v" + Utils.getScriptInfo().version)
            .attr("target", "_top")
            .text("MAJ")
        )
        .appendTo($("body"));
    },

    addTimer : function() {
        var d = $("div.infoMenu"),
            tmp = /DLA:\s+([^<]+)</.exec(d.html()),
            dla = Utils.convertDate(tmp[1]),
            cnt = $("<div/>").addClass("countdown");
        d.css("top", "505px");
        d.find("br").replaceWith(cnt);

        var timer = setInterval(function() {
            var diff = Utils.getDateDiff(new Date(), dla);
            if(diff.length <= 0) {
                diff = "<a href='/mountyhall/MH_Play/Activate_DLA.php' target='_top' style='color:#AEFFAE'>Vous pouvez réactiver!</a>";
                clearInterval(timer);
            }
            cnt.html(diff);
        }, 1000);
    }
});

var MH_Play_Play_news = $.inherit(Page, {

    init : function() {
        //this.jubilaire();
    },

    jubilaire : function() {
        $.get("http://mountyzilla.tilk.info/scripts/anniv.php",
            function(data) {
                var p = $($("p > a:contains('messagerie')")[0]).parent();
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

var MH_Play_Play_action = $.inherit(Page, {
    init : function() {
        this.display.normalizeFontSize();
        $('select').find('optgroup').each(function(){
            if($(this).prop('label') == "** Actions Spéciales **") {
              $(this).css("background-color", "#99CCFF");
              $(this).parent().css("background-color", "#99CCFF");
            }
        });
    }
});

var MH_Play_Actions_Abstract = $.inherit(Page, {
    init : function() {
        this.display.normalizeFontSize();
        this.display.protectMonsters();

        {
            var id = $("[name='ai_IdSort'][value!='0']").val();
            if(Utils.isDefined(id)) {
                this.logger.log("Sort " + id + " detected");
                Utils.setConf("action", "Sort" + id);
                this.initPageSort(id);
                return;
            }
        }
        {
            var id = $("[name='ai_IdAction'][value!='0']").val();
            if(Utils.isDefined(id)) {
                this.logger.log("Action " + id + " detected");
                Utils.setConf("action", "Action" + id);
                this.initPageAction(id);
                return;
            }
        }
    },
    initPageSort : function(id) {
        this.injectTrollsTags("PJ_","");
        this.injectMonstresTags("ME_","");

        switch(id) {
            case "10": // IdT
                this.injectTresorsTags("2_", "");
                break;

            case "21": // Projection
            case "2" : // Hypnotisme
            case "20": // AA
            case "12": // Faiblesse Pasagère
            case "17": // Sacrifice
                break;
        }
    },
    initPageAction : function(id) {
        this.injectTrollsTags("PJ_", "");
        this.injectMonstresTags("ME_","");

        switch(id) {
            case "4": // Ramasser un trésor
                this.injectTresorsTags("", "_TE");
                break;

            case "15": // Abandonner
                this.injectMonstresTags("","", "ai_DropTo");
                break;

            case "26": // Donner des GG
                break;

            case "11": // Utiliser un objet
                break;

            case "7": // Ramasser un champignon
                this.injectChampignonsTags("", "_??"); //TODO
                break;

            case "123": // Lancer de potion
                this.injectTresorsTags("", "");
                break;
                
            case "116": // CdM
            case "118": // Insulte
                break;

        }
    }
});

var MH_Play_Actions_Sorts_Play_a_SortYY = $.inherit(MH_Play_Actions_Abstract);
var MH_Play_Actions_Play_a_ActionYY = $.inherit(MH_Play_Actions_Abstract);
var MH_Play_Actions_Sorts_Play_a_SortXX = $.inherit(MH_Play_Actions_Abstract);
var MH_Play_Actions_Competences_Play_a_CompetenceYY = $.inherit(MH_Play_Actions_Abstract);
var MH_Play_Actions_Play_a_NoAction = $.inherit(MH_Play_Actions_Abstract);

var MH_Play_Actions_Sorts_Play_a_Sort24 = $.inherit(Page, { // TELEK
    init : function() {
        this.injectTresorsTags("", "");
    }
});

var MH_Play_Actions_Play_a_Attack = $.inherit(Page, {
    init : function() {
        this.display.normalizeFontSize();
        this.display.protectMonsters();
        this.injectTrollsTags("PJ_","");
        this.injectMonstresTags("ME_","");
    }
});


var MH_Missions_Mission_Liste = $.inherit(Page, {
    init : function() {

        $("<a href='http://mh.swale.fr/ihm/mission.php'>Résumé des missions</a>").insertAfter($(".titre2:first"));

        var missions = $("table.mh_tdborder:first tr.mh_tdtitre").map(function(){

            var tr = $(this);

            var tmp = /Mission \[(\d+)\]/.exec(tr.find("div.mh_titre3").text());
            var idMission = tmp[1];


            var tmp = /(\d+) étapes? - (\d+) récompenses? - Meneur : (.*)/.exec(tr.find("div.mh_titre4").text());
            var noSteps = tmp[1];
            var noAwards = tmp[2];
            var leader = tmp[3];

            var tmp = /EnterPJView\((\d+),750,550\)/.exec(tr.find("div.mh_titre4 a").attr("href"));
            var leaderId = tmp[1];

            var description = tr.next("tr").text().trim();

            return {
                mission : idMission,
                description : description,
                noSteps : noSteps,
                noAwards : noAwards,
                leaderId : leaderId,
                leader : leader
            };
        }).get();

        this.callAPIMiltown({
            api : "mission",
            call : "liste",
            data : {
                missions : missions
            }
        });

        $("table.mh_tdborder:first tr.mh_tdtitre").each(function(){

            var tr = $(this);

            var tmp = /Mission \[(\d+)\]/.exec(tr.find("div.mh_titre3").text());
            var idMission = tmp[1];

            $("<iframe/>")
            .css("display", "none")
            .attr("src", "/mountyhall/MH_Missions/Mission_Equipe.php?ai_idMission=" + idMission)
            .attr("name", "KMHC_mission_equipe_" + idMission)
            .on("load", function() {
                $(this).remove();
            })
            .appendTo("body");

            $("<iframe/>")
            .css("display", "none")
            .attr("src", "/mountyhall/MH_Missions/Mission_Etape.php?ai_idMission=" + idMission)
            .attr("name", "KMHC_mission_etape_" + idMission)
            .on("load", function() {
                $(this).remove();
            })
            .appendTo("body");


            $("<tr/>")
            .addClass("mh_tdtitre")
            .append(
                $("<td/>")
                .attr("align", "center")
                .append(
                    $("<b/>")
                    .append('<a href="/mountyhall/MH_Missions/Mission_Description.php?ai_idMission=' + idMission + '">[Description]</a>')
                    .append(' - ')
                    .append('<a href="/mountyhall/MH_Missions/Mission_Equipe.php?ai_idMission=' + idMission + '">[L\'Equipe]</a>')
                    .append(' - ')
                    .append('<a href="/mountyhall/MH_Missions/Mission_Etape.php?ai_idMission=' + idMission + '">[Les Etapes]</a>')
                    .append(' - ')
                    .append('<a href="/mountyhall/MH_Missions/Mission_Recompense.php?ai_idMission=' + idMission + '">[Les Récompenses]</a>')
                    .append(' - ')
                    .append('<a href="/mountyhall/MH_Missions/Mission_Abandon.php?ai_idMission=' + idMission + '">[Abandonner]</a>')
                    .append(' - ')
                    .append('<a href="/mountyhall/MH_Missions/Mission_Aide.php?ai_idMission=' + idMission + '">[Aide]</a>')
                )
            )
            .insertAfter(tr);
        });
    }
});

var MH_Missions_Mission_Equipe = $.inherit(Page, {
    init : function() {
        var tmp = /Mission \[(\d+)\]/.exec($("div.titre2").text());
        var idMission = tmp[1];

        var team = $("form tr.mh_tdpage").map(function(){
            var tr = $(this);
            var id = tr.find("td:nth-child(2)").text().trim();
            var nom = tr.find("td:nth-child(3)").text().trim();
            var race = tr.find("td:nth-child(4)").text().trim();
            var level = tr.find("td:nth-child(5)").text().trim();
            var email = tr.find("td:nth-child(6)").text().trim();
            var rang = tr.find("td:nth-child(7)").text().trim();
            var date = tr.find("td:nth-child(8)").text().trim();

            return {
                id : id,
                nom : nom,
                race : race,
                niveau : level,
                email : email,
                rang : rang,
                date : date
            };
        }).get();

        this.callAPIMiltown({
            api : "mission",
            call : "equipe",
            data : {
                mission : idMission,
                team : team
            }
        });
    }
});

var MH_Missions_Mission_Recompense = $.inherit(Page, {
    init : function() {
        var tmp = /Mission \[(\d+)\]/.exec($("div.titre2").text());
        var idMission = tmp[1];

        var recompenses = $("tr.mh_tdpage").map(function(){
            var tr = $(this);
            var recompense = /(\d+)/.exec(tr.find("td:nth-child(1)").text())[1];
            var description = tr.find("td:nth-child(2)").text().trim();

            return {
                recompense : recompense,
                description : description
            };
        }).get();

        this.callAPIMiltown({
            api : "mission",
            call : "recompense",
            data : {
                mission : idMission,
                recompenses : recompenses
            }
        });
    }
});

var MH_Missions_Mission_Etape = $.inherit(Page, {
    init : function() {
        var tmp = /Mission \[(\d+)\]/.exec($("div.titre2").text());
        var idMission = tmp[1];

        var steps = $("form tr.mh_tdpage").map(function(){
            var tr = $(this);
            var step = /(\d+)/.exec(tr.find("td:nth-child(1)").text())[1];
            var description = tr.find("td:nth-child(2)").text().trim();

            return {
                step : step,
                description : description
            };
        }).get();

        this.callAPIMiltown({
            api : "mission",
            call : "etape",
            data : {
                mission : idMission,
                steps : steps
            }
        });
    }
});

var MH_Play_Play_profil2 = $.inherit(Page, {
    init : function() {
        this.sendData();
        this.removeAds();
        this.tuneIHM();
    },

    sendData : function() {
        $("<iframe/>")
        .css("display", "none")
        .attr("src", "/mountyhall/MH_Play/Play_profil.php")
        .attr("name", "KMHC_play_profil")
        .on("load", function() {
            $(this).remove();
        })
        .appendTo("body");
        return;

        var result = $("table:first").text();
        result = result.replace(/<\/(TD|TH)[^>]*>/gi,"");
        result = result.replace(/<\/(TABLE|TR)[^>]*>/gi,"\n");
        result = result.replace(/<\/?[^>]+>/gi,"");
        result = result.replace(/[\n\r\t]+/gi,"");
        result = result.replace(/ +/gi," ");

        var troll = result.match(/.*Identifiants[^\d]*(\d+)/)[1];

        // Appel de l'API
        this.callAPIConnected({
            api : "profile2",
            data : {
                "profile" : "MON PROFIL " + result
            }
        });
    },

    removeAds : function () {
        $("iframe").parent("div:first").remove();
    },

    tuneIHM : function() {
        var stats = this.getStats();

        // Echéance du Tour
        {
            var insertAfter = $("#dla > div > table th:contains(Estimation DLA suivante)").append(" (1)").parents("tr:first");
            var nextDla = Utils.convertDate(stats.dla.next);
            for(var i = 1 ; i <= 3 ; i++) {
                nextDla.setHours(nextDla.getHours() + stats.dla.duration.total.hour);
                nextDla.setMinutes(nextDla.getMinutes() + stats.dla.duration.total.min);
                if(i>1) {
                    insertAfter =
                        $("<tr/>")
                        .append($("<th/>").text("Estimation DLA suivante (" + i + ")"))
                        .append($("<td/>").append($("<i/>").text(Utils.dateToString(nextDla))))
                    .insertAfter(insertAfter);
                }
            }
        }



        // Expérience
        if(stats.xp.level < 60) {
            var pi_nextLvl = stats.xp.level * (stats.xp.level + 3) * 5;
            var px_ent = 2 * stats.xp.level;
            var px = stats.xp.PX['public'] + stats.xp.PX['private'];
            if(stats.xp.level < 3) {
                px_ent = Math.max(px_ent, Math.min(px, 5));
            }
            var nb_ent = Math.ceil((pi_nextLvl - stats.xp.PI.all) / px_ent);

            $("<tr/>")
            .append($("<th/>").text("Niveau " + (stats.xp.level + 1)))
            .append($("<td/>").attr("colspan", "2").append(nb_ent + ' entraînement' + (nb_ent > 1 ? 's' : '')))
            .insertAfter($("#exp table th:contains(Niveau)").parents("tr:first"));
        }

        // Point de Vie
        {
            var ctn = $("#pos table > tbody");

            var pvmax = stats.hp.max.total;

            ctn.find("img").attr("title", '1 PV de perdu = +'+Math.floor(250 / pvmax) +' min ' + (Math.floor(15000/pvmax)%60) + ' sec');

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
                    ctn
                    .append(
                        $("<tr/>")
                        .append($("<th/>").text("Infos"))
                        .append($("<td/>").append(texte))
                    );
                }
            }
        }

        // Caracs
        {
                var caracs = [
                [
                    "Attaque",
                    stats.attaque.moy,
                    stats.attaque.desReel       + stats.attaque.bm,
                    stats.attaque.desReel * 6   + stats.attaque.bm,
                    stats.attaque.desReel * 3.5 + stats.attaque.magique,
                    stats.attaque.desReel       + stats.attaque.magique,
                    stats.attaque.desReel * 6   + stats.attaque.magique
                ],
                [
                    "Esquive",
                    stats.esquive.desReel * 3.5 + stats.esquive.physique + stats.esquive.magique,
                    stats.esquive.desReel       + stats.esquive.physique + stats.esquive.magique,
                    stats.esquive.desReel * 6   + stats.esquive.physique + stats.esquive.magique
                ],
                [
                    "Dégâts",
                    stats.degat.moy,
                    stats.degat.des     + stats.degat.bm,
                    stats.degat.des * 3 + stats.degat.bm,
                    stats.degat.des * 2 + stats.degat.magique,
                    stats.degat.des     + stats.degat.magique,
                    stats.degat.des * 3 + stats.degat.magique
                ],
                [
                    "Régénération",
                    stats.regen.des * 2   + stats.regen.physique + stats.regen.magique,
                    stats.regen.des       + stats.regen.physique + stats.regen.magique,
                    stats.regen.des * 3   + stats.regen.physique + stats.regen.magique
                ],
                [
                    "Armure",
                    stats.armure.desReel * 2 + stats.armure.physique + stats.armure.magique,
                    stats.armure.desReel     + stats.armure.physique + stats.armure.magique,
                    stats.armure.desReel * 3 + stats.armure.physique + stats.armure.magique,
                    stats.armure.desReel * 2 + stats.armure.magique,
                    stats.armure.desReel     + stats.armure.magique,
                    stats.armure.desReel * 3 + stats.armure.magique
                ]
            ];

            var ctn = $("<table/>").css("margin-top", "15px");
            ctn.append(
                $("<thead/>")
                .append(
                $("<tr>")
                .append($("<th/>").attr("rowspan", "2").css("text-align", "center").text("Nom"))
                .append($("<th/>").attr("colspan", "3").css("text-align", "center").text("Physique"))
                .append($("<th/>").attr("colspan", "3").css("text-align", "center").text("Magique"))
                ,
                $("<tr>")
                .append($("<th/>").css("border-bottom", "1px dotted gray").css("text-align", "center").text("Moy."))
                .append($("<th/>").css("border-bottom", "1px dotted gray").css("text-align", "center").text("Min"))
                .append($("<th/>").css("border-bottom", "1px dotted gray").css("text-align", "center").text("Max"))
                .append($("<th/>").css("border-bottom", "1px dotted gray").css("text-align", "center").text("Moy."))
                .append($("<th/>").css("border-bottom", "1px dotted gray").css("text-align", "center").text("Min"))
                .append($("<th/>").css("border-bottom", "1px dotted gray").css("text-align", "center").text("Max"))
                )
            );
            ctn.append(
                $("<tbody/>")
            );

            ctn.insertAfter($("#caracs"));
            $("<h3/>").addClass("mh_tdtitre").text("Valeurs calculées").insertAfter($("#caracs"));
            $("<p/>").insertAfter($("#caracs"));

            $.each(caracs, function(i, v) {
                var row = $("<tr/>").css("display", "table-row").appendTo(ctn.find("tbody"));
                row.append($("<td/>").text(v[0]));
                row.append(
                    $("<td/>")
                    .attr("width", "30")
                    .addClass("numeric")
                    .append(v[1]))
                .append(
                    $("<td/>")
                    .addClass("numeric")
                    .append(v[2])
                )
                .append(
                    $("<td/>")
                    .addClass("numeric")
                    .append(v[3])
                );
                if(v.length > 4) {
                    row.append(
                        $("<td/>")
                        .attr("width", "30")
                        .addClass("numeric")
                        .append(v[4]))
                    .append(
                        $("<td/>")
                        .addClass("numeric")
                        .append(v[5])
                    )
                    .append(
                        $("<td/>")
                        .addClass("numeric")
                        .append(v[6])
                    );
                } else {
                    row.append($("<th/>").attr("colspan", "3"));
                }
            });

            var stabilite_des = Math.floor(2 * (stats.esquive.des + stats.regen.des) / 3),
                stabilite_bonus = stats.esquive.physique + stats.esquive.magique;
            $("#carac th:contains(Agilité)").parents("tbody:first").append(
                $("<tr>")
                .append($("<th/>").text("Stabilité"))
                .append($("<td/>").text((stabilite_des + " D6") + " " + (function(v) { return (v >= 0 ? "+" : "-") + v; })(stabilite_bonus)))
            /*
                .append($("<td/>").text(3.5 * stabilite_des + stabilite_bonus))
                .append($("<td/>").text((stabilite_des + stabilite_bonus) + ' - ' + (stabilite_des * 6 + stabilite_bonus)))
                .append($("<td/>").attr("colspan", "2"))
                */
            );
        }

        $("<style type='text/css'> div.actionPopup th { text-align:right;} </style>").appendTo("head");


        $.each(["Comp", "Sort"], $.proxy(function(idx, actionType) {
            var ctn = $("#" + actionType.toLowerCase() + " > div > table > tbody");
            var actions = Object.keys( DB_talents[actionType] );

            // Sort reservé
            if(actionType == "Sort") {
                actions = $(actions).not(["1","2","3","4","14"]);
            }

            var currentActions = $.map(ctn.find("> tr > td:nth-child(2) > a"), function(link){
                link = $(link);
                var tmp = /ai_ID(Comp|Sort)=(\d+)/.exec(link.attr("href"));
                return tmp[2];
            });

            $.each($(actions).not(currentActions), $.proxy(function(idx, actionId) {
                $("<tr/>")
                .css("display", "table-row;")
                .attr("data-actionType-addon", "true")
                .hide()
                .append($("<td/>"))
                .append(
                    $("<td/>")
                    .addClass("expand footable-visible")
                    .append(
                        $("<a/>")
                        .attr("href", "/mountyhall/View/Detail"+actionType+".php?ai_ID"+actionType+"="+actionId)
                        .addClass("AllLinks")
                        .text(DB_talents[actionType][actionId].name)
                        .click(function() {
                            $('#modal #content').load( $(this).attr('href'));
                            $('#modal').css('opacity', 1);
                            $('#modal').css('pointer-events', 'auto');
                            return false;
                        })
                    )
                )
                .append(
                    $("<td/>")
                    .addClass("numeric footable-visible")
                    .text(1)
                )
                .append(
                    $("<td/>")
                    .addClass("numeric footable-visible")
                    .text(("Sort" == actionType ? "80" : "90") + " %")
                )
                .append(
                    $("<td/>")
                    .addClass("numeric footable-visible")
                    .text("0 %")
                )
                .append(
                    $("<td/>")
                    .addClass("numeric footable-visible footable-last-column")
                    .text("0 % / 0 jet")
                )
                .append(
                    $("<td/>")
                    .css("display", "none")
                    .text("1")
                )
                .append(
                    $("<td/>")
                    .css("display", "none")
                    .append("niveau 1 : 90 %")
                )
                .appendTo(ctn);
            }, this));

            $("<tr/>")
            .append(
                $("<td/>")
                .attr("align", "center")
                .attr("colspan", "6")
                .text("Afficher/Cacher le savoir inconnu")
                .addClass("mh_links")
                .css("cursor","hand")
                .css("cursor","pointer")
                .click(function(event) {
                    var ctn = $(event.target);
                    ctn.parents("tbody:first").find("[data-actionType-addon]").toggle();
                })
            )
            .appendTo(ctn);

        }, this));

        $("#sortileges a.AllLinks, #competences a.AllLinks")
        .hover($.proxy(function(event) {
            Page.showTalentPopup($(event.target), true, false);
        }, this), $.proxy(function(event) {
            Page.hideTalentPopup($(event.target), true);
        }, this));
    },

    getStats : function() {
        var getText = function(name, colId) {
            var xpath = "td" + (Utils.isUndefined(colId) ? "" : (":nth-child(" + colId +")"));
            var text = $("th:contains(" + name + ")").parents("tr:first").find(xpath).text().replace(/[\n\r\t]+/gi," ").replace(/\s+/gi," ");
            return text;
        };

        var getTextTd = function(name, colId) {
            var xpath = "td" + (Utils.isUndefined(colId) ? "" : (":nth-child(" + colId +")"));
            var text = $("td:contains(" + name + ")").parents("tr:first").find(xpath).text().replace(/[\n\r\t]+/gi," ").replace(/\s+/gi," ");
            return text;
        };

        var setTextTd = function(name, colId, text) {
            var xpath = "td" + (Utils.isUndefined(colId) ? "" : (":nth-child(" + colId +")"));
            $("td:contains(" + name + ")").parents("tr:first").find(xpath).text(text);
        };

        var extractHM = function(text) {
            var tmp = /(-?\d+)\s+h\s+(-?\d+)/.exec(text);
            //console.log(text, tmp);
            var hm = {
                hour : parseInt(tmp[1]),
                min : parseInt(tmp[2])
            };
            return hm;
        };

        var stats = {};

        // Echéance du Tour
        try {
            stats.dla = {
                next : getText("Date Limite d'Action"),
                duration : {
                    normal : extractHM(getText("Durée normale de mon Tour")),
                    bonus : extractHM(getText("Bonus/Malus sur la durée")),
                    injuries : extractHM(getText("Augmentation due aux blessures")),
                    stuf : extractHM(getText("Poids de l'équipement")),
                    total : extractHM(getText("Durée de mon prochain Tour"))
                }
            };
        } catch(e) {
            this.logger.error("Error while parsing DLA");
        }

        try {
            stats.pa = /(\d) PA/.exec(getText("PA restant(s)"))[1];
        } catch(e) {
            this.logger.error("Error while parsing PA");
        }


        try {
            var tmp = /X = (-?\d+) \| Y = (-?\d+) \| N = (-?\d+)/.exec(getText("Position"));
            stats.position = {
                x : parseInt(tmp[1]),
                y : parseInt(tmp[2]),
                n : parseInt(tmp[3])
            };
        } catch(e) {
            this.logger.error("Error while parsing Position");
        }

        try {
            stats.xp = {
                level : parseInt(getText("Niveau")),
                PI : {
                    all : parseInt(getTextTd("Total",2)),
                    current : parseInt(getText("PI", 3))
                },
                PX : {
                    'public' : parseInt($("#px").text()),
                    'private' : parseInt($("#px_perso").text())
                }
            };
        } catch(e) {
            this.logger.error("Error while parsing PI/level");
        }

        var caracs = [{
            key:"attaque",
            label : "Attaque",
            dice : 6
        }, {
            key:"esquive",
            label : "Esquive",
            dice : 6
        }, {
            key:"degat",
            label : "Dégâts",
            dice : 3
        }, {
            key:"hp",
            label : "Point de Vie",
            dice : 1
        }, {
            key:"regen",
            label : "Régénération",
            dice : 3
        }, {
            key:"armure",
            label : "Armure",
            dice : 3
        }, {
            key:"view",
            label : "Vue",
            dice : 1
        }, {
            key : "rm",
            label : "Résistance à la Magie",
            dice : 1
        }, {
            key : "mm",
            label : "Maîtrise de la Magie",
            dice : 1
        }];

        $.each(caracs, $.proxy(function(i, carac) {
            try {
                var key = carac.key;
                var label = carac.label;
                var dice = carac.dice;

                stats[key] = {
                    des : parseInt(getTextTd(label, 2)) || 0,
                    desMalus : parseInt(getTextTd(label, 3)) || 0,
                    physique : parseInt(getTextTd(label, 4)) || 0,
                    magique : parseInt(getTextTd(label, 5)) || 0
                };

                stats[key].desReel = stats[key].des + (stats[key].desMalus || 0);
                stats[key].bm = stats[key].physique + stats[key].magique;
                stats[key].moy = (1+dice) / 2 * stats[key].desReel + stats[key].bm;
                stats[key].total = stats[key].desReel + stats[key].bm;
            } catch(e) {
                this.logger.error("Error while parsing " + label);
            }

        }, this));

        try {
            var tmp = /(\d+)\/\d+/.exec(getText("Vie"));
            var hp = stats.hp;
            stats.hp = {
                current : parseInt(tmp[1]),
                max : {
                    value : hp.desReel,
                    bonus : hp.bm,
                    total : hp.total
                }
            }
        } catch(e) {
            this.logger.error("Error while parsing HP");
        }

        try {
            var view = stats.view;
            stats.view = {
                range : view.desReel,
                bonus : view.bm,
                total : view.total
            };
        } catch(e) {
            this.logger.error("Error while parsing view");
        }

        try {
            var tmp = /(.*)\s+\(\s+(\d+)\s?([+-]\d+)?\s+\)/.exec(getText("Fatigue"));
            stats.hp.fatigue = {
                display : tmp[1],
                value : parseInt(tmp[2]),
                bm : (tmp[3] ? parseInt(tmp[3]) : 0)
            };
        } catch(e) {
            this.logger.error("Error while parsing Fatigue");
        }

        try {
            stats.corpulence = parseInt(getText("Corpulence"));
            stats.agilite = parseInt(getText("Agilité"));
        } catch(e) {
            this.logger.error("Error while parsing more");
        }

        try {
            stats.concentration = parseInt(getText("Bonus de Concentration"));
            stats.kills = parseInt(getText("Meurtres"));
            stats.deaths = parseInt(getText("Morts"));
        } catch(e) {
            this.logger.error("Error while parsing bonus");
        }

        // Computed
        try {
            stats.dla.duration.normal.total = stats.dla.duration.normal.hour * 60 + stats.dla.duration.normal.min;
            stats.dla.duration.bonus.total = stats.dla.duration.bonus.hour * 60 + stats.dla.duration.bonus.min;
            stats.dla.duration.injuries.total = stats.dla.duration.injuries.hour * 60 + stats.dla.duration.injuries.min;
            stats.dla.duration.stuf.total = stats.dla.duration.stuf.hour * 60 + stats.dla.duration.stuf.min;
            stats.dla.duration.total.total = stats.dla.duration.total.hour * 60 + stats.dla.duration.total.min;

            stats.hp.fatigue.total = stats.hp.fatigue.value + stats.hp.fatigue.bm;

            stats.magie = {
                rm : {
                    value : stats.rm.desReel,
                    bonus : stats.rm.bm
                },
                mm : {
                    value : stats.mm.desReel,
                    bonus : stats.mm.bm
                }
            };

        } catch(e) {
            this.logger.error("Error while computing");
        }

        Utils.setConf("profil_stats", JSON.stringify(stats))

        return stats;
    }
});

var Messagerie_MH_Messagerie = $.inherit(Page, {
    init : function() {
        if(document.location.search.match(/^\?cat=9/)) {
            $("form[name=botForm]").after($("#mhPlay > div.mh_tdtitre:first").clone(), $("<br/>"), $("#menu-msg").clone());

        } else if(document.location.search.match(/^\?cat=1/)) {
            $("form[name=mailboxForm]").after($("#mhPlay > div.mh_tdtitre:first").clone(), $("<br/>"), $("#menu-msg").clone());

        } else if(document.location.search.match(/^\?cat=2/)) {
            $("form[name=sendboxForm]").after($("#mhPlay > div.mh_tdtitre:first").clone(), $("<br/>"), $("#menu-msg").clone());

        } else if(document.location.search.match(/^\?cat=3/)) {
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
                    bt.parent().append(this.display.mhButton(e[0], e[1])).append(" ");
                }, this));
            ta.on('keyup change', function(e) { render($(this), pr); });
            ti.val(function(i, v) {
              if(v) {
                  var re1 = /Re\s*:\s*/ig,
                      n = (v.match(re1) || []).length,
                      re2 = /Re\s*\(\d+\)\s*:\s*/ig;
                  n += (function() {
                      var p = 0,
                          a = (v.match(re2) || []).join().match(/\d+/g) || [];
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

var Messagerie_ViewMessage = $.inherit(Page, {
    init : function() {
        $("input[name='bAnswer'],input[name='bAnswerToAll']").on('click', function(e) {
            var reply = $($(this).closest('tr').prev().children()[0]).html();
            this.utils.setValue('lastReply', reply);
        });
    }
});

var Messagerie_ViewMessageBot = $.inherit(Page, {
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
                "tag" : tmp[2]
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


        if(title.indexOf("Compétence : Identification des Champignons") > -1) {
            var tmp = /Vous avez reconnu le Champignon :\s+(.*)(?:Salé|Sucré)\s+\(\d+\)\s+qui se trouvait en X=(-?\d+), Y=(-?\d+), N=(-?\d+)/.exec(body);
            api = "tag";
            data =  {
                "type" : 4,
                "num" : Utils.getCoordRef(parseInt(tmp[2]),parseInt(tmp[3]),parseInt(tmp[4])),
                "tag" : tmp[1]
            };
        }

        var tdStatus = $("table:first tr:nth-child(4) td:first");
        if(null == api) {
            tdStatus.html("<center><i>Message non reconnu</i></center>");
            return;
        }

        tdStatus.html("<center><b>Données en cours d'envoi...</b></center>");

        // Appel de l'API
        this.callAPIConnected({
            api : api,
            data : data,
            callback : function() {
                tdStatus.html("<center><b>Données envoyées</b></center>");
            },
            scope : this

        });
    }
});


var MH_Play_Play_vue = $.inherit(Page, {

    monsterDatas : {},

  init : function(){
        
    this.sendView();
    $("#mhPlay").attr("data-view", "main");

    $("#mh_vue_hidden_trolls table:first thead tr.mh_tdtitre th:nth-child(" + this.getColumnId("mh_vue_hidden_trolls", "Niv.") + ")").text("Niveau").width("60px");

    this.changeTrollColumnsOrder()
    this.addTrollInfoColumns();
    this.addPharozViewLinks();
    this.highlightTreasures();
    this.addMonsterCdmLink();
    this.addBarycentreUI();
    this.getBBcodeVersion();
    this.addSameXYN();
    this.addToggleTresors();
    this.addChampignonsRef();
    this.addTagEdition();
    this.addMonsterInfos();

    if(Utils.getConf("mountyzilla") != "true") {
      this.addMonsterLevel();
      this.addSharingUI();
    }
    this.addTrollEventLink();
    this.addInfos();
    this.fixTableSize();
    this.addOwnRules();
    this.addTeamRules();

        // Tune ihm
    $("#mh_vue_hidden_monstres table:first tr.mh_tdpage td:nth-child(" + this.getColumnId("mh_vue_hidden_monstres", "Nom") + ") a:contains('Gowap Apprivoisé'),a:contains('Golem de cuir'),a:contains('Golem de métal'),a:contains('Golem de papier'),a:contains('Golem de mithril')").css("color", "#000");
    },

    addTeamRules : function() {
      this.addXRules("Consignes", "vue");
    },

    addOwnRules : function() {
      this.addXRules("Notes perso", "vue-" + Utils.getConf("login"));
    },

    changeTrollColumnsOrder : function() {
        var refColId = this.getColumnId("mh_vue_hidden_trolls", "Réf.");
        var niveauColId = this.getColumnId("mh_vue_hidden_trolls", "Niveau");
        $("#mh_vue_hidden_trolls table:first tr").each(function(idx, tr){
            $(tr).children(":nth-child("+niveauColId+")")
            .css("text-align", "center")
            .insertAfter($(tr).children(":nth-child("+refColId+")"));
        });
    },

    fixTableSize : function() {
        $.each(["mh_vue_hidden_monstres", "mh_vue_hidden_trolls", "mh_vue_hidden_tresors"], function(idx, tableId) {
            var widths = [];
            $("#" + tableId + " table:first > thead > tr.mh_tdtitre > th").each(function(idx, th){
                var width = $(th).attr("width");
                if(Utils.isUndefined(width)) {
                    width = $(th).width();
                }
                width += ((""+width).endsWith("px") ? "" : "px");
                widths[idx] = width;
                $(th).attr("width", width);
            });
            $("#" + tableId + " table:first > tbody > tr.mh_tdpage > td").each(function(){
                $(this).attr("width", widths[$(this).parent().children().index(this)]);
            });
        });
    },

    addTrollInfoColumns : function() {
        // Ajout de la colonne titre
        var guildeColId = this.getColumnId("mh_vue_hidden_trolls", "Guilde");
        $("#mh_vue_hidden_trolls table:first thead tr.mh_tdtitre:first th:nth-child("+guildeColId+")").after('<th width="160px" data-sort-ignore="true"><b>Infos</b></th>');

        // Ajout des colonnes
        $("#mh_vue_hidden_trolls table:first tbody tr.mh_tdpage").each(function(){
            $(this).children('td:nth-child(' + guildeColId + ')').after($("<td/>"));
        });
    },

    getBBcodeVersion : function() {

        $.each(["mh_vue_hidden_monstres", "mh_vue_hidden_trolls", "mh_vue_hidden_tresors", "mh_vue_hidden_champignons", "mh_vue_hidden_lieux", "mh_vue_hidden_cadavres"], $.proxy(function(i, tableId) {

            $("#" + tableId + " table:first").parents("table").prev().find("td:nth-child(2) > a").parents("tr").first()
                    .append(
                        $("<td/>")
                        .attr("align", "left")
                        .attr("width", "50")
                        .append(
                            $("<input/>")
                            .addClass("mh_form_submit")
                            .attr("type", "button")
                            .attr("value", "BBCode")
                            .on('click', $.proxy(function(evt){
                                var cmp = $(evt.target);

                                var colsNames = ["Dist.", "Réf.", "Niveau", ["Nom", "Type", "Champignon"], "X", "Y", "N"];
                                var columns = [];

                                $.each(colsNames, $.proxy(function(i, names) {
                                    names = $.isArray(names) ? names : [names];
                                    $.each(names, $.proxy(function(i, name) {
                                        var colId = this.getColumnId(tableId, name);
                                        if(null != colId) {
                                            columns.push({
                                                id: colId,
                                                name:name
                                            });
                                            return false;
                                        }
                                    }, this));
                                }, this));

                                var lines = [];

                                // Header
                                var line = [];
                                $.each(columns, $.proxy(function(i, column) {
                                    line.push(column.name);
                                }, this));
                                lines.push(line);

                                // Body
                                var trs = $("#" + tableId + " table:first tr.mh_tdpage:visible");
                                var locked_trs = trs.filter(".xyn-locked");
                                if(locked_trs.length > 0) {
                                    trs = locked_trs;
                                }
                                trs.each($.proxy(function(iTr, tr) {
                                    var line = [];
                                    $.each(columns, $.proxy(function(i, column) {
                                        line.push($(tr).find("td:nth-child(" + column.id + ")").text());
                                    }, this));
                                    lines.push(line);
                                }, this));

                                // Format
                                var bbcode = "[table]" + $.map(lines, function(cols, iLine) {
                                    return "[tr]" + $.map(cols, function(col) {
                                        return "[td]" + (0 == iLine ? ("[b]" + col + "[/b]") : col) + "[/td]";
                                    }).join("") + "[/tr]";
                                }).join("\n") + "[/table]";

                                $("<div/>")
                                .css("width", "50%")
                                .css("height", "260px")
                                .css("overflow", "auto")
                                .css("margin", "auto")
                                .css("position", "absolute")
                                .css("top", "0")
                                .css("left", "0")
                                .css("bottom", "0")
                                .css("right", "0")
                                .append(
                                    $("<div/>")
                                    .append(
                                        $("<textarea/>")
                                        .css("width", "100%")
                                        .css("height", "240px")
                                        .val(bbcode)
                                    )
                                )
                                .append(
                                    $("<input/>")
                                    .attr("type", "button")
                                    .attr("value", "Fermer")
                                    .css("text-align", "center")
                                    .addClass("mh_form_submit")
                                    .click(function(){
                                        $(this).parents("div:first").remove();
                                    })
                                )
                                .appendTo($("body"))

                                //console.debug(bbcode);
                                //alert(bbcode);

                            },this))
                        )
                    );

            }, this)
        );
    },

    addToggleTresors : function() {

        Utils.addGlobalStyle(['.view-tresor-hideTagged { display: none !important; }']);
        Utils.addGlobalStyle(['.view-tresor-disabled { -webkit-filter: grayscale(100%); -moz-filter: grayscale(100%); -o-filter: grayscale(100%); -ms-filter: grayscale(100%); filter: grayscale(100%);  }']);
        Utils.addGlobalStyle(['.view-tresor input { display: none; }']);

        var td = $("#mh_vue_hidden_tresors table:first").parents("table").prev().find("a[name='tresors']").parents("td:first");
        td.append(
            $("<span/>")
            .css("margin-left", "5px")
            .css("font-weight", "bold")
            .text("| Cacher: ")
        );
        td.append(
            $("<span/>")
            .addClass("view-tresor")
            .css("margin-right", "5px")
            .append(
                $("<input/>")
                .attr("type", "checkbox")
                .attr("id", "view-tresor-hideTagged")
                .click(function(event) {
                    var target = $(event.target);
                    var checked = target.is(':checked');
                    target.parents("span:first").find("img").toggleClass("view-tresor-disabled");
                    Utils.setConf(target.attr("id"), checked);
                    $("#mh_vue_hidden_tresors").find("> td > table > tbody > tr:has(label[title])")[checked ? "addClass" : "removeClass"](target.attr("id"));
                }),
                $("<label/>")
                .attr("for", "view-tresor-hideTagged")
                .append($("<img src='http://games.mountyhall.com/mountyhall/Images/Icones/I_Book.png'/>").css("height", "20").attr("title", "Objets identifiés"))
              )
        );
        // L'initialisation se fait dans la methode de recuperation des tags

        $.each([
            {label:"Composant", icon:'S_Shadow03'},
            {label:"Potion", icon:'P_Medicine05'},
            {label:"Parchemin", icon:'I_Scroll02'},
            {label:"Carte", icon:'I_Map'},
            {label:"Outils", icon:'E_Gold01'},
            {label:"Minerai", icon:'I_Crystal01'},
            {label:"Casque", icon:'C_Elm03'},
            {label:"Armure", icon:'A_Armor05'},
            {label:"Bouclier", icon:'E_Metal02'},
            {label:"Talisman", icon:'Ac_Necklace03'},
            {label:"Bottes", icon:'A_Shoes02'},
            {label:"Armes", icon:'S_Sword07', alias:["Arme (1 main)", "Arme (2 mains)", "Lame en pierre"]},
            {label:"Bidouille", icon:'I_WolfFur', alias:["[Bidouille]"]},
            {label:"Coquillage", icon:'I_BirdsBeak'},
            {label:"Apocryphe", icon:'S_Fire08'},
            {label:"GG", icon:'E_Gold02', alias:["Piécettes à Miltown","Gigots de Gob"], everywhere : true}
        ], $.proxy(function(idType, type) {
            var label, alias, everywhere, icon;
            if($.type( type ) == "object") {
                label = type.label;
                icon = type.icon;
                alias = type.alias || type.label;
                everywhere = type.everywhere || false;
            }
            Utils.addGlobalStyle(['.view-tresor-hide' + idType +' { display: none !important; }']);
            td.append(
                $("<span/>")
                .addClass("view-tresor")
                .css("margin-right", "5px")
                .append(
                    $("<input/>")
                    .attr("type", "checkbox")
                    .attr("id", "view-tresor-hide" + idType)
                    .click($.proxy(function(event) {
                        var target = $(event.target);
                        this.showHideTresorLine(target, alias, everywhere);
                    }, this)),
                    $("<label/>")
                    .attr("for", "view-tresor-hide" + idType)
                    .append($("<img src='http://games.mountyhall.com/mountyhall/Images/Icones/" + icon + ".png'/>").css("height", "20").attr("title", label))
                )
            );
            if("true" === Utils.getConf("view-tresor-hide" + idType)) {
                $("#view-tresor-hide" + idType).click();
            }
        }, this));
    },

    initToggleTresors : function() {
        if("true" === Utils.getConf("view-tresor-hideTagged")) {
            $("#view-tresor-hideTagged").click();
        }
    },

    showHideTresorLine : function(target, texts, everywhere) {
        var typeColId = this.getColumnId("mh_vue_hidden_tresors", "Type");

        texts = $.isArray(texts) ? texts : [texts];
        target.parents("span:first").find("img").toggleClass("view-tresor-disabled");
        var checked = target.is(':checked');
        Utils.setConf(target.attr("id"), checked);
        $("#mh_vue_hidden_tresors").find("> td > table > tbody > tr > td:nth-child(" + typeColId + ")").each(function(){
            var td = this;
            var c = (td.textContent || td.innerText).trim();
            $.each(texts, function() {
                var text = this;
                var io = c.indexOf(text);
                if((everywhere && io > -1) || (!everywhere && io === 0)) {
                    $(td).parents("tr:first")[checked ? "addClass" : "removeClass"](target.attr("id"));
                }
            });
        });
    },

    addChampignonsRef : function() {
        // Ajout de a colonne titre
        var distColId = this.getColumnId("mh_vue_hidden_champignons", "Actions");
        $("#mh_vue_hidden_champignons table:first thead tr.mh_tdtitre:first th:nth-child("+distColId+")").after('<th width="160px"><b>Réf.</b></th>');

        var xColId = this.getColumnId("mh_vue_hidden_champignons", "X");
        var yColId = this.getColumnId("mh_vue_hidden_champignons", "Y");
        var nColId = this.getColumnId("mh_vue_hidden_champignons", "N");
        var nameColId = this.getColumnId("mh_vue_hidden_champignons", "Champignon");

        $("#mh_vue_hidden_champignons table:first tbody tr.mh_tdpage").each($.proxy(function(iTr, tr) {
            var container = $("<td/>");
            $(tr).children('td:nth-child(' + distColId + ')').after(container);

            container.text(Utils.getCoordRef(
                parseInt($(tr).children('td:nth-child(' + xColId + ')').text()),
                parseInt($(tr).children('td:nth-child(' + yColId + ')').text()),
                parseInt($(tr).children('td:nth-child(' + nColId + ')').text())
            ));

        }, this));
    },

    addBarycentreUI : function() {

        $.each(["mh_vue_hidden_monstres", "mh_vue_hidden_trolls", "mh_vue_hidden_tresors", "mh_vue_hidden_champignons", "mh_vue_hidden_lieux", "mh_vue_hidden_cadavres"], $.proxy(function(i, tableId) {

            $("#" + tableId + " table:first").parents("table").prev().find("td:nth-child(2) > a").parents("tr").first()
                    .append(
                        $("<td/>")
                        .attr("align", "left")
                        .attr("width", "50")
                        .append(
                            $("<input/>")
                            .addClass("mh_form_submit")
                            .attr("type", "button")
                            .attr("value", "Barycentre")
                            .on('click', $.proxy(function(evt){
                                var cmp = $(evt.target);

                                var xColId = this.getColumnId(tableId, "X");
                                var yColId = this.getColumnId(tableId, "Y");
                                var nColId = this.getColumnId(tableId, "N");

                                var Ex = 0, Ey = 0, En = 0;
                                var trs = $("#" + tableId + " table:first tr.mh_tdpage");
                                if(trs.length > 0) {
                                    trs.each($.proxy(function(iTr, tr) {
                                        Ex += parseInt($(tr).find("td:nth-child(" + xColId + ")").text());
                                        Ey += parseInt($(tr).find("td:nth-child(" + yColId + ")").text());
                                        En += parseInt($(tr).find("td:nth-child(" + nColId + ")").text());
                                    }, this));

                                    cmp.val("X: " + Math.round(Ex/trs.length) + " | Y: " + Math.round(Ey/trs.length) + " | N: " + Math.round(En/trs.length));
                                    cmp.attr("disabled", "disabled");
                                    cmp.attr("type", "text");
                                    cmp.addClass('TextboxV2');
                                    cmp.css("text-align", "center");
                                    cmp.removeClass('mh_form_submit');
                                }

                            },this))
                        )
                    );

            }, this)
        );
    },

    addPharozViewLinks : function() {
        var mainView = $('[data-view="main"]');

        var altView = $("<iframe/>")
        .css("display", "none")
        .css("width", "98%")
        .attr("data-view", "KFE")
        .insertAfter(mainView);

        var fnShowKFEView = function(idView) {
            var vue = parseInt($('input[name="ai_MaxVue"]').val());
            var no = 0;
            var i = 0;
            while(i < vue) {
                if(i <= 11) {
                    no += 1;
                } else if(i <= 21) {
                    no += 1/2;
                } else {
                    no += 1/3;
                }
                i++;
            }

            var h = (Math.ceil(no)*2+1) * 52 /* Ceils */ + 52 /* Margin */;

            $('[data-view="main"]').hide();
            $('[data-view="KFE"]')
            .css("height", h + "px")
            .attr("src", "http://pharoz.net/MH/outil/?page=viewGraph&viewType=" + idView + "&displayNow=true&noMenu=true")
            .show()
            ;
        };

        $("<div/>")
        .append("<b>Vue dans l'outil</b> : ")
        .append(
            $("<a href='javascript:void(0)'>Vue 1</a>")
            .click(function(){
                fnShowKFEView(1);
            })
        )
        .append(" | ")
        .append(
            $("<a href='javascript:void(0)'>Vue 2</a>")
            .click(function(){
                fnShowKFEView(2);
            })
        )
        .append(" | ")
        .append(
            $("<a href='javascript:void(0)'>Vue MH</a>")
            .click(function(){
                $('[data-view="main"]').show();
                $('[data-view="KFE"]').hide();
            })
        )
        .css("background", "url(/MH_Packs/packMH_parchemin/fond/fond.jpg) repeat-y")
        .css("text-align", "center")
        .insertBefore( mainView );
    },

    highlightTreasures : function() {
        var refColId = this.getColumnId("mh_vue_hidden_tresors", "Type");

        $("#mh_vue_hidden_tresors table:first tr.mh_tdpage td:nth-child("+refColId+")").each(function(){
            $(this).html((function(txt) {
                $.each(
                    [
                        [/Gigots de Gob'?/, "<b style='color:#ff8000'>Piécettes à Miltown</b>"],
                        [/(Carte|Coquillage|Conteneur|Minerai|Parchemin|Tête Réduite|Spécial)/, "<b style='color:#900090'>$1</b>"]
                    ], function(i, r) {
                        txt = txt.replace(r[0], r[1]);
                    });
                return txt;
            })($(this).html()));
        });
    },

    addTagEditionForCell : function(cell, refColId, nomColId, type) {
        var ref = $(cell.children("td:nth-child(" + refColId + ")")).text();
        cell.children("td:nth-child(" + nomColId + ")").addClass("editable_ctn").append(this.getEditionField(ref, type));
    },

    addTagEdition: function() {
        $.each(
            [
                ["mh_vue_hidden_monstres", "Réf.", "Nom", 1],
                ["mh_vue_hidden_trolls", "Réf.", "Nom", 2],
                ["mh_vue_hidden_tresors", "Réf.", "Type", 3],
                ["mh_vue_hidden_champignons", "Réf.", "Champignon", 4],
                ["mh_vue_hidden_lieux", "Réf.", "Nom", 5]
            ], $.proxy(function(i, data) {
                var nomColId = this.getColumnId(data[0], data[2]);
                var refColId = this.getColumnId(data[0], data[1]);

                $("#" + data[0] + " table:first tbody tr.mh_tdpage").each($.proxy(function(iTr, tr) {
                    this.addTagEditionForCell($(tr), refColId, nomColId, data[3]);
                }, this));
            }, this)
        );
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
        $("#" + id + " table:first thead tr.mh_tdtitre th").each(function(idx){
            if($(this).text().indexOf(name) > -1) {
                i = idx+1;
            }
        });
        if(null == i) {
            // console.error("Unable to getColumnId('"+id+"', '"+name+"')");
        }
        return i;
    },

    addMonsterInfos : function() {
        var fnExtract = function(monsterFullName) {
            var monster = null;
            var template = null;

            var alias = DB_monstreAlias[monsterFullName];
            if(!Utils.isUndefined(alias)) {
                monsterFullName = alias;
            }

            var search = true;

            {
                var exceptions = ["Bouj'Dla Placide", "Crasc Médius", "Crasc Maexus"];
                for(var ex = 0; ex < exceptions.length; ex++) {
                    var exception = exceptions[ex];
                    if(monsterFullName.indexOf(exception) > -1) {
                        monster = DB_monstres[exception];
                        template = monsterFullName.substring(exception.length+1);
                        search = false;
                        break;
                    }
                }
            }

            if(search) {
                var p = monsterFullName.split(" ");
                var i = 0, j;
                do {
                    j = i+1;
                    do {
                        var t = p.slice(i, j);
                        monster = DB_monstres[t.join(" ")];
                        if(!Utils.isUndefined(monster) && monster != monsterFullName) {
                            if(i > 0) {
                              template = p.slice(0, i).join(" ");
                            } else {
                              template = p.slice(j, p.length).join(" ");
                            }
                        }
                        j++;
                    } while(monster == null && j <= p.length);
                    i++;
                } while(monster == null && i < p.length);
            }

            return {
                monster : monster,
                template : '' == template ? null : template
            };
        };

        var fnShowCarac = function(monster, template, age, key, name, suffix) {
            try {
                var v = monster[key];
                if(Utils.isUndefined(v) || null == v) {
                    return null;
                }

                var fnMerge = function(v, m) {
                    if(m === true) {
                        v = true;
                    } else if($.type( v ) === "number") {
                        v = parseInt(v) + parseInt(m);
                    } else if($.isArray(v)) {
                        if($.type( m ) === "string") {
                            v[0] = eval((v[0] + m));
                            v[1] = eval((v[1] + m));
                        } else {
                            v[0] = parseInt(v[0]) + parseInt(m);
                            v[1] = parseInt(v[1]) + parseInt(m);
                        }
                    }
                    return v;
                };

                var a = age[key];
                if(!Utils.isUndefined(a)) {
                    v = fnMerge(v, a);
                }

                if(null != template) {
                    var m = template[key];
                    if(!Utils.isUndefined(m)) {
                        v = fnMerge(v, m);
                    }
                }

                if($.isArray(v) && v[0] == v[1]) {
                    v = v[0];
                }

                if(v === false) {
                    return null;
                }

                if(v === true) {
                    v = "Oui";
                }

                return [name, ($.isArray(v) ? (" entre " + v.join(" et ")) : v) + ' ' + (suffix || '')];
            } catch(e) {
                console.log("Error parsing data for " + name + " [" + key + "]");
                return null;
            }
        };

        Utils.addGlobalStyle([
            ".monsterDbInfo        { margin: 0px; width:18px; height:18px; position:absolute; top:0px; right:0px; background-image:url('data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0NBODFGRjJGMEFBMTFFMjg2MENENjNBQUEzNUQ5RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0NBODFGRjNGMEFBMTFFMjg2MENENjNBQUEzNUQ5RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozQ0E4MUZGMEYwQUExMUUyODYwQ0Q2M0FBQTM1RDlGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQ0E4MUZGMUYwQUExMUUyODYwQ0Q2M0FBQTM1RDlGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt14P18AAAHFSURBVHjajJSvb8JAFMcfHWKgEFgIDoGhGjEMlm6CpG4MXcH+AjKNYALND0eCGRiyYJhAgyLBNWAmICEIDIi97+W4XG5t4Js8jl57n3vve6+NkKFKpZLgoc7hcOSN2zOO/nA47JnrIgakykOLI6HPZ7NZEdvtltbrNZ1OJ5+n3xg4+wdiSJeHqg5IpVLkeR4lk0k1xxAaDAY0n89JwnoKJDPp6hAsbjQatNvtxEJkgjnXdcm2bWq327RYLPCozbClJT1pmTWXy2UxNptNAYEABQDXAEqJBCxpbMIEoSzsiFJMoSxkF4/HcZnnZIqWPJ1ABUH0eQmCXq2AIxba7/fCC+1hpUKhIGAoVSpjhWUznU5F+rVaTZ0aoPAOG+C+pnw0DARDsSMWITabDaXTabXJeDzWHz+EgrAzMoGxaMRYLCbMR+DakB+VbV80T8xxHNVDYaZr+oFHfX0GPqCboU6ncw8E6lmyxX2zpNFopBrxFoQZ/vXUXmAYSiqVSsJYw8wwLTne8ecBP6vV6jeXy31fLhf3fD4/TiYTOh6P90Dw0vpBn5GMfHeKNyCfHB8MOQR+jzQguv2Z40nvFZwOx9c1C11/AgwA8H/OrmGqC5MAAAAASUVORK5CYII='); }",
            ".monsterDbInfoVlc     { margin: 0px; width:18px; height:18px; position:absolute; top:0px; right:19px; background-image:url('data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAApdJREFUeNqsVE9okmEYfz7/TEXMiRJBh2iXoEMUnQJBWIIHD4LXwYZ0GoRBUDIQZRdhjLoEC8NDePKmbnpK1gRBlhgZImriIRaY4tDQ5nT69jwv+qXOdeqFH++f53l+3/P+nuf9BMYY/I8hW3QYjUZv4vQQcWPO9B2RtdlsjfkYYTojJHiG06ZSqbyzvLwMCoVixvns7AxarRb0+/1PuH2LhO9FIxERIpHIm6OjI9Zut9lwOPwnms0mSyQSDGNeTeIl40xe6PX6p4eHh6DVakEqlXIkk0nxg7SenKMv32s0mucY+4Q7IKvq4OCAbW1t0R2Z2Wxmx8fHbH9/n+9NJhPHIpvL5WLhcPgzZSQbjUaPY7EYBAIBTux0OqFQKEAqlRIzmYx5287ODjgcjgeCIDySXVxc3CUHv9/P006n05DP56FUKnFn1ITPV9my2SxUq9UVykgpkXCpgDRaXV0VM8AriGuv1wvb29vinnx52QWBCOUzfYRaAGYISA6DwQCwDUSbx+MBt9stBhPIZzIoleF0L5FDKBSCXC53qVEpcwL50JDL5X87G5vrhBqNoFKp+KHVagWsDuzu7oqOa2trYDAYYGlpSTzrdrtwfn5ODfpTViwWP1BfkHBkIFGpqy0WC8dVg3xrtRpgc8Le3l5S4vP5asj4sVKpcG3IodPpQK/X4+QT0JfpjOwE0rJer8Pp6enrTCbzW4r6MFx8Q6cVNN5Wq9XiFSfCExHNpOW4SlAul6nswY2NjZd43hfGRhL9ejAY9KAOmzqdjj+V6apNP1oCXund+vo6kbQvvX4kvGa3228Zjcb7SHYPhZ35jaAEPxqNxhfs9q/xePwEY38t/I2MySg7Kg3VVjqnMbV5HzHAuNG04Y8AAwD1E7uGu52lyQAAAABJRU5ErkJggg=='); }",
            ".monsterDbInfoAttDist { margin: 0px; width:18px; height:18px; position:absolute; top:0px; right:38px; background-image:url('data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAACNUlEQVR4nI2TPUwUQRTHf292j937Wu4DcjF4flwsTKjMVRix1sLO2KAlJhZWxk4SKjtiQUXsJMZgoYUmYExMJEZbbS00CCpGkDsuHMvd7T0LWFyPI8dLXjLzn3m/mfnPjKgqnVEuyvXlCiNBQD6f4kO7hbNeZ8SL82lpQycPFACo6oEspJgO22mHea+POVWl5DFWzHCvW40dAks5ubtW56JAX8xmJbJWYAwNAEupbgckPVdeAtamr5fDSRIezXPlxaavVwAG0/Kw0eSEQnMwzZtmgFupM6LgAkHN10sA2YTMbtT1BvBvR4AVNoxQqfo63s2KtCuvAMo5GY1ZVELdBihmZTIR43MmIY8dmx+lAotdDQWKeZ4OpOQRSnVtS2/vDxzPMHmmn6uqSsrhdTcjj5J2bZvhZX/3Sg20DttJGAVPplDirTaOKvF2m7jjsGoPeCxmXHmG0MwkeNsLZMFOrclwVPtV1Vt2zLCjEFelzwg7vUC2Yes/sLXbt1c3Ga3uvYe0KwvAg8Mg+aTMNAJORrWcy3sAYwmVck5G93TpBiiX5JrnyvMQYlv8dC2+CuiXdZ0Cdr9IPsF0Nsns2QLjqspQP/fD2xjKMJFyWAiz6DGxPxaZt/+yo+G5Mh+PsdRq4zQCjgEYg386y5OP33Wuq3edQikvdxSk3uRUqLkxvv2u6c3DvAMwncIfn/PRfjbOu16QA6BzRRkLApJRraUkekGg42grFS4Yg29BXQTfNvhBG+cooL/ZICEZznvBuAAAAABJRU5ErkJggg=='); }",

            "dl {margin: 0;}",
            "dt, dd {line-height: 1.42857;}",
            "dt {font-weight: 700;}",
            "dd {margin-left: 0;}",
            ".dl-horizontal dt {clear: left; float: left; overflow: hidden; text-align: right; text-overflow: ellipsis; white-space: nowrap; width: 140px;}",
            ".dl-horizontal dd { margin-left: 150px;}"
        ]);

        var nomColId = this.getColumnId("mh_vue_hidden_monstres", "Nom");
        var refColId = this.getColumnId("mh_vue_hidden_monstres", "Réf.");

        // Ajout de a colonne titre
        $("#mh_vue_hidden_monstres table:first thead tr.mh_tdtitre:first th:nth-child("+nomColId+")").after('<th width="160px" data-sort-ignore="true"><b>Infos</b></th>');

        // Extraction des données
        $("#mh_vue_hidden_monstres table:first tbody tr.mh_tdpage").each($.proxy(function(idx, tr){

            var monsterId = $(tr).children("td:nth-child("+refColId+")").text();
            var tdName = $($(tr).children("td:nth-child("+nomColId+")"));

            var container = $("<td/>").css("position", "relative").css("padding", "0px 0px 0px 1px");
            $(tr).children('td:nth-child(' + nomColId + ')').after(container);

            //tdName.find("a").text("Manticore Colossale [Nouvelle]");
            var tmp = tdName.find("a").text().match(/(.*)\s\[(.*)\]/);

            var monstreAgeName, monsterFullName, extract, monster;

            if(tmp != null) {
                monstreAgeName = tmp[2];
                monsterFullName = tmp[1];
                extract = fnExtract(monsterFullName);
                monster = extract.monster;
            }

            if(!Utils.isUndefined(monster)) {

                var monstreAge = DB_monsterAges[monster.familly][monstreAgeName];
                var monsterTemplateName = extract.template;
                var monsterTemplate = null == monsterTemplateName ? null : DB_monsterTemplate[monsterTemplateName];

                if(Utils.isUndefined(monstreAge)) {
                    console.log("Unable to find the age '" + monstreAgeName + "' for monster #" + monsterId);
                    return;
                }

                if(Utils.isUndefined(monsterTemplate)) {
                    console.log("Unable to find the template '" + monsterTemplateName + "' for monster #" + monsterId);
                    return;
                }

                //console.log("Name: ", monsterFullName, "Age: ", monstreAgeName, monstreAge, "Template: ", monsterTemplateName, monsterTemplate, "Monstre: ", monster);

                this.monsterDatas["monster-" + monsterId] = $.grep([
                    fnShowCarac(monster, monsterTemplate, monstreAge, "familly", "Famille"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "level", "Niveau"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "power1", "Pouvoir"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "power2", "Pouvoir"),
                    (monsterTemplate && monsterTemplate.spe ? ["Pouvoir spécial: " , monsterTemplate.spe] : null),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "powerRange", "Portée du Pouvoir"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "hp", "Points de Vie", "PV"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "regen", "Dés de Régén.", "D3"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "armPhy", "Armure Physique"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "armMag", "Armure Magique"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "attDist", "Attaque à distance"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "attMag", "Attaque magique"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "noAtt", "Nombre d'attaques"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "att", "Dés d'Attaque", "D6"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "esq", "Dés d'Esquive", "D6"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "degat", "Dés de Dégât", "D3"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "rm", "Résistance Magique"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "mm", "Maitrise Magique"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "vue", "Vue"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "vlc", "Voir le Caché"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "speed", "Vitesse de Déplacement"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "dla", "Durée tour", "heures"),
                    //fnShowCarac(monster, monsterTemplate, monstreAge, "dlaUse", "DLA"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "fly", "Vole"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "coldBlod", "Sang froid")
                ], function(o){return o;});


                container.append(
                    $("<div/>")
                    .addClass("monsterDbInfo")
                    .attr("data-monster-id", monsterId)
                    .attr("data-monster-monsterFullName", monsterFullName)
                    .hover($.proxy(function(event){
                        // in
                        var ctn = $(event.target);
                        var popupId = ctn.attr("data-monster-info-popup");
                        if(Utils.isDefined(popupId)) {
                            var popup = $('[data-monster-info-popup-id="' + popupId + '"]');
                            popup.show();
                            return;
                        }

                        popupId = ctn.attr("data-monster-id");

                        ctn.attr("data-monster-info-popup", monsterId);

                        var pos = ctn.position();
                        var offset = ctn.offset();

                        var popup = $("<div/>")
                        .css("max-width", "700px")
                        .css("border", "1px solid #CCC")
                        .css("background-color", "#FFF")
                        .css("border-radius", "5px")
                        .attr("data-monster-info-popup-id", popupId);

                        var title = $("<h2/>")
                        .css("background", "#333")
                        .css("border", "1px solid #111")
                        .css("padding", "5px 10px")
                        .css("font-size", "14px")
                        .css("color", "white")
                        .css("text-align", "center")
                        .css("text-shadow", "0 -1px 0 rgba(0, 0, 0, 0.5)")
                        .css("letter-spacing", "0")
                        .css("border-radius", "5px 5px 0 0")
                        .css("font-weight", "normal")
                        .css("margin-bottom", "0px")
                        .css("margin-top", "0px")
                        .css("overflow", "hidden")
                        .text(ctn.attr("data-monster-monsterFullName"));
                        popup.append(title);

                        // content
                        popup.append(
                            $("<div/>")
                            .css("padding", "10px")
                            .append(
                                $("<dl/>")
                                .addClass("dl-horizontal")
                                .append(
                                    $.map(this.monsterDatas["monster-" + monsterId], function(attr){
                                        return '<dt>' + attr[0] + '</dt><dd>' + attr[1] + '</dd>';
                                    })
                                )
                            )
                        );

                        // Attach to DOM
                        popup.prependTo($("body"));

                        popup.css("position", "absolute");
                        popup.css("z-index", "100");
                        popup.css("top", (offset.top - popup.height() + 16) + "px");
                        popup.css("left", ( offset.left - popup.width()) + "px");


                    }, this), function(event){
                        // out
                        var ctn = $(event.target);
                        var popupId = ctn.attr("data-monster-info-popup");
                        var popup = $('[data-monster-info-popup-id="' + popupId + '"]');
                        popup.hide();
                    })
                );
                if(monster.vlc || (monsterTemplate && !!monsterTemplate.vlc)) {
                    container.append($("<div/>").addClass("monsterDbInfoVlc").attr("title", "Voit le caché"));
                }
                if(monster.attDist || (monsterTemplate && !!monsterTemplate.attDist)) {
                    container.append($("<div/>").addClass("monsterDbInfoAttDist").attr("title", "Attaque à distance"));
                }
            }

        }, this));
    },

    addMonsterCdmLink : function() {
        var refColId = this.getColumnId("mh_vue_hidden_monstres", "Réf.");
        var nomColId = this.getColumnId("mh_vue_hidden_monstres", "Nom");

        // Extraction des données
        $("#mh_vue_hidden_monstres table:first tbody tr.mh_tdpage").each(function(){
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

    addTrollEventLink : function() {
        var refColId = this.getColumnId("mh_vue_hidden_trolls", "Réf.");
        var nomColId = this.getColumnId("mh_vue_hidden_trolls", "Nom");

        // Extraction des données
        $("#mh_vue_hidden_trolls table:first tr.mh_tdpage").each(function(){
            var tdName = $($(this).children("td:nth-child("+nomColId+")"));
            var trollName = tdName.text();

            var tdRef = $($(this).children("td:nth-child("+refColId+")"));
            var trollId = tdRef.text();
            tdRef.empty()
            .append(
                $("<a/>")
                .attr("href", "javascript:Enter('/mountyhall/View/PJView_Events.php?ai_IDPJ=" + trollId + "', 750, 550)")
                .attr("title", "Voir les évenements de " + trollName)
                .attr("class", tdName.find("a").attr("class"))
                .text(trollId)
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

        // Ajout de la colonne titre
        $("#mh_vue_hidden_monstres table:first thead tr.mh_tdtitre:first th:nth-child(" + refColId + ")").after('<th width="60px" data-type="numeric" class="footable-visible footable-sortable"><b>Niveau</b><span class="footable-sort-indicator"></span></th>');

        // Extraction des données
        $("#mh_vue_hidden_monstres table:first tr.mh_tdpage").each(function(){
            var monsterId = $(this).children("td:nth-child("+refColId+")").text();
            monsterIds.push(monsterId);

            var monsterName = $($(this).children("td:nth-child("+nomColId+")")).text();
            monsterNames.push(monsterName);

            $(this).children('td:nth-child(' + refColId + ')').after(
                $("<td/>")
                .css("text-align", "center")
                .addClass("footable-visible")
                .attr("id", "view-monster-id-" + monsterId)
                .text("-")
            );
        });

        $(function () {
            unsafeWindow.$('#VueMONSTRE').removeClass("footable-loaded").footable();
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
                var hasLevel60 = false;
                var shareColId = self.getColumnId("mh_vue_hidden_trolls", "Envoyer");
                $("#mh_vue_hidden_trolls table:first tr.mh_tdpage td:nth-child(" + shareColId + ") input:checked").each(function() {
                    if($(this).attr("trollLevel") == "60") {
                        hasLevel60 = true;
                    }

                    ids.push($(this).val());
                });

                var isSharePx = $("#mh_vue_hidden_trolls table:first").parents("table").prev().find("#radioPX").is(':checked');

                if(isSharePx && hasLevel60) {
                    alert("Attention, vous êtes sur le point de distribuer des PX à un ou plusieurs trõlls de niveau 60.");
                }

                var destination = isSharePx
                        ? "Actions/Play_a_DonPX.php?cat=8&dest="
                        : "../Messagerie/MH_Messagerie.php?cat=3&dest=";

                window.open(destination + ids.join(','),
                    "Contenu"
                );
            },
            selectCallback = function(event) {
                var shareBtn = $(event.target);
                var refColId = self.getColumnId("mh_vue_hidden_trolls", "Réf.");
                var refColLevel = self.getColumnId("mh_vue_hidden_trolls", "Niveau");

                $("#mh_vue_hidden_trolls table:first tr.mh_tdtitre:first th:nth-child(" + refColId + ")").before($("<th>Envoyer</th>"));
                $("#mh_vue_hidden_trolls table:first tr.mh_tdpage").each(function() {
                    var trollId = $(this).children("td:nth-child("+refColId+")").text();
                    var trollLevel = $(this).children("td:nth-child("+refColLevel+")").text();
                    $(this).children('td:nth-child(' + refColId + ')').before(
                        $("<td/>")
                        .attr("width", 5)
                        .append(
                            $("<input/>")
                            .attr("type", "checkbox")
                            .attr("trollLevel", trollLevel)
                            .val(trollId)
                        )
                    );
                });

                $(shareBtn)
                .before(
                    self.display.mhButton("Annuler", function(event) {
                        var cancelBtn = $(event.target);
                        var shareColId = self.getColumnId("mh_vue_hidden_trolls", "Envoyer");
                        $("#mh_vue_hidden_trolls table:first tr.mh_tdtitre:first th:nth-child("+shareColId+")").remove();
                        $("#mh_vue_hidden_trolls table:first tr.mh_tdpage td:nth-child("+shareColId+")").remove();

                        $(cancelBtn).siblings("span").remove();
                        $(cancelBtn).next().off().on('click', selectCallback);
                        $(cancelBtn).remove();
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
            .append(self.display.mhButton("Envoyer...", selectCallback))
        );
    },

    addSameXYN : function() {
        $("<style type='text/css'> tr.xyn td { background-color:beige;} tr.xyn-locked td { background-color:Cornsilk !important;} </style>").appendTo("head");

        $.each(["mh_vue_hidden_monstres", "mh_vue_hidden_trolls", "mh_vue_hidden_lieux", "mh_vue_hidden_tresors", "mh_vue_hidden_champignons"], $.proxy(function(idx, tableId){
            var xId = this.getColumnId(tableId, "X");
            var yId = this.getColumnId(tableId, "Y");
            var nId = this.getColumnId(tableId, "N");

            $("#" + tableId + " table:first tr.mh_tdpage").each($.proxy(function(idx, tr){
                var tr = $(tr);
                var tdX = tr.find("td:nth-child("+xId+")");
                var tdY = tr.find("td:nth-child("+yId+")");
                var tdN = tr.find("td:nth-child("+nId+")");
                tr.attr("data-xyn", tdX.text() + ";" + tdY.text() + ";" + tdN.text());

                $.each([tdX, tdY, tdN], $.proxy(function(idx, td) {
                    this.addSameXYN_hoverTd($(td));
                }, this));
            }, this));
        }, this))
    },

    addSameXYN_hoverTd : function(td) {
        td.click(function(){
            var tr = $(this).parent("tr");
            $('tr[data-xyn="' + tr.attr("data-xyn") + '"]').toggleClass("xyn-locked");
        });
        td.hover(
            function(){
                var tr = $(this).parent("tr");
                $('tr[data-xyn="' + tr.attr("data-xyn") + '"]').addClass("xyn");
            },
            function(){
                var tr = $(this).parent("tr");
                $('tr[data-xyn="' + tr.attr("data-xyn") + '"]').removeClass("xyn");
            }
        );
        return td;
    },

    getTrollIds : function() {
        var refColId = this.getColumnId("mh_vue_hidden_trolls", "Réf.");
        var nameColId = this.getColumnId("mh_vue_hidden_trolls", "Nom");

        // Fix
        $("#mh_vue_hidden_trolls table:first tr.mh_tdpage td:nth-child("+nameColId+")").css("width", "45%");

            var ids = $("#mh_vue_hidden_trolls table:first tr.mh_tdpage td:nth-child("+refColId+")").map(function(){
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

    getChampigonIds : function() {
        var refColId = this.getColumnId("mh_vue_hidden_champignons", "Réf.");

        return $("#mh_vue_hidden_champignons table:first tbody tr.mh_tdpage td:nth-child("+refColId+")").map(function(){
            var id = $(this).text();
            $(this).parent("tr").attr("data-champignon-info", id);
            return id;
        }).get();
    },

    addInfos : function() {
        var txt = $("form[name='LimitViewForm']").text();

        var x = parseInt(txt.match(/.*X\s*=\s*(-?\d+)/)[1]);
        var y = parseInt(txt.match(/.*Y\s*=\s*(-?\d+)/)[1]);
        var n = parseInt(txt.match(/.*N\s*=\s*(-?\d+)/)[1]);
        var r = txt.match(/(\d+) cases horizontalement et (\d+) verticalement/);
        var rH = parseInt(r[1]);
        var rV = parseInt(r[2]);

        // Fix
        //$("#mh_vue_hidden_trolls table:first thead tr.mh_tdpage th:nth-child("+this.getColumnId("mh_vue_hidden_trolls", "Nom")+")").css("width", "45%");        

        this.callAPIConnected({
            api : "viewInfo",
            data : {
              "xMin" : x - rH,
              "xMax" : x + rH,
              "yMin" : y - rH,
              "yMax" : y + rH,
              "nMin" : n - rV,
              "nMax" : n + rV,
                            "trap" : 1,
              "m" : this.getMonsterIds(),
              "t" : this.getTrollIds(),
              "o" : this.getTresorIds(),
              "l" : this.getLieuIds(),
              "c" : this.getChampigonIds()
            },
            callback : function(datas) {
                datas = datas.replace(/\s+/g, " ");
                var json = $.parseJSON(datas);

                var isInvisible = false;

                var trollIds = $.map(json.trolls || [], $.proxy(function(trollId, data){
                    return trollId;
                }, this));
                            
                            if(json.traps.length > 0) {
                                $('<table>')
                                .attr('width', '100%')
                                .attr('border', '0')
                                .css('margin-bottom', '10px')
                                .attr('cellspacing', '1')
                                .attr('cellpadding', '2')
                                .addClass('mh_tdborder')
                                .append(
                                    $('<thead/>')
                                    .append(
                                        $('<tr/>')
                                        .addClass('mh_tdtitre')
                                        .append(
                                            $('<th/>')
                                            .attr('width', '40')
                                            .text('Dist.')
                                        )
                                        .append(
                                            $('<th/>')
                                            .text('Troll piégeur')
                                        )
                                        .append(
                                            $('<th/>')
                                            .attr('width', '30')
                                            .text('X')
                                        )
                                        .append(
                                            $('<th/>')
                                            .attr('width', '30')
                                            .text('Y')
                                        )
                                        .append(
                                            $('<th/>')
                                            .attr('width', '30')
                                            .text('N')
                                        )
                                    )
                                )
                                .append(
                                    $('<tbody/>')
                                    .append(
                                        $.map(json.traps || [], $.proxy(function(data) {
                                            var d = Math.max(Math.abs(data.x-x), Math.abs(data.y-y), Math.abs(data.n-n));
                                            return $('<tr/>')
                                            .addClass('mh_tdpage')
                                            .attr("data-xyn", data.x + ";" + data.y + ";" + data.n)
                                            .append($('<td/>').text(d))
                                            .append($('<td/>').text(data.troll))
                                            .append(this.addSameXYN_hoverTd($("<td/>")).text(data.x).attr("align", "center"))
                                            .append(this.addSameXYN_hoverTd($("<td/>")).text(data.y).attr("align", "center"))
                                            .append(this.addSameXYN_hoverTd($("<td/>")).text(data.n).attr("align", "center"));
                                        }, this))
                                    )
                                )
                                .insertAfter($("form[name='LimitViewForm']"));
                            }

                            
                            $.each(json.traps || [], $.proxy(function(dataId, data){
                                var d = Math.max(Math.abs(data.x-x), Math.abs(data.y-y), Math.abs(data.n-n));

                var previous = [];
                var pd = d;
                do {
                                    previous = $("#mh_vue_hidden_lieux table:first tr.mh_tdpage td:nth-child(1)").filter(function() {
                                        return $(this).text() == pd;
                  }).last().parent("tr");
                  pd--;
                } while(pd > 0 && previous.length == 0);

                if(previous.length == 0) {
                  previous = $("#mh_vue_hidden_lieux table:nth-child(1) tr.mh_tdtitre").first();
                }

                var tr = $("<tr/>")
                .attr("data-xyn", data.x + ";" + data.y + ";" + data.n)
                .addClass("mh_tdpage")
                .append($("<td/>").text(d))
                .append($("<td/>").text(''))
                .append($("<td/>").text(''))
                .append($("<td/>").text("Piège de " + data.troll))
                .append(this.addSameXYN_hoverTd($("<td/>")).text(data.x).attr("align", "center"))
                .append(this.addSameXYN_hoverTd($("<td/>")).text(data.y).attr("align", "center"))
                .append(this.addSameXYN_hoverTd($("<td/>")).text(data.n).attr("align", "center"))
                .insertAfter(previous)
                ;

                            }, this));

                $.each(json.invis || [], $.proxy(function(trollId, data){
                    if($.inArray(trollId, trollIds)) {
                        return;
                    }

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
                    .attr("data-xyn", data.x + ";" + data.y + ";" + data.n)
                    .addClass("mh_tdpage")
                    .append($("<td/>").text(d))
                    .append($("<td/>").text('-'))
                    .append($("<td/>").append('<a href="javascript:Enter(\'/mountyhall/View/PJView_Events.php?ai_IDPJ=' + trollId + '\', 750, 550);" class="mh_trolls_0">' + trollId + '</a>'))
                    .append($("<td/>").text(data.lvl).css("text-align", "center"))
                    .append($("<td/>").append('<a href="javascript:EPV(' + trollId + ')" class="mh_trolls_0">' + data.name + '</a> [' + (data.camou ? "Camouflé" : "") + (data.invi ? "Invisible" : "") + ']'))
                    .append($("<td/>").text(data.race))
                    .append($("<td/>").append(data.guildId ? ('<a href="javascript:EAV(' + data.guildId + ',750,550)" class="mh_links">' + data.guildName + '</a>') : ''))
                    .append($("<td/>"))
                    .append(this.addSameXYN_hoverTd($("<td/>")).text(data.x).attr("align", "center"))
                    .append(this.addSameXYN_hoverTd($("<td/>")).text(data.y).attr("align", "center"))
                    .append(this.addSameXYN_hoverTd($("<td/>")).text(data.n).attr("align", "center"))
                    .insertAfter(previous)
                    ;

                    this.addTagEditionForCell(tr, this.getColumnId("mh_vue_hidden_trolls", "Réf."), this.getColumnId("mh_vue_hidden_trolls", "Nom"), 2);
                }, this));

                $.each(json.trolls || [], $.proxy(function(trollId, data){

                    // Création de la ligne pour son troll
                    if(trollId == Utils.getConf("login") && !isInvisible) {
                        var tr = $("<tr/>")
                        .attr("data-troll-info", trollId)
                        .attr("data-xyn", x + ";" + y + ";" + n)
                        .addClass("mh_tdpage")
                        .append($("<td/>").text(0)) // Distance
                        .append($("<td/>").text('-')) // Actions
                        .append($("<td/>").append('<a class="mh_trolls_1" href="javascript:Enter(\'/mountyhall/View/PJView_Events.php?ai_IDPJ=' + trollId + '\', 750, 550);">' + trollId + '</a>'))
                        .append($("<td/>").text('-').css("text-align", "center")) // Niveau
                        .append($("<td/>").text('Mon troll'))
                        .append($("<td/>").text('-')) // Guilde
                        .append($("<td/>")) // Placeholder pour Infos
                        .append($("<td/>").text('-')) // Race
                        .append(this.addSameXYN_hoverTd($("<td/>")).text(x).attr("align", "center"))
                        .append(this.addSameXYN_hoverTd($("<td/>")).text(y).attr("align", "center"))
                        .append(this.addSameXYN_hoverTd($("<td/>")).text(n).attr("align", "center"))
                        .insertAfter(
                            $("#mh_vue_hidden_trolls table:first tr.mh_tdtitre:first")
                        );
                        this.addTagEditionForCell(tr, this.getColumnId("mh_vue_hidden_trolls", "Réf."), this.getColumnId("mh_vue_hidden_trolls", "Nom"), 2);
                    }

                    var pvMin = data.pv;
                    var pvMax = Math.max(data.pv, data.pvMax);
                    var pvColors = ["#FF4500", "#FFA500", "#FFD700", "#9ACD32"];
                    var pvColor = pvColors[Math.round((pvMin/pvMax) * pvColors.length)-1];

                    var dlaOver = data.dla * 1000 < Date.now();
                    var dlaColor = "red";

                    $("[data-troll-info='" + trollId + "'] td:nth-child("+this.getColumnId("mh_vue_hidden_trolls", "Infos")+")")
                    .append(
                        $("<div/>")
                        .css("float", "left")
                        .css("margin", "0")
                        .css("width", "30")
                        .css("height", "14")
                        .css("border", "1px solid black")
                        .css("border-right", "0px")
                        .css("background-color", "#FFF")
                        .css("position", "relative")
                        .attr("title", "DLA " + (false === data.dla ? "?" : this.utils.formatTime(data.dla)))
                        .append(
                            $("<div/>")
                            .css("height", "100%")
                            .css("width", dlaOver ? "0%" : Math.round((data.pa||0)/6*100) + "%")
                            .css("background-color", "#000" )
                        )
                        .append(
                            $("<div/>")
                            .css("height", "100%")
                            .css("width", "100%")
                            .css("color", dlaOver ? dlaColor : "#999")
                            .css("font-size", "11px")
                            .css("text-align", "center")
                            .css("position", "absolute")
                            .css("top", "0")
                            .css("left", "0")
                            .text(dlaOver ? "DLA" : (data.pa||"?") + " PA")
                        )
                    )
                    .append(
                        $("<div/>")
                        .css("float", "left")
                        .css("margin", "0 2px 0 0")
                        .css("width", "calc(100% - 35px)")
                        .css("height", "14")
                        .css("border", "1px solid black")
                        .css("background-color", "#FFFFFF")
                        .css("position", "relative")
                        .attr("title", "MAJ: " + (false === data.updateDate ? "?" : this.utils.getDateDiff(new Date(data.updateDate*1000), new Date())))
                        .append(
                            $("<div/>")
                            .css("height", "100%")
                            .css("width", Math.min(100, Math.round(pvMin/pvMax*100)) + "%")
                            .css("background-color", pvColor)
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
                            .text(pvMin != pvMax ? ((pvMin || "?") + " / " + (0==pvMax ? "?" : pvMax)) : '')
                        )
                    )
                    ;
                }, this));

                $.each(json.monsters || [], $.proxy(function(monsterId, data){
                    var pvMin, pvMax;
                    if(data.pvRange[0] == ">") {
                        pvMin = data.pvRange.substr(1);
                        pvMax = "-1";
                    } else {
                        var pvs = data.pvRange.split("-");
                        pvMin = pvs[0];
                        pvMax = Math.max(pvs[0],pvs[1]);
                    }
                    var pvActMin = pvMin;
                    var pvActMax = Math.max(pvMin, pvMax);

                    if(data.bless > 0) {
                        pvActMin = Math.max(1, Math.round((100 - data.bless - 5) * pvMin / 100));
                        pvActMax = Math.min(pvMax, Math.round((100 - data.bless + 5) * pvMax / 100));
                    }

                    var colors = ["#FF4500", "#FFA500", "#FFD700", "#9ACD32"];
                    var color = colors[colors.length - 1 - Math.round(parseInt(data.bless) / 100)];

                    $("[data-monster-info='" + monsterId + "'] td:nth-child("+this.getColumnId("mh_vue_hidden_monstres", "Infos")+")").append(
                        $("<div/>")
                        .css("float", "left")
                        .css("margin", "0 1px 0 0")
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
                            .css("background-color", color)
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
                            .text((data.bless > 0 ? (pvActMin + "-" + (-1 == pvActMax ? "?" : pvActMax )) : data.pvRange))
                        )
                    );
                }, this));

                // populate tags and start handling
                $.each(json.tags || [], $.proxy(function(key, tag){
                    key = key.split(";");
                    $.each($("[data-tag-type='" + key[0] + "'][data-tag-id='" + key[1] + "']"), $.proxy(function(i, o) {
                        var ctn = $(o).prev();
                        ctn
                        .attr("title",  "Par " + tag.trollName + " le " + this.utils.formatTime(tag.date))
                        .text(tag.tag);

                        if(
                            ("3" == key[0] && tag.tag.match(/.*(Parchemin Gribouillé|Invention Extraordinaire).*/))
                            ||
                            ("3" == key[0] && !tag.tag.match(/^(Rune|Elixir)/) && tag.tag.match(/.*(de l'Aigle|des Béhémoths|des Cyclopes|des Enragés|de Feu|des Mages|de l'Orage|de l'Ours|du Pic|du Rat|de Résistance|de la Salamandre|du Temps|de la Terre|du Sable|des Vampires|des Duellistes|des Champions|des Anciens|du Roc|des Tortues|du Vent|en Mithril).*/))
                        ) {
                            ctn.parents("tr:first").find("> td").css("background-color", "#E9967A");
                        }
                    }, this));
                }, this));

                this.initToggleTresors();

                this.handleTagEdition();
            },
            scope : this
        });
    }
});

var MH_Lieux_Lieu_Description = $.inherit(Page, {
    init : function() {
        var p = {zf: 2.0, dx: 30, dy: 30};

        var tmp1 = /Portail de Téléportation\s+\(Lieu n° (\d+)\)/.exec($("div.titre2").text());
        if(tmp1) {
            var tmp2 = /(mène en X = (-?\d+) \| Y = (-?\d+)[^\.]*)/.exec($("#description").text());

            this.callAPIConnected({
                api: "tag",
                data: {
                    "type" : 5,
                    "num" : tmp1[1],
                    "tag" : tmp2[1]
                }
            });
        }
    }
});

var MH_Play_Liste_Vente_ListeVente_view = $.inherit(Page, {
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

var MH_Play_Play_e_follo = $.inherit(Page, {
    map : null,
    init : function() {
        this.addActions();
        this.addEdition();
        this.displayTags();
        this.fixMoreLess();
    },

    fixMoreLess : function() {
        /* Boulets */
        $('a[href^="javascript:afficheDetailTrPlus"]').each(function(){
            var a = $(this);
            var tr = $(a.parents("tr")[2]);
            var trTitre = tr.prev("tr:first");

            var fullname = trTitre.find("a:first").text().trim();
            var tmp = /^(\d+)\.(.*)$/.exec(fullname);
            var id = tmp[1];

            a.attr("id", id + "_" + a.attr("id"));
            a.attr("href", a.attr("href").replace(/\('(.*)','(.*)'\)/, "('" + id + "_$1','" + id + "_$2')"));

            var trHidden = $(a.parents("tr")[1]).next("tr:first");
            trHidden.attr("id", id + "_" + trHidden.attr("id"));
        });
    },

    addActions: function() {

      var myPos = this.getMyPosition();

      // Actions
      $('form td.mh_titre3').each($.proxy(function(i, td){
          td = $(td);
          var fullname = td.find("a:first").text().trim();
          var tmp = /^(\d+)\.(.*)$/.exec(fullname);
          var id = tmp[1];
          var name = tmp[2];

          var goPos = this.extractPosition(td.siblings(":nth-child(4)").text().trim());
          if(null != goPos) {
              var distance = "";
              if(null != myPos) {
                  distance = " (à " + Math.max(Math.abs(goPos.x-myPos.x),Math.abs(goPos.y-myPos.y),Math.abs(goPos.n-myPos.n)) + " cases)";
              }
          }

          $("<tr/>")
          .append(
              $("<td/>")
              .append("<a href='http://games.mountyhall.com/mountyhall/MH_Follower/FO_Profil.php?ai_IdFollower=" + id + "'>Profil</a>")
              .append(" - ")
              .append("<a href='http://games.mountyhall.com/mountyhall/MH_Follower/FO_Ordres.php?ai_IdFollower=" + id + "'>Ordres</a>")
              .append(" - ")
              .append("<a href='http://games.mountyhall.com/mountyhall/MH_Follower/FO_Equipement.php?ai_IdFollower=" + id + "'>Equipement</a>")
              .append(" - ")
              .append("<a href='http://games.mountyhall.com/mountyhall/MH_Follower/FO_Description.php?ai_IdFollower=" + id + "'>Description</a>")
          )
          .insertAfter( td.parents("tr:first") );
      }, this));
    },

    addEdition : function() {
        Utils.addGlobalStyle([
            'td.mh_titre3 label.editable {font-size:12px !important; }'
        ]);

      // Edition
      $('form td.mh_titre3').each($.proxy(function(i, td){
          var fullname = $(td).find("a:first").text().trim();
          var tmp = /^(\d+)\.(.*)$/.exec(fullname);
          var id = tmp[1];
          $(td).addClass("editable_ctn").append(this.getEditionField(id, 1));
      }, this));
    },

    getMonsterIds : function() {
      return $('form td.mh_titre3').map(function(i, td){
          var fullname = $(td).find("a:first").text().trim();
          var tmp = /^(\d+)\.(.*)$/.exec(fullname);
          var id = tmp[1];
          return id;
      }).get();
    },

    displayTags : function() {
        this.callAPIConnected({
            api : "viewInfo",
            data : {
                "xMin" : -1000,
                "xMax" : 1000,
                "yMin" : -1000,
                "yMax" : 1000,
                "nMin" : 0,
                "nMax" : -1000,
                "m" : this.getMonsterIds()
            },
            callback : function(datas) {
                datas = datas.replace(/\s+/g, " ");
                var json = $.parseJSON(datas);
                // populate tags and start handling
                $.each(json.tags || [], $.proxy(function(key, tag){
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

var MH_Follower_FO_NewOrder = $.inherit(Page, {
  init : function() {
      var ctn1 = null;
      try {
          ctn1 = window.parent.parent.parent.Sommaire.document;
      } catch(e) {}

      var ctn2 = null;
      try {
          ctn2 = window.parent.Contenu.document;
      } catch(e) {}

      this.showCoords(ctn1, "Ma position", "div.infoMenu");
      this.showCoords(ctn2, "Sa position", "table.mh_tdborder_fo > tbody > tr.mh_tdtitre_fo table td:nth-child(4)");
  },

    showCoords : function(doc, title, selector) {
        if(null != doc) {
            if($('[name="ai_X"],[name="ai_Y"],[name="ai_N"]').length == 3) {
                $('div.Action').append(
                    $("<span>[" + title + "]</span>")
                    .css("cursor", "hand")
                    .css("margin-left", "5px")
                    .click($.proxy(function() {
                        var coords = $(selector, doc).first().text();
                        var tmp = /X\s*=\s*(-?\d+)\s*\|\s*Y\s*=\s*(-?\d+)\s*\|\s*N\s*=\s*(-?\d+)/.exec(coords);
                        $('[name="ai_X"]').val(tmp[1]);
                        $('[name="ai_Y"]').val(tmp[2]);
                        $('[name="ai_N"]').val(tmp[3]);
                    }, this))
                );
            }
        }
    }
});

var MH_Follower_FO_SubmitOrderAbstract = $.inherit(Page, {
  init : function() {
      $('form').submit();
  }
});

var MH_Follower_FO_NewOrderOK = $.inherit(MH_Follower_FO_SubmitOrderAbstract);
var MH_Follower_FO_DeleteOrder = $.inherit(MH_Follower_FO_SubmitOrderAbstract);


var MH_Play_Actions_Competences_Play_a_Competence43b = $.inherit(Page, {
  init : function() {
    var sons = DB_talents["Comp"][43].sons;
    var sel = $('select.SelectboxV2');
    sel.find('option').each(function() {
      var s = sons[$(this).val()];
      if (s) {
        $(this).text($(this).text() + ' (' + s[1] + ')');
      }
    });
    sel.on('change', function() {
      var s = sons[$(this).find('option:selected').val()],
      t = s ? s[1] : '***';
      $(this).next().replaceWith("<span>&nbsp;" + t + "</span>");
    });
  }
});



var MH_Play_Actions_Play_a_AmeliorationView = $.inherit(Page, {
    init : function() {
        $("table.mh_tdborder a.AllLinks")
        .hover($.proxy(function(event) {
            Page.showTalentPopup($(event.target), true);
        }, this), $.proxy(function(event) {
            Page.hideTalentPopup($(event.target));
        }, this));
    }
});

var MH_Play_Actions_Play_a_SortResult = $.inherit(Page, {
    init : function() {
        var result = $("table:first").text();

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
                        "tag" : data[2]
                    }
                });
            }
        }
        Utils.setConf("action", "");
    }
});

var View_TresorHistory = $.inherit(Page, {
    init : function() {
        var objectType = $("table:nth-child(2) table > tbody > tr:nth-child(1) > td:nth-child(2)").text();
        if(objectType == "Parchemin") {
            var node = $("table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(1)");
            if(1 == node.length) {
                var description = node.text().trim();

                var duree = null;
                if(/.*«.*(courte?\s+\w+)/.test(description)) {
                    duree = "Courte (1-2 étapes)";
                } else if(/.*«.*(moyennement\s+(long|longue))/.test(description)) {
                    duree = "Moyenne (3-5 étapes)";
                } else if(/.*«.*((?!moyennement\s+)(long|longue)\s+\w+)/.test(description)) {
                    duree = "Longue (6-7 étapes)";
                }

                var reward = null;
                if(/une nouvelle mouche/.test(description)) {
                    reward = "Nouvelle mouche aléatoire";
                } else if(/une de mes mouches/.test(description)) {
                    reward = "Nouvelle mouche aléatoire";
                } else if(/parfaire ta connaissance d'un sort ou d'une compétence/.test(description)) {
                    reward = "Pourcentage suplémentaire sur un sort ou compétence";
                } else if(/dépasser les connaissances normales/.test(description)) {
                    reward = "Pourcentage suplémentaire sur un sort ou compétence";
                } else if(/des gigots de gob à foison/.test(description)) {
                    reward = "Des GG's";
                } else if(/L'expérience que tu te taperas/.test(description)) {
                    reward = "Des PXs";
                } else if(/choisir la mouche qui te quittera/.test(description)) {
                    reward = "Nouvelle mouche";
                } else if(/cette arme m'a bien servie/.test(description)) {
                    reward = "Arme";
                } else if(/ce petit caillou brillant/.test(description)) {
                    reward = "Minerais";
                } else if(/un sortilège à apprendre/.test(description)) {
                    reward = "Sort";
                } else if(/en récompense un parchemin de sort/.test(description)) {
                    reward = "Sort";
                } else if(/les accessoires sont toujours utiles/.test(description)) {
                    reward = "Petit objet";
                } else if(/cette bricole/.test(description)) {
                    reward = "Objet à MM ou à template";
                } else if(/onguent magique/.test(description)) {
                    reward = "Ajout de template";
                } else if(/arme magique/.test(description)) {
                    reward = "Arme avec template";
                } else if(/armure magique/.test(description)) {
                    reward = "Armure avec template";
                } else if(/arnaque de haut vol/.test(description)) {
                    reward = "Renomnage";
                } else if(/le regard des dieux se posera temporairement/.test(description)) {
                    reward = "Bénédiction";
                } else if(/cette armure/.test(description)) {
                    reward = "Armure";
                } else if(/cette arme/.test(description)) {
                    reward = "Arme";
                } else if(/aaa/.test(description)) {
                    reward = "Sort";
                }

                node.append("<br/>");
                if(null != duree) {
                    node.append("<br/><b>Durée: </b>" + duree);
                }
                if(null != reward) {
                    node.append("<br/><b>Récompense: </b>" + reward);
                }

            }
        }
    }
});


var MH_Play_Play_option = $.inherit(Page, {
    init : function() {
        this.addConfigPanel([
            {
                label : "Mot de passe",
                option : "pswd",
                type : "password"
            },
            {
                label : "N° de troll",
                option : "login",
                type : "text"
            },
            {
                label : "Mountyzilla activé",
                option : "mountyzilla",
                type : "checkbox"
            }
        ], this.checkConnect);
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
                self.display.mhButton("Enregistrer", function(){
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
                }, this)
            )
            .append($("<br/>").css("clear","left"))
            .append("<i>Les changements seront pris en compte au prochain affichage de cette page</i>")
            .append($("<div/>")
                    .css("text-align", "right")
                    .css("font-size", "smaller")
                    .append("<br/>" + Utils.getScriptInfo().name + " v" + Utils.getScriptInfo().version + " [<a href='" + Utils.getScriptInfo().downloadURL + "' target='_top'>Recharger le script</a>]")
                  )
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

var MH_Play_Actions_Competences_Play_a_Competence16b = $.inherit(Page, { // Résultat de CdM
    init : function() {
        var result = Utils.cleanup($("table:first").html());
        if(result.indexOf("Vous avez RÉUSSI à utiliser cette compétence") > -1) {
            // Appel de l'API
            this.callAPIConnected({
                api : "cdm",
                data : {
                    "cdm" : result
                },
                callback : function() {
                    $("form").append($("<div/>").html("<center><b>Données envoyées</b></center>"));
                },
                scope : this
            });
        }
    }
});


var MH_Play_Actions_Competences_Play_a_Competence15 = $.inherit(Page, { // Résultat de piège
    init : function() {
        var result = Utils.cleanup($("table:first").html());
        if(result.indexOf("Vous avez RÉUSSI à utiliser cette compétence") > -1) {
                    var tmp = /X = (-?\d+) \| Y = (-?\d+) \| N = (-?\d+)/.exec(result);
          // Appel de l'API
          this.callAPIConnected({
              api : "trap",
              data : {
                "x" : tmp[1],
                                "y" : tmp[2],
                                "n" : tmp[3]
              },
              callback : function() {
                $("form").append($("<div/>").html("<center><b>Données envoyées</b></center>"));
              },
              scope : this
          });
        }
    }
});

var MH_Play_Play_equipement = $.inherit(Page, { // DE
    init : function() {
        $("[id^='mh_objet_hidden_'] table > tbody > tr").each(function(){
            var tr = $(this);
            var id = tr.find("td:nth-child(3)").text();
            var name = tr.find("td:nth-child(4)").text();
            var desc = tr.find("td:nth-child(5)").text();
            Utils.setValue("ITEM_DESC_" + id, desc);
        });

        var after = $('#menu-evt + br');
        this.addXRules("Notes perso", "vue-" + Utils.getConf("login"), after);
        this.addXRules("Consignes", "vue", after);
    }
});

var MH_Play_Actions_Play_a_Move = $.inherit(Page, { // DE
    init : function() {

        Utils.addGlobalStyle([
            '.trapOn { color:#FFF; background:darkred; }'
        ]);
        
        $("input[type='radio'][name='ai_DeplX'][value=-1] + label").append("<small>Oxhykan</small>");
        $("input[type='radio'][name='ai_DeplX'][value=1] + label").append("<small>Orhykan</small>");
        $("input[type='radio'][name='ai_DeplY'][value=-1] + label").append("<small>Midikan</small>");
        $("input[type='radio'][name='ai_DeplY'][value=1] + label").append("<small>Nordikan</small>");
        $("input[type='radio'][name='ai_DeplN'][value=-1] + label").append("<small>Bas</small>");
        $("input[type='radio'][name='ai_DeplN'][value=1] + label").append("<small>Haut</small>");
        
        var x = parseInt($("[name='ai_XDepart']").val());
        var y = parseInt($("[name='ai_YDepart']").val());
        var n = parseInt($("[name='ai_NDepart']").val());
        var xMin = x + parseInt($( "table.mh_tdborder td:contains('X')").closest("tr").find("input[type='radio']:first").val());
        var xMax = x + parseInt($( "table.mh_tdborder td:contains('X')").closest("tr").find("input[type='radio']:last").val());
        var yMin = y + parseInt($( "table.mh_tdborder td:contains('Y')").closest("tr").find("input[type='radio']:first").val());
        var yMax = y + parseInt($( "table.mh_tdborder td:contains('Y')").closest("tr").find("input[type='radio']:last").val());
        var nMin = n + parseInt($( "table.mh_tdborder td:contains('N')").closest("tr").find("input[type='radio']:first").val());
        var nMax = n + parseInt($( "table.mh_tdborder td:contains('N')").closest("tr").find("input[type='radio']:last").val());
        this.callAPIConnected({
            api : "viewInfo",
            data : {
              "xMin" : xMin,
              "xMax" : xMax,
              "yMin" : yMin,
              "yMax" : yMax,
              "nMin" : nMin,
              "nMax" : nMax,
              "trap" : 1
            },
            callback : function(datas) {
                var json = $.parseJSON(datas);

                var traps = [];
                $.each(json.traps || [], $.proxy(function(dataId, data){
                    traps.push(data.x+";"+data.y+";"+data.n);
                },this));

                var fnCheckTrap = function() {
                    var nX = x + parseInt($("input[type='radio'][name='ai_DeplX']:checked").val());
                    var nY = y + parseInt($("input[type='radio'][name='ai_DeplY']:checked").val());
                    var nN = n + parseInt($("input[type='radio'][name='ai_DeplN']:checked").val());
                    if(traps.indexOf(nX + ";" + nY + ";" + nN) > -1) {
                        $("input[type='radio']:checked").closest("td").addClass("trapOn");
                    } else {
                        $("input[type='radio']").closest("td").removeClass("trapOn");
                    }
                };
                
                $.each($("input[type='radio']"), function() {
                    $(this).click(fnCheckTrap);
                });
            }, scope : this
        });
    }
});

/*******************************************/
/************* LAUNCH **********************/
/*******************************************/

$(document).ready($.proxy(function() {
    // Initialisation de la configuration
    Utils.initConfig();

    // Chargement du module spécifique
    var pathname = document.location.pathname;
    var moduleName = pathname.replace(/\/mountyhall\/(.*).php.*$/, "$1").replace(/\//g, "_");
    Logger.log("Searching for module " + moduleName + " by URL " + pathname);

    var module = null;

    // New Way
    {
        try {
            module = eval("new " + moduleName + "('"+moduleName+"')");
            Logger.log(moduleName + " loaded new way");
            module.load();
        } catch(e) {
            if(e.message.indexOf(moduleName + " is not")>-1) {
                //console.log("> Unable to find code for page " + moduleName);
            } else {
                Logger.error("Error in code");
                Logger.error(e);
            }
        }
    }

    // Old way
    /*
    if(null == module) {
        try {
            module = eval(moduleName);
            Logger.log(moduleName + " loaded old way");
            module.load();
        } catch(e) {
            if(e.message.indexOf(moduleName + " is not defined")>-1) {
                //console.log("> Unable to find code for page " + moduleName);
            } else {
                Logger.error("Error in code");
                Logger.error(e);
            }
        }
    }
    */

    if(null == module) {
        Logger.warn(" > Unable to find the module " + moduleName + " for URL " + pathname);
        module = eval("new Page('Page')");
        module.load();
    }
}, this));
