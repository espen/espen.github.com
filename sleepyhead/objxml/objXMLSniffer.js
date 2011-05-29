function newObjXML(objType) {
	var obj;
	var oXMLClientVer = new XMLClientVer();
	if(oXMLClientVer.MSXMLParser) {
		obj = new ActiveXObject(getXMLObjName(objType));
	}
	else if (oXMLClientVer.mozImp) {
		switch (objType)
		{
			case 'XMLHTTPRequest': { obj = new XMLHttpRequest(); break; }
			case 'DOMDocument': {
				obj = document.implementation.createDocument("", "", null);
				if (obj.readyState == null) {
					obj.readyState = 1;
					obj.addEventListener("load", function () {
						obj.readyState = 4;
						if (typeof oDOMDocument.onreadystatechange == "function")
						obj.onreadystatechange();
					}, false);
				}
				break;
			}
			default: {return false;break;}
		}
	}
	else {
		return false;
	}
	return obj;
}

function getXMLObjName(objType)
{
	var oXMLClientVer = new XMLClientVer();
	if(oXMLClientVer.MSXMLParser) {
		switch (oXMLClientVer.MSXMLParserVer) 
		{
		case 5 : {
			switch (objType)
			{
				case 'DOMDocument': { return 'Msxml2.DOMDocument.5.0';break;}
				case 'DSOControl': { return 'Msxml2.DSOControl.5.0';break;}
				case 'FreeThreadedDOMDocument': { return 'Msxml2.FreeThreadedDOMDocument.5.0';break;}
				case 'MXDigitalSignature': { return 'Msxml2.MXDigitalSignature.5.0';break;}
				case 'MXHTMLWriter': { return 'Msxml2.MXHTMLWriter.5.0';break;}
				case 'MXNameSpaceManager': { return 'Msxml2.MXNamespaceManager.5.0';break;}
				case 'MXXMLWriter': { return 'Msxml2.MXXMLWriter.5.0';break;}
				case 'SAXAttributes': { return 'Msxml2.SAXAttributes.5.0';break;}
				case 'SAXXMLReader': { return 'Msxml2.SAXXMLReader.5.0';break;}
				case 'ServerXMLHTTP': { return 'Msxml2.ServerXMLHTTP.5.0';break;}
				case 'XMLHTTPRequest': { return 'Msxml2.XMLHTTP.5.0';break;}
				case 'XMLSchemaCache': { return 'Msxml2.XMLSchemaCache.5.0';break;}
				case 'XSLTemplate': { return 'Msxml2.XSLTemplate.5.0';break;}
				default: {alert('Invalid object');return '';break;}
			}
			break;
		}
		case 4 : {
			switch (objType)
			{
				case 'DOMDocument': { return 'Msxml2.DOMDocument.4.0';break;}
				case 'DSOControl': { return 'Msxml2.DSOControl.4.0';break;}
				case 'FreeThreadedDOMDocument': { return 'Msxml2.FreeThreadedDOMDocument.4.0';break;}
				case 'MXHTMLWriter': { return 'Msxml2.MXHTMLWriter.4.0';break;}
				case 'MXNameSpaceManager': { return 'Msxml2.MXNamespaceManager.4.0';break;}
				case 'MXXMLWriter': { return 'Msxml2.MXXMLWriter.4.0';break;}
				case 'SAXAttributes': { return 'Msxml2.SAXAttributes.4.0';break;}
				case 'SAXXMLReader': { return 'Msxml2.SAXXMLReader.4.0';break;}
				case 'ServerXMLHTTP': { return 'Msxml2.ServerXMLHTTP.4.0';break;}
				case 'XMLHTTPRequest': { return 'Msxml2.XMLHTTP.4.0';break;}
				case 'XMLSchemaCache': { return 'Msxml2.XMLSchemaCache.4.0';break;}
				case 'XSLTemplate': { return 'Msxml2.XSLTemplate.4.0';break;}
				default: {alert('Invalid object');return '';break;}
			}
			break;
		}
		case 3 : {
			switch (objType)
			{
				case 'DOMDocument': { return 'MSXML2.DOMDocument.3.0';break;}
				case 'FreeThreadedDOMDocument': { return 'MSXML2.FreeThreadedDOMDocument.3.0';break;}
				case 'DSOControl': { return 'MSXML2.DSOControl.3.0';break;}
				case 'XMLHTTPRequest': { return 'MSXML2.XMLHTTP.3.0';break;}
				case 'XMLSchemaCache': { return 'MSXML2.XMLSchemaCache.3.0';break;}
				case 'XSLTemplate': { return 'MSXML2.XSLTemplate.3.0';break;}
				default: {alert('Invalid object');return '';break;}
			}
			break;
		}
		case 2 : {
			switch (objType)
			{
				case 'DOMDocument': { return 'MSXML2.DOMDocument';break;}
				case 'FreeThreadedDOMDocument': { return 'MSXML2.FreeThreadedDOMDocument';break;}
				case 'DSOControl': { return 'MSXML2.DSOControl';break;}
				case 'XMLHTTPRequest': { return 'MSXML2.XMLHTTP';break;}
				case 'XMLSchemaCache': { return 'MSXML2.XMLSchemaCache';break;}
				case 'XSLTemplate': { return 'MSXML2.XSLTemplate';break;}
				default: {alert('Invalid object');return '';break;}
			}
			break;
		}
		case 1 : {
			switch (objType)
			{
				case 'DOMDocument': { return 'Microsoft.DOMDocument';break;}
				case 'FreeThreadedDOMDocument': { return 'Microsoft.FreeThreadedDOMDocument';break;}
				case 'DSOControl': { return 'Microsoft.DSOControl';break;}
				case 'XMLHTTPRequest': { return 'Microsoft.XMLHTTP';break;}
				default: {alert('Invalid object');return '';break;}
			}
			break;
		}
		}
	}
	else
	{
		alert('XML Parser not installed!');return '';
	}
}

function XMLClientVer()
{
	//*********************
	// Public properties
	//*********************

	this.MSXMLParser = false;
	this.MSXMLParserVer = false;
	this.mozImp = false;
	this.W3CDOMDocument = false;
	this.XMLHTTPRequest = false;

	//**********************************
	// Private implementation details
	//**********************************

	var e = new Error();
	var oXML = null;
	//var vStr;

	// Try to load the most recent version of the MSXML parser;
	// if that fails, try to load the next most recent version, and so on.
	// Always test using the version *dependent* PROGID.
	var XMLParserList = new Array (	'Msxml2.DOMDocument.1.0', 'Msxml2.DOMDocument.2.0', 'Msxml2.DOMDocument.3.0', 'Msxml2.DOMDocument.4.0', 'Msxml2.DOMDocument.5.0' )
	for ( var i = XMLParserList.length; i>0;i--) {
		try {
			// Test for MSXML obj
			oXML = new ActiveXObject(XMLParserList[i-1]);
			oXML = null;
			//vStr = eval('MSXMLParserV' + i);
			this.MSXMLParserVer = i;
			this.MSXMLParser = true;
			break;
		}
		catch(e) {}
	}

	if(!this.XMLParser) {
		try {
			if (window.XMLHttpRequest) {
				this.mozImp = true;
				this.XMLHTTPRequest = true;
			}
		}
		catch(e) {}
		try {
			if (document.implementation && document.implementation.createDocument) {
				this.mozImp = true;
				this.W3CDOMDocument = true;
			}
		}
		catch(e) {}
	}

}