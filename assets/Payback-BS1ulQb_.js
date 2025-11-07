import{_ as e,b as t,d as n,f as r,g as i,i as a,m as o,n as s,o as c,p as l,r as u,s as d,t as f,u as p,x as m}from"./index-BU7x7Pco.js";/* empty css              */var h=m(t()),g=m(u());function _(){let{currentUser:t}=s(),[u,m]=(0,h.useState)([]),[_,v]=(0,h.useState)(!0),[y,b]=(0,h.useState)(null),[x,S]=(0,h.useState)(null),[C,w]=(0,h.useState)(!1),[T,E]=(0,h.useState)(.1),[D,O]=(0,h.useState)(!0),[k,A]=(0,h.useState)(``),[j,M]=(0,h.useState)(null),[N,P]=(0,h.useState)(``);(0,h.useEffect)(()=>{let e=l(c(a,`interest`),r(`timestamp`,`desc`),p(1)),t=n(e,e=>{e.empty||E(e.docs[0].data().interest),O(!1)},e=>{console.error(`Error fetching interest rate:`,e),L(`Failed to fetch interest rate`,`error`),O(!1)});return()=>t()},[]),(0,h.useEffect)(()=>{if(!t)return;let r=l(c(a,`loans`),e(`userId`,`==`,t.uid),e(`status`,`==`,`accepted`)),i=n(r,e=>{let t=e.docs.map(e=>({id:e.id,...e.data()}));console.log(`Loans fetched:`,t.length);let n=F(t);m(n),v(!1)},e=>{console.error(`Error fetching accepted loans:`,e),L(`Failed to fetch accepted loans`,`error`),v(!1)});return()=>i()},[t]);let F=e=>[...e].sort((e,t)=>{let n=I(e.timestamp),r=I(t.timestamp),i=e.paidAmount&&parseFloat(e.paidAmount)>0&&e.paymentStatus===`pending`,a=t.paidAmount&&parseFloat(t.paidAmount)>0&&t.paymentStatus===`pending`;if(n&&!r)return-1;if(!n&&r)return 1;if(i&&!a)return-1;if(!i&&a)return 1;let o=e.timestamp?.toDate?.()||new Date(0);return(t.timestamp?.toDate?.()||new Date(0))-o}),I=e=>{if(!e)return!1;let t=e.toDate();return(new Date-t)/(1e3*60*60)<24},L=(e,t)=>{b({message:e,type:t}),setTimeout(()=>{b(null)},3e3)},R=e=>{x===e?S(null):(S(e),A(``),M(null),P(``))},z=e=>{let t=e.target.files[0];if(!t)return;if(![`image/jpeg`,`image/png`,`image/webp`].includes(t.type)){L(`Please select a valid image file (JPEG, PNG, or WebP)`,`error`);return}M(t);let n=new FileReader;n.onloadend=()=>{P(n.result)},n.readAsDataURL(t)},B=async e=>{let t=new FormData;t.append(`file`,e),t.append(`upload_preset`,`Shop-preset`);try{return(await(await fetch(`https://api.cloudinary.com/v1_1/dlrxomdfh/image/upload`,{method:`POST`,body:t})).json()).secure_url}catch(e){throw console.error(`Error uploading image:`,e),e}},V=(e,t)=>{if(!e||!t)return!1;let n=parseFloat(e),r=parseFloat(t);return Math.abs(n-r)<.01},H=async(e,t)=>{e.preventDefault();let n=t.totalPayable||t.amount+t.amount*T;if(!V(k,n)){L(`Please enter the exact amount: $${n.toFixed(2)}`,`error`);return}if(!k||parseFloat(k)<=0){L(`Please enter a valid amount`,`error`);return}if(!j){L(`Please provide proof of payment`,`error`);return}w(!0);try{let e=await B(j),r=d(a,`loans`,t.id);await i(r,{interest:T,totalPayable:n,paidAmount:parseFloat(k),proofImageUrl:e,paymentStatus:`pending`,paymentTimestamp:o()}),A(``),M(null),P(``),S(null),L(`Payment proof submitted successfully!`,`success`)}catch(e){console.error(`Error submitting payment:`,e),L(`Failed to submit payment. Please try again.`,`error`)}finally{w(!1)}},U=e=>{if(!e)return`N/A`;let t=e.toDate(),n=t.getHours().toString().padStart(2,`0`),r=t.getMinutes().toString().padStart(2,`0`),i=t.getDate(),a=t.toLocaleString(`default`,{month:`short`});return`${n}:${r} · ${i} ${a}`};return(0,g.jsxs)(`div`,{className:`whatsapp-container`,children:[(0,g.jsx)(f,{}),y&&(0,g.jsx)(`div`,{className:`alert alert-${y.type}`,onClick:()=>b(null),children:y.message}),(0,g.jsxs)(`div`,{className:`main-content`,children:[(0,g.jsx)(`h1`,{className:`page-title`,children:`Pay Back Loans`}),(0,g.jsxs)(`div`,{className:`card`,children:[(0,g.jsx)(`h2`,{className:`card-title`,children:`Accepted Loans`}),_||D?(0,g.jsxs)(`div`,{className:`loading-indicator`,children:[(0,g.jsxs)(`div`,{className:`loading-dots`,children:[(0,g.jsx)(`div`,{className:`loading-dot`}),(0,g.jsx)(`div`,{className:`loading-dot`}),(0,g.jsx)(`div`,{className:`loading-dot`})]}),D&&(0,g.jsx)(`p`,{className:`loading-text`,children:`Loading interest rate...`})]}):u.length===0?(0,g.jsx)(`p`,{className:`empty-state`,children:`You currently have no accepted loans to pay back. Keep an eye here!`}):(0,g.jsx)(`div`,{className:`request-list`,children:u.map(e=>{let t=e.totalPayable||e.amount+e.amount*T,n=x===e.id,r=I(e.timestamp),i=e.paidAmount&&parseFloat(e.paidAmount)>0,a=i&&e.paymentStatus===`pending`,o=V(k,t),s=`badge-yellow`,c=`Pending`;return e.paymentStatus===`approved`?(s=`badge-green`,c=`Approved`):e.paymentStatus===`denied`?(s=`badge-red`,c=`Denied`):a&&(s=`badge-blue`,c=`Paid (Awaiting Approval)`),(0,g.jsxs)(`div`,{className:`request-item animate-slideUp ${r?`new-loan`:``} ${a?`awaiting-approval`:``}`,children:[(0,g.jsxs)(`div`,{className:`request-header`,children:[(0,g.jsxs)(`div`,{className:`request-info`,children:[(0,g.jsxs)(`h3`,{children:[`Amount: $`,e.amount,` + `,T.toFixed(2),`% interest = $`,t.toFixed(2),r&&(0,g.jsx)(`span`,{className:`new-badge`,children:`NEW`}),a&&(0,g.jsx)(`span`,{className:`awaiting-badge`,children:`AWAITING APPROVAL`})]}),(0,g.jsxs)(`p`,{className:`request-timestamp`,children:[`Requested on `,U(e.timestamp)]}),(0,g.jsx)(`span`,{className:`badge ${s}`,children:c}),a&&(0,g.jsx)(`p`,{className:`payment-awaiting-text`,children:`Your payment has been submitted and is awaiting admin approval.`})]}),(0,g.jsx)(`button`,{className:`form-button`,onClick:()=>R(e.id),disabled:i,children:n?`Cancel`:i?`Submitted`:`Pay`})]}),i&&(0,g.jsxs)(`div`,{className:`previous-payment`,children:[(0,g.jsxs)(`p`,{children:[(0,g.jsx)(`strong`,{children:`Paid Amount:`}),` $`,e.paidAmount]}),e.proofImageUrl&&(0,g.jsx)(`img`,{src:e.proofImageUrl,alt:`Proof`,className:`previous-proof`}),(0,g.jsxs)(`p`,{children:[(0,g.jsx)(`strong`,{children:`Payment Date:`}),` `,U(e.paymentTimestamp)]})]}),(0,g.jsx)(`div`,{className:`payment-form ${n?`show`:``}`,children:(0,g.jsxs)(`form`,{onSubmit:t=>H(t,e),className:`form-group`,children:[(0,g.jsx)(`div`,{className:`amount-info`,children:(0,g.jsxs)(`p`,{className:`total-payable`,children:[(0,g.jsx)(`strong`,{children:`Total Amount Due:`}),` $`,t.toFixed(2),(0,g.jsxs)(`span`,{className:`interest-info`,children:[`(Loan: $`,e.amount,` + `,(T*100).toFixed(0),`% Interest: $`,(e.amount*T).toFixed(2),`)`]})]})}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{className:`form-label`,children:`Amount Paid`}),(0,g.jsx)(`input`,{type:`number`,value:k,onChange:e=>A(e.target.value),className:`form-input`,placeholder:`Enter amount paid`,min:`0`,step:`0.01`,disabled:i}),k&&!o&&(0,g.jsxs)(`div`,{className:`helper-text`,children:[`Please enter the exact amount: $`,t.toFixed(2)]}),k&&o&&(0,g.jsx)(`div`,{className:`helper-text valid`,children:`✓ Amount is correct`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{className:`form-label`,children:`Proof of Payment`}),(0,g.jsx)(`input`,{type:`file`,onChange:z,className:`form-input`,accept:`image/jpeg, image/png, image/webp`,disabled:i}),N&&(0,g.jsx)(`div`,{className:`image-preview`,children:(0,g.jsx)(`img`,{src:N,alt:`Proof of payment`})})]}),(0,g.jsx)(`button`,{type:`submit`,disabled:C||i||!o||!j,className:`form-button ${!o||!j?`disabled-button`:``}`,children:C?`Submitting...`:`Submit Payment`}),!o&&k&&(0,g.jsxs)(`div`,{className:`form-help-text`,children:[`You must pay the exact amount due ($`,t.toFixed(2),`) to submit your payment.`]})]})})]},e.id)})})]})]}),(0,g.jsx)(`style`,{children:`
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
      `})]})}var v=_;export{v as default};