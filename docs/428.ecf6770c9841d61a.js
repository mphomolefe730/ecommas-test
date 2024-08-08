"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[428],{5428:(T,g,r)=>{r.r(g),r.d(g,{BusinessModule:()=>y});var l=r(6814),a=r(8589),m=r(5861),s=r(4946),h=r(5862),p=r(1836),f=r(756);function b(n,c){if(1&n&&(s.TgZ(0,"p",4),s._uU(1),s.qZA()),2&n){const e=c.$implicit;s.Q6J("routerLink",e.link),s.xp6(1),s.Oqu(e.name)}}let v=(()=>{class n{constructor(e,t,i){this.inventoryService=e,this.authService=t,this.roleService=i,this.user="",this.sideLinks=[{name:"Tips",link:"tips",image:""},{name:"Register",link:"register",image:""},{name:"Stuff",link:"stuff",image:""},{name:"Look",link:"look",image:""}]}ngOnInit(){var e=this;this.authService.loggedInUser.subscribe(function(){var t=(0,m.Z)(function*(i){e.user=yield i.name});return function(i){return t.apply(this,arguments)}}())}static#s=this.\u0275fac=function(t){return new(t||n)(s.Y36(h.V),s.Y36(p.e),s.Y36(f.N))};static#e=this.\u0275cmp=s.Xpm({type:n,selectors:[["app-business-home"]],decls:7,vars:1,consts:[[1,"container"],[1,"welcome"],[1,"sideMenu"],["routerLinkActive","active1","class","actionButton",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","active1",1,"actionButton",3,"routerLink"]],template:function(t,i){1&t&&(s.TgZ(0,"div",0)(1,"h1",1),s._uU(2," BUSINESS MANAGER "),s.qZA(),s.TgZ(3,"div",2),s.YNc(4,b,2,2,"p",3),s.qZA(),s.TgZ(5,"div"),s._UZ(6,"router-outlet"),s.qZA()()),2&t&&(s.xp6(4),s.Q6J("ngForOf",i.sideLinks))},dependencies:[l.sg,a.lC,a.rH,a.Od],styles:[".sideMenu[_ngcontent-%COMP%]{overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none;margin-bottom:10px;display:flex}.sideMenu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;min-width:100px;padding:10px 5px;margin:0 5px}"]})}return n})();var o=r(95),d=r(9947),x=r(9862);let C=(()=>{class n{constructor(e){this.http=e}registerABusiness(e){return this.http.post(`${d.N.renderApiLink}/api/business/add`,e)}getBusinessBySellerId(e){return this.http.get(`${d.N.renderApiLink}/api/business/seller/${e}`)}static#s=this.\u0275fac=function(t){return new(t||n)(s.LFG(x.eN))};static#e=this.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var B=r(1064);function M(n,c){if(1&n&&s._UZ(0,"img",10),2&n){const e=s.oxw(2);s.Q6J("src",e.progressLoader,s.LSH)}}function k(n,c){if(1&n){const e=s.EpF();s.TgZ(0,"form",2)(1,"div")(2,"label",3),s._uU(3,"Business Name:"),s.qZA(),s.TgZ(4,"input",4),s.NdJ("ngModelChange",function(i){s.CHM(e);const u=s.oxw();return s.KtG(u.businessFormWorking.businessName=i)}),s.qZA()(),s.TgZ(5,"div")(6,"label",5),s._uU(7,"Business Description:"),s.qZA(),s.TgZ(8,"textarea",6),s.NdJ("ngModelChange",function(i){s.CHM(e);const u=s.oxw();return s.KtG(u.businessFormWorking.businessDescription=i)}),s.qZA()(),s.TgZ(9,"div",7)(10,"button",8),s.NdJ("click",function(){s.CHM(e);const i=s.oxw();return s.KtG(i.submitBusinessForm())}),s._uU(11," SAVE"),s.YNc(12,M,1,1,"img",9),s.qZA()()()}if(2&n){const e=s.oxw();s.Q6J("formGroup",e.businessForm),s.xp6(4),s.Q6J("ngModel",e.businessFormWorking.businessName),s.xp6(4),s.Q6J("ngModel",e.businessFormWorking.businessDescription),s.xp6(4),s.Q6J("ngIf",e.sending)}}function N(n,c){1&n&&(s.TgZ(0,"div",11)(1,"h1"),s._uU(2,"business exist"),s.qZA(),s.TgZ(3,"p"),s._uU(4,"looks like your account is registered under a business, go to look to edit details or use button below"),s.qZA(),s.TgZ(5,"button",12),s._uU(6,"EDIT BUSINESS"),s.qZA()())}const F=[{path:"",component:v,children:[{path:"",redirectTo:"tips",pathMatch:"full"},{path:"tips",component:(()=>{class n{static#s=this.\u0275fac=function(t){return new(t||n)};static#e=this.\u0275cmp=s.Xpm({type:n,selectors:[["app-business-tips"]],decls:2,vars:0,template:function(t,i){1&t&&(s.TgZ(0,"p"),s._uU(1,"business-tips works!"),s.qZA())}})}return n})()},{path:"register",component:(()=>{class n{constructor(e,t,i){this.businessManagerService=e,this.toaster=t,this.authService=i,this.sending=!1,this.progressLoader="../../../../assets/icons/loader.gif",this.doesNotExist=!0,this.businessFormWorking={businessName:"",businessDescription:"",userId:""},this.businessForm=new o.cw({businessName:new o.NI(this.businessFormWorking.businessName,o.kI.required),businessDescription:new o.NI(this.businessFormWorking.businessName,o.kI.required),userId:new o.NI(this.businessFormWorking.userId)})}ngOnInit(){var e=this;this.authService.loggedInUser.subscribe(function(){var t=(0,m.Z)(function*(i){e.businessFormWorking.userId=yield i.userId,e.businessManagerService.getBusinessBySellerId(e.businessFormWorking.userId).subscribe({next:u=>{"success"==u.message&&(e.doesNotExist=!1),console.log(u)},error:u=>{console.log(u)}})});return function(i){return t.apply(this,arguments)}}())}submitBusinessForm(){if(this.sending=!0,this.businessForm.value.userId=this.businessFormWorking.userId,this.businessForm.invalid)return this.sending=!1,this.toaster.error({detail:"ERROR",summary:"Please fill in all the fields"});this.businessManagerService.registerABusiness(this.businessForm.value).subscribe({next:e=>{this.sending=!1,this.toaster.success({detail:e.message,summary:"Business successfully registered"})},error:e=>{this.sending=!1,console.log(e)}})}get businessName(){return this.businessForm.get("businessName")}get businessDescription(){return this.businessForm.get("businessDescription")}static#s=this.\u0275fac=function(t){return new(t||n)(s.Y36(C),s.Y36(B.s),s.Y36(p.e))};static#e=this.\u0275cmp=s.Xpm({type:n,selectors:[["app-business-registration"]],decls:4,vars:2,consts:[[3,"formGroup",4,"ngIf"],["class","holderImages",4,"ngIf"],[3,"formGroup"],["for","businessName"],["type","text","formControlName","businessName",3,"ngModel","ngModelChange"],["for","businessDescription"],["formControlName","businessDescription",3,"ngModel","ngModelChange"],[1,"buttonSection"],[1,"actionButton",3,"click"],["class","loader",3,"src",4,"ngIf"],[1,"loader",3,"src"],[1,"holderImages"],["routerLink","/seller/business/look",2,"background-color","var(--accent-color)","color","white","border-radius","10px","border","0px","padding","10px","margin","10px"]],template:function(t,i){1&t&&(s.TgZ(0,"div"),s.YNc(1,k,13,4,"form",0),s.TgZ(2,"div"),s.YNc(3,N,7,0,"div",1),s.qZA()()),2&t&&(s.xp6(1),s.Q6J("ngIf",i.doesNotExist),s.xp6(2),s.Q6J("ngIf",!i.doesNotExist))},dependencies:[l.O5,a.rH,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:["form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:10px 0}form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;min-height:25px;border:1px solid black;border-radius:var(--border-10)}form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{min-height:100px}.actionButton[_ngcontent-%COMP%]{border:0;background-color:#000;padding:15px;width:100%;border-radius:var(--radiusForButtons);color:#fff}"]})}return n})()}]}];let Z=(()=>{class n{static#s=this.\u0275fac=function(t){return new(t||n)};static#e=this.\u0275mod=s.oAB({type:n});static#n=this.\u0275inj=s.cJS({imports:[a.Bz.forChild(F),a.Bz]})}return n})(),y=(()=>{class n{static#s=this.\u0275fac=function(t){return new(t||n)};static#e=this.\u0275mod=s.oAB({type:n});static#n=this.\u0275inj=s.cJS({imports:[l.ez,Z,o.UX,o.u5]})}return n})()}}]);