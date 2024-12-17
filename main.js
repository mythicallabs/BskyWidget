var widget = new ListWidget()
var request = new Request('https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=' + args.widgetParams)
var profile = request.loadJSON()
//If user has a display name, display it, otherwise display their handle
if(!profile.displayName || profile.displayName == ''){
    widget.addText(profile.handle.toString().split('.')[0])
}else{
    widget.addText(profile.displayName)
}
//Generate follow count that is pleasing to look at and add it under the users name
var followCount = profile.followCount
if(followCount < 999){
    widget.addText(profile.followCount + ' followers')
}else if(followCount < 999999){
    widget.addText((followCount / 1000).toFixed(1) + 'k followers')
}else if(followCount < 999999999){
    widget.addText((followCount / 1000000).toFixed(1) + 'm followers')
}else if(followCount < 999999999999){
    widget.addText((followCount / 1000000000).toFixed(1) + 'b followers')
}