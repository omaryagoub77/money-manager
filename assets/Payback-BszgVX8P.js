import{a as e,d as t,f as n,h as r,l as i,m as a,n as o,o as s,r as c,t as l,v as u,y as d}from"./index-6XTB6nXq.js";/* empty css              */var f=d(u()),p=d(o());function m(){let{currentUser:o}=l(),[u,d]=(0,f.useState)([]),[m,h]=(0,f.useState)(!0),[g,_]=(0,f.useState)(null),[v,y]=(0,f.useState)(null),[b,x]=(0,f.useState)(!1),[S,C]=(0,f.useState)(.1),[w,T]=(0,f.useState)(!0),[E,D]=(0,f.useState)(``),[O,k]=(0,f.useState)(null),[A,j]=(0,f.useState)(``);(0,f.useEffect)(()=>{let e=i(s(c,`interest`,`globalRate`),e=>{e.exists()?C(Number(e.data().interest)/100):(console.error(`Global interest rate document not found`),P(`Global interest rate not found`,`error`)),T(!1)},e=>{console.error(`Error fetching interest rate:`,e),P(`Failed to fetch interest rate`,`error`),T(!1)});return()=>e()},[]),(0,f.useEffect)(()=>{if(!o)return;let n=t(e(c,`loans`),r(`userId`,`==`,o.uid),r(`status`,`==`,`accepted`)),a=i(n,e=>{let t=e.docs.map(e=>({id:e.id,...e.data()}));console.log(`Loans fetched:`,t.length);let n=M(t);d(n),h(!1)},e=>{console.error(`Error fetching accepted loans:`,e),P(`Failed to fetch accepted loans`,`error`),h(!1)});return()=>a()},[o]);let M=e=>[...e].sort((e,t)=>{let n=N(e.timestamp),r=N(t.timestamp),i=e.paidAmount&&Number(e.paidAmount)>0&&e.paymentStatus===`pending`,a=t.paidAmount&&Number(t.paidAmount)>0&&t.paymentStatus===`pending`;if(n&&!r)return-1;if(!n&&r)return 1;if(i&&!a)return-1;if(!i&&a)return 1;let o=e.timestamp?.toDate?.()||new Date(0);return(t.timestamp?.toDate?.()||new Date(0))-o}),N=e=>{if(!e)return!1;let t=e.toDate();return(new Date-t)/(1e3*60*60)<24},P=(e,t)=>{_({message:e,type:t}),setTimeout(()=>{_(null)},3e3)},F=e=>{v===e?y(null):(y(e),D(``),k(null),j(``))},I=e=>{let t=e.target.files[0];if(!t)return;if(![`image/jpeg`,`image/png`,`image/webp`].includes(t.type)){P(`Please select a valid image file (JPEG, PNG, or WebP)`,`error`);return}k(t);let n=new FileReader;n.onloadend=()=>{j(n.result)},n.readAsDataURL(t)},L=async e=>{let t=new FormData;t.append(`file`,e),t.append(`upload_preset`,`Shop-preset`);try{return(await(await fetch(`https://api.cloudinary.com/v1_1/dlrxomdfh/image/upload`,{method:`POST`,body:t})).json()).secure_url}catch(e){throw console.error(`Error uploading image:`,e),e}},R=(e,t)=>{if(!e||!t)return!1;let n=Number(e),r=Number(t);return Math.abs(n-r)<.01},z=async(e,t)=>{e.preventDefault();let r=Number(t.amount),i=r+r*S;if(!R(E,i)){P(`Please enter the exact amount: $${i.toFixed(2)}`,`error`);return}if(!E||Number(E)<=0){P(`Please enter a valid amount`,`error`);return}if(!O){P(`Please provide proof of payment`,`error`);return}x(!0);try{let e=await L(O),r=s(c,`loans`,t.id);await a(r,{interest:S,totalPayable:i,paidAmount:Number(E),proofImageUrl:e,paymentStatus:`pending`,paymentTimestamp:n()}),D(``),k(null),j(``),y(null),P(`Payment proof submitted successfully!`,`success`)}catch(e){console.error(`Error submitting payment:`,e),P(`Failed to submit payment. Please try again.`,`error`)}finally{x(!1)}},B=e=>{if(!e)return`N/A`;let t=e.toDate(),n=t.getHours().toString().padStart(2,`0`),r=t.getMinutes().toString().padStart(2,`0`),i=t.getDate(),a=t.toLocaleString(`default`,{month:`short`});return`${n}:${r} · ${i} ${a}`};return(0,p.jsxs)(`div`,{className:`whatsapp-container`,children:[g&&(0,p.jsx)(`div`,{className:`alert alert-${g.type}`,onClick:()=>_(null),children:g.message}),(0,p.jsxs)(`div`,{className:`main-content`,children:[(0,p.jsx)(`h1`,{className:`page-title`,children:`Pay Back Loans`}),(0,p.jsxs)(`div`,{className:`car`,children:[(0,p.jsx)(`h2`,{className:`card-title`,children:`Accepted Loans`}),m||w?(0,p.jsxs)(`div`,{className:`loading-indicator`,children:[(0,p.jsxs)(`div`,{className:`loading-dots`,children:[(0,p.jsx)(`div`,{className:`loading-dot`}),(0,p.jsx)(`div`,{className:`loading-dot`}),(0,p.jsx)(`div`,{className:`loading-dot`})]}),w&&(0,p.jsx)(`p`,{className:`loading-text`,children:`Loading interest rate...`})]}):u.length===0?(0,p.jsx)(`p`,{className:`empty-state`,children:`You currently have no accepted loans to pay back. Keep an eye here!`}):(0,p.jsx)(`div`,{className:`request-list`,children:u.map(e=>{let t=Number(e.amount),n=t+t*S,r=v===e.id,i=N(e.timestamp),a=e.paidAmount&&Number(e.paidAmount)>0,o=a&&e.paymentStatus===`pending`,s=R(E,n),c=`badge-yellow`,l=`Pending`;return e.paymentStatus===`approved`?(c=`badge-green`,l=`Approved`):e.paymentStatus===`denied`?(c=`badge-red`,l=`Denied`):o&&(c=`badge-blue`,l=`Paid (Awaiting Approval)`),(0,p.jsxs)(`div`,{className:`request-item animate-slideUp ${i?`new-loan`:``} ${o?`awaiting-approval`:``}`,children:[(0,p.jsxs)(`div`,{className:`request-header`,children:[(0,p.jsxs)(`div`,{className:`request-info`,children:[(0,p.jsxs)(`h3`,{children:[`Amount: $`,t.toFixed(2),` + `,(S*100).toFixed(0),`% interest = $`,n.toFixed(2),i&&(0,p.jsx)(`span`,{className:`new-badge`,children:`NEW`}),o&&(0,p.jsx)(`span`,{className:`awaiting-badge`,children:`AWAITING APPROVAL`})]}),(0,p.jsxs)(`p`,{className:`request-timestamp`,children:[`Requested on `,B(e.timestamp)]}),(0,p.jsx)(`span`,{className:`badge ${c}`,children:l}),o&&(0,p.jsx)(`p`,{className:`payment-awaiting-text`,children:`Your payment has been submitted and is awaiting admin approval.`})]}),(0,p.jsx)(`button`,{className:`form-button`,onClick:()=>F(e.id),disabled:a,children:r?`Cancel`:a?`Submitted`:`Pay`})]}),a&&(0,p.jsxs)(`div`,{className:`previous-payment`,children:[(0,p.jsxs)(`p`,{children:[(0,p.jsx)(`strong`,{children:`Paid Amount:`}),` $`,Number(e.paidAmount).toFixed(2)]}),e.proofImageUrl&&(0,p.jsx)(`img`,{src:e.proofImageUrl,alt:`Proof`,className:`previous-proof`}),(0,p.jsxs)(`p`,{children:[(0,p.jsx)(`strong`,{children:`Payment Date:`}),` `,B(e.paymentTimestamp)]})]}),(0,p.jsx)(`div`,{className:`payment-form ${r?`show`:``}`,children:(0,p.jsxs)(`form`,{onSubmit:t=>z(t,e),className:`form-group`,children:[(0,p.jsx)(`div`,{className:`amount-info`,children:(0,p.jsxs)(`p`,{className:`total-payable`,children:[(0,p.jsx)(`strong`,{children:`Total Amount Due:`}),` $`,n.toFixed(2),(0,p.jsxs)(`span`,{className:`interest-info`,children:[`(Loan: $`,t.toFixed(2),` + `,(S*100).toFixed(0),`% Interest: $`,(t*S).toFixed(2),`)`]})]})}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`label`,{className:`form-label`,children:`Amount Paid`}),(0,p.jsx)(`input`,{type:`number`,value:E,onChange:e=>D(e.target.value),className:`form-input`,placeholder:`Enter amount paid`,min:`0`,step:`0.01`,disabled:a}),E&&!s&&(0,p.jsxs)(`div`,{className:`helper-text`,children:[`Please enter the exact amount: $`,n.toFixed(2)]}),E&&s&&(0,p.jsx)(`div`,{className:`helper-text valid`,children:`✓ Amount is correct`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`label`,{className:`form-label`,children:`Proof of Payment`}),(0,p.jsx)(`input`,{type:`file`,onChange:I,className:`form-input`,accept:`image/jpeg, image/png, image/webp`,disabled:a}),A&&(0,p.jsx)(`div`,{className:`image-preview`,children:(0,p.jsx)(`img`,{src:A,alt:`Proof of payment`})})]}),(0,p.jsx)(`button`,{type:`submit`,disabled:b||a||!s||!O,className:`form-button ${!s||!O?`disabled-button`:``}`,children:b?`Submitting...`:`Submit Payment`}),!s&&E&&(0,p.jsxs)(`div`,{className:`form-help-text`,children:[`You must pay the exact amount due ($`,n.toFixed(2),`) to submit your payment.`]})]})})]},e.id)})})]})]}),(0,p.jsx)(`style`,{children:`
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
      `})]})}var h=m;export{h as default};