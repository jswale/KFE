// ==UserScript==
// @name       		KFE
// @namespace  		pharoz.net
// @version    		0.0.3
// @description  	Pharoz.net MH Connector
// @match      		http://games.mountyhall.com/*
// @require     	http://code.jquery.com/jquery-2.1.0.min.js
// @downloadURL   	https://github.com/jswale/KFE/raw/master/src/KMHC.user.js
// @updateURL 		https://github.com/jswale/KFE/raw/master/src/KMHC.meta.js
// @grant       	none
// @copyright  		2014+, Miltown
// ==/UserScript==

var Module = function() {
    return {
        load : function() {
            console.log("Module initializing");
            this.init();
        },
        init : function() {
            console.log("Not yet implemented");
        }
    }
}();

var Play_vue = $.extend({}, Module, {
    init : function(){            
        $("#mh_vue_hidden_monstres table:first tr.mh_tdpage").each(function(){
            var ref = $(this).children("td:nth-child(2)").text();
            var enemy = $($(this).children("td:nth-child(3)").children("a")[0]).text();
            console.log(ref, enemy);
        });            
    }
});

var MH_Play_PlayStart = $.extend({}, Module, {
    form : null,
    
    init : function(){
      this.form = $("<div/>")
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
            	.append(this.addCssToInput($("<input/>").attr("type", "text").attr("name", "login").attr("value", localStorage["KMHC_login"] || "")))
            	.append($("<br/>").css("clear","left"))
            	.append(this.addCssToLabel($("<label/>").text("Mot de passe")))
            	.append(this.addCssToInput($("<input/>").attr("type", "password").attr("name", "password").attr("value", localStorage["KMHC_pswd"] || "")))
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
    
    checkConnect : function() {
        var login = $("#KMHC_form input[name=login]:first").val();
        var pswd  = $("#KMHC_form input[name=password]:first").val();      
        
        // check
        $.ajax({
            type: "POST", 
            crossDomain: true,
            datatype: 'jsonp',
            url: "http://pharoz.net/MH/outil/api.php4",
            data : {
                "page" : "isLog",
            	"login" : login,
            	"password" : pswd
        	}
        }).done($.proxy(function(data) {
            console.log(data);
            return;
            if(data.indexOf("Une erreur est survenue lors de votre identification, veuillez recommencer.") > -1) {
        		$("#KMHC_form span:first").text("Une erreur est survenue lors de votre identification, veuillez recommencer");                        
            } else {
                $("#KMHC_form span:first").text("Test de connexion réussi");
                this.save(login, pswd);
            }
		},this));
	},
    
    save : function(login, pswd) {
        console.log("save");
        localStorage["KMHC_login"] = login;
        localStorage["KMHC_pswd"] = pswd;
        $("#KMHC_form span:first").text("Identifiants de connexion enregistrés");        
    }
            
});


var Play_monstres = $.extend({}, Module, {
    init : function(){   
        var title = $.trim($("table:first tr:first td:first font:first").text());
        var body = $.trim($("table:first tr:nth-child(5) td:first").text());
        console.log(title, body); 
    }
});



$(document).ready(function() {
    var pathname = document.location.pathname;
    var moduleName = pathname.replace(/\/mountyhall\/(.*)\/(.*).php$/, "$1_$2");
    var module = eval(moduleName);
    if(typeof module == "undefined") {
        console.log("Unable to find the module " + moduleName + " for URL " + pathname);
    } else {
        module.load();
    }
});
