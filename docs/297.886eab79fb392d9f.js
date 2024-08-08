"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[297],{3297:(T,p,u)=>{u.r(p),u.d(p,{AccountModule:()=>M});var m=u(6814),c=u(8589),n=u(4946),d=u(1836),f=u(756);function h(t,g){if(1&t&&(n.TgZ(0,"div",3)(1,"span"),n._UZ(2,"i"),n.qZA(),n.TgZ(3,"span"),n._uU(4),n.qZA(),n.TgZ(5,"span"),n._UZ(6,"i",2),n.qZA()()),2&t){const e=g.$implicit;n.Q6J("routerLink",e.link),n.xp6(2),n.Tol(e.icon),n.xp6(2),n.hij(" ",e.name," ")}}let v=(()=>{class t{constructor(e,i,o){this.authService=e,this.roleService=i,this.router=o,this.userInformation={name:"",id:""},this.tabLinks=[{name:"Account",link:"/account/details/",icon:"fa-regular fa-user"},{name:"Order",link:"/account/orders/",icon:"fa-solid fa-clock-rotate-left"}],this.signoutButton={name:"Sign-Out",icon:"fa-solid fa-arrow-right-from-bracket"}}ngOnInit(){}signOut(){this.authService.logOut()}static#n=this.\u0275fac=function(i){return new(i||t)(n.Y36(d.e),n.Y36(f.N),n.Y36(c.F0))};static#e=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-account-home"]],decls:11,vars:4,consts:[["id","tabs",3,"routerLink",4,"ngFor","ngForOf"],["id","tabs",2,"background-color","rgba(255,0,0,0.25)",3,"click"],[1,"fa-solid","fa-arrow-right"],["id","tabs",3,"routerLink"]],template:function(i,o){1&i&&(n.TgZ(0,"div")(1,"div")(2,"div"),n.YNc(3,h,7,4,"div",0),n.TgZ(4,"div",1),n.NdJ("click",function(){return o.signOut()}),n.TgZ(5,"span"),n._UZ(6,"i"),n.qZA(),n.TgZ(7,"span"),n._uU(8),n.qZA(),n.TgZ(9,"span"),n._UZ(10,"i",2),n.qZA()()()()()),2&i&&(n.xp6(3),n.Q6J("ngForOf",o.tabLinks),n.xp6(3),n.Tol(o.signoutButton.icon),n.xp6(2),n.hij(" ",o.signoutButton.name," "))},dependencies:[m.sg,c.rH],styles:["#tabs[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 4fr 1fr;padding:15px 20px;background-color:#d9d9d9;border-radius:var(--border-10);border:0;margin:10px 0}#banner[_ngcontent-%COMP%]{width:100%;min-height:100px}#banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border:2px solid black;border-radius:50%;max-height:100px;object-fit:cover}"]})}return t})();var l=u(5861),s=u(95),_=u(830);let C=(()=>{class t{constructor(e,i){this.storage=e,this.authService=i}upload(e,i,o){var r=this;return(0,l.Z)(function*(){const a=yield e?.target?.files[0];return yield(yield r.storage.upload(`${o}/${i}`,a)).ref.getDownloadURL()})()}static#n=this.\u0275fac=function(i){return new(i||t)(n.LFG(_.Q1),n.LFG(d.e))};static#e=this.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Z=u(3076);function I(t,g){if(1&t){const e=n.EpF();n.TgZ(0,"div",13)(1,"label",14),n._UZ(2,"img",15),n.qZA(),n.TgZ(3,"input",16),n.NdJ("change",function(o){n.CHM(e);const r=n.oxw();return n.KtG(r.upload(o))}),n.qZA()()}if(2&t){const e=n.oxw();n.xp6(2),n.Q6J("src",e.userInformation.profileImage,n.LSH)}}function b(t,g){if(1&t){const e=n.EpF();n.TgZ(0,"div",13)(1,"label",14),n._UZ(2,"img",17),n.qZA(),n.TgZ(3,"input",16),n.NdJ("change",function(o){n.CHM(e);const r=n.oxw();return n.KtG(r.upload(o))}),n.qZA()()}if(2&t){const e=n.oxw();n.xp6(2),n.Q6J("src",e.addIconImage,n.LSH)}}const A=[{path:"",component:v},{path:"details",component:(()=>{class t{constructor(e,i,o,r){this.authService=e,this.firebaseService=i,this.userService=o,this.router=r,this.addIconImage="../../../assets/icons/addicon.png",this.userId="",this.userInformation={hashedPassword:"",name:"",profileImage:"",surname:"",email:"",number:0,role:{id:"",name:""}},this.userForm=new s.cw({name:new s.NI(this.userInformation.name),surname:new s.NI(this.userInformation.surname),email:new s.NI(this.userInformation.email),number:new s.NI(this.userInformation.number)})}ngOnInit(){var e=this;this.authService.isLoggedIn()&&this.authService.loggedInUser.subscribe(function(){var i=(0,l.Z)(function*(o){e.userInformation.name=yield o.name,e.userId=yield o.userId,e.userInformation.profileImage=yield e.authService.profileImage,e.userForm.value.name=yield o.name,e.userService.getUserById(e.userId).subscribe(function(){var r=(0,l.Z)(function*(a){e.userInformation.name=yield a.name,e.userInformation.surname=yield a.surname,e.userInformation.email=yield a.email,e.userInformation.number=yield a.number});return function(a){return r.apply(this,arguments)}}())});return function(o){return i.apply(this,arguments)}}())}upload(e){var i=this;return(0,l.Z)(function*(){let r={profileImage:yield i.firebaseService.upload(e,i.userId,"profile-pictures")};i.userService.updateUser(r,i.userId).subscribe(a=>{})})()}goBack(){this.router.navigate(["/account"])}static#n=this.\u0275fac=function(i){return new(i||t)(n.Y36(d.e),n.Y36(C),n.Y36(Z.K),n.Y36(c.F0))};static#e=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-account-details"]],decls:27,vars:7,consts:[["id","image",4,"ngIf"],[3,"formGroup"],["for","name"],["type","text","formControlName","name",3,"ngModel","ngModelChange"],["for","description"],["type","text","formControlName","surname",3,"ngModel","ngModelChange"],["for","price"],["type","email","formControlName","email",3,"ngModel","ngModelChange"],["for","stock"],["type","number","formControlName","number",3,"ngModel","ngModelChange"],[1,"buttonSection"],[1,"actionButton",3,"click"],[1,"actionButton"],["id","image"],["for","file"],["alt","profile image",3,"src"],["type","file","id","file","accept","*.png,*.jpg,*.jpeg,image/*",3,"change"],["alt","Upload profile image",3,"src"]],template:function(i,o){1&i&&(n.YNc(0,I,4,1,"div",0),n.YNc(1,b,4,1,"div",0),n.TgZ(2,"form",1)(3,"div")(4,"label",2),n._uU(5,"Name:"),n.qZA(),n.TgZ(6,"input",3),n.NdJ("ngModelChange",function(a){return o.userInformation.name=a}),n.qZA()(),n.TgZ(7,"div")(8,"label",4),n._uU(9,"Surname:"),n.qZA(),n.TgZ(10,"input",5),n.NdJ("ngModelChange",function(a){return o.userInformation.surname=a}),n.qZA()(),n.TgZ(11,"div")(12,"label",6),n._uU(13,"Email:"),n.qZA(),n.TgZ(14,"input",7),n.NdJ("ngModelChange",function(a){return o.userInformation.email=a}),n.qZA()(),n.TgZ(15,"div")(16,"label",8),n._uU(17,"Number:"),n.qZA(),n.TgZ(18,"input",9),n.NdJ("ngModelChange",function(a){return o.userInformation.number=a}),n.qZA()(),n.TgZ(19,"span")(20,"i"),n._uU(21,"if your number starts with 0, dont include it*"),n.qZA()(),n.TgZ(22,"div",10)(23,"button",11),n.NdJ("click",function(){return o.goBack()}),n._uU(24,"CANCEL"),n.qZA(),n.TgZ(25,"button",12),n._uU(26," SAVE"),n.qZA()()()),2&i&&(n.Q6J("ngIf",null!=o.userInformation.profileImage),n.xp6(1),n.Q6J("ngIf",null==o.userInformation.profileImage),n.xp6(1),n.Q6J("formGroup",o.userForm),n.xp6(4),n.Q6J("ngModel",o.userInformation.name),n.xp6(4),n.Q6J("ngModel",o.userInformation.surname),n.xp6(4),n.Q6J("ngModel",o.userInformation.email),n.xp6(4),n.Q6J("ngModel",o.userInformation.number))},dependencies:[m.O5,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.sg,s.u],styles:["#image[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:250px;max-height:250px}#image[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none}#image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;height:100%;width:100%;max-width:150px;max-height:150px}form[_ngcontent-%COMP%]{max-width:500px;margin:10px auto;padding:20px;background-color:#d9d9d980;border-radius:var(--border-10)}form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 4fr;max-height:50px;margin:10px 0}form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}"]})}return t})()}];let y=(()=>{class t{static#n=this.\u0275fac=function(i){return new(i||t)};static#e=this.\u0275mod=n.oAB({type:t});static#t=this.\u0275inj=n.cJS({imports:[c.Bz.forChild(A),c.Bz]})}return t})(),M=(()=>{class t{static#n=this.\u0275fac=function(i){return new(i||t)};static#e=this.\u0275mod=n.oAB({type:t});static#t=this.\u0275inj=n.cJS({imports:[m.ez,y,s.UX]})}return t})()}}]);