"use strict";

{
	self.C3.Plugins.eren_crazygames.Cnds =
	{
		adStarted()
		{
			return true;
		},
		adError()
		{
			return true;
		},
		adFinished()
		{
			return true;
		},
		adblock()
		{
			if (this.crazysdk.hasAdblock == true)
				return true;
			else
				return false;
		}
	};
}