"use strict";(self.webpackChunkpro_tvs=self.webpackChunkpro_tvs||[]).push([[393],{9393:(h,p,d)=>{d.r(p),d.d(p,{OrdereditemModule:()=>T});var a=d(8583),r=d(5855),e=d(639),f=d(3883),c=d(665);function m(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",42),e.TgZ(2,"div",1),e.TgZ(3,"div",2),e.TgZ(4,"div"),e._UZ(5,"img",43),e.TgZ(6,"h6",44),e._uU(7),e.qZA(),e.TgZ(8,"h6",45),e._uU(9,"INITIATED"),e.qZA(),e.qZA(),e.TgZ(10,"div"),e.TgZ(11,"a",46),e.NdJ("click",function(){return e.CHM(i),e.oxw(3).serviceDetails()}),e._uU(12,"View Details"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",47),e.TgZ(14,"div",48),e.TgZ(15,"button",49),e._uU(16,"RESCHEDULE"),e.qZA(),e.TgZ(17,"button",50),e._uU(18,"CANCEL SERVICE"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&t){const i=o.$implicit;e.xp6(7),e.HOy("",i.brand," ",i.device1," | ",i.type," | ",i.ton,"")}}function u(t,o){if(1&t&&(e.TgZ(0,"div"),e.TgZ(1,"div",37),e.TgZ(2,"h2",38),e.TgZ(3,"button",39),e.TgZ(4,"h6"),e._uU(5),e.TgZ(6,"span",40),e._uU(7,"REPAIR (3 DEVICES)"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(8,"div",41),e.YNc(9,m,19,4,"div",35),e.qZA(),e.qZA(),e.qZA()),2&t){const i=e.oxw().$implicit;e.xp6(5),e.hij("Order ID : ",i.genarateid,""),e.xp6(4),e.Q6J("ngForOf",i.items)}}function v(t,o){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,u,10,2,"div",36),e.qZA()),2&t){const i=o.$implicit,n=e.oxw();e.xp6(1),e.Q6J("ngIf",i.personid==n.id)}}const b=[{path:"",component:(()=>{class t{constructor(i,n,l){this.router=i,this.service=n,this.activate=l,this.address={firstname:"",lastname:"",mobilenumber:null,email:"",address1:"",address2:"",landmark:"",pincode:null,state:"",district:""},this.service.getItemDetails().subscribe(s=>{this.itemdetails1=s}),this.service.getData().subscribe(s=>{this.profile=s}),setTimeout(()=>{this.activate.queryParams.subscribe(s=>{console.log("logs",s),this.id=s.data;for(let g=0;g<this.profile.length;g++){const Z=this.profile[g];Z.id==this.id&&(this.address=Z)}})},500)}serviceDetails(){this.router.navigateByUrl("/servicedetails")}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(r.F0),e.Y36(f.C),e.Y36(r.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-ordereditemcomp"]],decls:70,vars:12,consts:[[1,"ordered-details"],[1,"padding"],[1,"d-flex","justify-content-between"],[1,"user-name"],[1,"edit-profile"],[1,"bi-pencil-square"],["href","",1,"edit-profile","ms-2"],[1,"d-flex"],[1,"list-style"],[1,"fas","bi-messenger","me-3"],[1,"list-style","ms-3"],[1,"fas","bi-phone","me-3"],[1,"d-flex","mb-3"],[1,"pt-1"],[1,"default-address"],[1,"address-change-text","ms-3"],[1,"address-content","mb-4"],[1,"address-user"],[2,"width","80%"],[1,"address-text"],[1,"edit-address1"],[1,"service-types","d-flex","justify-content-between"],[1,"active-tab"],[1,"nonactive-tab"],[1,"mt-4"],[1,"dropdown-grid"],[1,"subgrid"],[1,"me-3"],["id","inputState",1,"form-select"],["selected",""],[1,"input-group","mb-3"],["id","basic-addon1",1,"input-group-text"],[1,"bi-search"],["type","text","placeholder","Username","aria-label","Username","aria-describedby","basic-addon1",1,"form-control"],["id","accordionExample",1,"accordion"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"accordion-item","mb-4"],["id","headingOne",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"accordion-button"],[1,"ms-4"],["id","collapseOne","aria-labelledby","headingOne","data-bs-parent","#accordionExample",1,"accordion-collapse","collapse","show"],[1,"accordion-body"],["src","../../../assets/aircooler.png","alt","",1,"me-3"],[1,"d-inline-block","items","me-3"],[1,"in-progress","d-inline-block","p-2"],[3,"click"],[1,"body-down-bg"],[1,"text-end","py-3"],[1,"reshedule","px-3","py-2","me-3"],[1,"cancel-service","px-3","py-2","me-3"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div"),e.TgZ(4,"h2",3),e._uU(5),e.qZA(),e.qZA(),e.TgZ(6,"div",4),e._UZ(7,"i",5),e.TgZ(8,"a",6),e._uU(9,"Edit Profile"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"div",7),e.TgZ(11,"p",8),e._UZ(12,"i",9),e._uU(13),e.qZA(),e.TgZ(14,"p",10),e._UZ(15,"i",11),e._uU(16),e.qZA(),e.qZA(),e.TgZ(17,"div",12),e.TgZ(18,"div",13),e.TgZ(19,"h6",14),e._uU(20,"Default Address"),e.qZA(),e.qZA(),e.TgZ(21,"div"),e.TgZ(22,"a",15),e._uU(23,"Change"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(24,"div",16),e.TgZ(25,"div",1),e.TgZ(26,"h6",17),e._uU(27),e.qZA(),e.TgZ(28,"div",2),e.TgZ(29,"div",18),e.TgZ(30,"p",19),e._uU(31),e.qZA(),e.qZA(),e.TgZ(32,"div"),e.TgZ(33,"a",20),e._uU(34,"Edit Address"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(35,"div",21),e.TgZ(36,"div",22),e._uU(37," Services "),e.qZA(),e.TgZ(38,"div",23),e._uU(39," AMC "),e.qZA(),e.TgZ(40,"div",23),e._uU(41," Extended Warranty "),e.qZA(),e.TgZ(42,"div",23),e._uU(43," My Devices "),e.qZA(),e.qZA(),e._UZ(44,"hr"),e.TgZ(45,"div",24),e.TgZ(46,"div",25),e.TgZ(47,"div",26),e.TgZ(48,"div",27),e.TgZ(49,"div"),e.TgZ(50,"select",28),e.TgZ(51,"option",29),e._uU(52,"Choose..."),e.qZA(),e.TgZ(53,"option"),e._uU(54,"..."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(55,"div"),e.TgZ(56,"div"),e.TgZ(57,"select",28),e.TgZ(58,"option",29),e._uU(59,"Choose..."),e.qZA(),e.TgZ(60,"option"),e._uU(61,"..."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(62,"div"),e.TgZ(63,"div",30),e.TgZ(64,"span",31),e._UZ(65,"i",32),e.qZA(),e._UZ(66,"input",33),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(67,"div"),e.TgZ(68,"div",34),e.YNc(69,v,2,1,"div",35),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(5),e.AsE("",n.address.firstname," ",n.address.lastname,""),e.xp6(8),e.hij(" ",n.address.email," "),e.xp6(3),e.hij("+ 91",n.address.mobilenumber,""),e.xp6(11),e.Oqu(n.address.firstname),e.xp6(4),e.gL8("",n.address.address1,", ",n.address.landmark,", ",n.address.district,", ",n.address.state,", -",n.address.pincode,", | Mobile:",n.address.mobilenumber,""),e.xp6(38),e.Q6J("ngForOf",n.itemdetails1))},directives:[c.YN,c.Kr,a.sg,a.O5],styles:['.ordered-details[_ngcontent-%COMP%]{background-color:#fff}.ordered-details[_ngcontent-%COMP%] > .padding[_ngcontent-%COMP%]{padding:3rem 6rem}.user-name[_ngcontent-%COMP%]{color:#000;font-family:"Lato",sans-serif;font-size:32px;font-weight:900}.list-style[_ngcontent-%COMP%]{color:#3c2b75;font-family:"Poppins",sans-serif;font-size:14px;font-weight:500}.edit-profile[_ngcontent-%COMP%]{letter-spacing:.24px;color:#3c2b75}.bi-pencil-square[_ngcontent-%COMP%]{color:#3c2b75;font-family:"Poppins",sans-serif;font-size:12px;font-weight:500}.default-address[_ngcontent-%COMP%]{letter-spacing:.32px;color:#000;font-family:"Poppins",sans-serif;font-size:16px;font-weight:500}.address-change-text[_ngcontent-%COMP%]{letter-spacing:.24px;color:#3c2b75;text-decoration:underline;font-family:"Poppins",sans-serif;font-size:12px;font-weight:500}.address-content[_ngcontent-%COMP%]{border:1px solid #3C2B754D;border-radius:2px;background-color:#d0cddd29;width:100%}.address-content[_ngcontent-%COMP%] > .padding[_ngcontent-%COMP%]{padding:1rem}.address-user[_ngcontent-%COMP%]{color:#545061;font-family:"Poppins",sans-serif;font-size:16px;font-weight:500}.address-text[_ngcontent-%COMP%]{color:#54506199;font-family:"Poppins",sans-serif;font-size:12px;font-weight:400}.edit-address1[_ngcontent-%COMP%]{color:#3c2b75;font-family:"Poppins",sans-serif;font-size:12px;font-weight:600}.service-types[_ngcontent-%COMP%]{width:45%}hr[_ngcontent-%COMP%]{border-bottom:rgba(0,0,0,.6);width:100%;height:1px;padding:0;margin:5px 0 0}.active-tab[_ngcontent-%COMP%]{letter-spacing:.32px;color:#3c2b75;font-family:"Poppins",sans-serif;font-size:16px;font-weight:600}.nonactive-tab[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-size:16px;font-weight:400;letter-spacing:.32px;color:#0009}.dropdown-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:70% 30%}.subgrid[_ngcontent-%COMP%]{width:70%;display:grid;grid-template-columns:auto auto}.accordion-button[_ngcontent-%COMP%]{background-color:#f5f5f5;box-shadow:0 3px 6px #00000014;border-radius:2px}.in-progress[_ngcontent-%COMP%]{background-color:#3c2b75;width:67px;color:#fff;text-transform:uppercase;font-family:"Poppins",sans-serif;font-size:10px;font-weight:600;border-radius:15px}.cancel-service[_ngcontent-%COMP%]{background-color:#3c2b75;color:#fff;font-family:"Poppins",sans-serif;font-size:12px;font-weight:600;border-radius:17px;border:none}.reshedule[_ngcontent-%COMP%]{border:1px solid #3c2b75;border-radius:17px;background-color:#d0cddd29;color:#3c2b75;font-family:"Poppins",sans-serif;font-size:12px;font-weight:600}.body-down-bg[_ngcontent-%COMP%]{width:100%;background-color:#fafafa}.accordion-body[_ngcontent-%COMP%]{padding:0}.accordion-body[_ngcontent-%COMP%] > .padding[_ngcontent-%COMP%]{padding:1rem}.items[_ngcontent-%COMP%]{color:#000;font-family:"Poppins",sans-serif;font-size:24px;font-weight:600}']}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[r.Bz.forChild(b)],r.Bz]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.ez,A,c.u5]]}),t})()}}]);