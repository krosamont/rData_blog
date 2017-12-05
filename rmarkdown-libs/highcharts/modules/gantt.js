/*
 Highcharts JS v6.0.3 (2017-11-14)
 Gantt series

 (c) 2016 Lars A. V. Cabrera

 --- WORK IN PROGRESS ---

 License: www.highcharts.com/license
*/
(function(l){"object"===typeof module&&module.exports?module.exports=l:l(Highcharts)})(function(l){(function(h){var l=h.dateFormat,v=h.each,w=h.isObject,p=h.pick,m=h.wrap,n=h.Axis,t=h.Chart,q=h.Tick;n.prototype.isOuterAxis=function(){var b=this,d=-1,c=!0;v(this.chart.axes,function(e,f){e.side===b.side&&(e===b?d=f:0<=d&&f>d&&(c=!1))});return c};q.prototype.getLabelWidth=function(){return this.label.getBBox().width};n.prototype.getMaxLabelLength=function(b){var d=this.tickPositions,c=this.ticks,e=0;
if(!this.maxLabelLength||b)v(d,function(b){(b=c[b])&&b.labelLength>e&&(e=b.labelLength)}),this.maxLabelLength=e;return this.maxLabelLength};n.prototype.addTitle=function(){var b=this.chart.renderer,d=this.axisParent,c=this.horiz,e=this.opposite,f=this.options,a=f.title,k;this.showAxis=k=this.hasData()||p(f.showEmpty,!0);f.title="";this.axisTitle||((f=a.textAlign)||(f=(c?{low:"left",middle:"center",high:"right"}:{low:e?"right":"left",middle:"center",high:e?"left":"right"})[a.align]),this.axisTitle=
b.text(a.text,0,0,a.useHTML).attr({zIndex:7,rotation:a.rotation||0,align:f}).addClass("highcharts-axis-title").css(a.style).add(d),this.axisTitle.isNew=!0);this.axisTitle[k?"show":"hide"](!0)};h.dateFormats={W:function(b){b=new Date(b);var d=0===b.getUTCDay()?7:b.getUTCDay(),c=b.getTime(),e=new Date(b.getUTCFullYear(),0,1,-6);b.setDate(b.getUTCDate()+4-d);return 1+Math.floor(Math.floor((c-e)/864E5)/7)},E:function(b){return l("%a",b,!0).charAt(0)}};m(q.prototype,"addLabel",function(b){var d=this.axis,
c=void 0!==d.options.categories,e=d.tickPositions,e=this.pos!==e[e.length-1];(!d.options.grid||c||e)&&b.apply(this)});m(q.prototype,"getLabelPosition",function(b,d,c,e){var f=b.apply(this,Array.prototype.slice.call(arguments,1)),a=this.axis,k=a.options,g=k.tickInterval||1,r,u;k.grid&&(r=k.labels.style.fontSize,u=a.chart.renderer.fontMetrics(r,e),r=u.b,u=u.h,a.horiz&&void 0===k.categories?(k=a.axisGroup.getBBox().height,g=this.pos+g/2,f.x=a.translate(g)+a.left,g=k/2+u/2-Math.abs(u-r),f.y=0===a.side?
c-g:c+g):(void 0===k.categories&&(g=this.pos+g/2,f.y=a.translate(g)+a.top+r/2),g=this.getLabelWidth()/2-a.maxLabelLength/2,f.x=3===a.side?f.x+g:f.x-g));return f});m(n.prototype,"tickSize",function(b){var d=b.apply(this,Array.prototype.slice.call(arguments,1)),c;this.options.grid&&!this.horiz&&(c=2*Math.abs(this.defaultLeftAxisOptions.labels.x),this.maxLabelLength||(this.maxLabelLength=this.getMaxLabelLength()),c=this.maxLabelLength+c,d[0]=c);return d});m(n.prototype,"getOffset",function(b){var d=
this.chart.axisOffset,c=this.side,e,f,a=this.options,k=a.title,g=k&&k.text&&!1!==k.enabled;this.options.grid&&w(this.options.title)?(f=this.tickSize("tick")[0],d[c]&&f&&(e=d[c]+f),g&&this.addTitle(),b.apply(this,Array.prototype.slice.call(arguments,1)),d[c]=p(e,d[c]),a.title=k):b.apply(this,Array.prototype.slice.call(arguments,1))});m(n.prototype,"renderUnsquish",function(b){this.options.grid&&(this.labelRotation=0,this.options.labels.rotation=0);b.apply(this)});m(n.prototype,"setOptions",function(b,
d){d.grid&&this.horiz&&(d.startOnTick=!0,d.minPadding=0,d.endOnTick=!0);b.apply(this,Array.prototype.slice.call(arguments,1))});m(n.prototype,"render",function(b){var d=this.options,c,e,f,a,k,g,r=this.chart.renderer;if(d.grid){if(c=2*Math.abs(this.defaultLeftAxisOptions.labels.x),c=this.maxLabelLength+c,e=d.lineWidth,this.rightWall&&this.rightWall.destroy(),b.apply(this),b=this.axisGroup.getBBox(),this.horiz&&(this.rightWall=r.path(["M",b.x+this.width+1,b.y,"L",b.x+this.width+1,b.y+b.height]).attr({stroke:d.tickColor||
"#ccd6eb","stroke-width":d.tickWidth||1,zIndex:7,class:"grid-wall"}).add(this.axisGroup)),this.isOuterAxis()&&this.axisLine&&(this.horiz&&(c=b.height-1),e)){b=this.getLinePath(e);k=b.indexOf("M")+1;g=b.indexOf("L")+1;f=b.indexOf("M")+2;a=b.indexOf("L")+2;if(0===this.side||3===this.side)c=-c;this.horiz?(b[f]+=c,b[a]+=c):(b[k]+=c,b[g]+=c);this.axisLineExtra?this.axisLineExtra.animate({d:b}):this.axisLineExtra=r.path(b).attr({stroke:d.lineColor,"stroke-width":e,zIndex:7}).add(this.axisGroup);this.axisLine[this.showAxis?
"show":"hide"](!0)}}else b.apply(this)});m(t.prototype,"render",function(b){var d=25/11,c,e;v(this.axes,function(b){var a=b.options;a.grid&&(e=a.labels.style.fontSize,c=b.chart.renderer.fontMetrics(e),"datetime"===a.type&&(a.units=[["millisecond",[1]],["second",[1]],["minute",[1]],["hour",[1]],["day",[1]],["week",[1]],["month",[1]],["year",null]]),b.horiz?a.tickLength=a.cellHeight||c.h*d:(a.tickWidth=1,a.lineWidth||(a.lineWidth=1)))});b.apply(this)})})(l);(function(h){var l=h.defined,v=h.Color,w=
h.seriesTypes.column,p=h.each,m=h.isNumber,n=h.isObject,t=h.merge,q=h.pick,b=h.seriesType,d=h.wrap,c=h.Axis,e=h.Point,f=h.Series;b("xrange","column",{colorByPoint:!0,dataLabels:{verticalAlign:"middle",inside:!0,formatter:function(){var a=this.point.partialFill;n(a)&&(a=a.amount);l(a)||(a=0);return 100*a+"%"}},tooltip:{headerFormat:'\x3cspan style\x3d"font-size: 0.85em"\x3e{point.x} - {point.x2}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.yCategory}\x3c/b\x3e\x3cbr/\x3e'},
borderRadius:3,pointRange:0},{type:"xrange",parallelArrays:["x","x2","y"],requireSorting:!1,animate:h.seriesTypes.line.prototype.animate,cropShoulder:1,getExtremesFromAll:!0,getColumnMetrics:function(){function a(){p(g.series,function(a){var b=a.xAxis;a.xAxis=a.yAxis;a.yAxis=b})}var b,g=this.chart;a();b=w.prototype.getColumnMetrics.call(this);a();return b},cropData:function(a,b,g,c){b=f.prototype.cropData.call(this,this.x2Data,b,g,c);b.xData=a.slice(b.start,b.end);return b},translatePoint:function(a){var b=
this.xAxis,g=this.columnMetrics,c=this.options.minPointLength||0,d=a.plotX,e=q(a.x2,a.x+(a.len||0)),f=b.translate(e,0,0,0,1),e=f-d,h=this.chart.inverted,l=q(this.options.borderWidth,1)%2/2;c&&(c-=e,0>c&&(c=0),d-=c/2,f+=c/2);d=Math.max(d,-10);f=Math.min(Math.max(f,-10),b.len+10);a.shapeArgs={x:Math.floor(Math.min(d,f))+l,y:Math.floor(a.plotY+g.offset)+l,width:Math.round(Math.abs(f-d)),height:Math.round(g.width),r:this.options.borderRadius};d=a.shapeArgs.x;c=d+a.shapeArgs.width;0>d||c>b.len?(d=Math.min(b.len,
Math.max(0,d)),c=Math.max(0,Math.min(c,b.len)),b=c-d,a.dlBox=t(a.shapeArgs,{x:d,width:c-d,centerX:b?b/2:null})):a.dlBox=null;a.tooltipPos[0]+=h?0:e/2;a.tooltipPos[1]-=h?e/2:g.width/2;if(b=a.partialFill)n(b)&&(b=b.amount),m(b)||(b=0),g=a.shapeArgs,a.partShapeArgs={x:g.x,y:g.y,width:g.width,height:g.height,r:this.options.borderRadius},a.clipRectArgs={x:g.x,y:g.y,width:Math.round(g.width*b),height:g.height}},translate:function(){w.prototype.translate.apply(this,arguments);p(this.points,function(a){this.translatePoint(a)},
this)},drawPoint:function(a,b){var c=this.options,d=this.chart.renderer,e=a.graphic,f=a.shapeType,k=a.shapeArgs,h=a.partShapeArgs,l=a.clipRectArgs,m=a.partialFill,p=a.selected&&"select",q=c.stacking&&!c.borderRadius;if(a.isNull)e&&(a.graphic=e.destroy());else{if(e)a.graphicOriginal[b](t(k));else a.graphic=e=d.g("point").addClass(a.getClassName()).add(a.group||this.group),a.graphicOriginal=d[f](k).addClass(a.getClassName()).addClass("highcharts-partfill-original").add(e);h&&(a.graphicOverlay?(a.graphicOverlay[b](t(h)),
a.clipRect.animate(t(l))):(a.clipRect=d.clipRect(l.x,l.y,l.width,l.height),a.graphicOverlay=d[f](h).addClass("highcharts-partfill-overlay").add(e).clip(a.clipRect)));a.graphicOriginal.attr(this.pointAttribs(a,p)).shadow(c.shadow,null,q);h&&(n(m)||(m={}),n(c.partialFill)&&(m=t(m,c.partialFill)),b=m.fill||v(a.color||this.color).brighten(-.3).get(),a.graphicOverlay.attr(this.pointAttribs(a,p)).attr({fill:b}).shadow(c.shadow,null,q))}},drawPoints:function(){var a=this,b=this.chart.pointCount<(a.options.animationLimit||
250)?"animate":"attr";p(a.points,function(c){a.drawPoint(c,b)})}},{init:function(){e.prototype.init.apply(this,arguments);var a;a=this.series;var b=a.chart.options.chart.colorCount;this.y||(this.y=0);a.options.colorByPoint&&(a=a.options.colors||a.chart.options.colors,b=a.length,!this.options.color&&a[this.y%b]&&(this.color=a[this.y%b]));this.colorIndex=this.y%b;return this},getLabelConfig:function(){var a=e.prototype.getLabelConfig.call(this),b=this.series.yAxis.categories;a.x2=this.x2;a.yCategory=
this.yCategory=b&&b[this.y];return a},tooltipDateKeys:["x","x2"],isValid:function(){return"number"===typeof this.x&&"number"===typeof this.x2}});d(c.prototype,"getSeriesExtremes",function(a){var b=this.series,c,d;a.call(this);this.isXAxis&&(c=q(this.dataMax,-Number.MAX_VALUE),p(b,function(a){a.x2Data&&p(a.x2Data,function(a){a>c&&(c=a,d=!0)})}),d&&(this.dataMax=c))})})(l)});