// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

//>>built
define(["dojo/_base/declare",
"jimu/BaseWidget",
'dijit/form/Button',
"dijit/form/ComboBox",
"dojo/store/Memory",
"dijit/form/Select",
'dojo/_base/lang',
'esri/tasks/QueryTask',
'esri/tasks/query',
],
function(declare,
    BaseWidget,
    dojoBtn,
    ComboBox,    
    Memory,
    Select,
    lang,
    QueryTask,
    Query
    ){return declare([BaseWidget],{
    baseClass:"jimu-widget-_regresion",

postCreate:function(){this.inherited(arguments);console.log("postCreate")},
startup:function(){this.inherited(arguments);
    
    console.log("startup")},
onOpen:function(){
    layer=this.map.getLayer("datos_movil_3401");
    this._consulta(layer.url, ["ID","OBJECTID"], "1=1",true,this._jsonCategorias, false);
    var comboDep = dijit.byId("categorias-cate");
    this._crearBoton("Consultar", "consultar", lang.hitch(this,function(){
        this._consulta(layer.url, ["MOTIVO_VIAJE","MEDIO_TRANSPORTE","GENERO","EDAD","DISCAPACIDAD","MOVILIZA_BICICLETA","VICTIMA_AGRESION","COSTO_PASAJE"], "ID="+comboDep.value,true,this._regresion, false);
    }));
    console.log(layer.url);
},
_regresion:function(results)
{    
    results.features.forEach(function (elemento) {
        var jsonCat= {};
        jsonCat["ID"] = elemento.attributes.ID.toString();  
        jsonCat["OBJECTID"] ="0"+elemento.attributes.OBJECTID.toString();     
        jsonCats.categorias.push(jsonCat);
    });
    

},
_crearBoton: function (title, parent, click) {
    var boton = new dojoBtn({ label: title });
    boton.startup();
    boton.placeAt(parent);
    boton.on("click", click);
},

_consulta: function (url, campos, where, distinct,funcion, geometria) {
    var queryTask = new QueryTask(url);
    var query = new Query();
    query.outFields = campos;   
    query.where = where;
    query.returnDistinctValues=distinct;
    query.returnGeometry = geometria;
    queryTask.execute(query, lang.hitch(this, funcion));
},
_jsonCategorias:function(results)
{
    //console.log(results.features);
    var jsonCats = {};
    var categorias = [];
    jsonCats.categorias = categorias;
    results.features.forEach(function (elemento) {
        var jsonCat= {};
        jsonCat["ID"] = elemento.attributes.ID.toString();  
        jsonCat["OBJECTID"] ="0"+elemento.attributes.OBJECTID.toString();     
        jsonCats.categorias.push(jsonCat);
    });    
    this._crearSelect(jsonCats.categorias, "cate", "OBJECTID", "categorias", "ID");
    var comboDep = dijit.byId("categorias-cate");
    console.log(comboDep);

},
_crearSelect: function (array, nam, label, domId, clave) {
    var combo = dijit.byId(domId + "-" + nam);
    option = {
        value: "00",
        label: "Seleccione",
        selected: false
    };
    if (array !== undefined) {
        if (combo !== undefined) {
            dijit.byId(domId + "-" + nam).destroyRecursive(true);
            dojo.byId(domId).innerHTML = "";
            var Store = new Memory({
                idProperty: clave,
                data: array
            });
            var select = new Select({
                id: domId + "-" + nam,
                name: nam,
                store: Store,
                style: "width: 200px;",
                labelAttr: label,
                maxHeight: -1
              });
            select.addOption(option);
            select.startup();
            select.placeAt(domId);
        }
        else {
            var Store = new Memory({
                idProperty: clave,
                data: array
            });
            var select = new Select({
                id: domId + "-" + nam,
                name: nam,
                store: Store,
                style: "width: 200px;",
                labelAttr: label,
                maxHeight: -1
            });
            select.addOption(option);
            select.startup();
            select.placeAt(domId);
        }
    }
    else {
        dijit.byId(domId + "-" + nam).destroyRecursive(true);
        dojo.byId(domId).innerHTML = "";
    }

},
onClose:function(){console.log("onClose")},
onMinimize:function(){console.log("onMinimize")},
onMaximize:function(){console.log("onMaximize")},
onSignIn:function(a){console.log("onSignIn")},
onSignOut:function(){console.log("onSignOut")}
})});