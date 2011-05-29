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