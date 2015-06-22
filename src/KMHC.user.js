// ==UserScript==
// @name          KFE
// @namespace     pharoz.net
// @version       0.1.4-17
// @description   Pharoz.net MH Connector
// @match         http://games.mountyhall.com/*
// @require       http://code.jquery.com/jquery-2.1.0.min.js
// @require       https://github.com/jswale/KFE/raw/master/src/data/talents.js?v=2015-06-15_12-00
// @require       https://github.com/jswale/KFE/raw/master/src/data/monstres.js?v=2015-06-15_12-00
// @require       https://github.com/jswale/KFE/raw/master/src/data/monstreAges.js?v=2014-10-23_21-22
// @require       https://github.com/jswale/KFE/raw/master/src/data/monstreTemplates.js?v=2014-11-19_10-00
// @require       https://github.com/jswale/KFE/raw/master/src/data/monstreAlias.js?v=2015-03-09_12-00
// @require       https://github.com/jswale/KFE/raw/master/src/addon/editables.js
// @downloadURL   https://github.com/jswale/KFE/raw/master/src/KMHC.user.js
// @updateURL     https://github.com/jswale/KFE/raw/master/src/KMHC.meta.js
// @grant         GM_addStyle
// @copyright     2014+, Miltown, Grul & disciple
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAUDBQwKBxQKBBwKEBkTBBwaJCQUBCQcCS4cBzASBDwWBDIeGCQGJDweLCwjETQkDjQqFDw0HDQqNDw2NEAeFEAlCkIsCkElF0EsFkwpEUwuHEQzFkw0ElwtH1w6BFQ1EVM8FVw5F14+GEEqLEwiNEE1J0wzLE88LFgsNFQzKV40Jl88KWw+HGQzN2E7N2w2NEQ+THA+QFRDIFZELFxCIFxKJFxNMl9VP2dEGmRLGXRLF2dEKWhMJ2ZENGdNOmJSLmxUK2xXP3RKLHdMP3BeKHdaL3pUInRfOnhVMWRaRGheSH9FR3dVQ3ZaQHReRnRmTHxhRn9pV39xZ4A8RIRMOIRXKYxWJIxfJ4xaPIBgKYFgNoNnNY9oMY1pPoRwNJBhNpFvPZxvPpxwMpx3P6RsOKRyPKR4O4RNSIxGVJBSRJZYT4NnRo9gRIRiVIxiXIRwR45wToRwVIR2WJBnTpxnRJR4QJx+RJJ4U5R+VJxwVpx9UIxqYIxyZI94YZJ+YJx+YpR+cKluSad6T6d+T6l+Qax6QLRuTLR+QLR6XKR4YKR+bJ+FObCEO52DXYyCZJCEbJyKfKOESqGNX6yFWK+MXbKER7GMSbyDRryNR7SFXLyLWbyTT7SUXbyaVKGDcayUYK6QbqSRda+YeLSaZLyWYbyZb7efd7ySfLqgZrymcMSRQcSRT8SXTcyXTMufU8maXMeVY9ShW9imX8agbcugYMyqbMSmfsimccqsf9ambNSrZdytZtSseNyybNyweOC3dey+f4yOnJSGiKyKhKyYiLSSlLCgiLSmjLylibSqlLasnryskLyyqLy2xMSihMWskc+0gceyl8i2mNS4k9S+mNy5ksi5psq+ptS8qNy+tOS+gOC+lNzClMzCrNTEp9TKrN/Eo9jFt9rMtuTEjOzDi/DLlPzKnPTVmuDLqO7NqOTOtuzSoePTuvDVsPvdtPzevPzisOTaw+zUwe/cwu3dzeTa1Pbjw/TmzPzmzvzuxPvr1Pzy2fz35/z+9AAAAEG26sQAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAAGHRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjOM5pdQAAAGpElEQVRIS3WVD1wT5xnHwdUVWjacW9XQ4Ay6mipqV4MYyRlgeJBVtGrrXBKoiXRxBWxo1WXEqRXoulbSDUkiGqZAhVlJAiFX/oSYuI6mTLryJzUytTQ5SE0woHAsSd9j7EISTJT9Pnef5O6e7+d9nz/v80TMzKcJ4vZ6/f8f0byA2+QBAJsMPIVrPgC4unFsEP0POgoCb+YEwHyAt6fO9hWGT0+jk48QwNUzD4D3J4lu251O5323wxN45xcY+jP2OIBbSBKjpvl8/Q3tLac1ZAkAHNwB/DEAR2lS7YEDfHaaBBbobwQIL/EzeYNXiz/qNHCPMivfTaGvjIshQXACz9DqIqJLhMxhba/IvEDsMAwAU66b74jY8fE02s6XxLxqmCI3mKe9k6OD7cPVXHqWi1gnDJhAMeeO5zZGXXca9H36yuqa+N9ViD4UVUjlytPbIFENRtiEAhiKtZftQKVv3Ws8myNuq79YKTpDid4k5qZx2XDq7z/q9cUsFEBd7Tnxe77LO26WSYUFJ0XaUvFRFpmzS1TfWl8i7euz+QIQCngGoGcXbn5Qmd4ugeITV1MvZm08mgtxahrqilrtw87BKZ9RuA806o+//3bq5peTf/LzPSTG0qjVUAJLUl0vhaX3xlB0NsJhgGtVDHUXPTryiU//9feXYkm7agqfYRZIeq3adgxDv/HbhAL48Zi64Za9UYvWrGEyIRhyOHjiHSdQYL73wG2Z8GcwFAA26pC9hU1axjiULhR1s3giWFtd5PgcM1swy1zhhgKmz+82yzctJtcWFTR0pwspDL09Ncssue29iWFB+1AAN7VpK7kbY6Ph9LdS02tEsUkNPTRR20AtioGHp+8hgHc9ly7kMVY9sWzFy5bS/SIJZ8ni2B9JHA6LryLmNAeAgRN1EmHiD3+wujY5Op7COipnc5PJ5LQTJhBqPwcAy8d3jTr51lXH+h4c/+lpYZ4MptRB2hK4ogEPO0UBALi67C1NVQJ+cycy3MC+XCfN48HiZO5eurTPn7CggoBpuFOlbGxENE2I/njMSs4+saQoOyq1Gkq73D7PCvjN1hG1SqVSNjUXM0kLnqSXCugwi0rKkm6BOdqw5uEHQJdV5wNapBsWREZGbuTw8pI4/ByYDlfwc5tNjwHeyW57CwF0Nq+JjFwYtZDGgOvTuI1yAb/k/JH89485QohZAPx70K5TqzsNGd9bsGjRCgqtIO6AXNGmVZz9Y/5vX3yzuAaftZ1VALDZr3Yavn1/2ZMMiJ7CyTpDl6k62trUZ0/lv5KRnlHY+7DR+oH+HvzuvfG/rSdlCtj7c3icPq5cqdFfrpadyj+YuPPF7X/qm8u2H3Blf2azntwaBwnKeILSbtbFitN/RZDLFysOH8zftfXgkcYRR7D8ZoEZ0Lth/dq1MYvS+GV5PGl3Lixmy5s6Pvm44kj+YeHWQuSWEwumzw98d/PCH06KukzUndvgJEkuFyqAfoMYblsr39jOpK4vREbGgCuQPj/g6f3HByezPzicben5cHMydSmZxeLpjE5n9ivPpzNfKOkYGQdfYziOE67PAtO2C8UU8tIV8UuSsk7Umfp3xybmZiLG+wOJr65//mcZMt3I2HQtaefuWsIRHzBt2XMoDuKWyWT8fSkUyqYzPe8sZaXIDO6eTH7hwe2vNiFGO/72U8uXr81GfQMFdJGfSYK1ROY0KqWy/LUt8TuOQfp1ZYZxS+6l+uJzJUqdcWScxsjPf2P5bgIAJg68hDncqfQVn1KtuVKembghtyRFph9zceq1JeebEN1Ve83KPNmpvUUOEOEZ7dX/KmHgLqJUNaqUGm0rckWw8hfbEnhKg9OTxZFfamrp0F2tZu2vUr7OHyJ88Ixixl8Lh+7riNNwRYm0tSLKqn3wFnY5MuL97y9JcJ5coZALeLz3zr5e4psuEa5Dfbc4wtfM9mvGlsYqRUcH0qQSHJCX6+xW9PpiMo2Tk1dWXi57793SL2eTHdHPWsfJTYQozALxJY1GTVxqZXl5y1V9EZVMToI4ZQo1olYotOZAbUTMuBrERQlLoqOfejqOUXyuqpHYgEDxyY3eAfQbq9V6x2y+fcfhwnxDLgAAAMa+6v4L81wZn7WOkcFicY5+dAfz4tM4Tnxye9xTYX1mNtNegIOucWOnRrY/Ey6oG5xwT019gdps6KjLHdYBCPlricjeP4fG7deuIdKGUa9vcExd//QLFO1/2FODCgJet8VC7Hhg0BM0mQDA65uCjygIENuasKFE2w08/h/NzPwPOHaIyvrbq40AAAAASUVORK5CYII=
// ==/UserScript==

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

