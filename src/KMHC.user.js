// ==UserScript==
// @name          KFE
// @namespace     pharoz.net
// @version       0.0.4
// @description   Pharoz.net MH Connector
// @match         http://games.mountyhall.com/*
// @require       http://code.jquery.com/jquery-2.1.0.min.js
// @downloadURL     https://github.com/jswale/KFE/raw/master/src/KMHC.user.js
// @updateURL     https://github.com/jswale/KFE/raw/master/src/KMHC.meta.js
// @grant         none
// @copyright     2014+, Miltown
// ==/UserScript==

var undefined = "undefined";
var success = "success";

var Module = function() {
		return {
				load : function() {
						console.log("Module initializing");
						this.init();
				},
				init : function() {
						console.log("Not yet implemented");
				},
				log : function() {
						console.log(arguments);
				},
				error : function() {
						console.error(arguments);
				},
				isInitialized : function() {
						return  (typeof localStorage["KMHC_login"] != undefined)
							&&  (typeof localStorage["KMHC_pswd"]  != undefined);
				},
				callAPIConnected : function(conf) {
						if(!this.isInitialized()) {
								this.error("Authentification required");
								return;
						}
						conf.data = $.extend(conf.data, {"login" : localStorage["KMHC_login"],"password" : localStorage["KMHC_pswd"]})
						this.callAPI(conf);
				},
				callAPI : function(conf) {
						this.log("Calling API", conf);
						 $.ajax({
								type: "POST",
								url: "http://pharoz.net/MH/outil/api.php?rnd=" + new Date().getTime(),
								 data : $.extend(conf.data, {"page" : conf.api, "popup" : 0})
						 }).done($.proxy(function(data, result, request){
								 if(result == success) {
										 if(typeof conf.callback == "undefined") {
												 this.log("No callback found");
										 } else {
												conf.callback.apply(this, arguments);
										 }
								 } else {
										 this.log("Error while executing the API call");
										 this.error(arguments);
								 }
						 }, conf.scope || this));
				}
		}
}();

var MH_Play_Play_vue = $.extend({}, Module, {
		init : function(){
				this.addMonsterLevel();
				this.addInvisibleTroll();
		},

		addMonsterLevel : function() {
				var monsterNames = [];
				var monsterIds = [];

				// Ajout de a colonne titre
				$("#mh_vue_hidden_monstres table:first tr.mh_tdtitre:first td:nth-child(2)").after('<td width="50px"><b>Niveau</b></td>');

				// Extraction des données
				$("#mh_vue_hidden_monstres table:first tr.mh_tdpage").each(function(){
						var monsterId = $(this).children("td:nth-child(2)").text();
						monsterIds.push(monsterId);

						var monsterName = $($(this).children("td:nth-child(3)").children("a")[0]).text();
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
						callback : function(data) {
								//TODO
								// X | Y | N | ID | name | race | level | Camouflé[T],Invisible[F] | team_id | team_name
			},
						scope : this
				});
		}
});

var MH_Play_PlayStart = $.extend({}, Module, {

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
				localStorage["KMHC_login"] = login;
				localStorage["KMHC_pswd"] = pswd;
				this.showMsg("Identifiants de connexion enregistrés", "#009900");
		}

});


var Play_monstres = $.extend({}, Module, {
		init : function(){
				var title = $.trim($("table:first tr:first td:first font:first").text());
				var body = $.trim($("table:first tr:nth-child(5) td:first").text());
				console.log(title, body);
		}
});

var MH_Play_TurnStart = $.extend({}, Module, {
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
								 .attr("name", "KMHC_hidden_form")
						 );

				$("<form/>")
						.attr("method", "post")
						.attr("action", "http://pharoz.net/MH/outil/index.php4")
						.attr("target", "KMHC_hidden_form")
						.css("display", "none")
						.append(
								$("<input/>")
								.attr("type","text")
								.attr("name","login")
								.attr("value",localStorage["KMHC_login"])
						)
						.append(
								$("<input/>")
								.attr("type","password")
								.attr("name","password")
								.attr("value",localStorage["KMHC_pswd"])
						)
						.submit()
				;
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
