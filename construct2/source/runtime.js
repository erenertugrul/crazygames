// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
cr.plugins_.eren_crazygames = function(runtime)
{
	this.runtime = runtime;
};
var CrazySDK = window["CrazyGames"];
var cruntime = null;
var cinstante = null;
(function ()
{
	var pluginProto = cr.plugins_.eren_crazygames.prototype;
		
	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function(plugin)
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};

	var typeProto = pluginProto.Type.prototype;

	typeProto.onCreate = function()
	{
	};

	/////////////////////////////////////
	// Instance class
	pluginProto.Instance = function(type)
	{
		this.type = type;
		this.runtime = type.runtime;
		cruntime = this.runtime;
		cinstante = this;
		this.adRequested = false;
		this.invitelink = "";
		this.crazysdk = CrazySDK["CrazySDK"]["getInstance"]();
	    this.crazysdk["init"]();
    	this.installListeners();
	};
	
	var instanceProto = pluginProto.Instance.prototype;
	
	instanceProto.onCreate = function()
	{
		// Read properties set in C3
	};
	
	instanceProto.saveToJSON = function ()
	{
		return {};
	};
	
	instanceProto.loadFromJSON = function (o)
	{
	};
	
	/**BEGIN-PREVIEWONLY**/
	instanceProto.getDebuggerValues = function (propsections)
	{
	};
	/**END-PREVIEWONLY**/
	instanceProto.installListeners = function() 
	{
	    this.crazysdk.addEventListener('adStarted', this.adStarted);
	    this.crazysdk.addEventListener('adError', this.adError);
	    this.crazysdk.addEventListener('adFinished', this.adFinished);
	};
	instanceProto.requestAd = function(ad) 
	{
	    this.adRequested = true;
		if (ad == 0)
			this.crazysdk["requestAd"]("midgame");
		else
			this.crazysdk["requestAd"]('rewarded');
	};
	instanceProto.adStarted = function() 
	{
		cruntime["setSuspended"](true);
		cruntime.trigger(cr.plugins_.eren_crazygames.prototype.cnds.adStarted,cinstante);

	};
	instanceProto.adError = function() 
	{
		cruntime["setSuspended"](false);
		cruntime.trigger(cr.plugins_.eren_crazygames.prototype.cnds.adError,cinstante);
	};
	instanceProto.adFinished = function() 
	{
		cruntime["setSuspended"](false);
		cruntime.trigger(cr.plugins_.eren_crazygames.prototype.cnds.adFinished,cinstante);
	};
	//////////////////////////////////////
	// Conditions
	function Cnds() {};

	Cnds.prototype.adStarted = function ()
	{
		return true;
	};

	Cnds.prototype.adError = function ()
	{
		return true;
	};

	Cnds.prototype.adFinished = function ()
	{
		return true;
	};

	Cnds.prototype.adblock = function ()
	{
		if (this.crazysdk["hasAdblock"] == true)
			return true;
		else
			return false;
	};
	pluginProto.cnds = new Cnds();

	//////////////////////////////////////
	// Actions
	function Acts() {};

	Acts.prototype.gameplay = function (a)
	{
		if (a == 0)
			this.crazysdk["gameplayStart"]();
		else
			this.crazysdk["gameplayStop"]();
	};

	Acts.prototype.show_ad = function (a)
	{
		this.requestAd(a);
	};

	Acts.prototype.happytime = function ()
	{
		this.crazysdk["happytime"]();
	};

	Acts.prototype.invitelink = function (a)
	{
		this.invitelink = this.crazysdk["inviteLink"]({roomId:a});
	};
	pluginProto.acts = new Acts();

	//////////////////////////////////////
	// Expressions
	function Exps() {};

    Exps.prototype.invitelink = function(ret) 
    {
        ret.set_string(this.invitelink);
    };

	pluginProto.exps = new Exps();

}());