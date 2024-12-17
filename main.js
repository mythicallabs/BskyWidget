// Line drawing function
DrawContext.prototype.drawLine = function (p_x1, p_y1, p_x2, p_y2, p_colourLine, p_intWidth)
{	
	let pthLine = new Path();
	pthLine.move(new Point(p_x1, p_y1));
	pthLine.addLine(new Point(p_x2, p_y2));
	this.addPath(pthLine);
	this.setStrokeColor(p_colourLine);	
	this.setLineWidth(p_intWidth);
	this.strokePath();
}
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
text.font = new Font("seirf", 24)
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
let dcRegion = new DrawContext();
dcRegion.size = new Size(282, 282);
dcRegion.opaque = false;

dcRegion.drawLine(20, 145, 170, 145, Color.gray(), 1);

// Render the widget with the lines on it
widget.backgroundImage = dcRegion.getImage();
text = widget.addText(followCount.toString() + " followers")
text.font = new Font("seirf", 14)
text = widget.addText(profile.postsCount.toString() + " posts")
text.font = new Font("seirf", 14)
if (!config.runsInWidget) {
  await widget.presentSmall()
}
Script.setWidget(widget)