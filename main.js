var widget = new ListWidget()
if(args.widgetParameter){
  var request = new Request('https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=' + args.widgetParameter)
}else{
  var request = new Request('https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=bsky.app')
}
var profile = await request.loadJSON()
var username = profile.displayName
if(!username || username == ""){
  username = profile.handle.split(".")[0]
}
var followCount = profile.followersCount
text = widget.addText(username)
text.font = new Font("seirf", 20)
if(followCount < 999){
  
}else{
  if(followCount < 999999){
    splitcount = followCount.toString().split("")
    followCount = splitcount[0] + splitcount[1] + "k"
  }else{
    if(followCount < 999999999){
      splitcount = followCount.toString().split("")
    followCount = splitcount[0] + splitcount[1] + "." + splitcount[2] + "M"
    }
  }
}
widget.addText(followCount.toString())
if (!config.runsInWidget) {
  await widget.presentSmall()
}
Script.setWidget(widget)