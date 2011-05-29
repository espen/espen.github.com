function newObjXML(objType) {
	var obj, MSXMLParser, mozImp, MSXMLParserVer;
	var oXMLClientVer = new XMLClientVer();
	MSXMLParser = oXMLClientVer.MSXMLParser;
	if(MSXMLParser) {
		MSXMLParserVer = oXMLClientVer.MSXMLParserVer;
	}
	else {
		mozImp = oXMLClientVer.mozImp;
	}
	oXMLClientVer = null;
	if(MSXMLParser) {
		obj = new ActiveXObject(getMSXMLObjName(objType,true,MSXMLParser,MSXMLParserVer));
	}
	else if (mozImp) {
		switch (objType) {
			case 'XMLHTTPRequest': { obj = new XMLHttpRequest(); break; }
			case 'DOMDocument': {
				obj = document.implementation.createDocument("", "", null);
				if (obj.readyState == null) {
					obj.readyState = 1;
					obj.addEventListener("load", function () {
						obj.readyState = 4;
						if (typeof obj.onreadystatechange == "function")
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