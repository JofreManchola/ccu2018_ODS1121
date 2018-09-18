// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/EmergencyResponseGuide/templates/ColorPickerEditor.html":'\x3cdiv class\x3d"colorPickerEditor"\x3e\r\n  \x3cdiv class\x3d"colorPicker" data-dojo-attach-point\x3d"colorPicker"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"sliderbar" data-dojo-attach-point\x3d"sliderBar"\x3e\r\n    \x3col data-dojo-type\x3d"dijit/form/HorizontalRuleLabels" style\x3d"height:2.5em;" container\x3d"topDecoration"\x3e\r\n        \x3cli\x3e${nls.transparency}\x3c/li\x3e\r\n        \x3cli\x3e\x3c/li\x3e\r\n    \x3c/ol\x3e\r\n  \x3c/div\x3e\r\n  \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberSpinner" value\x3d"0"\r\n         data-dojo-attach-point\x3d"spinner"\r\n         data-dojo-props\x3d"smallDelta:10,intermediateChanges:true,constraints: {min:0,max:100}"\x3e\r\n  \x3cdiv class\x3d"outline-fill-section"\x3e\r\n    \x3clabel for\x3d"${id}_select"\x3e${nls.style}\x3c/label\x3e\r\n    \x3cselect style\x3d"width: 150px" data-dojo-type\x3d"dijit/form/Select"\r\n      data-dojo-attach-point\x3d"dropdown" /\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n\r\n'}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/Color dojo/on dojo/dom-class dojo/query dojo/_base/html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!../templates/ColorPickerEditor.html dijit/form/HorizontalSlider jimu/dijit/ColorPickerPopup dijit/form/NumberSpinner".split(" "),function(f,g,d,h,e,u,k,l,m,n,p,q,r,t){return f([m,n,p],{_defaultColor:"#485566",templateString:q,nls:null,postCreate:function(){this.colorPicker=new t({color:this._defaultColor},
this.colorPicker);this.colorPicker.startup();this.slider=new r({name:"slider",value:100,minimum:0,maximum:100,discreteValues:101,intermediateChanges:!0,showButtons:!1,style:"display: inline-block;"},this.sliderBar);this.slider.startup();var a=[],b,e="esriSLSDash esriSLSDashDot esriSLSDashDotDot esriSLSDot esriSLSLongDash esriSLSLongDashDot esriSLSNull esriSLSShortDash esriSLSShortDashDot esriSLSShortDashDotDot esriSLSShortDot esriSLSSolid".split(" "),f="esriSFSBackwardDiagonal esriSFSCross esriSFSDiagonalCross esriSFSForwardDiagonal esriSFSHorizontal esriSFSNull esriSFSSolid esriSFSVertical".split(" ");
"line"===this.type?g.forEach(e,d.hitch(this,function(c){b={value:c,label:this.nls.lineStyles[c]};a.push(b)})):g.forEach(f,d.hitch(this,function(c){b={value:c,label:this.nls.fillStyles[c]};a.push(b)}));this.dropdown.addOption(a);this.inherited(arguments)},startup:function(){this.own(e(this.slider,"change",d.hitch(this,function(a){!1===this._isSameVal()&&this.spinner.setValue(a)})));this.own(e(this.spinner,"change",d.hitch(this,function(a){!1===this._isSameVal()&&this.slider.setValue(a)})));this._stylePolyfill();
this.inherited(arguments)},_isSameVal:function(){return this.slider.getValue()===this.spinner.getValue()},getValues:function(){var a=null,b=null;(b=this.colorPicker.getColor())&&b.toHex&&(a=b.toHex());b=this.spinner.getValue()/100;return{color:a,transparency:b}},setValues:function(a){if("object"===typeof a||"string"===typeof a)this.colorPicker.setColor(new h(a.color)),a.transparency="undefined"===typeof a.transparency?0:100*a.transparency,this.slider.setValue(a.transparency),this.spinner.setValue(a.transparency)},
_stylePolyfill:function(){var a=k(".dijitSliderLeftBumper",this.domNode)[0];a&&a.parentNode&&l.setStyle(a.parentNode,"background-color","#24b5cc")}})});