var Storage = {
};

var MH_Map = function() {
    var HOLES = [
        // X, Y, size, radius, Ndepth
        [-70.5, -7.5, 2, 1.5, -69],
        [-66.5, -37.5, 2, 1.5, -69],
        [-63.5, 8.5, 2, 1.5, -69],
        [-59.5, -32.5, 2, 1.5, -69],
        [-52, 57, 0.25, 0.8, -59],
        [-50.5, -22.5, 2, 1.5, -69],
        [-35.5, -51.5, 2, 1.5, -69],
        [-34.5, 14.5, 2, 1.5, -69],
        [-34.5, 64.5, 2, 1.5, -69],
        [-11.5, 72.5, 2, 1.5, -69],
        [5.5, -49.5, 2, 1.5, -69],
        [5.5, 31.5, 2, 1.5, -69],
        [10.5, 63.5, 2, 1.5, -69],
        [12, -15, 0.25, 0.8, -59],
        [21.5, 35.5, 2, 1.5, -69],
        [30, -52, 0.25, 0.8, -59],
        [46.5, 51.5, 2, 1.5, -69],
        [48, -39, 0.25, 0.8, -59],
        [55, 70, 0.25, 0.8, -69],
        [56.5, 23.5, 75, 8.7, -99],
        [64, 70, 0.25, 0.8, -59],
        [74.5, 31.5, 2, 1.5, -69]
    ];

    var LOCATIONS = {
        "Véda": [-64, 47, -32, "rgba(138,43,226,0.75)"],
        "Karlaaki": [84, 27, -50, "rgba(138,43,226,0.75)"]
    };

    return {
        xCtx : function(xMH, p) { return (xMH + 100) * p.zf + p.dx; },
        yCtx : function(yMH, p) { return (100 - yMH) * p.zf + p.dy; },
        xMh : function(xCTX, p) { return Math.round((xCTX - p.dx) / p.zf - 100); },
        yMh : function(yCTX, p) { return Math.round(100 - (yCTX - p.dy) / p.zf); },

        getMap : function(ref, p) {
            var div = $("<div/>",{id: ref})
                    .css("padding", "20px"),
                canvas = $("<canvas/>", {id: ref + "_canvas"})
                    .addClass("mh_tdtitre")
                    .appendTo(div)[0],
                ctx = canvas.getContext("2d"),
                tip = $("<div/>",{id: ref + "_tip"})
                    .css("position", "absolute")
                    .css("max-width", "700px")
                    .css("border", "1px solid #CCC")
                    .css("background-color", "#FFF")
                    .css("border-radius", "5px")
                    .css("z-index", "999")
                    .css("display", "none")
                    .appendTo(div),
                tipH = $("<h2/>")
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
                    .text("-")
                    .appendTo(tip),
                tipD = $("<div/>")
                    .css("padding", "10px")
                    .appendTo(tip);
            var map = {div: div, ctx: ctx, places: []};

            canvas.width = 200 * p.zf + 2 * p.dx;
            canvas.height = 200 * p.zf + 2 * p.dy;

            // quadrants
            ctx.beginPath();
            ctx.moveTo(100 * p.zf + p.dx, p.dy);
            ctx.lineTo(100 * p.zf + p.dx, 200 * p.zf + p.dy);
            ctx.moveTo(p.dx, 100 * p.zf + p.dy);
            ctx.lineTo(200 * p.zf + p.dx, 100 * p.zf + p.dy);
            ctx.stroke();
            ctx.strokeRect(p.dx, p.dy, p.zf * 200, p.zf * 200);

            // holes
            ctx.fillStyle = "rgb(200,0,0)";
            $.each(HOLES, $.proxy(function (i, h) {
                ctx.beginPath();
                ctx.arc(this.xCtx(h[0], p), this.yCtx(h[1], p), h[3] * p.zf, 0, Math.PI * 2, true);
                ctx.fill();
            }, this));

            // known locations
            var lp = $.extend({lw: 1}, p);
            $.each(LOCATIONS, $.proxy(function (name, loc) {
                this.drawPos(map, loc[0], loc[1], loc[3], lp, name + " : X=" + loc[0] + " | Y=" + loc[1] + " | N=" + loc[2]);
            }, this));

            // tooltip
            var canvasOffset = null;
            $(canvas)
                .on('mouseenter', function() { canvasOffset = $(canvas).offset(); })
                .on('mouseout', function() { tip.css("display", "none"); canvasOffset = null; })
                .on('mousemove', $.proxy(function(e) {
                    tip.css("left", (e.pageX + 20) + "px").css("top", (e.pageY + 10) + "px").css("display", "block");
                    if(!canvasOffset) return;
                    var pos = {
                        x: e.pageX - canvasOffset.left,
                        y: e.pageY - canvasOffset.top,
                    };
                    pos.xMh = this.xMh(pos.x, p);
                    pos.yMh = this.yMh(pos.y, p);
                    pos.description = "";
                    tipH.text("[ X=" + pos.xMh + " | Y=" + pos.yMh + " ]");
                    $.each(HOLES, function (i, h) {
                        var dist = (pos.xMh - h[0]) * (pos.xMh - h[0]) + (pos.yMh - h[1]) * (pos.yMh - h[1]) - h[2];
                        if(dist <= 0) {
                            pos.description = "Trou de Météorite : N=-1 => N=" + h[4];
                            return false;
                        }
                    });

                    $.each(map.places, function (i, p) {
                        var dist = (pos.xMh - p.x) * (pos.xMh - p.x) + (pos.yMh - p.y) * (pos.yMh - p.y);
                        if(dist <= 0 && p.name) {
                            pos.description = p.name;
                            return false;
                        }
                    });

                    tipD.text(pos.description);
                }, this));

            return map;
        },
        drawPos : function(map, xMH, yMH, color, p, text) {
            var x = this.xCtx(xMH, p), y = this.yCtx(yMH, p);
            map.ctx.strokeStyle = color;
            map.ctx.fillStyle = color;
            map.ctx.lineWidth = p.lw || p.zf;
            map.ctx.beginPath();
            map.ctx.arc(x, y, p.zf, 0, Math.PI * 2, true);
            map.ctx.fill();
            map.ctx.beginPath();
            map.ctx.arc(x, y, 3 * p.zf, 0, Math.PI * 2, true);
            map.ctx.stroke();
            map.places.push({x: xMH, y: yMH, name: text});
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
                    if(Utils.isUndefined(conf.callback)) {
                        this.warn("No callback found");
                    } else {
                        this.debug("Result", data);
                        conf.callback.apply(this, [data.replace(/\s/g, " "), result, request]);
                    }
                } else {
                    this.error("Error while executing the API call");
                    this.error(arguments);
                }
            }, conf.scope || this));
        },

        callAPIMiltown : function(conf) {
            this.debug("Calling API", conf);
            $.ajax({
                type: "POST",
                url: "http://mh.swale.fr/api/" + conf.api + ".php?rnd=" + new Date().getTime(),
                data : {"call" : conf.call, "encoding" : "UTF-8", "data" : conf.data}
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
                .append($("<div/>")
                    .css("text-align", "right")
                    .css("font-size", "smaller")
                    .append("[<a href='https://github.com/jswale/KFE/raw/master/src/KMHC.user.js' target='_new'>Recharger le script</a>]")
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

        showTalentPopup : function(link, boost) {
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
                var tmp = link.parents("tr:first").find("td:nth-child(3)").text().replace(/[\n\s->niveau%\)]/g, "").split("(");
                for(var j = 0; j < tmp.length; ++j) {
                    var f = (tmp[j]).split(":");
                    levels[f[0]] = f[1];
                }
            }
            // ----------------

            var entry = DB_talents[actionType][actionId];
            if(Utils.isUndefined(entry)) {
                console.log("Entry not found for " + actionName + " [" + actionId + "] in category " + actionType);
                return;
            }

            var pos = link.position();

            var popup = this.displayTalentPopup(entry, levels, actionName);
            popup.css("position", "absolute")
            popup.css("top", pos.top - popup.height() + "px");
            popup.css("left", (pos.left) + "px");
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

var MH_Play_PlayStart = $.extend({}, MH_Page, {
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

var MH_Missions_Mission_Equipe = $.extend({}, MH_Page, {
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

var MH_Missions_Mission_Recompense = $.extend({}, MH_Page, {
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

var MH_Missions_Mission_Etape = $.extend({}, MH_Page, {
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

var MH_Missions_Mission_Liste = $.extend({}, MH_Page, {
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

var MH_Play_Play_news = $.extend({}, MH_Page, {

    init : function() {
        this.jubilaire();
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

var MH_Play_Actions_Competences_Play_a_Competence16 = $.extend({}, MH_Page, { // CdM

    init : function() {
        this.tune();
        this.showInfo();
    },

    tune : function() {
        $("select option:contains('Gowap'),select option:contains('Golem de cuir'),select option:contains('Golem de métal'),select option:contains('Golem de papier'),select option:contains('Golem de mithril')").css("color", "#808080");
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

var MH_Play_Actions_Play_a_Attack = $.extend({}, MH_Page, {

    init : function() {
        this.tune();
        this.showInfo();
    },

    tune : function() {
        $("select option:contains('Gowap'),select option:contains('Golem de cuir'),select option:contains('Golem de métal'),select option:contains('Golem de papier'),select option:contains('Golem de mithril')").css("color", "#808080");
    },

    showInfo : function() {
        var monsterIds = $("select option[value!='']").map(function(){
            var m = $(this).prop("value").match(/^ME_(\d+)$/);
            return m ? m[1] : null;
        }).get();

        var trollIds = $("select option[value!='']").map(function(){
            var m = $(this).prop("value").match(/^(\d+)$/);
            return m ? m[1] : null;
        }).get();


        this.callAPIConnected({
            api : "viewInfo",
            data : {
                "invi" : 0,
                "m" : monsterIds,
                "t" : trollIds
            },
            callback : function(datas) {
                var json = $.parseJSON(datas);
                $.each(json.tags, $.proxy(function(key, data) {
                    var tmp = key.split(";");
                    if(tmp[0] == "1") {
                        var o = $("select option[value='ME_" + tmp[1] + "']");
                        o.text(o.text() + " " + data.tag);
                    } else if(tmp[0] == "2") {
                        var o = $("select option[value='" + tmp[1] + "']");
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


var MH_Play_Actions_Play_a_Drop = $.extend({}, MH_Page, {
    init : function() {
        var monsterIds = $('select[name="ai_DropTo"] option').map(function(){
            return $(this).prop("value");
        }).filter(function(idx, value){
            return /^\d{2,}$/.test(value);
        }).get();

        var tresorIds = $('select[name="ai_IdTarget"] option').map(function(){
            return $(this).prop("value");
        }).filter(function(idx, value){
            return /^\d{2,}$/.test(value);
        }).get();

        this.callAPIConnected({
            api : "viewInfo",
            data : {
                "invi" : 0,
                "m" : monsterIds,
                "o" : tresorIds
            },
            callback : function(datas) {
                var json = $.parseJSON(datas);
                $.each(json.tags, $.proxy(function(key, data){
                    var tmp = key.split(";");
                    if(tmp[0] == "1") {
                        var o = $('select[name="ai_DropTo"] option[value="' + tmp[1] + '"]');
                        o.text(o.text() + " - " + data.tag);
                    }
                    if(tmp[0] == "3") {
                        var o = $('select[name="ai_IdTarget"] option[value="' + tmp[1] + '"]');
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

var MH_Play_Actions_Play_a_AmeliorationView = $.extend({}, MH_Page, {
    init : function() {
        $("table.mh_tdborder a.AllLinks")
        .hover($.proxy(function(event) {
            this.showTalentPopup($(event.target), true);
        }, this), $.proxy(function(event) {
            this.hideTalentPopup($(event.target));
        }, this));
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
        var tmp = /Echéance du Tour Date Limite d'Action : (\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}) Il me reste (\d+) PA sur un total de 6 Durée normale de mon Tour.............: (\d+) heures et (\d+) minutes(?: Bonus\/Malus sur la durée.................: (-?\d+) heures et (-?\d+) minutes.)? Augmentation due aux blessures.......: (\d+) heures et (\d+) minutes. Poids de l'équipement......................: (\d+) heures et (\d+) minutes. ---> Durée de mon prochain Tour.....: (\d+) heures et (\d+) minutes./.exec(text);
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
        var tmp = /Caractéristiques Régénération.....: (\d+) D3 ([+-]\d+) ([+-]\d+) Attaque............: (\d+) D6 ([+-]\d+) ([+-]\d+) Esquive.............: (\d+) D6 ([+-]\d+) ([+-]\d+) Dégâts..............: (\d+) D3 ([+-]\d+) ([+-]\d+) Armure.............: (\d+) D3( \/ \d+ D3)? ([+-]\d+) ([+-]\d+) Caractéristiques Déduites :-Corpulence.....: (\d+)points- Agilité.............: (\d+)points/.exec(text);
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
            physique : parseInt(tmp[15]),
            magique : parseInt(tmp[16])
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
        var tmp = / Magie Résistance à la Magie...................: (\d+) points ([+-]\d+) Maîtrise de la Magie....................: (\d+) points ([+-]\d+) Bonus de Concentration : (-?\d+) %/.exec(text);
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

        Utils.setConf("profil_stats", JSON.stringify(stats))

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
            for(var i = 1 ; i < 3 ; i++) {
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

        $("<style type='text/css'> div.actionPopup th { text-align:right;} </style>").appendTo("head");

        if(false) {
            $.each(["Comp", "Sort"], $.proxy(function(idx, actionType) {
                $.each(Object.keys(DB_talents[actionType]), $.proxy(function(idx, actionId) {
                    var entry = DB_talents[actionType][actionId];
                    var actionName = entry.name;
                    var levels = [null, 90];
                    var popup = this.displayTalentPopup(entry, levels, actionName);
                }, this));
                $("<div/>").append(actionType).prependTo($("body"));
            }, this));
        }
        

        $.each(["Comp", "Sort"], $.proxy(function(idx, actionType) {
            var ctn = $("table.mh_tdborder:first").next().find("tr.mh_tdpage:first > td:nth-child("+(idx+1)+") > table > tbody");
            var actions = Object.keys( DB_talents[actionType] );
            
            // Sort reservé
            if(actionType == "Sort") {
                actions = $(actions).not(["1","2","3","4","14"]);
            }            
            
            var currentActions = $.map(ctn.find("> tr > td:nth-child(2) > a"), function(link){
                link = $(link);
                var tmp = /javascript:Enter(Comp|Sort)\((\d+)\)/.exec(link.attr("href"));
                return tmp[2];
            });                        
            
            $.each($(actions).not(currentActions), $.proxy(function(idx, actionId) {
                $("<tr/>")
                .attr("data-actionType-addon", "true")
                .hide()
                .append($("<td/>"))                
                .append(
                    $("<td/>")
                    .append(
                        $("<a/>")
                        .attr("href", "javascript:Enter"+actionType+"("+actionId+")")
                        .addClass("AllLinks")
                        .text(DB_talents[actionType][actionId].name)
                    )
                )
                .append(
                    $("<td/>")
                    .attr("align", "right")
                    .append("<b><b>-&gt; niveau 1 : 10 %</b></b>")
                )
                .appendTo(ctn);
            }, this));
            
            $("<tr/>")
            .append(
                $("<td/>")
                .attr("align", "center")
                .attr("colspan", "3")
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

        $($("table.mh_tdborder:first").next().find("table.mh_tdpage")).find("a.AllLinks")
        .hover($.proxy(function(event) {
            this.showTalentPopup($(event.target), false);
        }, this), $.proxy(function(event) {
            this.hideTalentPopup($(event.target));
        }, this));

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


        if(title.indexOf("Compétence : Identification des Champignons") > -1) {
            console.log(body);
            var tmp = /Vous avez reconnu le Champignon :\s+(.*)(?:Salé|Sucré)\s+\(\d+\)\s+qui se trouvait en X=(-?\d+), Y=(-?\d+), N=(-?\d+)/.exec(body);
            console.log(tmp);
            api = "tag";
            data =  {
                "type" : 4,
                "num" : Utils.getCoordRef(parseInt(tmp[2]),parseInt(tmp[3]),parseInt(tmp[4])),
                "tag" : tmp[1],
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

        $("#mh_vue_hidden_tresors").parents("p:first").attr("data-view", "main");

        this.addPharozViewLinks();

        this.highlightTreasures();
        this.addChampignonsRef();
        this.addTagEdition();

        if(Utils.getConf("mountyzilla") != "true") {
            this.addMonsterLevel();
            this.addSharingUI();
        }

        this.addBarycentreUI();

        this.addMonsterInfos();
        this.addMonsterCdmLink();
        this.addTrollEventLink();

        this.addInfos();

        this.addSameXYN();

        // Tune ihm
        $("#mh_vue_hidden_monstres table:first tr.mh_tdpage td:nth-child(" + this.getColumnId("mh_vue_hidden_monstres", "Nom") + ") a:contains('Gowap Apprivoisé'),a:contains('Golem de cuir'),a:contains('Golem de métal'),a:contains('Golem de papier'),a:contains('Golem de mithril')").css("color", "#000");
    },

    addChampignonsRef : function() {
        // Ajout de a colonne titre
        var distColId = this.getColumnId("mh_vue_hidden_champignons", "Dist.");
        $("#mh_vue_hidden_champignons table:first tr.mh_tdtitre:first td:nth-child("+distColId+")").after('<td width="160px"><b>Réf.</b></td>');

        var xColId = this.getColumnId("mh_vue_hidden_champignons", "X");
        var yColId = this.getColumnId("mh_vue_hidden_champignons", "Y");
        var nColId = this.getColumnId("mh_vue_hidden_champignons", "N");
        var nameColId = this.getColumnId("mh_vue_hidden_champignons", "-");

        $("#mh_vue_hidden_champignons table:first tr.mh_tdpage").each($.proxy(function(iTr, tr) {
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

        $.each(["mh_vue_hidden_monstres", "mh_vue_hidden_trolls", "mh_vue_hidden_tresors"], $.proxy(function(i, tableId) {

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

        $("<p>")
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
        .insertAfter( "h2" );
    },

    highlightTreasures : function() {
        var refColId = this.getColumnId("mh_vue_hidden_tresors", "Type");

        $("#mh_vue_hidden_tresors table:first tr.mh_tdpage td:nth-child("+refColId+")").each(function(){
            $(this).html((function(txt) {
                $.each(
                    [
                        ["Gigots de Gob'", "<b style='color:#ff8000'>piécettes à Miltown</b>"],
                        [/(Gigots de Gob)/, "<b style='color:#ff8000'>$1</b>"],
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
            '.editable:after { content: ""; display: none; opacity: 1; margin-left: 8px; width: 12px; height: 12px; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABGdBTUEAAK/INwWK6QAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4zjOaXUAAAAFhJREFUKFOVjgEKgCAQBH1m/v8hG3N5cdWmuDCgMCM2SVN6PwR5/wiVIcYysiKk/I6mMuNc46WcG+fnl1YybMmwJcMtV5E5GezrfzJEYCIrAwuphFa8UDsBgSOr5cVAQ8gAAAAASUVORK5CYII=); }',
            'tr.mh_tdpage:hover .editable:after {display:inline-block; }',
            '.editable + input { margin: 0 0 0 10px; font-family: monospace; font-size: 9pt; height: 14px; border: none; display: none; }'
        ]);

        $.each(
            [
                ["mh_vue_hidden_monstres", "Réf.", "Nom", 1],
                ["mh_vue_hidden_trolls", "Réf.", "Nom", 2],
                ["mh_vue_hidden_tresors", "Réf.", "Type", 3],
                ["mh_vue_hidden_champignons", "Réf.", "-", 4],
                ["mh_vue_hidden_lieux", "Réf.", "Nom", 5]
            ], $.proxy(function(i, data) {
                var nomColId = this.getColumnId(data[0], data[2]);
                var refColId = this.getColumnId(data[0], data[1]);

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

    addMonsterInfos : function() {
        var nomColId = this.getColumnId("mh_vue_hidden_monstres", "Nom");
        var refColId = this.getColumnId("mh_vue_hidden_monstres", "Réf.");

        var fnExtract = function(monsterFullName) {
            var monster = null;
            var template = null;

            var alias = DB_monstreAlias[monsterFullName];
            if(!Utils.isUndefined(alias)) {
                monsterFullName = alias;
            }

            var search = true;

            {
                var exceptions = ["Bouj'Dla Placide"];
                for(var ex = 0; ex < exceptions.length; ex++) {
                    var exception = exceptions[ex];
                    if(monsterFullName.indexOf(exception) == 0) {
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
                template : '' == template ? null : template,
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

        // Ajout de a colonne titre
        $("#mh_vue_hidden_monstres table:first tr.mh_tdtitre:first td:nth-child("+nomColId+")").after('<td width="160px"><b>Infos</b></td>');

        // Extraction des données
        $("#mh_vue_hidden_monstres table:first tr.mh_tdpage").each($.proxy(function(idx, tr){

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
                    console.log("Unable to find the age " + monstreAgeName );
                    return;
                }

                if(Utils.isUndefined(monsterTemplate)) {
                    console.log("Unable to find the template " + monsterTemplate );
                    return;
                }

                //console.log("Name: ", monsterFullName, "Age: ", monstreAgeName, monstreAge, "Template: ", monsterTemplateName, monsterTemplate, "Monstre: ", monster);

                Storage["monster-" + monsterId] = $.grep([
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
                    fnShowCarac(monster, monsterTemplate, monstreAge, "deg", "Dés de Dégât", "D3"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "rm", "Résistance Magique"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "mm", "Maitrise Magique"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "vue", "Vue"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "vlc", "Voir le Caché"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "speed", "Vitesse de Déplacement"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "dla", "Durée tour", "heures"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "dlaUse", "DLA"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "fly", "Vole"),
                    fnShowCarac(monster, monsterTemplate, monstreAge, "coldBlod", "Sang froid"),
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
                                    $.map(Storage["monster-" + monsterId], function(attr){
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

    addSameXYN : function() {
        $("<style type='text/css'> tr.xyn td { background-color:beige;} </style>").appendTo("head");

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

        return $("#mh_vue_hidden_champignons table:first tr.mh_tdpage td:nth-child("+refColId+")").map(function(){
            var id = $(this).text();
            $(this).parent("tr").attr("data-champignon-info", id);
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
                "c" : this.getChampigonIds()
            },
            callback : function(datas) {
                datas = datas.replace(/\s+/g, " ");
                var json = $.parseJSON(datas);

                var isInvisible = false;

                var trollIds = $.map(json.trolls, $.proxy(function(trollId, data){
                    return trollId;
                }, this));

                $.each(json.invis, $.proxy(function(trollId, data){
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
                    .append($("<td/>").append('<a href="javascript:Enter(\'/mountyhall/View/PJView_Events.php?ai_IDPJ=' + trollId + '\', 750, 550);" class="mh_trolls_0">' + trollId + '</a>'))
                    .append($("<td/>").append('<a href="javascript:EPV(' + trollId + ')" class="mh_trolls_0">' + data.name + '</a> [' + (data.camou ? "Camouflé" : "") + (data.invi ? "Invisible" : "") + ']'))
                    .append($("<td/>").text(data.lvl))
                    .append($("<td/>").text(data.race))
                    .append($("<td/>").append(data.guildId ? ('<a href="javascript:EAV(' + data.guildId + ',750,550)" class="mh_links">' + data.guildName + '</a>') : ''))
                    .append(this.addSameXYN_hoverTd($("<td/>")).text(data.x).attr("align", "center"))
                    .append(this.addSameXYN_hoverTd($("<td/>")).text(data.y).attr("align", "center"))
                    .append(this.addSameXYN_hoverTd($("<td/>")).text(data.n).attr("align", "center"))
                    .insertAfter(previous)
                    ;

                    this.addTagEditionForCell(tr, this.getColumnId("mh_vue_hidden_trolls", "Réf."), this.getColumnId("mh_vue_hidden_trolls", "Nom"), 2);
                }, this));

                $.each(json.trolls, $.proxy(function(trollId, data){

                    // Création de la ligne pour son troll
                    if(trollId == Utils.getConf("login") && !isInvisible) {
                        var tr = $("<tr/>")
                        .attr("data-troll-info", trollId)
                        .attr("data-xyn", x + ";" + y + ";" + n)
                        .addClass("mh_tdpage")
                        .append($("<td/>").text(0))
                        .append($("<td/>").append('<a class="mh_trolls_1" href="javascript:Enter(\'/mountyhall/View/PJView_Events.php?ai_IDPJ=' + trollId + '\', 750, 550);">' + trollId + '</a>'))
                        .append($("<td/>").text('Mon troll'))
                        .append($("<td/>").text('-'))
                        .append($("<td/>").text('-'))
                        .append($("<td/>").text('-'))
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
                    $("[data-troll-info='" + trollId + "'] td:nth-child("+this.getColumnId("mh_vue_hidden_trolls", "Nom")+")")
                    .append(
                        $("<div/>")
                        .css("float", "right")
                        .css("margin", "0 2px 0 0")
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
                        .css("margin", "0")
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
            .attr("href", "https://github.com/jswale/KFE/raw/master/src/KMHC.user.js")
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
        var p = {zf: 2.0, dx: 30, dy: 30},
            map = MH_Map.getMap("map_mh", p);

        $("#footer1").before(map.div);

        var ctn = null;
        try {
            ctn = window.parent.parent.parent.Sommaire.document;
        } catch(e) {}
        if (ctn) {
            var tmp = /X\s*=\s*(-?\d+)\s*\|\s*Y\s*=\s*(-?\d+)/.exec($("div.infoMenu", ctn).first().text());
            MH_Map.drawPos(map, parseInt(tmp[1]), parseInt(tmp[2]), "rgba(0,50,0,0.5)", p, "Vous êtes ici");
        }

        var tmp1 = /Portail de Téléportation\s+\(Lieu n° (\d+)\)/.exec($("div.titre2").text());
        if(tmp1) {
            var tmp2 = /(mène en X = (-?\d+) \| Y = (-?\d+)[^\.]*)/.exec($("#description").text());
            MH_Map.drawPos(map, parseInt(tmp2[2]), parseInt(tmp2[3]), "rgba(0,0,0,0.5)", p, "Destination TP");

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

var Messagerie_MH_Messagerie = $.extend({}, MH_Page, {
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
                    bt.parent().append(this.mhButton(e[0], e[1])).append(" ");
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

var Messagerie_ViewMessage = $.extend({}, MH_Page, {
    init : function() {
        $("input[name='bAnswer'],input[name='bAnswerToAll']").on('click', function(e) {
            var reply = $($(this).closest('tr').prev().children()[0]).html();
            Utils.setValue('lastReply', reply);
        });
    }
});

var View_TresorHistory = $.extend({}, MH_Page, {
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

var MH_Play_Actions_Competences_Play_a_Competence43b = $.extend({}, MH_Page, {
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


var MH_Play_Play_e_follo = $.extend({}, MH_Page, {
  init : function() {
      $('form td.mh_titre3').each(function(){
          var id = $(this).find("a").first().text().trim().replace(/^(\d+)(\..*)$/, "$1");

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
          .insertAfter( $(this).parents("tr:first") );
      })
  }
});

var MH_Follower_FO_NewOrder = $.extend({}, MH_Page, {
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

var MH_Follower_FO_NewOrderOK = $.extend({}, MH_Page, {
  init : function() {
      $('form').submit();
  }
});

var MH_Follower_FO_DeleteOrder = $.extend({}, MH_Page, {
  init : function() {
      $('form').submit();
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
