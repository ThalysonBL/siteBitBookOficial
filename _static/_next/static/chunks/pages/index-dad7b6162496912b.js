(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(8166)}])},8166:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return em}});var a=i(5893),t=i(9008),o=i.n(t),n=i(3915),l=i.n(n),r=i(7294),c=i(6661),d=i.n(c),x={src:"./_next/static/media/logoWhite.5cd8d6aa.png",height:40,width:136,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAALElEQVR42mP4cOzDqvd2H/w/RH5w+mD9wYvhw6IPC96bffD6EPoh+EPAh2AAdZUVKYz9PfYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},p={src:"./_next/static/media/IconApple.aaa11ab3.svg",height:25,width:20},m={src:"./_next/static/media/IconGoogle.27bfa787.svg",height:22,width:20},h={src:"./_next/static/media/IconHearth.cc283243.svg",height:17,width:19},_=i(5675),j=i.n(_);function u(){let e=new Date,s=e.getFullYear();return(0,a.jsxs)("footer",{id:d().container,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(j(),{src:x,alt:"imagem Bit Book"}),(0,a.jsxs)("p",{id:d().direitos,children:["\xa9 ",s," - Todos os direitos reservados"]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{id:d().baixeApp,children:"Baixe nosso app"}),(0,a.jsxs)("div",{id:d().containerIconLoja,children:[(0,a.jsx)("a",{className:d().containerLinkLoja,href:"https://play.google.com/store/apps/details?id=br.app.bitbook",children:(0,a.jsx)(j(),{src:m,alt:"imagem Google"})}),(0,a.jsx)("a",{className:d().containerLinkLoja,href:"https://apps.apple.com/br/app/bit-book/id1641568359",children:(0,a.jsx)(j(),{src:p,alt:"imagem Apple"})})]})]}),(0,a.jsx)("div",{id:d().thirdBox,children:(0,a.jsxs)("p",{id:d().textBitTech,children:["Desenvolvido por: Bit Tecnologia",(0,a.jsx)(j(),{id:d().iconeHearth,src:h,alt:"Imagem cora\xe7\xe3o"})]})})]})}var g=i(2814),b=i.n(g),f={src:"./_next/static/media/logo.35965a0a.png",height:31,width:106,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAOElEQVR42gXAsRFAQBAF0LdDIDijGt0pQ1FakEsUIBHcv6ndcZGnOMNWtPDiR5vJjU59WDBhJR0ZD8cO4JbSE4wAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},v=i(1874),A=i.n(v),y=i(6154);let N=y.Z.create({baseURL:"https://api.bitbook.app.br",headers:{client_id:"2",client_secret:"k0c4FSsWoY94NQNYqci8fd5mGrcaJgjH5KCXfevK"}});var w=i(725),L=i.n(w),C=i(2964),I=i(8898),D=i.n(I),T=i(7335),B=i(295),k={src:"./_next/static/media/iconPlayStoreBlack.eb2aabf7.svg",height:58,width:53},S={src:"./_next/static/media/iconAppleStoreBlack.7abd6e1f.svg",height:58,width:48},H={src:"./_next/static/media/qrCodeLoja.495ff96f.png",height:142,width:142,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAU0lEQVR42gFIALf/AMW3x6fS3bHHALibuJmPt5m1AL260LOyu8bMAL2poHy1ubjgAM68xL2kZp7AAN7AvtHOrae3ALKXyMbFmZjGAMa5u8jRy5zLbXst3LC4x9kAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8};function R(){var e,s;let{width:i,height:t}=(0,C.Z)(),{onOpen:o,onClose:n,isOpen:l}=(0,T.q)();r.useRef(null);let[c,d]=(0,r.useState)([]),[x,p]=(0,r.useState)(""),[m,h]=(0,r.useState)(""),[_,u]=(0,r.useState)(),[g,b]=(0,r.useState)(""),[f,v]=(0,r.useState)(""),y=e=>{e.preventDefault();let s=e.target.value,i=s.replace(/\D/g,"");h(i=m.length<=11?(i=(i=(i=i.replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})/,"$1-$2")).replace(/(-\d{2})\d+?$/,"$1"):(i=(i=(i=(i=i.replace(/(\d{2})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1/$2")).replace(/(\d{4})(\d{1,2})/,"$1-$2")).replace(/(-\d{2})\d+?$/,"$1"))},w=(0,r.useCallback)(e=>{u(e)},[]),I=(0,r.useCallback)(e=>{p(e)},[]),R=(e,s)=>{e.preventDefault(),h(e.target.value),v("CPF"===s)},[P,F]=(0,r.useState)(""),O=18===m.length||14===m.length;async function V(){let e=await N.post("/api/empresas/".concat(_.id,"/verifica-cliente"),{chave:"".concat(m)});if(O)e.data.user_found,b(e.data.user_found);else if(m.length<10||m.length>10&&m.length<=13||m.length>=15)return F("CPF ou CNPJ inv\xe1lido")}return(0,r.useEffect)(()=>{N.get("/api/empresas-integracoes").then(e=>{let s=e.data;d(s)})},[]),(0,a.jsxs)(a.Fragment,{children:[_?(0,a.jsx)("div",{children:""===g?(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:A().containerResultado,children:[(0,a.jsx)(j(),{src:_.img,alt:"Image parceiro",width:"72",height:"66",style:{marginBottom:"20px"},className:A().bordaImage}),(0,a.jsxs)("div",{style:{width:"384px"},children:[(0,a.jsx)("p",{id:A().titleVerify,children:"Verifique seu benef\xedcio"}),(0,a.jsxs)("p",{className:A().descriptionVerify,children:["O CPF utilizado na autentica\xe7\xe3o \xe9 o mesmo ",(0,a.jsx)("br",{}),"usado no login da empresa parceira ",(0,a.jsx)("br",{}),"selecionada."]})]}),(0,a.jsx)("div",{className:A().containerInput,children:(0,a.jsx)("div",{className:A().field,children:(0,a.jsxs)("form",{onChange:y,children:[(0,a.jsx)(D(),{required:!0,id:"EmpresaCpf",value:m,onChange:R}),(0,a.jsx)("label",{htmlFor:"EmpresaCpf",title:"Digite o seu CPF/CNPJ","data-title":"Digite o seu CPF/CNPJ"}),(0,a.jsx)("span",{style:{fontSize:"10px",color:"#AD1E12",paddingLeft:"1rem"},children:P})]})})}),(0,a.jsx)("div",{className:A().contentButton,children:(0,a.jsx)("button",{type:"submit",id:A().botaoVerificar,onClick:()=>V(),children:"Verificar benef\xedcio"})})]})}):""}):(0,a.jsxs)("div",{className:A().container,children:[(0,a.jsxs)("div",{className:A().containerText,children:[(0,a.jsx)("p",{id:A().titleVerify,children:"Verifique seu benef\xedcio"}),(0,a.jsxs)("p",{className:A().descriptionVerify,children:["Selecione uma empresa parceira para",(0,a.jsx)("br",{})," verificarmos se benef\xedcio:"]})]}),(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"row",marginLeft:0,width:"100%"},children:(0,a.jsx)("div",{id:A().contentListAndInput,children:(0,a.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:(0,a.jsxs)("div",{id:A().containerLista,children:[(0,a.jsx)("div",{style:{backgroundColor:"#FFFFFF",left:0,top:0,position:"absolute",zIndex:"1000"},children:(0,a.jsxs)("div",{className:A().field,children:[(0,a.jsx)("input",{list:"browsers",required:!0,autoComplete:"off",id:"empresaParceira",value:x,onChange:e=>I(e.target.value)}),(0,a.jsx)("label",{htmlFor:"empresaParceira",title:"Digite o nome do seu parceiro","data-title":"Digite o nome do seu parceiro"}),(0,a.jsx)("div",{style:{position:"absolute"},className:A().containerInputList,children:null===(e=c.empresas)||void 0===e?void 0:e.filter(e=>{var s;if(""===x);else if(null==e?void 0:null===(s=e.nome)||void 0===s?void 0:s.toLowerCase().includes(x.toLowerCase()))return(0,a.jsx)("p",{children:e.nome})}).slice(0,4).map((e,s)=>(0,a.jsx)("div",{onClick:()=>w(e),className:A().textInputList,children:(0,a.jsx)("p",{children:e.nome})},e.id))})]})}),0===c.length?(0,a.jsx)(B.$,{thickness:"3px",speed:"0.65s",width:"20px",height:"20px",margin:"auto"}):null===(s=c.empresas)||void 0===s?void 0:s.filter(e=>{var s;return""===x?e.img_lista:(null==e?void 0:null===(s=e.nome)||void 0===s?void 0:s.toLowerCase().includes(x.toLowerCase()))?(0,a.jsx)(j(),{src:e.img_lista,alt:"Imagem Parceiro",width:"72",height:"66",className:A().bordaAndShadow}):void 0}).map((e,s)=>(0,a.jsx)("div",{className:A().containerParceiro,onClick:()=>w(e),children:(0,a.jsx)(j(),{src:e.img_lista,alt:"Imagem Parceiro",width:"72",height:"66",className:A().bordaAndShadow})},e.id))]})})})})]}),m&&_&&g?(0,a.jsxs)("div",{className:A().containerResultado,children:[(0,a.jsx)(j(),{src:_.img,alt:"Imagem Parceiro",width:"72",height:"66",className:A().bordaImage}),(0,a.jsx)(L(),{width:575,height:t,gravity:.5}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:A().titleResult,children:["Obaaa! O Bit Book est\xe1 ",(0,a.jsx)("br",{}),"liberado para voc\xea! \uD83E\uDD73\uD83C\uDF89"]}),(0,a.jsxs)("p",{className:A().descriptiontitleResult,children:["Acesse o app e aproveite agora mesmo todos",(0,a.jsx)("br",{})," os conte\xfados selecionados especialmente",(0,a.jsx)("br",{})," para voc\xea!"]})]}),(0,a.jsxs)("div",{id:A().caixaLojas,children:[(0,a.jsxs)("div",{className:A().lojasClick,children:[(0,a.jsx)("div",{className:A().containerDownload,children:(0,a.jsxs)("div",{className:A().containerLoja,children:[(0,a.jsx)(j(),{src:k,alt:"Imagem parceiro",className:A().iconLoja}),(0,a.jsxs)("a",{href:"https://play.google.com/store/apps/details?id=br.app.bitbook",className:A().contentTextLoja,children:[(0,a.jsx)("p",{children:"Dispon\xedvel na"}),(0,a.jsx)("p",{className:A().textLoja,children:"Google Play"})]})]})}),(0,a.jsx)("a",{href:"https://apps.apple.com/br/app/bit-book/id1641568359",className:A().containerDownload,children:(0,a.jsxs)("div",{className:A().containerLoja,children:[(0,a.jsx)(j(),{src:S,alt:"Imagem parceiro",className:A().iconLoja}),(0,a.jsxs)("div",{className:A().contentTextLoja,children:[(0,a.jsx)("p",{children:"Dispon\xedvel na"}),(0,a.jsx)("p",{className:A().textLoja,children:"App Store"})]})]})})]}),(0,a.jsx)(j(),{src:H,alt:"Imagem QR Code",className:A().tamanhoQrCode})]}),(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,a.jsx)("p",{className:A().problemSuport,children:"Problemas com seu benef\xedcio?"}),(0,a.jsx)("a",{href:"https://wa.me/+553398231860",className:A().problemSuportChamar,children:"Fale com o suporte"})]})]}):(0,a.jsx)("div",{children:_&&!1===g?(0,a.jsxs)("div",{className:A().containerResultado,children:[(0,a.jsx)(j(),{src:_.img,alt:"Imagem Parceiro",width:"72",height:"66",className:A().bordaImage}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:A().titleResult,style:{color:"#D73628"},children:["Ops, voc\xea ainda n\xe3o tem",(0,a.jsx)("br",{})," acesso ao Bit Book! \uD83D\uDE22"]}),(0,a.jsxs)("p",{className:A().descriptiontitleResult,children:["Os dados informados n\xe3o est\xe3o em nossa ",(0,a.jsx)("br",{}),"base, caso voc\xea acredite ter direito, procure a",(0,a.jsx)("br",{}),"empresa parceira e confirme seus dados de",(0,a.jsx)("br",{})," cadastro."]})]}),(0,a.jsxs)("div",{id:A().caixaLojas,children:[(0,a.jsxs)("div",{className:A().lojasClick,children:[(0,a.jsx)("div",{className:A().containerDownload,children:(0,a.jsxs)("div",{className:A().containerLoja,children:[(0,a.jsx)(j(),{src:k,alt:"Imagem parceiro",className:A().iconLoja}),(0,a.jsxs)("a",{href:"https://play.google.com/store/apps/details?id=br.app.bitbook",className:A().contentTextLoja,children:[(0,a.jsx)("p",{children:"Dispon\xedvel na"}),(0,a.jsx)("p",{className:A().textLoja,children:"Google Play"})]})]})}),(0,a.jsx)("a",{href:"https://apps.apple.com/br/app/bit-book/id1641568359",className:A().containerDownload,children:(0,a.jsxs)("div",{className:A().containerLoja,children:[(0,a.jsx)(j(),{src:S,alt:"Imagem parceiro",className:A().iconLoja}),(0,a.jsxs)("div",{className:A().contentTextLoja,children:[(0,a.jsx)("p",{children:"Dispon\xedvel na"}),(0,a.jsx)("p",{className:A().textLoja,children:"App Store"})]})]})})]}),(0,a.jsx)(j(),{src:H,alt:"Imagem QR Code",className:A().tamanhoQrCode})]}),(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,a.jsx)("p",{className:A().problemSuport,children:"Problemas com seu benef\xedcio?"}),(0,a.jsx)("a",{href:"https://wa.me/+553398231860",className:A().problemSuportChamar,children:"Fale com o suporte"})]})]}):""})]})}var P=i(8244),F=i(2752),O=i(1963),V=i(8922),q=i(5819),E=i(3793),W=i(2340);function z(){let{onOpen:e,onClose:s,isOpen:i}=(0,T.q)();r.useRef(null);let[t,o]=r.useState("right"),n=r.useRef(null);return(0,W.Z)(n),(0,P.S)({sm:!1,md:!1,lg:!0}),(0,a.jsxs)("header",{id:b().container,children:[(0,a.jsx)("div",{ref:n}),(0,a.jsxs)(F.u_,{blockScrollOnMount:!0,isOpen:i,size:["full","full","full","xl"],onClose:s,children:[(0,a.jsx)(O.Z,{}),(0,a.jsxs)(V.h,{bg:"#ffffff",width:["full","full","full","40%"],padding:["10px 20px 50px 10px ","10px 20px 50px 10px ","10px 20px 50px 10px ","10px 20px 50px 10px "],margin:" 4% auto",borderRadius:"8px",children:[(0,a.jsx)(q.o,{display:"inline",margin:"0 0 0 auto"}),(0,a.jsx)(E.f,{children:(0,a.jsx)(R,{})})]})]}),(0,a.jsx)("div",{id:b().contentFixed,children:(0,a.jsxs)("div",{id:b().content,children:[(0,a.jsx)(j(),{src:f,alt:"Logo Bit Book"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{id:b().verifyBeneficio,onClick:e,children:"Verifique o seu benef\xedcio"}),(0,a.jsx)("a",{id:b().duvidasApp,href:"https://api.whatsapp.com/send/?phone=5533984264226&text&type=phone_number&app_absent=0",children:"D\xfavidas? Fale conosco ✌"})]})]})})]})}var U=i(6024),Q=i(5077),K=i(7484),M=i(3100),Y=i(1673),Z=i(6733);function G(){return(0,a.jsx)("div",{children:(0,a.jsxs)(U.U,{allowToggle:!0,fontSize:"16px",fontWeight:"500","line-height":"24px",letterSpacing:"0em",textAlign:"left",color:"#36007C;",maxWidth:["342px","520px","520px"],mt:["50px","50px","0","0"],children:[(0,a.jsxs)(Q.Q,{padding:["10px 10px","20px 36px","20px 36px"],background:"none",borderRadius:"6px",border:" 1px solid #36007C",marginBottom:"26px",maxWidth:["342px","520px","520px"],children:[(0,a.jsx)("h2",{children:(0,a.jsxs)(K.K,{maxWidth:"520px",display:"flex",justifyContent:"space-between",children:[(0,a.jsx)(M.xu,{as:"span",textAlign:"left",fontWeight:"500",color:"#36007C;",fontSize:"16px",children:"O que \xe9 a Bit Book?"}),(0,a.jsx)(Y.X,{})]})}),(0,a.jsx)(Z.H,{maxWidth:["342px","342px","342px"],children:"Somos uma plataforma de e-books e audiobooks online, voltada para o g\xeanero sa\xfade e bem-estar. Nossos leitores tem acesso ao nosso acervo de forma ilimitada para ler e ouvir, quantas vezes desejar, os conte\xfados em nossa plataforma."})]}),(0,a.jsxs)(Q.Q,{padding:["10px 10px","20px 36px","20px 36px"],background:"none",borderRadius:"6px",border:" 1px solid #36007C",marginBottom:"26px",maxWidth:["342px","520px","520px"],children:[(0,a.jsx)("h2",{children:(0,a.jsxs)(K.K,{maxWidth:"520px",display:"flex",justifyContent:"space-between",children:[(0,a.jsx)(M.xu,{as:"span",textAlign:"left",fontWeight:"500",color:"#36007C;",fontSize:"16px",children:"Como posso acessar?"}),(0,a.jsx)(Y.X,{})]})}),(0,a.jsxs)(Z.H,{maxWidth:["342px","342px","342px"],children:["Voc\xea pode acessar atrav\xe9s do nosso app. Para baixar o aplicativo,",(0,a.jsx)("a",{href:"https://onelink.to/fdc34n",children:(0,a.jsx)("strong",{children:" clique aqui."})})]})]}),(0,a.jsxs)(Q.Q,{padding:["10px 10px","20px 36px","20px 36px"],background:"none",borderRadius:"6px",border:" 1px solid #36007C",marginBottom:"26px",maxWidth:["342px","520px","520px"],children:[(0,a.jsx)("h2",{children:(0,a.jsxs)(K.K,{maxWidth:"520px",display:"flex",justifyContent:"space-between",children:[(0,a.jsx)(M.xu,{as:"span",textAlign:"left",fontWeight:"500",color:"#36007C;",fontSize:"16px",children:"Que tipo de conte\xfados encontro no Bit Book?"}),(0,a.jsx)(Y.X,{})]})}),(0,a.jsxs)(Z.H,{maxWidth:["342px","342px","342px"],children:["Voc\xea encontra diversos livros, revistas, e-books e audiobooks voltados para o tema sa\xfade e bem-estar. Uma grande variedade de t\xedtulos te espera com acesso ilimitado.",(0,a.jsx)("a",{href:"https://onelink.to/fdc34n",children:(0,a.jsx)("strong",{children:" Confira!"})})]})]})]})})}var X=i(56);i(2576),i(3539),i(9645);var $=i(6620),J=i.n($),ee={src:"./_next/static/media/IconDown.6841451c.svg",height:56,width:56},es={src:"./_next/static/media/IconSeguranca.91589396.svg",height:56,width:56},ei={src:"./_next/static/media/IconFolhaCheck.99dd92d2.svg",height:56,width:56},ea={src:"./_next/static/media/IconCronometro.22f0e383.svg",height:57,width:56};function et(){return(0,a.jsx)("div",{id:J().containerCarousel,children:(0,a.jsxs)(X.tq,{slidesPerView:1.2,spaceBetween:30,grabCursor:!0,pagination:{clickable:!0},className:"mySwiper",style:{width:"100%",maxHeight:"280px",marginTop:"41px",marginBottom:"10px"},children:[(0,a.jsxs)(X.o5,{className:J().boxItems,children:[(0,a.jsx)(j(),{className:J().imageBox,src:ee,alt:"imagem"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("p",{className:J().boxTitle,children:"Baixe gr\xe1tis"}),(0,a.jsx)("p",{className:J().boxDetail,children:"download simples e f\xe1cil."})]})]}),(0,a.jsxs)(X.o5,{className:J().boxItems,children:[(0,a.jsx)(j(),{className:J().imageBox,src:es,alt:"imagem"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("p",{className:J().boxTitle,children:"Temas autorais"}),(0,a.jsx)("p",{className:J().boxDetail,children:"toda semana temas novos."})]})]}),(0,a.jsxs)(X.o5,{className:J().boxItems,children:[(0,a.jsx)(j(),{className:J().imageBox,src:ei,alt:"imagem"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("p",{className:J().boxTitle,children:"Leitura f\xe1cil"}),(0,a.jsx)("p",{className:J().boxDetail,children:"utilize em qualquer plataforma."})]})]}),(0,a.jsxs)(X.o5,{className:J().boxItems,children:[(0,a.jsx)(j(),{className:J().imageBox,src:ea,alt:"imagem"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("p",{className:J().boxTitle,children:"Acesso ilimitado"}),(0,a.jsx)("p",{className:J().boxDetail,children:"a todo conte\xfado do app"})]})]})]})})}var eo={src:"./_next/static/media/IconStar.298c6bbd.svg",height:43,width:45},en={src:"./_next/static/media/IconTable.651cdd03.svg",height:50,width:50},el={src:"./_next/static/media/IconPointer.2ee828e4.svg",height:46,width:46},er={src:"./_next/static/media/IconEstante.52fbe2bc.svg",height:40,width:46},ec={src:"./_next/static/media/riscoDeLevis.410dd4ca.png",height:14,width:352,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAHklEQVR4nGOsY/1kzsDAwA7EIPAHiH8D8V8gBgFWAFpIBK6JfDSjAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1},ed=i(5479),ex=i.n(ed);function ep(){var e;let[s,i]=(0,r.useState)([]);return(0,r.useEffect)(()=>{N.get("/api/empresas-integracoes").then(e=>{let s=e.data;i(s)})},[]),(0,a.jsx)("div",{className:ex().containerSliderProvedores,children:(0,a.jsx)("div",{className:ex().slider,children:(0,a.jsx)("div",{className:ex().slide_track,children:null===(e=s.empresas)||void 0===e?void 0:e.map(e=>(0,a.jsx)("div",{className:ex().slide,children:(0,a.jsx)(j(),{src:e.img,alt:"Imagem parceiro Bit Book",width:"72",height:"64",className:ex().bordaAndShadow})},e.id))})})})}function em(){let{onOpen:e,onClose:s,isOpen:i}=(0,T.q)();return r.useRef(null),(0,a.jsxs)("article",{children:[(0,a.jsx)(o(),{children:(0,a.jsx)("title",{children:"Bit Book | Home"})}),(0,a.jsx)(z,{}),(0,a.jsx)("section",{id:l().sectionOne,children:(0,a.jsx)("div",{id:l().containerSectionOne,children:(0,a.jsxs)("div",{id:l().contentOne,children:[(0,a.jsx)("p",{id:l().headline,children:"Seu guia digital de sa\xfade e bem-estar"}),(0,a.jsx)("p",{id:l().subscriptionOne,children:"Descubra se j\xe1 \xe9 cliente de um de nossos parceiros e tenha acesso a novos ebooks todos os meses, sem custo adicional."}),(0,a.jsx)("button",{id:l().verifyBeneficio,onClick:e,children:"Verifique o seu benef\xedcio"}),(0,a.jsxs)(F.u_,{blockScrollOnMount:!0,isOpen:i,size:["full","full","full","xl"],onClose:s,children:[(0,a.jsx)(O.Z,{}),(0,a.jsxs)(V.h,{bg:"#ffffff",width:["full","full","full","40%"],padding:["10px 20px 50px 10px ","10px 20px 50px 10px ","10px 20px 50px 10px ","10px 20px 50px 10px "],margin:" 4% auto",borderRadius:"8px",children:[(0,a.jsx)(q.o,{display:"inline",margin:"0 0 0 auto"}),(0,a.jsx)(E.f,{children:(0,a.jsx)(R,{})})]})]})]})})}),(0,a.jsx)(ep,{}),(0,a.jsxs)("section",{id:l().sectionTwo,children:[(0,a.jsx)("p",{id:l().headlineTwo,children:"Cuidar da sa\xfade nunca foi t\xe3o f\xe1cil..."}),(0,a.jsx)("p",{id:l().subscriptionTwo,children:"Reunimos diversos conte\xfados especializados em um ambiente digital super pr\xe1tico para voc\xea se cuidar sempre."}),(0,a.jsx)("div",{id:l().contentTwoList,children:[{id:1,img:eo,title:"Conte\xfados exclusivos",description:"Todos os conte\xfados s\xe3o exclusivos nossos."},{id:2,img:en,title:"Plataforma Intuitiva",description:"Com poucos segundos voc\xea se sentir\xe1 em casa."},{id:3,img:el,title:"Continue sua leitura",description:"Continue a ler seu conte\xfado de onde parou."},{id:4,img:er,title:"Estante",description:"Salve seus e-books na estante para ler depois."}].map(e=>(0,a.jsxs)("div",{className:l().itemlist,children:[(0,a.jsx)("span",{children:(0,a.jsx)(j(),{src:e.img,alt:"imagem"})}),(0,a.jsx)("p",{className:l().titleListTwo,children:e.title}),(0,a.jsx)("p",{className:l().descriptionListTwo,children:e.description})]},e.id))})]}),(0,a.jsx)("section",{id:l().sectionThree,children:(0,a.jsxs)("div",{id:l().containerThree,children:[(0,a.jsxs)("div",{id:l().containerThreeLeft,children:[(0,a.jsx)("p",{id:l().titleThree,children:"Tenha acesso a diversos e-books exclusivos"}),(0,a.jsx)(j(),{src:ec,style:{margin:"-10px 0 10px 0",width:"100%"},alt:"Imagem riscado"}),(0,a.jsx)("p",{id:l().descriptionThree,children:"A maior plataforma de sa\xfade do corpo e da mente."})]}),(0,a.jsx)("div",{id:l().contentRightThree,children:(0,a.jsxs)("div",{id:l().lista,children:[(0,a.jsxs)("div",{id:l().boxLeft,children:[(0,a.jsxs)("div",{className:l().boxItems,children:[(0,a.jsx)(j(),{className:l().imageBox,src:ee,alt:"imagem"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("p",{className:l().boxTitle,children:"Baixe gr\xe1tis"}),(0,a.jsx)("p",{className:l().boxDetail,children:"download simples e f\xe1cil."})]})]}),(0,a.jsxs)("div",{className:l().boxItems,style:{marginTop:"50px"},children:[(0,a.jsx)(j(),{className:l().imageBox,src:es,alt:"imagem"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("p",{className:l().boxTitle,children:"Temas autorais"}),(0,a.jsx)("p",{className:l().boxDetail,children:"toda semana temas novos."})]})]})]}),(0,a.jsxs)("div",{id:l().boxRight,children:[(0,a.jsxs)("div",{className:l().boxItems,children:[(0,a.jsx)(j(),{className:l().imageBox,src:ei,alt:"imagem"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("p",{className:l().boxTitle,children:"Leitura f\xe1cil"}),(0,a.jsx)("p",{className:l().boxDetail,children:"utilize em qualquer plataforma."})]})]}),(0,a.jsxs)("div",{className:l().boxItems,style:{marginTop:"50px"},children:[(0,a.jsx)(j(),{className:l().imageBox,src:ea,alt:"imagem"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("p",{className:l().boxTitle,children:"Acesso ilimitado"}),(0,a.jsx)("p",{className:l().boxDetail,children:"a todo conte\xfado do app"})]})]})]})]})}),(0,a.jsx)(et,{})]})}),(0,a.jsxs)("section",{id:l().sectionFour,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{id:l().faq,children:"FAQ"}),(0,a.jsx)("p",{id:l().headSix,children:"Tudo o que voc\xea precisa saber sobre o BitBook"}),(0,a.jsx)("a",{id:l().buttonDownload,href:"https://onelink.to/fdc34n",children:"Baixe o App"})]}),(0,a.jsx)(G,{}),(0,a.jsx)("a",{id:l().mostrarNoMobile,href:"https://onelink.to/fdc34n",children:"Baixe o App"})]}),(0,a.jsx)(u,{})]})}},6620:function(e){e.exports={containerCarousel:"styles_containerCarousel__jQVHp",imageBox:"styles_imageBox__UNPKh",boxLeft:"styles_boxLeft__MA7v6",boxItems:"styles_boxItems__yDaZG",boxRight:"styles_boxRight__RJuzG",className:"styles_className__7z90_",boxTitle:"styles_boxTitle__2qj0_",boxDetail:"styles_boxDetail__CNhfh"}},6661:function(e){e.exports={container:"styles_container__5Bnjq",direitos:"styles_direitos__WX6rK",thirdBox:"styles_thirdBox__ksg4i",baixeApp:"styles_baixeApp__n5z3a",imgLojas:"styles_imgLojas__B5zcT",textBitTech:"styles_textBitTech__4zLJ3",containerLinkLoja:"styles_containerLinkLoja___33MM",containerIconLoja:"styles_containerIconLoja__wBZdN",iconeHearth:"styles_iconeHearth__KUj8n"}},2814:function(e){e.exports={container:"styles_container__nmgK4",verifyBeneficio:"styles_verifyBeneficio__GV0MO","header-scrolled":"styles_header-scrolled__XrYnF",contentFixed:"styles_contentFixed__YsbBZ",content:"styles_content__qxcuC",list:"styles_list__tsnPk",itemsList:"styles_itemsList__ey6PM",duvidasApp:"styles_duvidasApp__2ivLA","nav-bar":"styles_nav-bar__G79nj",changeStyle:"styles_changeStyle__ZLyf9","nav-bar-list":"styles_nav-bar-list__bj3sZ","nav-bar-item":"styles_nav-bar-item__8Jd12"}},3915:function(e){e.exports={sectionOne:"Home_sectionOne__ywTJF",containerSectionOne:"Home_containerSectionOne__3KOYq",contentOne:"Home_contentOne__D_9ZY",headline:"Home_headline__8fDSE",subscriptionOne:"Home_subscriptionOne__Bs9WU",verifyBeneficio:"Home_verifyBeneficio__eR_Lk",containerModal:"Home_containerModal__7wa0L",sectionTwo:"Home_sectionTwo__C0nuZ",imgMobile:"Home_imgMobile__hayPu",iconRiscado:"Home_iconRiscado__hz3E7",headlineTwo:"Home_headlineTwo__6NRIn",subscriptionTwo:"Home_subscriptionTwo__9Ugml",contentTwoList:"Home_contentTwoList__r_UZX",lista:"Home_lista__fLRga",itemlist:"Home_itemlist__q8m8i",titleListTwo:"Home_titleListTwo___GaBJ",descriptionListTwo:"Home_descriptionListTwo__kIS7i",sectionThree:"Home_sectionThree__cXgev",containerThree:"Home_containerThree__euRB2",titleThree:"Home_titleThree__X4oiw",descriptionThree:"Home_descriptionThree__E4_SE",contentRightThree:"Home_contentRightThree__biwm4",imageBox:"Home_imageBox__mTwh1",boxLeft:"Home_boxLeft__6cnry",boxItems:"Home_boxItems__aPV4c",boxRight:"Home_boxRight__j2tdo",className:"Home_className__1XTcp",boxTitle:"Home_boxTitle__6PQqP",boxDetail:"Home_boxDetail__i60xH",sectionFour:"Home_sectionFour__ZUMFY",faq:"Home_faq__mwFYD",headSix:"Home_headSix__XwNBA",buttonDownload:"Home_buttonDownload__g2nqk",mostrarNoMobile:"Home_mostrarNoMobile__UFiua",barrinha:"Home_barrinha___pAlu",containerDownload:"Home_containerDownload__rHoap",contentApple:"Home_contentApple__Kl5nI",contentText:"Home_contentText___BgdQ",textDownload:"Home_textDownload__JQz4z",textLoja:"Home_textLoja__uUj0Z",containerThreeLeft:"Home_containerThreeLeft__kxRjn"}},1874:function(e){e.exports={container:"styles_container__qa0FQ",containerText:"styles_containerText__NbB9V",containerLista:"styles_containerLista__LOu4F",bordaAndShadow:"styles_bordaAndShadow__jgaT4",bordaImage:"styles_bordaImage__DO0Dc",contentListAndInput:"styles_contentListAndInput__2K_CC",descriptionVerify:"styles_descriptionVerify__OasZz",titleVerify:"styles_titleVerify__w7Nzk",containerInput:"styles_containerInput__1Jsu_",containerParceiro:"styles_containerParceiro__6xPqt",styleInputAbsolute:"styles_styleInputAbsolute__YY5Ru",styleInput:"styles_styleInput__qCbG5",contentButton:"styles_contentButton__ji4_f",botaoVerificar:"styles_botaoVerificar__jqpbY",containerResultado:"styles_containerResultado__9HWmP",titleResult:"styles_titleResult___jzFw",descriptiontitleResult:"styles_descriptiontitleResult__p_BDN",caixaLojas:"styles_caixaLojas__XRYEW",lojasClick:"styles_lojasClick__WI_Jo",containerDownload:"styles_containerDownload__XLzgw",iconLoja:"styles_iconLoja__C1KKu",containerLoja:"styles_containerLoja__eUytt",contentTextLoja:"styles_contentTextLoja__NoBQw",textLoja:"styles_textLoja__Orufn",tamanhoQrCode:"styles_tamanhoQrCode__IfFuA",problemSuport:"styles_problemSuport__0p0mB",problemSuportChamar:"styles_problemSuportChamar__2RD15","label-before":"styles_label-before__zi_CA",field:"styles_field__9MieK",containerInputList:"styles_containerInputList__IsEGj",textInputList:"styles_textInputList__olyyA"}},5479:function(e){e.exports={containerSliderProvedores:"styles_containerSliderProvedores__29Wo_",slider:"styles_slider__msiR5",slide_track:"styles_slide_track__lTVat",scroll:"styles_scroll__WtzSk",slide:"styles_slide__IW9q9",bordaAndShadow:"styles_bordaAndShadow__DEycr",imagemProvedor:"styles_imagemProvedor__MdgT_"}}},function(e){e.O(0,[811,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);