import{_ as e,d as t,f as n,i as r,l as i,m as a,n as o,o as s,p as c,r as l,s as u,t as d,v as f}from"./index-BtQzElyV.js";var p=f(e()),m=f(l()),h=()=>{let{currentUser:e}=o(),[l,f]=(0,p.useState)([]),[h,g]=(0,p.useState)(!0),[_,v]=(0,p.useState)(null),[y,b]=(0,p.useState)(null),[x,S]=(0,p.useState)(!1),[C,w]=(0,p.useState)(``),[T,E]=(0,p.useState)(null),[D,O]=(0,p.useState)(``);(0,p.useEffect)(()=>{if(!e)return;let n=t(s(r,`loans`),a(`userId`,`==`,e.uid),a(`status`,`==`,`accepted`)),o=i(n,e=>{let t=[];e.forEach(e=>{t.push({id:e.id,...e.data()})}),t.sort((e,t)=>{let n=e.timestamp?.toDate?.()||new Date(0);return(t.timestamp?.toDate?.()||new Date(0))-n}),f(t),g(!1)},e=>{console.error(`Error fetching accepted loans:`,e),g(!1)});return()=>o()},[e]);let k=(e,t)=>{v({message:e,type:t}),setTimeout(()=>{v(null)},3e3)},A=e=>{y===e?b(null):(b(e),w(``),E(null),O(``))},j=e=>{let t=e.target.files[0];if(!t)return;if(![`image/jpeg`,`image/png`,`image/webp`].includes(t.type)){k(`Please select a valid image file (JPEG, PNG, or WebP)`,`error`);return}E(t);let n=new FileReader;n.onloadend=()=>{O(n.result)},n.readAsDataURL(t)},M=async e=>{let t=new FormData;t.append(`file`,e),t.append(`upload_preset`,`Shop-preset`);try{return(await(await fetch(`https://api.cloudinary.com/v1_1/dlrxomdfh/image/upload`,{method:`POST`,body:t})).json()).secure_url}catch(e){throw console.error(`Error uploading image:`,e),e}},N=async(e,t)=>{if(e.preventDefault(),!C||parseFloat(C)<=0){k(`Please enter a valid amount`,`error`);return}if(!T){k(`Please provide proof of payment`,`error`);return}S(!0);try{let e=await M(T),i=.1,a=t.amount+t.amount*i,o=u(r,`loans`,t.id);await c(o,{interest:i,totalPayable:a,paidAmount:parseFloat(C),proofImageUrl:e,paymentStatus:`pending`,paymentTimestamp:n()}),w(``),E(null),O(``),b(null),k(`Payment proof submitted successfully!`,`success`)}catch(e){console.error(`Error submitting payment:`,e),k(`Failed to submit payment. Please try again.`,`error`)}finally{S(!1)}},P=e=>{if(!e)return`N/A`;let t=e.toDate(),n=t.getHours().toString().padStart(2,`0`),r=t.getMinutes().toString().padStart(2,`0`),i=t.getDate(),a=t.toLocaleString(`default`,{month:`short`});return`${n}:${r} · ${i} ${a}`};return(0,m.jsxs)(`div`,{className:`whatsapp-container`,children:[(0,m.jsx)(d,{}),_&&(0,m.jsx)(`div`,{className:`alert alert-${_.type}`,onClick:()=>v(null),children:_.message}),(0,m.jsxs)(`div`,{className:`main-content`,children:[(0,m.jsx)(`h1`,{className:`page-title`,children:`Pay Back Loans`}),(0,m.jsxs)(`div`,{className:`card`,children:[(0,m.jsx)(`h2`,{className:`card-title`,children:`Accepted Loans`}),h?(0,m.jsx)(`div`,{className:`loading-indicator`,children:(0,m.jsxs)(`div`,{className:`loading-dots`,children:[(0,m.jsx)(`div`,{className:`loading-dot`}),(0,m.jsx)(`div`,{className:`loading-dot`}),(0,m.jsx)(`div`,{className:`loading-dot`})]})}):l.length===0?(0,m.jsx)(`p`,{className:`empty-state`,children:`No accepted loans to pay back yet.`}):(0,m.jsx)(`div`,{className:`request-list`,children:l.map(e=>{let t=e.amount+e.amount*.1,n=y===e.id;return(0,m.jsxs)(`div`,{className:`request-item animate-slideUp`,children:[(0,m.jsxs)(`div`,{className:`request-header`,children:[(0,m.jsxs)(`div`,{className:`request-info`,children:[(0,m.jsxs)(`h3`,{children:[`Amount: $`,e.amount,` + 10% interest = $`,t.toFixed(2)]}),(0,m.jsxs)(`p`,{className:`request-timestamp`,children:[`Requested on `,P(e.timestamp)]})]}),(0,m.jsx)(`button`,{className:`form-button`,onClick:()=>A(e.id),children:n?`Cancel`:`Pay`})]}),(0,m.jsx)(`div`,{className:`payment-form ${n?`show`:``}`,children:(0,m.jsxs)(`form`,{onSubmit:t=>N(t,e),className:`form-group`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`label`,{className:`form-label`,children:`Amount Paid`}),(0,m.jsx)(`input`,{type:`number`,value:C,onChange:e=>w(e.target.value),className:`form-input`,placeholder:`Enter amount paid`,min:`0`,step:`0.01`})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`label`,{className:`form-label`,children:`Proof of Payment`}),(0,m.jsx)(`input`,{type:`file`,onChange:j,className:`form-input`,accept:`image/jpeg, image/png, image/webp`}),D&&(0,m.jsx)(`div`,{className:`image-preview`,children:(0,m.jsx)(`img`,{src:D,alt:`Proof of payment`})})]}),(0,m.jsx)(`button`,{type:`submit`,disabled:x,className:`form-button`,children:x?`Submitting...`:`Submit Payment`})]})})]},e.id)})})]})]}),(0,m.jsx)(`style`,{jsx:!0,children:`
        .payment-form {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease-out;
        }
        
        .payment-form.show {
          max-height: 500px;
          transition: max-height 0.5s ease-in;
        }
        
        .image-preview {
          margin-top: 12px;
          border-radius: 8px;
          overflow: hidden;
          max-width: 100%;
        }
        
        .image-preview img {
          width: 100%;
          max-height: 200px;
          object-fit: cover;
          display: block;
        }
      `})]})};export{h as default};