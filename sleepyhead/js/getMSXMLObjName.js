function getMSXMLObjName(objType,override,MSXMLParser,MSXMLParserVer)
{
	if(!override) {
		var oXMLClientVer = new XMLClientVer();
		MSXMLParser = oXMLClientVer.MSXMLParser;
		MSXMLParserVer = oXMLClientVer.MSXMLParserVer;
		oXMLClientVer = null;
	}
	if(MSXMLParser) {
		switch (MSXMLParserVer) {
			case 5 : {
				switch (objType) {
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
				switch (objType) {
					case 'DOMDocument': { return 'Microsoft.DOMDocument';break;}
					case 'FreeThreadedDOMDocument': { return 'Microsoft.FreeThreadedDOMDocument';break;}
					case 'DSOControl': { return 'Microsoft.DSOControl';break;}
					case 'XMLHTTPRequest': { return 'Microsoft.XMLHTTP';break;}
					default: {alert('Invalid object');return '';break;}
				}
				break;
			}
			default: {alert('No object defined');return '';break;}
		}
	}
	else {
		alert('XML Parser not installed!');return '';
	}
}
