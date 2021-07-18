"use strict";

{
	self.C3.Plugins.eren_crazygames.Acts =
	{
		gameplay(a)
		{
			if (a == 0)
				this.crazysdk.gameplayStart();
			else
				this.crazysdk.gameplayStop();
		},
		show_ad(a)
		{
			this.requestAd(a);
		},
		happytime()
		{
			this.crazysdk.happytime();
		},
		invitelink(a)
		{
			this.invitelink = this.crazysdk.inviteLink({roomId:a});
		}
	};
}