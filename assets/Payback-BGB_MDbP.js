import{_ as e,d as t,f as n,i as r,l as i,m as a,n as o,o as s,p as c,r as l,s as u,t as d,v as f}from"./index-D5LJ9i4N.js";var p=f(e()),m=f(l());function h(){let{currentUser:e}=o(),[l,f]=(0,p.useState)([]),[h,g]=(0,p.useState)(!0),[_,v]=(0,p.useState)(null),[y,b]=(0,p.useState)(null),[x,S]=(0,p.useState)(!1),[C,w]=(0,p.useState)(``),[T,E]=(0,p.useState)(null),[D,O]=(0,p.useState)(``);(0,p.useEffect)(()=>{if(!e)return;let n=t(s(r,`loans`),a(`userId`,`==`,e.uid),a(`status`,`==`,`accepted`)),o=i(n,e=>{let t=[];e.forEach(e=>{t.push({id:e.id,...e.data()})}),t.sort((e,t)=>{let n=e.timestamp?.toDate?.()||new Date(0);return(t.timestamp?.toDate?.()||new Date(0))-n}),f(t),g(!1)},e=>{console.error(`Error fetching accepted loans:`,e),g(!1)});return()=>o()},[e]);let k=(e,t)=>{v({message:e,type:t}),setTimeout(()=>{v(null)},3e3)},A=e=>{y===e?b(null):(b(e),w(``),E(null),O(``))},j=e=>{let t=e.target.files[0];if(!t)return;if(![`image/jpeg`,`image/png`,`image/webp`].includes(t.type)){k(`Please select a valid image file (JPEG, PNG, or WebP)`,`error`);return}E(t);let n=new FileReader;n.onloadend=()=>{O(n.result)},n.readAsDataURL(t)},M=async e=>{let t=new FormData;t.append(`file`,e),t.append(`upload_preset`,`Shop-preset`);try{return(await(await fetch(`https://api.cloudinary.com/v1_1/dlrxomdfh/image/upload`,{method:`POST`,body:t})).json()).secure_url}catch(e){throw console.error(`Error uploading image:`,e),e}},N=(e,t)=>{if(!e||!t)return!1;let n=parseFloat(e),r=parseFloat(t);return Math.abs(n-r)<.01},P=async(e,t)=>{e.preventDefault();let i=.1,a=t.totalPayable||t.amount+t.amount*i;if(!N(C,a)){k(`Please enter the exact amount: $${a.toFixed(2)}`,`error`);return}if(!C||parseFloat(C)<=0){k(`Please enter a valid amount`,`error`);return}if(!T){k(`Please provide proof of payment`,`error`);return}S(!0);try{let e=await M(T),o=u(r,`loans`,t.id);await c(o,{interest:i,totalPayable:a,paidAmount:parseFloat(C),proofImageUrl:e,paymentStatus:`pending`,paymentTimestamp:n()}),w(``),E(null),O(``),b(null),k(`Payment proof submitted successfully!`,`success`)}catch(e){console.error(`Error submitting payment:`,e),k(`Failed to submit payment. Please try again.`,`error`)}finally{S(!1)}},F=e=>{if(!e)return`N/A`;let t=e.toDate(),n=t.getHours().toString().padStart(2,`0`),r=t.getMinutes().toString().padStart(2,`0`),i=t.getDate(),a=t.toLocaleString(`default`,{month:`short`});return`${n}:${r} · ${i} ${a}`};return(0,m.jsxs)(`div`,{className:`whatsapp-container`,children:[(0,m.jsx)(d,{}),_&&(0,m.jsx)(`div`,{className:`alert alert-${_.type}`,onClick:()=>v(null),children:_.message}),(0,m.jsxs)(`div`,{className:`main-content`,children:[(0,m.jsx)(`h1`,{className:`page-title`,children:`Pay Back Loans`}),(0,m.jsxs)(`div`,{className:`card`,children:[(0,m.jsx)(`h2`,{className:`card-title`,children:`Accepted Loans`}),h?(0,m.jsx)(`div`,{className:`loading-indicator`,children:(0,m.jsxs)(`div`,{className:`loading-dots`,children:[(0,m.jsx)(`div`,{className:`loading-dot`}),(0,m.jsx)(`div`,{className:`loading-dot`}),(0,m.jsx)(`div`,{className:`loading-dot`})]})}):l.length===0?(0,m.jsx)(`p`,{className:`empty-state`,children:`No accepted loans to pay back yet.`}):(0,m.jsx)(`div`,{className:`request-list`,children:l.map(e=>{let t=.1,n=e.totalPayable||e.amount+e.amount*t,r=y===e.id,i=e.paymentStatus&&e.paymentStatus!==`pending`,a=N(C,n);return(0,m.jsxs)(`div`,{className:`request-item animate-slideUp`,children:[(0,m.jsxs)(`div`,{className:`request-header`,children:[(0,m.jsxs)(`div`,{className:`request-info`,children:[(0,m.jsxs)(`h3`,{children:[`Amount: $`,e.amount,` + 10% interest = $`,n.toFixed(2)]}),(0,m.jsxs)(`p`,{className:`request-timestamp`,children:[`Requested on `,F(e.timestamp)]}),(0,m.jsx)(`span`,{className:`badge ${e.paymentStatus===`approved`?`badge-green`:e.paymentStatus===`denied`?`badge-red`:`badge-yellow`}`,children:e.paymentStatus?e.paymentStatus.charAt(0).toUpperCase()+e.paymentStatus.slice(1):`Pending`})]}),(0,m.jsx)(`button`,{className:`form-button`,onClick:()=>A(e.id),disabled:i,children:r?`Cancel`:i?`Submitted`:`Pay`})]}),i&&e.paidAmount&&(0,m.jsxs)(`div`,{className:`previous-payment`,children:[(0,m.jsxs)(`p`,{children:[(0,m.jsx)(`strong`,{children:`Paid Amount:`}),` $`,e.paidAmount]}),e.proofImageUrl&&(0,m.jsx)(`img`,{src:e.proofImageUrl,alt:`Proof`,className:`previous-proof`}),(0,m.jsxs)(`p`,{children:[(0,m.jsx)(`strong`,{children:`Payment Date:`}),` `,F(e.paymentTimestamp)]}),e.paymentStatus===`denied`&&e.reason&&(0,m.jsxs)(`p`,{className:`denied-reason`,children:[`Denied Reason: `,e.reason]})]}),(0,m.jsx)(`div`,{className:`payment-form ${r?`show`:``}`,children:(0,m.jsxs)(`form`,{onSubmit:t=>P(t,e),className:`form-group`,children:[(0,m.jsx)(`div`,{className:`amount-info`,children:(0,m.jsxs)(`p`,{className:`total-payable`,children:[(0,m.jsx)(`strong`,{children:`Total Amount Due:`}),` $`,n.toFixed(2),(0,m.jsxs)(`span`,{className:`interest-info`,children:[`(Loan: $`,e.amount,` + 10% Interest: $`,(e.amount*t).toFixed(2),`)`]})]})}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`label`,{className:`form-label`,children:`Amount Paid`}),(0,m.jsx)(`input`,{type:`number`,value:C,onChange:e=>w(e.target.value),className:`form-input`,placeholder:`Enter amount paid`,min:`0`,step:`0.01`,disabled:i}),C&&!a&&(0,m.jsxs)(`div`,{className:`helper-text`,children:[`Please enter the exact amount: $`,n.toFixed(2)]}),C&&a&&(0,m.jsx)(`div`,{className:`helper-text valid`,children:`✓ Amount is correct`})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`label`,{className:`form-label`,children:`Proof of Payment`}),(0,m.jsx)(`input`,{type:`file`,onChange:j,className:`form-input`,accept:`image/jpeg, image/png, image/webp`,disabled:i}),D&&(0,m.jsx)(`div`,{className:`image-preview`,children:(0,m.jsx)(`img`,{src:D,alt:`Proof of payment`})})]}),(0,m.jsx)(`button`,{type:`submit`,disabled:x||i||!a||!T,className:`form-button ${!a||!T?`disabled-button`:``}`,children:x?`Submitting...`:`Submit Payment`}),!a&&C&&(0,m.jsxs)(`div`,{className:`form-help-text`,children:[`You must pay the exact amount due ($`,n.toFixed(2),`) to submit your payment.`]})]})})]},e.id)})})]})]}),(0,m.jsx)(`style`,{jsx:!0,children:`
        .payment-form {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease-out;
        }
        
        .payment-form.show {
          max-height: 600px;
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

        .previous-payment {
          background: #f7f7f7;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 12px;
        }

        .previous-payment img.previous-proof {
          max-width: 100%;
          max-height: 150px;
          display: block;
          margin-top: 6px;
          border-radius: 6px;
        }

        .denied-reason {
          color: #b91c1c;
          margin-top: 6px;
        }

        .badge {
          display: inline-block;
          padding: 2px 8px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 500;
          margin-top: 4px;
        }

        .badge-green { background: #d1fae5; color: #065f46; }
        .badge-red { background: #fee2e2; color: #991b1b; }
        .badge-yellow { background: #fef3c7; color: #78350f; }
        
        .amount-info {
          margin-bottom: 12px;
          padding: 10px;
          background-color: #f0f9ff;
          border-radius: 6px;
          border-left: 4px solid #3b82f6;
        }
        
        .total-payable {
          margin: 0;
          font-weight: 600;
          color: #1e40af;
        }
        
        .interest-info {
          display: block;
          font-size: 12px;
          color: #64748b;
          margin-top: 4px;
          font-weight: normal;
        }
        
        .helper-text {
          margin-top: 6px;
          font-size: 12px;
          color: #b91c1c;
        }
        
        .helper-text.valid {
          color: #065f46;
        }
        
        .form-help-text {
          margin-top: 10px;
          font-size: 13px;
          color: #64748b;
          text-align: center;
          padding: 8px;
          background-color: #f1f5f9;
          border-radius: 6px;
        }
        
        .disabled-button {
          background-color: #9ca3af !important;
          cursor: not-allowed !important;
        }
      `})]})}var g=h;export{g as default};