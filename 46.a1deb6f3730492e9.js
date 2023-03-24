"use strict";(self.webpackChunkyoutube=self.webpackChunkyoutube||[]).push([[46],{7046:(z,_,o)=>{o.r(_),o.d(_,{YoutubeModule:()=>l});var r=o(6895),n=o(3546),y=o(2717),u=o(5116),t=o(4650),b=o(727),T=o(9841),x=o(8505),Y=o(1832),w=o(4490),Z=o(4859),O=o(7392);function A(s,e){if(1&s&&(t.TgZ(0,"li",2)(1,"mat-icon"),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA()()),2&s){const i=e.$implicit;t.xp6(2),t.Oqu(i.icon),t.xp6(2),t.Oqu(i.count)}}class c{constructor(){this.stats=[],this.icons=["visibility","thumb_up"]}ngOnInit(){this.stats=Object.values(this.statistics).filter((e,i)=>i<2).map((e,i)=>({icon:this.icons[i],count:e}))}}c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-video-statistics"]],inputs:{statistics:["app-video-statistics","statistics"]},standalone:!0,features:[t.jDz],decls:2,vars:1,consts:[[1,"video__stats"],["class","video__stat",4,"ngFor","ngForOf"],[1,"video__stat"]],template:function(e,i){1&e&&(t.TgZ(0,"ul",0),t.YNc(1,A,5,2,"li",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",i.stats))},dependencies:[r.ez,r.sg,y.q,O.Hw],styles:[".video__stats[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:15px;margin-top:20px}.video__stat[_ngcontent-%COMP%]{display:flex;align-self:center;gap:10px}"],changeDetection:0});class p{constructor(e,i){this.element=e,this.renderer=i}ngOnChanges(){if(this.date){const e=new Date(this.date).getTime(),a=((s,e)=>{const i=s-e;return i<=6048e5?"blue":i<2628002880?"green":i<15768017280?"yellow":"red"})(Date.now(),e);this.setBorderColor(a)}}setBorderColor(e){this.renderer.setStyle(this.element.nativeElement,"border-color",e)}}p.\u0275fac=function(e){return new(e||p)(t.Y36(t.SBq),t.Y36(t.Qsj))},p.\u0275dir=t.lG2({type:p,selectors:[["","appBorderColor",""]],inputs:{date:["appBorderColor","date"]},features:[t.TTD]});class m{ngOnInit(){this.snippet=this.video.snippet,this.maxres=this.snippet.thumbnails.medium,this.statistics=this.video.statistics}}m.\u0275fac=function(e){return new(e||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-video"]],inputs:{video:"video"},decls:8,vars:8,consts:[[1,"video__card",3,"appBorderColor"],[1,"video__img",3,"ngSrc","width","height","alt"],[3,"app-video-statistics"],[1,"video__title"],[1,"video__actions"],["mat-raised-button","","color","primary",1,"video__btn",3,"routerLink"]],template:function(e,i){1&e&&(t.TgZ(0,"mat-card",0),t._UZ(1,"img",1)(2,"app-video-statistics",2),t.TgZ(3,"mat-card-title",3),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-actions",4)(6,"button",5),t._uU(7,"more.."),t.qZA()()()),2&e&&(t.Q6J("appBorderColor",i.snippet.publishedAt),t.xp6(1),t.Q6J("ngSrc",i.maxres.url)("width",i.maxres.width)("height",i.maxres.height)("alt",i.snippet.title),t.xp6(1),t.Q6J("app-video-statistics",i.statistics),t.xp6(2),t.Oqu(i.snippet.title),t.xp6(2),t.Q6J("routerLink",i.video.id))},dependencies:[Z.lW,n.a8,n.hq,n.n5,u.rH,c,r.Zd,p],styles:["[_nghost-%COMP%]{align-self:stretch;border-radius:13px;text-align:center}.video__card[_ngcontent-%COMP%]{padding:20px;border-bottom:4px solid transparent;height:100%}.video__title[_ngcontent-%COMP%]{margin:20px auto}.video__img[_ngcontent-%COMP%]{display:block;margin:0 auto}.video__actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-top:auto}"]});const S={views:(s,e)=>+e.statistics.viewCount-+s.statistics.viewCount,date:(s,e)=>+new Date(e.snippet.publishedAt)-+new Date(s.snippet.publishedAt)};class g{transform(e,i){return e&&i?e.sort((a,X)=>S[i.criteria](a,X)*i.direction):e??[]}}function V(s,e){1&s&&t._UZ(0,"app-video",2),2&s&&t.Q6J("video",e.$implicit)}g.\u0275fac=function(e){return new(e||g)},g.\u0275pipe=t.Yjl({name:"sort",type:g,pure:!0});class v{constructor(e,i,a){this.videosService=e,this.sortService=i,this.cdr=a,this.sortOptions=null,this.videos=[],this.subs=new b.w0}ngOnInit(){this.subs.add((0,T.a)([this.sortService.sort$,this.videosService.videos$]).pipe((0,x.b)(([e,i])=>{this.sortOptions=e,this.videos=i,this.cdr.detectChanges()})).subscribe())}trackBy(e,i){return i.id}ngOnDestroy(){this.subs.unsubscribe()}}v.\u0275fac=function(e){return new(e||v)(t.Y36(Y.Y),t.Y36(w.X),t.Y36(t.sBO))},v.\u0275cmp=t.Xpm({type:v,selectors:[["app-videos"]],decls:3,vars:5,consts:[[1,"videos__list"],[3,"video",4,"ngFor","ngForOf","ngForTrackBy"],[3,"video"]],template:function(e,i){1&e&&(t.TgZ(0,"ul",0),t.YNc(1,V,1,1,"app-video",1),t.ALo(2,"sort"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",t.xi3(2,2,i.videos,i.sortOptions))("ngForTrackBy",i.trackBy))},dependencies:[r.sg,m,g],styles:[".videos__list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);align-items:stretch;gap:20px;margin:20px 0}"],changeDetection:0});class h{}h.\u0275fac=function(e){return new(e||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-youtube-page"]],decls:2,vars:0,consts:[[1,"container"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-videos"),t.qZA())},dependencies:[v]});var F=o(4004),U=o(3900),J=o(9481);function Q(s,e){if(1&s&&(t.TgZ(0,"mat-card-content")(1,"mat-card-subtitle"),t._uU(2,"Description:"),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t._UZ(5,"app-video-statistics",10),t.qZA()),2&s){const i=t.oxw(3);t.xp6(4),t.Oqu(i.snippet.description),t.xp6(1),t.Q6J("app-video-statistics",i.statistics)}}function I(s,e){if(1&s&&(t.TgZ(0,"div",4),t._UZ(1,"img",5),t.TgZ(2,"mat-card",6)(3,"mat-card-header",7)(4,"mat-card-title"),t._uU(5),t.qZA(),t.TgZ(6,"div",8),t._uU(7),t.ALo(8,"date"),t.qZA()(),t.YNc(9,Q,6,2,"mat-card-content",9),t.qZA()()),2&s){const i=t.oxw(2);t.xp6(1),t.s9C("ngSrc",i.maxres.url),t.s9C("width",i.maxres.width),t.s9C("height",i.maxres.height),t.s9C("alt",i.snippet.title),t.xp6(1),t.Q6J("appBorderColor",i.snippet.publishedAt),t.xp6(3),t.Oqu(i.snippet.title),t.xp6(2),t.Oqu(t.lcZ(8,8,i.snippet.publishedAt)),t.xp6(2),t.Q6J("ngIf",i.statistics)}}function j(s,e){if(1&s&&(t.TgZ(0,"div",1)(1,"button",2)(2,"mat-icon"),t._uU(3,"navigate_before"),t.qZA()(),t.YNc(4,I,10,10,"div",3),t.qZA()),2&s){const i=t.oxw();t.xp6(4),t.Q6J("ngIf",i.maxres)}}class f{constructor(e,i,a){this.route=e,this.cdr=i,this.httpService=a,this.sub=new b.w0}ngOnInit(){this.sub.add(this.route.paramMap.pipe((0,F.U)(e=>e.get("videoId")??""),(0,U.w)(e=>this.httpService.getVideosById(e).pipe((0,x.b)(i=>{this.video=i.items.find(a=>a.id===e),this.video&&({snippet:this.snippet,statistics:this.statistics}=this.video),this.snippet&&({maxres:this.maxres}=this.snippet.thumbnails),this.cdr.detectChanges()})))).subscribe())}ngOnDestroy(){this.sub.unsubscribe()}}f.\u0275fac=function(e){return new(e||f)(t.Y36(u.gz),t.Y36(t.sBO),t.Y36(J.C))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-video-details"]],decls:1,vars:1,consts:[["class","card",4,"ngIf"],[1,"card"],["mat-raised-button","","color","primary","routerLink","/youtube"],["class","card__wrapper",4,"ngIf"],[1,"card__wrapper"],["mat-card-image","",1,"video__image",3,"ngSrc","width","height","alt"],[1,"card__container",3,"appBorderColor"],[1,"card__header"],[1,"card__date"],[4,"ngIf"],[3,"app-video-statistics"]],template:function(e,i){1&e&&t.YNc(0,j,5,1,"div",0),2&e&&t.Q6J("ngIf",i.snippet)},dependencies:[r.O5,Z.lW,O.Hw,n.a8,n.dn,n.dk,n.G2,n.$j,n.n5,u.rH,c,r.Zd,p,r.uU],styles:[".card[_ngcontent-%COMP%]{display:flex;align-items:flex-start;margin:20px 0}.card__wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:80% 20%}.card__header[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}.card__image[_ngcontent-%COMP%]{width:100%}.card__container[_ngcontent-%COMP%]{border-bottom:2px solid transparent}"],changeDetection:0});class C{}C.\u0275fac=function(e){return new(e||C)},C.\u0275cmp=t.Xpm({type:C,selectors:[["app-youtube-video-page"]],decls:2,vars:0,consts:[[1,"container"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-video-details"),t.qZA())},dependencies:[f]});const q=[{path:"",component:h},{path:":videoId",component:C}];class d{}d.\u0275fac=function(e){return new(e||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[u.Bz.forChild(q),u.Bz]});class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[r.ez,y.q,n.QW,d,c]})}}]);