/** * Copyright (c) 2009 * Stefan Krumnow * * Permission is hereby granted, free of charge, to any person obtaining a * copy of this software and associated documentation files (the "Software"), * to deal in the Software without restriction, including without limitation * the rights to use, copy, modify, merge, publish, distribute, sublicense, * and/or sell copies of the Software, and to permit persons to whom the * Software is furnished to do so, subject to the following conditions: * * The above copyright notice and this permission notice shall be included in * all copies or substantial portions of the Software. * * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER * DEALINGS IN THE SOFTWARE. **/if(!ORYX.Plugins)	ORYX.Plugins = new Object();ORYX.Plugins.BPMN2BPEL = ORYX.Plugins.AbstractPlugin.extend({		construct: function(facade) {			this.facade = facade;			this.facade.offer({			'name'				: ORYX.I18N.Bpmn2Bpel.show,			'functionality'		: this.showBpel.bind(this),			'group'				: ORYX.I18N.Bpmn2Bpel.group,            dropDownGroupIcon   : ORYX.PATH + "images/bpmn2bpel_icon.png",			'description'		: ORYX.I18N.Bpmn2Bpel.showDesc,			'index'				: 0,			'minShape'			: 0,			'maxShape'			: 0});						},	showBpel: function() {				alert("TODO : Send request for transformation into BPEL / Show result.. ");			},		_sendRequest: function( url, params, successcallback, failedcallback ){		var suc = false;		new Ajax.Request(url, {           method			: 'POST',           asynchronous	: false,           parameters		: params,		   onSuccess		: function(transport) {								suc = true;								if(successcallback){					successcallback( transport.responseText )					}							}.bind(this),						onFailure : function(transport) {				if(failedcallback){					failedcallback();									} else {					Ext.Msg.alert("Oryx", ORYX.I18N.Bpmn2Bpel.transfFailed);					ORYX.log.warn("Transformation to BPEL failed: " + transport.responseText);					}							}.bind(this)				});				return suc;			}	});