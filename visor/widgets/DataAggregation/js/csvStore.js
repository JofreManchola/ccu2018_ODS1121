// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/Deferred dojo/DeferredList dojo/Evented dojox/data/CsvStore dojo/store/Observable dojo/store/Memory esri/graphicsUtils esri/geometry/webMercatorUtils esri/geometry/Point esri/layers/FeatureLayer esri/tasks/locator esri/tasks/query esri/SpatialReference esri/dijit/PopupTemplate esri/geometry/geometryEngine esri/tasks/ProjectParameters esri/tasks/GeometryService esri/request jimu/utils moment/moment".split(" "),function(D,h,f,q,x,E,F,
G,H,I,J,y,K,L,z,A,M,B,N,O,P,u,Q){return D([E],{file:null,map:null,spatialReference:null,fsFields:[],duplicateTestFields:[],geocodeSources:[],duplicateData:[],data:null,editLayer:null,separatorCharacter:null,csvStore:null,storeItems:null,matchedFeatureLayer:null,mappedArrayFields:null,unMatchedFeatureLayer:null,duplicateFeatureLayer:null,addrFieldName:"",xFieldName:"",yFieldName:"",symbol:null,matchFieldPrefix:"MatchField_",_internalFields:[],constructor:function(a){f.mixin(this,a);this.useAddr=!0;
this.objectIdField="ObjectID";this.nls=a.nls;this.minScore=90;this._getDuplicateFields(this.fsFields);this.spatialReference=this.map.spatialReference;this.decimalSeperator=/^1(.+)1$/.exec(u.localizeNumber(1.1))[1].toString()},_getDuplicateFields:function(a){var b=[];h.forEach(a,function(a){a.duplicate&&b.push(a.name)});this.duplicateTestFields=b},handleCsv:function(){var a=new q;if(this.file&&!this.file.data){var b=new FileReader;b.onload=f.hitch(this,function(){this.data=b.result;this._processCsvData().then(function(b){a.resolve(b)})});
b.readAsText(this.file)}return a},_processCsvData:function(){var a=new q;this._convertSources();this._getSeparator();this._getCsvStore().then(function(b){a.resolve(b)});return a},processForm:function(){this._internalFields=["DestinationOID","matchScore","hasDuplicateUpdates","duplicateState"];this._matchFields=[];var a=new q;this._locateData(this.useAddr).then(f.hitch(this,function(b){for(var c=[],e=[],l=[],m={},d=0,g=0,r=function(a,d,b,g){var e=a;-1===[null,void 0,""].indexOf(a)&&a.indexOf&&-1<a.indexOf(d)&&
(b=b.filter(function(a){return a.keyField===g}))&&b.hasOwnProperty("length")&&1===b.length&&(e=a.toString?a.toString().replace(d,"."):a);return e},v=Object.keys(b),n=0;n<v.length;n++){var k={},p=b[v[n]],t=this.storeItems[p.csvIndex];h.forEach(this.fsFields,f.hitch(this,function(a){if(this.mappedArrayFields.hasOwnProperty(a.name))if(this.mappedArrayFields[a.name]){var d=this.csvStore.getValue(t,this.mappedArrayFields[a.name]);if(a.domainValues){var b=a.domainValues.filter(f.hitch(this,function(a){return a.label===
d}));k[a.name]=b&&0<b.length?b[0].value:d}else k[a.name]="."===this.decimalSeperator||this.useAddr?d:r(d,this.decimalSeperator,this._currentAddressFields,this.mappedArrayFields[a.name])}else k[a.name]=void 0}));h.forEach(this._currentAddressFields,f.hitch(this,function(a){var d=this.matchFieldPrefix+a.keyField;if("undefined"!==typeof a.value){var b=this.csvStore.getValue(t,a.value);k[d]="."===this.decimalSeperator||this.useAddr?b:r(b,this.decimalSeperator,this._currentAddressFields,a.keyField)}else k[d]=
void 0;this._matchFields.push(d)}));p&&p.score>this.minScore?(k.ObjectID=n-d-g,k.matchScore=p.score,c.push({geometry:p.location,attributes:f.clone(k)})):p.isDuplicate?(k.ObjectID=g,k.DestinationOID=p.featureAttributes[this.editLayer.objectIdField],k.matchScore=100,k.hasDuplicateUpdates=!1,k.duplicateState="no-change",l.push({geometry:p.location,attributes:f.clone(k)}),m[g]=p.featureAttributes,g++):(k.ObjectID=d,k.matchScore=p.score?p.score:0,e.push({geometry:p.location&&p.location.type?p.location:
new y(0,0,this.spatialReference),attributes:f.clone(k)}),d++)}this.matchedFeatureLayer=this._initLayer(c,this.file.name.replace(".csv",""));0<l.length&&(this.duplicateFeatureLayer=this._initLayer(l,this.file.name.replace(".csv","")+"_Duplicate"));0<e.length&&(this.unMatchedFeatureLayer=this._initLayer(e,this.file.name.replace(".csv","")+"_UnMatched"));a.resolve({matchedLayer:this.matchedFeatureLayer,unMatchedLayer:this.unMatchedFeatureLayer,duplicateLayer:this.duplicateFeatureLayer,duplicateLookupList:m})}));
return a},_initLayer:function(a,b){a=this._generateFC(a);b=new K(a,{id:b,editable:!0,outFields:["*"]});this._initPopup(b);this.map.addLayers([b]);return b},_initPopup:function(a){var b={title:a.id+": {"+this.labelField+"}"},c=[];h.forEach(a.fields,f.hitch(this,function(a){a.name!==this.objectIdField&&-1===this._internalFields.indexOf(a.name)&&-1===this._matchFields.indexOf(a.name)&&c.push({fieldName:a.name,visible:!0})}));b.fieldInfos=c;a.infoTemplate=new M(b)},_findDuplicates:function(){var a=new q;
this._getAllLayerFeatures(this.editLayer,this.fsFields).then(f.hitch(this,function(b){this.keys=Object.keys(this.mappedArrayFields);this.oidField=this.editLayer.objectIdField;var c=[],e=[],l=this.duplicateTestFields;l&&l.hasOwnProperty("length")&&0<l.length&&h.forEach(this.storeItems,f.hitch(this,function(a){var b={compareValues:{},fileId:a._csvId,featureId:-1};h.forEach(l,f.hitch(this,function(d){var g=this.mappedArrayFields[d];"undefined"!==typeof g&&(b.compareValues[d]=this.csvStore.getValue(a,
g),-1===e.indexOf(d)&&e.push(d))}));0<Object.keys(b.compareValues).length&&c.push(b)}));var m=[];0<c.length&&h.forEach(c,f.hitch(this,function(a){h.forEach(b,f.hitch(this,function(b){var d={};h.forEach(e,f.hitch(this,function(a){var c=b.attributes[a];d[a]=-1===[null,void 0].indexOf(c)&&c.toString?c.toString():c}));if(JSON.stringify(a.compareValues)===JSON.stringify(d)){var c=b.attributes[this.oidField];-1!==a.featureId?(a.hasMultiDuplicates=!0,"undefined"===typeof a.featureIds?(a.featureIds=[a.featureId,
c],a.features=[a.feature,b]):(a.featureIds.push(c),a.features.push(b))):(a.featureId=c,a.feature=b,m.push(a))}}))}));a.resolve(m)}));return a},_getAllLayerFeatures:function(a,b){var c=new q,e=[this.editLayer.objectIdField];h.forEach(b,function(a){a.name&&e.push(a.name)});2>e.length&&(e=b);var l=a.maxRecordCount;b=new z;b.where="1\x3d1";a.queryIds(b).then(function(b){var d=[],g,r;if(b&&0<b.length){g=0;for(r=b.length;g<r;g+=l){var m=new z;m.outFields=e;m.objectIds=b.slice(g,g+l);m.returnGeometry=!0;
d.push(a.queryFeatures(m))}(new x(d)).then(f.hitch(this,function(a){if(a){for(var b=[],d=0;d<a.length;d++)a[d][1].features&&b.push.apply(b,a[d][1].features.map(function(a){return{geometry:a.geometry,attributes:a.attributes}}));c.resolve(b)}}))}else c.resolve([])});return c},_locateData:function(a){var b=new q;this._findDuplicates().then(f.hitch(this,function(c){this.duplicateData=c;if(a){var e=f.hitch(this,function(a,b,d){var c=new q,l=this._geocodeSources[b],m=l.locator;m.outSpatialReference=this.spatialReference;
var n=[],k=[],p=0,t,C;t=0;C=a.length;for(;t<C;t+=500){var R=a.slice(t,t+500),w=[];(l.singleEnabled||l.multiEnabled)&&h.forEach(R,f.hitch(this,function(a){var b=a._csvId,c=null,e;a:for(e in this.duplicateData){var g=this.duplicateData[e];if(g.fileId===b){c=f.mixin({},g);delete this.duplicateData[e];break a}}var m={};m.OBJECTID=b;this.useMultiFields&&l.multiEnabled?h.forEach(this.multiFields,f.hitch(this,function(b){this._currentAddressFields=this.multiFields;if(b.value!==this.nls.noValue){var d=this.csvStore.getValue(a,
b.value);m[b.keyField]=d}else m[b.keyField]=void 0})):l.singleEnabled&&this.singleFields[0].value!==this.nls.noValue&&(this._currentAddressFields=this.singleFields,e=this.csvStore.getValue(a,this.singleFields[0].value),"undefined"===typeof e&&(e=typeof e+b),m[l.singleLineFieldName]=e);e=f.mixin({},m);delete e.OBJECTID;e=JSON.stringify(e);if(null===c)w.push(m),d[e]={index:p,csvIndex:b,location:{}},p+=1;else if(null!==c){var g=c.feature.geometry,n=c.feature.attributes;if(-1!==[null,void 0].indexOf(g)&&
c.features){var k=0;a:for(;k<c.features.length;k++){var r=c.features[k];if(-1===[null,void 0].indexOf(r.geometry)){g=r.geometry;n=r.attributes;break a}}}d[e]={index:-1,csvIndex:b,isDuplicate:!0,location:f.mixin({},g),featureAttributes:n}}}));k.push(m.addressesToLocations({addresses:w,countryCode:l.countryCode,outFields:["ResultID","Score"]}))}var u=Object.keys(d);(new x(k)).then(f.hitch(this,function(l){this.minScore=this._geocodeSources[b]?this._geocodeSources[b].minCandidateScore:90;b+=1;var g=
this._geocodeSources.length>b;if(l){var m=this.minScore,k=0;h.forEach(l,f.hitch(this,function(b){b=b[1];h.forEach(b,function(a){a.ResultID=a.attributes.ResultID});b=G(new H({data:b,idProperty:"ResultID"})).query({},{sort:[{attribute:"ResultID"}]});h.forEach(b,f.hitch(this,function(b){for(var c in u){var e=u[c];if(d[e]&&d[e].index===k){b.attributes.Score<m?g&&(n.push(a[d[e].csvIndex]),delete d[e]):(d[e].location=b.location,d[e].score=b.attributes.Score,delete d[e].index);delete u[c];break}}k+=1}))}));
if(g&&0<n.length)e(n,b,d).then(f.hitch(this,function(a){c.resolve(a)}));else return c.resolve(d),c.promise}}));return c});e(this.storeItems,0,{}).then(f.hitch(this,function(a){b.resolve(a)}))}else this._currentAddressFields=[{keyField:this.xFieldName,label:this.xFieldName,value:this.xFieldName},{keyField:this.yFieldName,label:this.yFieldName,value:this.yFieldName}],this._xyData({storeItems:this.storeItems,csvStore:this.csvStore,xFieldName:this.xFieldName,yFieldName:this.yFieldName,wkid:this.spatialReference.wkid}).then(f.hitch(this,
function(a){if(this.isGeographic&&!this.map.spatialReference.isWebMercator()&&4326!==this.spatialReference.wkid){var c=[];h.forEach(a,function(a){c.push(a.location)});var d=1<c.length?B.union(c):B.buffer(c[0],100,9001);this._projectPoints(d,c).then(function(c){for(var d=0;d<a.length;d++)a[d].location=c[d];b.resolve(a)})}else b.resolve(a)}),function(a){b.reject(a)})}));return b},_xyData:function(a){var b=new q,c=[],e=a.csvStore;h.forEach(a.storeItems,f.hitch(this,function(b){var m=b._csvId,d=null,
g;a:for(g in this.duplicateData){var l=this.duplicateData[g];if(l.fileId===m){d=f.mixin({},l);delete this.duplicateData[g];break a}}var v={};g=e.getAttributes(b);h.forEach(g,function(a){v[a]=e.getValue(b,a)});g=!1;var n,k;null!==d&&d.feature&&d.feature.geometry?(l=d.feature.geometry,g=!0,k=d.feature.attributes):(n=e.getValue(b,a.xFieldName),d=e.getValue(b,a.yFieldName),"."!==this.decimalSeperator&&(n=-1!==[null,void 0,""].indexOf(n)?void 0:n.toString().replace(this.decimalSeperator,"."),d=-1!==[null,
void 0,""].indexOf(d)?void 0:d.toString().replace(this.decimalSeperator,".")),n=parseFloat(n),d=parseFloat(d),l=this._getGeometry(n,d),n=100);l&&c.push({attributes:v,location:l,csvIndex:m,score:n,isDuplicate:g,featureAttributes:k})}));b.resolve(c);return b},_getGeometry:function(a,b){"undefined"===typeof this.isGeographic&&(this.isGeographic=/(?=^[-]?\d{1,3}\.)^[-]?\d{1,3}\.\d+|(?=^[-]?\d{4,})|^[-]?\d{1,3}/.exec(a)?!0:!1);var c;isNaN(a)||isNaN(b)||(c=new y(a,b),this.isGeographic&&this.spatialReference.isWebMercator()?
c=J.geographicToWebMercator(c):c.spatialReference=this.isGeographic&&4326!==this.spatialReference.wkid?new A(4326):new A({wkid:this.spatialReference.wkid}));return c},_projectPoints:function(a,b){var c=new q;this.gsvc=new O(this.appConfig.geometryService);a={url:this.gsvc.url+"/findTransformations",content:{f:"json",inSR:a.spatialReference.wkid,outSR:this.spatialReference.wkid,extentOfInterest:JSON.stringify(a.getExtent().toJson())},handleAs:"json",callbackParamName:"callback"};P(a,{usePost:!1}).then(f.hitch(this,
function(a){a=(a=a&&a.transformations?a.transformations:void 0)&&0<a.length?a[0].wkid:void 0;var e=new N;e.outSR=this.spatialReference;e.geometries=b;e.transformForward=!0;e.transformation=a;this.gsvc.project(e,f.hitch(this,function(a){c.resolve(a)}),function(a){c.reject(a)})}),function(a){c.reject(a)});return c},_generateFC:function(a){var b={layerDefinition:{geometryType:"esriGeometryPoint",spatialReference:this.spatialReference,objectIdField:this.objectIdField,type:"Feature Layer",drawingInfo:{renderer:{type:"simple",
symbol:this.symbol}},fields:[{name:this.objectIdField,alias:this.objectIdField,type:"esriFieldTypeOID"}]},featureSet:{features:a,geometryType:"esriGeometryPoint"}};h.forEach(this.fsFields,f.hitch(this,function(a){b.layerDefinition.fields.push({name:a.name,alias:a.label,type:a.value,editable:!0,domain:null})}));return b},clear:function(){this._removeLayer(this.matchedFeatureLayer);this._removeLayer(this.unMatchedFeatureLayer);this._removeLayer(this.duplicateFeatureLayer);this.storeItems=this.csvStore=
this.separatorCharacter=this.data=this.fsFields=this.file=void 0;this.duplicateData=[];this.mappedArrayFields=this.duplicateFeatureLayer=this.unMatchedFeatureLayer=this.matchedFeatureLayer=void 0;this.useAddr=!0;this.yFieldName=this.xFieldName=this.addrFieldName=""},_removeLayer:function(a){a&&(this.map.removeLayer(a),a.clear())},_getSeparator:function(){var a=this.data.indexOf("\n"),b=f.trim(this.data.substr(0,a)),c=0,e="";h.forEach([",","      ",";","|"],function(a){var f=b.split(a).length;f>c&&
(c=f,e=a)});this.separatorCharacter=e},_getCsvStore:function(){var a=new q;this.csvStore=new F({data:this.data,separator:this.separatorCharacter});this.csvStore.fetch({onComplete:f.hitch(this,function(b){this.storeItems=b;this._fetchFieldsAndUpdateForm(this.storeItems,this.csvStore,this.fsFields).then(function(b){a.resolve(b)})}),onError:function(b){console.error("Error fetching items from CSV store: ",b);a.reject(b)}});return a},_fetchFieldsAndUpdateForm:function(a,b,c){var e=new q,f=b._attributes,
m=this.decimalSeperator,d={};h.forEach(f,function(c){h.forEach(a,function(a){var e=!0,f=!0,k=!0,g=!0,l;d.hasOwnProperty(c)&&(f=d[c].supportsInt,k=d[c].supportsFloat,g=d[c].supportsDate,l=d[c].maxLength,f||k||g||(e=!1));var h=b.getValue(a,c);if(h){a=h.toString().length;var q=Q(h);if(e){e=-1!==[null,void 0,""].indexOf(h);if(!e&&(g=g&&q.isValid()))if(q=h)try{g=!isNaN((new Date(q)).getTime())}catch(w){console.error(w),g=!1}else g=-1<[null,void 0,""].indexOf(q)?!0:!1;d[c]={supportsDate:g,supportsInt:e?
f:!isNaN(parseInt(h,10))&&parseInt(h,10).toString().length===a&&f};"."!==m&&(h=e?"":h.toString().replace(m,"."));d[c].supportsFloat=e?k:!isNaN(parseFloat(h))&&parseFloat(h).toString().length===a&&k}f=d[c];f.maxLength=l;"undefined"===typeof f.maxLength?f.maxLength=a:f.maxLength<a&&(f.maxLength=a)}})});e.resolve({fields:f,fieldTypes:d,fsFields:c});return e},_zoomToData:function(a,b){if(a&&0<a.length)try{var c=I.graphicsExtent(a);b?this.map.setExtent(c.expand(1.9),!0):this.map.setExtent(c,!0)}catch(e){console.log(e.message)}},
_convertSources:function(){this.geocodeSources&&0<this.geocodeSources.length&&(this._geocodeSources=h.map(this.geocodeSources,f.hitch(this,function(a){if(a&&a.url&&"locator"===a.type)return{locator:new L(a.url||""),outFields:["ResultID","Score"],singleLineFieldName:a.singleLineFieldName||"",name:u.stripHTML(a.name||""),placeholder:u.stripHTML(a.placeholder||""),countryCode:a.countryCode||"",addressFields:a.addressFields,singleEnabled:a.singleEnabled||!1,multiEnabled:a.multiEnabled||!1,minCandidateScore:a.minCandidateScore||
90}})))}})});