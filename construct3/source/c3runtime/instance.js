"use strict";

{
	const C3 = self.C3;
	const CrazySDK = window.CrazyGames;
	var cruntime = null;
	var cinstante = null;
	C3.Plugins.eren_crazygames.Instance = class eren_crazygamesInstance extends C3.SDKInstanceBase
	{
		constructor(inst, properties)
		{
			super(inst);
			
			// Initialise object properties
			cruntime = this._runtime;
			cinstante = this._inst;
			this.adRequested = false;
			this.invitelink = "";
			this.crazysdk = CrazySDK.CrazySDK.getInstance();
			this.crazysdk.init();
	    	this.installListeners();
		}
		
		Release()
		{
			super.Release();
		}

		_SetTestProperty(n)
		{
		}

		_GetTestProperty()
		{
		}
		
		SaveToJson()
		{
			return {
				// data to be saved for savegames
			};
		}
		
		LoadFromJson(o)
		{
			// load state for savegames
		}

		GetScriptInterfaceClass()
		{
			return self.IMyeren_crazygamesInstance;
		}
		installListeners()
		{

		    this.crazysdk.addEventListener('adStarted', this.adStarted);
		    this.crazysdk.addEventListener('adError', this.adError);
		    this.crazysdk.addEventListener('adFinished', this.adFinished);
		}
		requestAd(ad)
		{
		    this.adRequested = true;
			if (ad == 0)
				this.crazysdk.requestAd("midgame");
			else
				this.crazysdk.requestAd('rewarded');
		}
		adStarted()
		{
			cruntime.SetSuspended(true);
			cruntime.Trigger(C3.Plugins.eren_crazygames.Cnds.adStarted,cinstante);

		}
		adError()
		{
			cruntime.SetSuspended(false);
			cruntime.Trigger(C3.Plugins.eren_crazygames.Cnds.adError, cinstante);
		}
		adFinished()
		{
			cruntime.SetSuspended(false);
			cruntime.Trigger(C3.Plugins.eren_crazygames.Cnds.adFinished,cinstante);
		}
	};
	
	// Script interface. Use a WeakMap to safely hide the internal implementation details from the
	// caller using the script interface.
	const map = new WeakMap();
	
	self.IMyeren_crazygamesInstance = class IMyeren_crazygamesInstance extends self.IInstance {
		constructor()
		{
			super();
			
			// Map by SDK instance
			map.set(this, self.IInstance._GetInitInst().GetSdkInstance());
		}

		// Example setter/getter property on script interface
		set testProperty(n)
		{
			map.get(this)._SetTestProperty(n);
		}

		get testProperty()
		{
			return map.get(this)._GetTestProperty();
		}
	};
}