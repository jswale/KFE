  /*----------*/
var DB_talents = {
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
            sons : {
                1: [ "Booong", "DEG +1 / ESQ -1", { seuil: 1, deg: 1, esq: -1 } ],
                2: [ "Bababoum", "ATT +1", { seuil: 1, att: 1 } ],
                3: [ "Zbouing", "REG +1", { seuil: 1, reg: 1 } ],
                4: [ "Kliketiiik", "ESQ -1 | Concentration -1", { seuil: 1, esq: -1, concentration: -1 } ],
                5: [ "Whaaag", "Portée Horizontale +1/4", { seuil: 1, portee: 1, base: 4 } ],
                6: [ "Whoooom", "Concentration +2", { seuil: 1, concentration: 2 } ],
                7: [ "Krouiiik", "Concentration -2", { seuil: 1, concentration: -2 } ],
                8: [ "Tagadagada", "Tour +1/2", { seuil: 2, tour: 1, base: 2 } ],
                9: [ "Tuutuuuut", "ATT -1", { seuil: 1, att: -1 } ],
                11: [ "Kssksss", "ESQ +1", { seuil: 1, esq: 1 } ],
                12: [ "Gaaaw", "Fatigue +1", { seuil: 1, fatigue: 1 } ],
                13: [ "Huitsch", "DEG -1", { seuil: 1, deg: -1 } ],
                15: [ "Sssrileur", "Visible", { seuil: 6, visible: true } ],
                '?5': [ "Praaaouuut", "REG -1", { seuil: 1, reg: -1 } ],
                '?6': [ "Ytseukayndof", "Bonus magiques", { seuil: 2, bm: true } ]
            },
            description : function() {
                var ctn = $("<table/>");
                ctn.append(
                    $("<tr/>")
                    .append($("<td/>").attr("colspan", 2).html("Vous voulez encourager vos compagnons de chasse&nbsp;?<br/>Ramassez quelques Coquillages, et en avant la musique !<hr/>"))
                );
                $.each(DB_talents["Comp"][43].sons, function (i, v) {
                    ctn.append(
                        $("<tr/>")
                        .append($("<th/>").html(v[0]))
                        .append($("<td/>").html(v[1]))
                    );
                });
                return ctn;
            } 
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
            description : function(stats) {
                var vue = stats.view.range,
                    vuetotale = stats.view.total,
                    attbmm = stats.attaque.magique,
                    degbmm = stats.degat.magique,
                    portee = Utils.getPortee(vuetotale);
                
                var modA = 0;
                var modD = 0;
                // TODO
                var pcA = false;
                var pcD = false;
                // ---
                
                if(pcA) {
                    modD = parseInt(vue*pcA/100);
                }
                if(pcD) {
                    modD = parseInt(Math.floor(vue/2)*pcD/100);
                }
                
                var ctn = $("<table/>");
                ctn.append(
                    $("<tr/>")
                    .append($("<th/>").html("Attaque :"))
                    .append($("<td/>").html("<b>"+ vue + "</b> D6"))
                    .append($("<td/>").html(pcA ? ("<i>" + Utils.sign(modA) + " D6</i>") : ""))
                    .append($("<td/>").html(Utils.sign(attbmm)))
                    .append($("<td/>").html(" => "))
                    .append($("<td/>").attr("colspan", "2").html("<b>" + (Math.round(3.5*(vue+modD))+attbmm) + "</b>"))
                );
                ctn.append(
                    $("<tr/>")
                    .append($("<th/>").html("Dégâts :"))
                    .append($("<td/>").html("<b>"+ Math.floor(vue/2) + "</b> D3"))
                    .append($("<td/>").html(pcD ? ("<i>" + Utils.sign(modD) + " D3</i>") : ""))
                    .append($("<td/>").html(Utils.sign(degbmm)))
                    .append($("<td/>").html(" => "))
                    .append($("<td/>").html("<b>" + (2*(Math.floor(vue/2)+modD)+degbmm) + "/" + (2*(Math.floor(1.5*Math.floor(vue/2))+modD)+degbmm) + "</b>"))
                    .append($("<td/>").html("(" + Utils.resiste(Math.floor(vue/2)+modD, degbmm) + "/" + Utils.resiste(1.5*Math.floor(vue/2)+modD, degbmm) + ")"))
                );
                ctn.append(
                    $("<tr/>")
                    .append($("<th/>").html("Portée :"))
                    .append($("<td/>").attr("colspan", "6").html("<b>"+ portee + "</b> case" + Utils.addS(portee)))
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
                    .append($("<td/>").attr("colspan", "2").html("<b>" + Math.round(3.5*(Math.floor(2*deg/3)+modD)+attbmm)+ "</b>"))
                );
                ctn.append(
                    $("<tr/>")
                    .append($("<th/>").html("Dégâts :"))
                    .append($("<td/>").html("<b>" + deg + "</b> D3"))
                    .append($("<td/>").html(pcD ? ("<i>" + Utils.sign(modD) + " D3</i>") : ""))
                    .append($("<td/>").html(" => "))
                    .append($("<td/>").html("<b>" +(2*(deg+modD)+degbmm)+'/'+(2*(Math.floor(1.5*deg)+modD)+degbmm) +"</b>"))
                    .append($("<td/>").html("(" + Utils.resiste(deg+modD,degbmm) + "/" + Utils.resiste(1.5*deg+modD,degbmm) + ")"))
                );
                return ctn;
            }
        },
        4  : {
            name : "Rafale Psychique",
            description : function(stats) {
                var deg = stats.degat.des,
                    degbmm = stats.degat.magique;
                
                var modD = 0;
                // TODO
                var pcD = false;
                // ---
                
                if(pcD) {
                    modD = parseInt(deg*pcD/100);
                }
                
                var ctn = $("<table/>");
                ctn.append(
                    $("<tr/>")
                    .append($("<th/>").html("Dégâts :"))
                    .append($("<td/>").html("<b>" + deg + " D3</b>"))
                    .append($("<td/>").html(pcD ? ("<i>" + Utils.sign(modD) + " D3</i>") : ""))
                    .append($("<td/>").html(" => "))
                    .append($("<td/>").html("<b>" +(2*(deg+modD)+degbmm)+ "</b>"))
                    .append($("<td/>").html("(" +Utils.resiste(deg+modD,degbmm)+ ")"))
                );
                ctn.append(
                    $("<tr/>")
                    .append($("<th/>").html("Malus :"))
                    .append($("<td/>").attr("colspan", "5").html("régénération <b>-" + deg + "</b>"))
                );
                return ctn;
            }
        },
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
        14 : {
            name : "Siphon des âmes",
            description : function(stats) {
                var att = stats.attaque.desReel,
                    attbmm = stats.attaque.magique,
                    degbmm = stats.degat.magique,
                    reg = stats.regen.des;
                
                var modD = 0;
                // TODO
                var pcA = false;
                var pcD = false;
                // ---
                
                if(pcA) {
                    modD = parseInt(att*pcA/100);
                }
                if(pcD) {
                    modD = parseInt(reg*pcD/100);
                } else {
                    modD = 0;
                }
                
                var ctn = $("<table/>");
                ctn.append(
                    $("<tr/>")
                    .append($("<th/>").html("Attaque :"))
                    .append($("<td/>").html("<b>" + att + "</b> D6"))
                    .append($("<td/>").html(pcA ? ("<i>" + Utils.sign(modD) + " D6</i>") : ""))
                    .append($("<td/>").html(Utils.sign(attbmm)))
                    .append($("<td/>").html(" => "))
                    .append($("<td/>").attr("colspan", "2").html("<b>" + Math.round(3.5*(att+modD)+attbmm) +"</b>"))
                );
                ctn.append(
                    $("<tr/>")
                    .append($("<th/>").html("Dégâts :"))
                    .append($("<td/>").html("<b>" + reg + "</b> D3"))
                    .append($("<td/>").html(pcD ? ("<i>" + Utils.sign(modD) + " D3</i>") : ""))
                    .append($("<td/>").html(Utils.sign(degbmm)))
                    .append($("<td/>").html(" => "))
                    .append($("<td/>").html("<b>" + (2*(reg+modD)+degbmm) + "/" + (2*(Math.floor(1.5*reg)+modD)+degbmm) +"</b>"))
                    .append($("<td/>").html("(" + Utils.resiste(reg+modD, degbmm) + "/" + Utils.resiste(1.5*reg+modD, degbmm) + ")"))
                );
                ctn.append(
                    $("<tr/>")
                    .append($("<th/>").html("Nécrose :"))
                    .append($("<td/>").attr("colspan", "6").html("attaque magique <b>-" + reg + "</b>"))
                );
                
                return ctn;
            }
        },
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
                    .append($("<th/>").html("Portée horizontale (à distance) :"))
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
                    attbmm = stats.attaque.magique,
                    deg = stats.degat.des,
                    degbmm = stats.degat.magique,
                    pvbase = stats.hp.max.total,
                    reg = stats.regen.des,
                    vue = stats.view.total;
                
                var modD = 0;
                // TODO
                var pcA = false;
                var pcD = false;
                // ---
                
                if(pcA) {
                    modD = parseInt(att*pcA/100);
                }
                if(pcD) {
                    modD = parseInt(Math.floor(deg/2)*pcD/100);
                } else {
                    modD = 0;
                }
                
                var ctn = $("<table/>");
                ctn.append(
                    $("<tr/>")
                    .append($("<th/>").html("Attaque :"))
                    .append($("<td/>").html("<b>" + att + "</b> D6"))
                    .append($("<td/>").html(pcA ? ("<i>" + Utils.sign(modD) + " D6</i>") : ""))
                    .append($("<td/>").html(Utils.sign(attbmm)))
                    .append($("<td/>").html(" => "))
                    .append($("<td/>").attr("colspan", "2").html("<b>" + (Math.round(3.5*(att+modD))+attbmm) +"</b>"))
                );
                ctn.append(
                    $("<tr/>")
                    .append($("<th/>").html("Dégâts :"))
                    .append($("<td/>").html("<b>" + Math.floor(deg/2) + "</b> D3"))
                    .append($("<td/>").html(pcD ? ("<i>" + Utils.sign(modD) + " D3</i>") : ""))
                    .append($("<td/>").html(Utils.sign(degbmm)))
                    .append($("<td/>").html(" => "))
                    .append($("<td/>").html("<b>" + (2*(Math.floor(deg/2)+modD)+degbmm) + "/" + (2*(Math.floor(deg/2)+Math.floor(deg/4)+modD)+degbmm) +"</b>"))
                    .append($("<td/>").html("(" + Utils.resiste(Math.floor(deg/2)+modD, degbmm) + "/" + Utils.resiste(Math.floor(deg/2)+Math.floor(deg/4)+modD, degbmm) + ")"))
                );
                var addVenin = function(ctn, type, effet, duree) {
                    var dred = Math.max(Math.floor(duree/2),1);
                    ctn.append($("<tr/>").append($("<td/>").attr("colspan", "7").html("<hr/>")));
                    ctn.append(
                        $("<tr/>")
                        .append($("<th/>").html("Venin " + type + " :"))
                        .append($("<td/>").html("<b>" + effet + "</b> D3"))
                        .append($("<td/>").attr("colspan", "2").html("pendant <b>" + duree + "</b> tour" + Utils.addS(duree)))
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
