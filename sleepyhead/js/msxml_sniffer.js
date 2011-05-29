function NewXMLParser(ObjType)
{
	var oXMLClientVer = new XMLClientVer();

	if(oXMLClientVer.bIsMSXML5)
	{
		switch (ObjType)
		{
			case 'DOMDocument': { return 'Msxml2.DOMDocument.5.0';break;}
			case 'DSOControl': { return 'Msxml2.DSOControl.5.0';break;}
			case 'FreeThreadedDOM': { return 'Msxml2.FreeThreadedDOMDocument.5.0';break;}
			case 'MXDigitalSignature': { return 'Msxml2.MXDigitalSignature.5.0';break;}
			case 'MXHTMLWriter': { return 'Msxml2.MXHTMLWriter.5.0';break;}
			case 'MXNameSpaceManager': { return 'Msxml2.MXNamespaceManager.5.0';break;}
			case 'MXXMLWriter': { return 'Msxml2.MXXMLWriter.5.0';break;}
			case 'SAXAttributes': { return 'Msxml2.SAXAttributes.5.0';break;}
			case 'SAXXMLReader': { return 'Msxml2.SAXXMLReader.5.0';break;}
			case 'ServerXMLHTTP': { return 'Msxml2.ServerXMLHTTP.5.0';break;}
			case 'XMLHTTP': { return 'Msxml2.XMLHTTP.5.0';break;}
			case 'XMLSchemaCache': { return 'Msxml2.XMLSchemaCache.5.0';break;}
			case 'XSLTemplate': { return 'Msxml2.XSLTemplate.5.0';break;}
			default: {alert('Invalid object');return '';break;}
		}
	}
	else if(oXMLClientVer.bIsMSXML4)
	{
		switch (ObjType)
		{
			case 'DOMDocument': { return 'Msxml2.DOMDocument.4.0';break;}
			case 'DSOControl': { return 'Msxml2.DSOControl.4.0';break;}
			case 'FreeThreadedDOM': { return 'Msxml2.FreeThreadedDOMDocument.4.0';break;}
			case 'MXHTMLWriter': { return 'Msxml2.MXHTMLWriter.4.0';break;}
			case 'MXNameSpaceManager': { return 'Msxml2.MXNamespaceManager.4.0';break;}
			case 'MXXMLWriter': { return 'Msxml2.MXXMLWriter.4.0';break;}
			case 'SAXAttributes': { return 'Msxml2.SAXAttributes.4.0';break;}
			case 'SAXXMLReader': { return 'Msxml2.SAXXMLReader.4.0';break;}
			case 'ServerXMLHTTP': { return 'Msxml2.ServerXMLHTTP.4.0';break;}
			case 'XMLHTTP': { return 'Msxml2.XMLHTTP.4.0';break;}
			case 'XMLSchemaCache': { return 'Msxml2.XMLSchemaCache.4.0';break;}
			case 'XSLTemplate': { return 'Msxml2.XSLTemplate.4.0';break;}
			default: {alert('Invalid object');return '';break;}
		}
	}
	else if(oXMLClientVer.bIsMSXML3)
	{
		switch (ObjType)
		{
			case 'DOMDocument': { return 'MSXML2.DOMDocument.3.0';break;}
			case 'FreeThreadedDOMDocument': { return 'MSXML2.FreeThreadedDOMDocument.3.0';break;}
			case 'DSOControl': { return 'MSXML2.DSOControl.3.0';break;}
			case 'XMLHTTP': { return 'MSXML2.XMLHTTP.3.0';break;}
			case 'XMLSchemaCache': { return 'MSXML2.XMLSchemaCache.3.0';break;}
			case 'XSLTemplate': { return 'MSXML2.XSLTemplate.3.0';break;}
			default: {alert('Invalid object');return '';break;}
		}
	}
	else if(oXMLClientVer.bIsMSXML2)
	{
		switch (ObjType)
		{
			case 'DOMDocument': { return 'MSXML2.DOMDocument';break;}
			case 'FreeThreadedDOMDocument': { return 'MSXML2.FreeThreadedDOMDocument';break;}
			case 'DSOControl': { return 'MSXML2.DSOControl';break;}
			case 'XMLHTTP': { return 'MSXML2.XMLHTTP';break;}
			case 'XMLSchemaCache': { return 'MSXML2.XMLSchemaCache';break;}
			case 'XSLTemplate': { return 'MSXML2.XSLTemplate';break;}
			default: {alert('Invalid object');return '';break;}
		}
	}
	else if(oXMLClientVer.bIsMSXML1)
	{
		switch (ObjType)
		{
			case 'DOMDocument': { return 'Microsoft.DOMDocument';break;}
			case 'FreeThreadedDOMDocument': { return 'Microsoft.FreeThreadedDOMDocument';break;}
			case 'DSOControl': { return 'Microsoft.DSOControl';break;}
			case 'XMLHTTP': { return 'Microsoft.XMLHTTP';break;}
			default: {alert('Invalid object');return '';break;}
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

	this.bIsMSXML5   = false;
	this.bIsMSXML4   = false;
	this.bIsMSXML3   = false;
	this.bIsMSXML2  = false;
	this.bIsMSXML1  = false;

	//**********************************
	// Private implementation details
	//**********************************

	var e = new Error();
	var oXML = null;

	// Try to load the most recent version of the MSXML parser;
	// if that fails, try to load the next most recent version, and so on.
	// Always test using the version *dependent* PROGID.


	try
	{
		// Test for MSXML 5.0
		oXML = new ActiveXObject("Msxml2.DOMDocument.5.0");
		oXML = null;
		this.bIsMSXML5 = true;
		return;
	}
	catch (e)
	{
		try
		{
			// Test for MSXML 4.0
			oXML = new ActiveXObject("MSXML2.DOMDocument.4.0");
			oXML = null;
			this.bIsMSXML4 = true;
			return;
		}
		catch (e)
		{
			try
			{
				// Test for MSXML 3.0
				oXML = new ActiveXObject("MSXML2.DOMDocument.3.0");
				oXML = null;
				this.bIsMSXML3 = true;
				return;
			}
			catch (e)
			{
				try
				{
					// Test for MSXML 2.6
					oXML = new ActiveXObject("MSXML2.DOMDocument.2.0");
					oXML = null;
					this.bIsMSXML2 = true;
					return;
				}
				catch (e)
				{
					try
					{
						// Test for MSXML 1.0/2.0
						oXML = new ActiveXObject("Microsoft.DOMDocument.1.0");
						oXML = null;
						this.bIsMSXML1 = true;
						return;
					}
					catch (e)
					{
						// NO XML PARSER INSTALLED!!
					}
				}
			}
		}
	}
}