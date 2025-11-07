import{a as e,b as t,d as n,f as r,g as i,h as a,l as o,n as s,o as c,p as l,r as u,t as d,u as f,y as p}from"./index-CbIB8LtH.js";/* empty css              */var m=t(p()),h=t(s());function g(){let{currentUser:t}=d(),[s,p]=(0,m.useState)([]),[g,_]=(0,m.useState)(!0),[v,y]=(0,m.useState)(null),[b,x]=(0,m.useState)(null),[S,C]=(0,m.useState)(!1),[w,T]=(0,m.useState)(.1),[E,D]=(0,m.useState)(!0),[O,k]=(0,m.useState)(``),[A,j]=(0,m.useState)(null),[M,N]=(0,m.useState)(``);(0,m.useEffect)(()=>{let t=r(e(u,`interest`),n(`timestamp`,`desc`),o(1)),i=f(t,e=>{e.empty||T(e.docs[0].data().interest),D(!1)},e=>{console.error(`Error fetching interest rate:`,e),I(`Failed to fetch interest rate`,`error`),D(!1)});return()=>i()},[]),(0,m.useEffect)(()=>{if(!t)return;let n=r(e(u,`loans`),i(`userId`,`==`,t.uid),i(`status`,`==`,`accepted`)),a=f(n,e=>{let t=e.docs.map(e=>({id:e.id,...e.data()}));console.log(`Loans fetched:`,t.length);let n=P(t);p(n),_(!1)},e=>{console.error(`Error fetching accepted loans:`,e),I(`Failed to fetch accepted loans`,`error`),_(!1)});return()=>a()},[t]);let P=e=>[...e].sort((e,t)=>{let n=F(e.timestamp),r=F(t.timestamp),i=e.paidAmount&&parseFloat(e.paidAmount)>0&&e.paymentStatus===`pending`,a=t.paidAmount&&parseFloat(t.paidAmount)>0&&t.paymentStatus===`pending`;if(n&&!r)return-1;if(!n&&r)return 1;if(i&&!a)return-1;if(!i&&a)return 1;let o=e.timestamp?.toDate?.()||new Date(0);return(t.timestamp?.toDate?.()||new Date(0))-o}),F=e=>{if(!e)return!1;let t=e.toDate();return(new Date-t)/(1e3*60*60)<24},I=(e,t)=>{y({message:e,type:t}),setTimeout(()=>{y(null)},3e3)},L=e=>{b===e?x(null):(x(e),k(``),j(null),N(``))},R=e=>{let t=e.target.files[0];if(!t)return;if(![`image/jpeg`,`image/png`,`image/webp`].includes(t.type)){I(`Please select a valid image file (JPEG, PNG, or WebP)`,`error`);return}j(t);let n=new FileReader;n.onloadend=()=>{N(n.result)},n.readAsDataURL(t)},z=async e=>{let t=new FormData;t.append(`file`,e),t.append(`upload_preset`,`Shop-preset`);try{return(await(await fetch(`https://api.cloudinary.com/v1_1/dlrxomdfh/image/upload`,{method:`POST`,body:t})).json()).secure_url}catch(e){throw console.error(`Error uploading image:`,e),e}},B=(e,t)=>{if(!e||!t)return!1;let n=parseFloat(e),r=parseFloat(t);return Math.abs(n-r)<.01},V=async(e,t)=>{e.preventDefault();let n=t.totalPayable||t.amount+t.amount*w;if(!B(O,n)){I(`Please enter the exact amount: $${n.toFixed(2)}`,`error`);return}if(!O||parseFloat(O)<=0){I(`Please enter a valid amount`,`error`);return}if(!A){I(`Please provide proof of payment`,`error`);return}C(!0);try{let e=await z(A),r=c(u,`loans`,t.id);await a(r,{interest:w,totalPayable:n,paidAmount:parseFloat(O),proofImageUrl:e,paymentStatus:`pending`,paymentTimestamp:l()}),k(``),j(null),N(``),x(null),I(`Payment proof submitted successfully!`,`success`)}catch(e){console.error(`Error submitting payment:`,e),I(`Failed to submit payment. Please try again.`,`error`)}finally{C(!1)}},H=e=>{if(!e)return`N/A`;let t=e.toDate(),n=t.getHours().toString().padStart(2,`0`),r=t.getMinutes().toString().padStart(2,`0`),i=t.getDate(),a=t.toLocaleString(`default`,{month:`short`});return`${n}:${r} · ${i} ${a}`};return(0,h.jsxs)(`div`,{className:`whatsapp-container`,children:[v&&(0,h.jsx)(`div`,{className:`alert alert-${v.type}`,onClick:()=>y(null),children:v.message}),(0,h.jsxs)(`div`,{className:`main-content`,children:[(0,h.jsx)(`h1`,{className:`page-title`,children:`Pay Back Loans`}),(0,h.jsxs)(`div`,{className:`car`,children:[(0,h.jsx)(`h2`,{className:`card-title`,children:`Accepted Loans`}),g||E?(0,h.jsxs)(`div`,{className:`loading-indicator`,children:[(0,h.jsxs)(`div`,{className:`loading-dots`,children:[(0,h.jsx)(`div`,{className:`loading-dot`}),(0,h.jsx)(`div`,{className:`loading-dot`}),(0,h.jsx)(`div`,{className:`loading-dot`})]}),E&&(0,h.jsx)(`p`,{className:`loading-text`,children:`Loading interest rate...`})]}):s.length===0?(0,h.jsx)(`p`,{className:`empty-state`,children:`You currently have no accepted loans to pay back. Keep an eye here!`}):(0,h.jsx)(`div`,{className:`request-list`,children:s.map(e=>{let t=e.totalPayable||e.amount+e.amount*w,n=b===e.id,r=F(e.timestamp),i=e.paidAmount&&parseFloat(e.paidAmount)>0,a=i&&e.paymentStatus===`pending`,o=B(O,t),s=`badge-yellow`,c=`Pending`;return e.paymentStatus===`approved`?(s=`badge-green`,c=`Approved`):e.paymentStatus===`denied`?(s=`badge-red`,c=`Denied`):a&&(s=`badge-blue`,c=`Paid (Awaiting Approval)`),(0,h.jsxs)(`div`,{className:`request-item animate-slideUp ${r?`new-loan`:``} ${a?`awaiting-approval`:``}`,children:[(0,h.jsxs)(`div`,{className:`request-header`,children:[(0,h.jsxs)(`div`,{className:`request-info`,children:[(0,h.jsxs)(`h3`,{children:[`Amount: $`,e.amount,` + `,w.toFixed(2),`% interest = $`,t.toFixed(2),r&&(0,h.jsx)(`span`,{className:`new-badge`,children:`NEW`}),a&&(0,h.jsx)(`span`,{className:`awaiting-badge`,children:`AWAITING APPROVAL`})]}),(0,h.jsxs)(`p`,{className:`request-timestamp`,children:[`Requested on `,H(e.timestamp)]}),(0,h.jsx)(`span`,{className:`badge ${s}`,children:c}),a&&(0,h.jsx)(`p`,{className:`payment-awaiting-text`,children:`Your payment has been submitted and is awaiting admin approval.`})]}),(0,h.jsx)(`button`,{className:`form-button`,onClick:()=>L(e.id),disabled:i,children:n?`Cancel`:i?`Submitted`:`Pay`})]}),i&&(0,h.jsxs)(`div`,{className:`previous-payment`,children:[(0,h.jsxs)(`p`,{children:[(0,h.jsx)(`strong`,{children:`Paid Amount:`}),` $`,e.paidAmount]}),e.proofImageUrl&&(0,h.jsx)(`img`,{src:e.proofImageUrl,alt:`Proof`,className:`previous-proof`}),(0,h.jsxs)(`p`,{children:[(0,h.jsx)(`strong`,{children:`Payment Date:`}),` `,H(e.paymentTimestamp)]})]}),(0,h.jsx)(`div`,{className:`payment-form ${n?`show`:``}`,children:(0,h.jsxs)(`form`,{onSubmit:t=>V(t,e),className:`form-group`,children:[(0,h.jsx)(`div`,{className:`amount-info`,children:(0,h.jsxs)(`p`,{className:`total-payable`,children:[(0,h.jsx)(`strong`,{children:`Total Amount Due:`}),` $`,t.toFixed(2),(0,h.jsxs)(`span`,{className:`interest-info`,children:[`(Loan: $`,e.amount,` + `,(w*100).toFixed(0),`% Interest: $`,(e.amount*w).toFixed(2),`)`]})]})}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`label`,{className:`form-label`,children:`Amount Paid`}),(0,h.jsx)(`input`,{type:`number`,value:O,onChange:e=>k(e.target.value),className:`form-input`,placeholder:`Enter amount paid`,min:`0`,step:`0.01`,disabled:i}),O&&!o&&(0,h.jsxs)(`div`,{className:`helper-text`,children:[`Please enter the exact amount: $`,t.toFixed(2)]}),O&&o&&(0,h.jsx)(`div`,{className:`helper-text valid`,children:`✓ Amount is correct`})]}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`label`,{className:`form-label`,children:`Proof of Payment`}),(0,h.jsx)(`input`,{type:`file`,onChange:R,className:`form-input`,accept:`image/jpeg, image/png, image/webp`,disabled:i}),M&&(0,h.jsx)(`div`,{className:`image-preview`,children:(0,h.jsx)(`img`,{src:M,alt:`Proof of payment`})})]}),(0,h.jsx)(`button`,{type:`submit`,disabled:S||i||!o||!A,className:`form-button ${!o||!A?`disabled-button`:``}`,children:S?`Submitting...`:`Submit Payment`}),!o&&O&&(0,h.jsxs)(`div`,{className:`form-help-text`,children:[`You must pay the exact amount due ($`,t.toFixed(2),`) to submit your payment.`]})]})})]},e.id)})})]})]}),(0,h.jsx)(`style`,{children:`
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
        .badge-blue { background: #dbeafe; color: #1e40af; }
        
        .payment-awaiting-text {
          margin-top: 4px;
          font-size: 12px;
          color: #64748b;
        }
        
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
        
        .loading-text {
          text-align: center;
          margin-top: 10px;
          color: #64748b;
          font-size: 14px;
        }
        
        /* New loan styles */
        .new-loan {
          border-left: 4px solid #10b981;
          background: linear-gradient(to right, rgba(16, 185, 129, 0.05), transparent);
        }
        
        .new-badge {
          display: inline-block;
          margin-left: 10px;
          padding: 2px 8px;
          background-color: #10b981;
          color: white;
          border-radius: 12px;
          font-size: 10px;
          font-weight: bold;
          animation: pulse 2s infinite;
        }
        
        /* Awaiting approval styles */
        .awaiting-approval {
          border-left: 4px solid #3b82f6;
          background: linear-gradient(to right, rgba(59, 130, 246, 0.05), transparent);
        }
        
        .awaiting-badge {
          display: inline-block;
          margin-left: 10px;
          padding: 2px 8px;
          background-color: #3b82f6;
          color: white;
          border-radius: 12px;
          font-size: 10px;
          font-weight: bold;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }
      `})]})}var _=g;export{_ as default};