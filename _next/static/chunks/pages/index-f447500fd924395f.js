(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4776)}])},4776:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return er}});var i=s(5893),l=s(7294),a=s(3078),n=s(6712),o=s.n(n);let r=(0,l.createContext)(null);var _=s(9647),c=s(512),d=()=>{let{openTelModal:e}=(0,l.useContext)(r);return(0,i.jsxs)(a.W,{component:"section",className:o().benefit,children:[(0,i.jsxs)("div",{className:o().general,children:[(0,i.jsx)("p",{className:"subtitle",children:"Акция продлится с 1 по 20 сентября"}),(0,i.jsxs)("h1",{className:o().title,children:["это ваша ",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:(0,c.Z)(o().title,o().title_blue),children:"выгода!"})]}),(0,i.jsx)("p",{className:(0,c.Z)(o().subtitle,"subtitle"),children:"Тариф \xabМой онлайн+\xbb и 1 ТБ трафика в подарок для новых абонентов"}),(0,i.jsx)("div",{className:o().action,children:(0,i.jsx)(_.z,{variant:"normal",onClick:e,children:"Принять участие"})})]}),(0,i.jsx)("div",{className:o().picture,children:(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:"/image/Boss.avif",type:"image/avif"}),(0,i.jsx)("source",{srcSet:"/image/Boss.webp",type:"image/webp"}),(0,i.jsx)("source",{srcSet:"/image/Boss343.png",media:"(max-width: 767px)"}),(0,i.jsx)("source",{srcSet:"/image/Boss400.png",media:"(max-width: 1023px)"}),(0,i.jsx)("img",{src:"/image/Boss.png",alt:"Boss"})]})})]})},m=s(7223),x=s.n(m),u=s(207),h=s.n(u),p=e=>{let{src:t,alt:s,text:l}=e;return(0,i.jsxs)("div",{className:h().block,children:[(0,i.jsx)("img",{src:t,alt:s}),(0,i.jsx)("p",{className:(0,c.Z)("subtitle",h().text),children:l})]})},j=()=>(0,i.jsxs)(a.W,{component:"section",className:x().present,children:[(0,i.jsx)("h2",{className:"title",children:"Один терабайт — много любимых развлечений"}),(0,i.jsxs)("p",{className:(0,c.Z)(x().subtitle,"subtitle"),children:["Подарок получают только новые абоненты при подключении услуг Tele2",(0,i.jsx)("br",{}),"с тарифом \xabМой онлайн+\xbb. Трафик расходуется в течение года."]}),(0,i.jsxs)("div",{className:x().advantages,children:[(0,i.jsx)(p,{src:"/icons/Youtube.svg",alt:"Youtube",text:"Около 500 часов видео"}),(0,i.jsx)(p,{src:"/icons/Headphones.svg",alt:"Headphones",text:"Примерно 200 000 песен"}),(0,i.jsx)(p,{src:"/icons/Camera.svg",alt:"Camera",text:"Порядка 300 000 фото"})]})]}),g=s(97),v=s.n(g),b=s(4760),N=s.n(b),k=s(7179),f=s(6225),w=s(6790),C=s(356);function F(e){let t=document.cookie.match(RegExp("(?:^|; )"+e.replace(/([.$?*|{}()[\]\\/+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}function Z(e){!function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(s={path:"/",...s}).expires instanceof Date&&(s.expires=s.expires.toUTCString());let i=encodeURIComponent(e)+"="+encodeURIComponent(t);for(let e in s){i+="; "+e;let t=s[e];!0!==t&&(i+="="+t)}document.cookie=i}("city",e)}function M(e){let t=F("city");t&&e(t)}let S=function(e){let t="+7 (___) ___-__-__",s=0,i=t.replace(/\D/g,""),l=e.target.value.replace(/\D/g,"");i.length>=l.length&&(l=i),e.target.value=t.replace(/./g,function(e){return/[_\d]/.test(e)&&s<l.length?l.charAt(s++):s>=l.length?"":e})};var y=e=>{let{closeModal:t}=e,[s,a]=(0,l.useState)(!1),[n,o]=(0,l.useState)(!1),[r,d]=(0,l.useState)(""),[m,x]=(0,l.useState)(""),[u,h]=(0,l.useState)(!1);(0,l.useEffect)(()=>{u&&j.validateField("telephone"),m.length>17&&j.setFieldError("telephone",(0,i.jsxs)("span",{className:(0,c.Z)(N().error__wrapper,N().text__error,N().error__wrapper_green),children:[(0,i.jsx)("img",{src:"/icons/OkTel.svg",alt:"Ok",className:N().error__img}),"Номер введён верно"]}))},[m]);let p=()=>{void 0!==t&&(setTimeout(()=>t(),1e3),setTimeout(()=>a(!1),2e3))},j=(0,k.c)({initialValues:{telephone:"",termsOfService:!1},validate:{telephone:e=>m.length>17?null:(0,i.jsxs)("span",{className:N().error__wrapper,children:[(0,i.jsx)("img",{src:"/icons/ErrorTel.svg",alt:"Ошибка",className:N().error__img}),"Номер введён неверно"]}),termsOfService:e=>e?null:"Ошибка"}}),g=()=>{j.reset(),x(""),a(!0),o(!0),d(b({})),p(),h(!1)},v=e=>{a(!0),o(!1),d(b(e))},b=e=>{let t=0===Object.keys(e).length;if(!t){if(void 0!==e.telephone)return"Неправильно введён номер";if(void 0!==e.termsOfService)return"Нужно принять пользовательское соглашение"}if(t)return"Промокод выслан на ваш номер"};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("form",{onSubmit:j.onSubmit(()=>g(),e=>v(e)),children:[(0,i.jsx)(f.o,{classNames:{input:N().text__input,wrapper:N().text__wrapper,label:N().text__label,error:N().text__error},variant:"unstyled",label:"Номер телефона",...j.getInputProps("telephone"),onChange:e=>{S(e),x(e.target.value),console.log(m.length)},value:m,withErrorStyles:!1,onBlur:e=>{h(!0),j.validateField("telephone"),m.length>17&&j.clearFieldError("telephone")},onFocus:e=>{m.length>17&&j.setFieldError("telephone",(0,i.jsxs)("span",{className:(0,c.Z)(N().error__wrapper,N().text__error,N().error__wrapper_green),children:[(0,i.jsx)("img",{src:"/icons/OkTel.svg",alt:"Ok",className:N().error__img}),"Номер введён верно"]}))}}),(0,i.jsx)(w.X,{variant:"outline",color:"white",classNames:{input:N().check__input,label:N().check__label,error:N().check__error},mt:"md",label:(0,i.jsxs)("p",{children:["Даю согласие на обработку персональных данных.",(0,i.jsx)("a",{children:"Условия соглашения."})]}),...j.getInputProps("termsOfService",{type:"checkbox"})}),(0,i.jsx)(C.Z,{mt:32,children:(0,i.jsx)(_.z,{w:219,h:48,variant:"normal",type:"submit",children:"Выслать промокод"})})]}),(0,i.jsxs)("div",{className:(0,c.Z)(N().feedback,{[N().feedback_hidden]:!s}),children:[(0,i.jsx)("img",{src:"/icons/Ok.svg",className:(0,c.Z)(N().feedback__image,{[N().hidden]:!n}),alt:"Ok"}),(0,i.jsx)("img",{src:"/icons/Error.svg",className:(0,c.Z)(N().feedback__image,{[N().hidden]:n}),alt:"Attention"}),(0,i.jsx)("div",{className:"subtitle subtitle_14px",children:r})]})]})},T=()=>(0,i.jsxs)(a.W,{component:"section",className:v().instructions,children:[(0,i.jsxs)("div",{className:v().wrapper,children:[(0,i.jsxs)("h2",{className:(0,c.Z)("title",v().title),children:["Несколько шагов",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"title title_blue",children:"и 1 ТБ — ваш"})]}),(0,i.jsx)("div",{className:v().form__wrapper,children:(0,i.jsx)(y,{})})]}),(0,i.jsxs)("div",{className:v().list,children:[(0,i.jsxs)("div",{className:v().list__item,children:[(0,i.jsx)("div",{className:v().list__number,children:"1"}),(0,i.jsx)("p",{className:(0,c.Z)(v().list__text,"subtitle"),children:"Ведите свой номер телефона, затем дождитесь смс с промокодом для получения Тб"})]}),(0,i.jsxs)("div",{className:v().list__item,children:[(0,i.jsx)("div",{className:v().list__number,children:"2"}),(0,i.jsxs)("p",{className:(0,c.Z)(v().list__text,"subtitle"),children:["Перейдите на ",(0,i.jsx)("a",{className:"link",href:"#",children:"сайт Tele2"})," и активируйте промокод при подключении на тариф \xabМой Онлайн+\xbb"]})]}),(0,i.jsxs)("div",{className:v().list__item,children:[(0,i.jsx)("div",{className:v().list__number,children:"3"}),(0,i.jsx)("p",{className:(0,c.Z)(v().list__text,"subtitle"),children:"Используйте свой подарочный ТБ от Tele2 в течение всего года"})]})]}),(0,i.jsxs)("h2",{className:"title title_hidden",children:["Оставьте номер",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"title_blue",children:"и 1 ТБ — ваш"})]})]}),B=s(5305),L=s.n(B),D=()=>{let{openLocationModal:e,city:t}=(0,l.useContext)(r);return(0,i.jsxs)("header",{className:L().header,children:[(0,i.jsx)("img",{src:"/icons/Logo.svg",alt:"Tele2",className:L().logo}),(0,i.jsxs)("div",{className:L().location,children:[(0,i.jsx)("img",{src:"/icons/Location.svg",alt:"Location"}),(0,i.jsx)("div",{className:L().location__city,onClick:e,children:t})]})]})},I=s(6411),O=s.n(I),E=()=>(0,i.jsx)(a.W,{children:(0,i.jsxs)("footer",{className:O().footer,children:[(0,i.jsxs)("div",{className:O().links,children:[(0,i.jsxs)("div",{className:O().socials,children:[(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("img",{src:"/icons/Twitter.svg",alt:"Twitter"})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("img",{src:"/icons/VKontakte.svg",alt:"VKontakte"})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("img",{src:"/icons/Facebook.svg",alt:"Facebook"})})]}),(0,i.jsxs)("div",{className:O().promotion,children:[(0,i.jsx)("div",{className:(0,c.Z)("subtitle subtitle_13px",O().descr),children:"Полные условия акции"}),(0,i.jsx)("img",{src:"/icons/16+.svg",alt:"16+"})]})]}),(0,i.jsxs)("div",{className:O().credits,children:[(0,i.jsxs)("div",{className:O().footer__tele2,children:[(0,i.jsx)("img",{src:"/icons/Logo.svg",alt:"Tele2"}),(0,i.jsx)("div",{className:(0,c.Z)("subtitle_16px",O().tele2__text),children:"\xa9 Tele2 Россия, 2021"})]}),(0,i.jsxs)("div",{className:O().chulakov,children:[(0,i.jsx)("div",{className:(0,c.Z)("subtitle_13px",O().chulakov__text),children:"Сделано в Студии Олега Чулакова"}),(0,i.jsx)("img",{src:"/icons/Chulakov.svg",alt:"Chulakov"})]})]})]})}),P=s(9008),H=s.n(P),W=s(2489),R=s.n(W),V=s(7144),z=()=>{let[e,t]=(0,V.b)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("button",{className:(0,c.Z)(R().button__back,{[R().button__back_hidden]:e.y>1e3}),onClick:()=>t({y:0}),children:(0,i.jsx)("img",{src:"/icons/Up.svg",alt:"up"})})})},U=e=>{let{children:t,title:s}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(H(),{children:(0,i.jsx)("title",{children:s})}),(0,i.jsx)(D,{}),(0,i.jsx)("main",{style:{minHeight:"calc(100vh - 78px - 324px)"},children:t}),(0,i.jsx)(E,{}),(0,i.jsx)(z,{})]})},G=s(6606),Y=s.n(G),A=()=>(0,i.jsxs)(a.W,{component:"section",className:Y().rate,children:[(0,i.jsxs)("div",{className:Y().general,children:[(0,i.jsx)("div",{className:(0,c.Z)("title",Y().title),children:"Заходите на сайт Tele2"}),(0,i.jsx)("div",{className:(0,c.Z)("subtitle",Y().subtitle),children:"Перейдите в магазин, оформите тариф \xabМой онлайн+\xbb и на страничке активации введите ваш промокод. Готово!"}),(0,i.jsx)("div",{className:"subtitle subtitle_hidden",children:"Перейдите в магазин на страничку активации, введите ваш промокод. Готово! Теперь вы получите 1 ТБ на ваш телефон при подключении тарифа \xabМой онлайн+\xbb."}),(0,i.jsx)("div",{className:Y().action,children:(0,i.jsx)("a",{href:"https://rostov.tele2.ru",target:"_blank",children:(0,i.jsx)(_.z,{w:219,h:48,variant:"normal",children:"Оформить тариф"})})})]}),(0,i.jsx)("div",{className:Y().picture,children:(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:"/image/MaskGroup.avif",type:"image/avif"}),(0,i.jsx)("source",{srcSet:"/image/MaskGroup.webp",type:"image/webp"}),(0,i.jsx)("source",{srcSet:"/image/MaskGroup230.png",media:"(max-width: 767px)"}),(0,i.jsx)("source",{srcSet:"/image/MaskGroup300.png",media:"(max-width: 1023px)"}),(0,i.jsx)("img",{src:"/image/MaskGroup.png",alt:"MaskGroup"})]})}),(0,i.jsx)("div",{className:[Y().action,Y().action_hidden].join(" "),children:(0,i.jsx)("a",{href:"https://rostov.tele2.ru",target:"_blank",children:(0,i.jsx)(_.z,{w:219,h:48,variant:"normal",children:"Оформить тариф"})})})]}),Q=s(3256),q=s.n(Q),X=e=>{let{isModal:t,closeModal:s,setCity:a}=e;(0,l.useEffect)(()=>{M(a)},[]);let n=e=>{Z(e.target.textContent),M(a),s()};return(0,i.jsx)("dialog",{className:q().location__wrapper,open:t,children:(0,i.jsxs)("div",{className:q().location__modal,children:[(0,i.jsx)("div",{className:"title",children:"Выберите город"}),(0,i.jsxs)("div",{className:q().location__modal__list,children:[(0,i.jsx)("div",{className:(0,c.Z)("subtitle",q().location__modal__item),onClick:n,children:"Воронеж"}),(0,i.jsx)("div",{className:(0,c.Z)("subtitle",q().location__modal__item),onClick:n,children:"Иркутск"}),(0,i.jsx)("div",{className:(0,c.Z)("subtitle",q().location__modal__item),onClick:n,children:"Кемерово"}),(0,i.jsx)("div",{className:(0,c.Z)("subtitle",q().location__modal__item),onClick:n,children:"Красноярск"}),(0,i.jsx)("div",{className:(0,c.Z)("subtitle",q().location__modal__item),onClick:n,children:"Москва"}),(0,i.jsx)("div",{className:(0,c.Z)("subtitle",q().location__modal__item),onClick:n,children:"Н. Новгород"}),(0,i.jsx)("div",{className:(0,c.Z)("subtitle",q().location__modal__item),onClick:n,children:"Новосибирск"}),(0,i.jsx)("div",{className:(0,c.Z)("subtitle",q().location__modal__item),onClick:n,children:"Пермь"}),(0,i.jsx)("div",{className:(0,c.Z)("subtitle",q().location__modal__item),onClick:n,children:"Ростов-на-Дону"}),(0,i.jsx)("div",{className:(0,c.Z)("subtitle",q().location__modal__item),onClick:n,children:"Санкт-Петербург"}),(0,i.jsx)("div",{className:(0,c.Z)("subtitle",q().location__modal__item),onClick:n,children:"Челябинск"})]})]})})},J=s(1011),K=s.n(J),$=e=>{let{children:t,closeModal:s,isModal:l}=e;return(0,i.jsx)("div",{className:K().modal__wrapper,onClick:s,open:l,children:t})},ee=s(6648),et=s.n(ee),es=e=>{let{openModal:t}=e,[s,a]=(0,l.useState)(!1);(0,l.useEffect)(()=>{n()},[]);let n=()=>{F("city")||(a(!0),document.body.classList.add("scroll-lock"))},o=()=>{Z("Санкт-Петербург"),a(!1),document.body.classList.remove("scroll-lock")};return(0,i.jsx)($,{closeModal:o,isModal:s,children:(0,i.jsxs)("div",{className:et().modal,onClick:e=>{e.stopPropagation()},children:[(0,i.jsx)("div",{className:et().modal__text,children:"Ваш город Санкт-Петербург?"}),(0,i.jsxs)("div",{className:et().modal__actions,children:[(0,i.jsx)("button",{className:et().modal__button,onClick:o,children:"Да, верно"}),(0,i.jsx)("div",{className:et().modal__text__action,onClick:()=>{o(),t("location")},children:"Изменить регион"})]})]})})},ei=s(9264),el=e=>{let{isOpen:t,closeModal:s}=e;return(0,i.jsx)(ei.u,{opened:t,onClose:s,centered:!0,withCloseButton:!1,size:400,padding:20,children:(0,i.jsx)(y,{closeModal:s})})},ea=s(1325),en=s.n(ea),eo=()=>(0,i.jsxs)("video",{width:"100%",playsInline:!0,loop:!0,muted:!0,autoPlay:"autoplay",className:en().video,poster:"/image/Tele2Cover.png",children:[(0,i.jsx)("source",{src:"/video/Tele2.mp4",type:"video/mp4"}),(0,i.jsx)("source",{src:"/video/Tele2.webm",type:"video/webm"}),(0,i.jsx)("img",{src:"/image/Tele2Cover.png",alt:"tele2cover"})]});function er(){let[e,t]=(0,l.useState)(!1),[s,a]=(0,l.useState)("Санкт-Петербург"),n=()=>{document.body.classList.remove("scroll-lock"),t(!1)},o=e=>{document.body.classList.add("scroll-lock"),t(e)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(H(),{children:(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})}),(0,i.jsx)(r.Provider,{value:{openLocationModal:()=>{o("location")},openTelModal:()=>{o("number")},city:s},children:(0,i.jsxs)(U,{title:"Tele2 - ".concat(s),children:[(0,i.jsx)(eo,{}),(0,i.jsx)(d,{}),(0,i.jsx)(j,{}),(0,i.jsx)(T,{}),(0,i.jsx)(A,{}),(0,i.jsx)(X,{isModal:"location"===e,closeModal:n,setCity:a}),(0,i.jsx)(es,{openModal:o}),(0,i.jsx)(el,{isOpen:"number"===e,closeModal:n})]})})]})}},6712:function(e){e.exports={benefit:"Benefit_benefit__PiJPn",general:"Benefit_general__Phhwk",title:"Benefit_title__zckwB",title_blue:"Benefit_title_blue__I1oku",subtitle:"Benefit_subtitle__NlPQK",action:"Benefit_action__GeeuC",picture:"Benefit_picture__OEWF5"}},3256:function(e){e.exports={location__wrapper:"DialogLocation_location__wrapper__RHhHS",location__modal:"DialogLocation_location__modal__U6iT7",location__modal__list:"DialogLocation_location__modal__list__xUNWL",location__modal__item:"DialogLocation_location__modal__item__v0phi",modal:"DialogLocation_modal__E_b1M"}},6648:function(e){e.exports={modal:"DialogLocationStart_modal__HsAVo",modal__actions:"DialogLocationStart_modal__actions__YYZ6N",modal__button:"DialogLocationStart_modal__button__eYhth",modal__text:"DialogLocationStart_modal__text__wPaAn",modal__text__action:"DialogLocationStart_modal__text__action__4gQtH"}},6411:function(e){e.exports={footer:"Footer_footer__o4_Ec",links:"Footer_links__xHnvg",socials:"Footer_socials__xJ7o0",promotion:"Footer_promotion__9h08V",descr:"Footer_descr__KTr57",credits:"Footer_credits__T7OPi",footer__tele2:"Footer_footer__tele2__5r3Xz",tele2__text:"Footer_tele2__text__qojFx",chulakov:"Footer_chulakov__ZyYEs",chulakov__text:"Footer_chulakov__text__qjnn_"}},5305:function(e){e.exports={header:"Header_header__pXml_",logo:"Header_logo__sUWiP",location:"Header_location__pcbV2",location__city:"Header_location__city__lvav2"}},97:function(e){e.exports={instructions:"Instructions_instructions__5jdrD",form__wrapper:"Instructions_form__wrapper__6VHOd",list:"Instructions_list__rnWSD",list__item:"Instructions_list__item__x60QN",list__number:"Instructions_list__number__lLCDS",list__text:"Instructions_list__text__HWqYn",wrapper:"Instructions_wrapper__beG5w",title:"Instructions_title__aWtWF",title_hidden:"Instructions_title_hidden__bgmjS"}},7223:function(e){e.exports={present:"Present_present__fLdi6",subtitle:"Present_subtitle__WDXd5",advantages:"Present_advantages__uBVi_"}},6606:function(e){e.exports={rate:"Rate_rate__GAVNu",general:"Rate_general__dMWPo",title:"Rate_title__RB2pv",subtitle:"Rate_subtitle__r_jZI",action:"Rate_action__IDYDz",action_hidden:"Rate_action_hidden__CVw9H",picture:"Rate_picture__Ubypo"}},1325:function(e){e.exports={video:"Video_video__lLJk3"}},207:function(e){e.exports={block:"AdvavntagesBlock_block__poVr5",text:"AdvavntagesBlock_text__zzWON"}},1011:function(e){e.exports={modal__wrapper:"DialogWrapper_modal__wrapper__TRPUn"}},4760:function(e){e.exports={actions:"MantineForm_actions__LqVbl",root:"MantineForm_root__0jd4g",text__label:"MantineForm_text__label__wjvqo",text__wrapper:"MantineForm_text__wrapper__nSnqN",text__input:"MantineForm_text__input__tQARl",text__error:"MantineForm_text__error__zZMyp",error__wrapper:"MantineForm_error__wrapper__Hht50",error__wrapper_green:"MantineForm_error__wrapper_green__WoZ4n",error__img:"MantineForm_error__img__zGfhy",check__input:"MantineForm_check__input__QQTa_",check__label:"MantineForm_check__label__Ig2pB",check__error:"MantineForm_check__error__akQdc",feedback:"MantineForm_feedback__muBDw",feedback_hidden:"MantineForm_feedback_hidden__ndHnc",feedback__image:"MantineForm_feedback__image__9ammr",hidden:"MantineForm_hidden__2OOsG"}},2489:function(e){e.exports={button__back:"UpButton_button__back__NDZIY",button__back_hidden:"UpButton_button__back_hidden__uZB0J"}}},function(e){e.O(0,[151,888,774,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);