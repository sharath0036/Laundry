import"./style-CWPg30Uh.js";import"./EntryFile-BS4wfFeh.js";let c=async()=>{document.getElementById("RefreshBSTableId").click()},s=async()=>{let e=`/bin/${jVarGlobalTableName}/DataOnly`;return await await fetch(e)},b=a=>{let e=a;var t=$("#table");t.bootstrapTable("load",e)},i=async()=>{let a=await s();a.status===200&&b(await a.json())},h=()=>{let a=document.getElementById("RefreshBSTableId");a!==null&&a.addEventListener("click",i)},d=()=>{h()};const u={"data-toolbar":"#toolbar","data-search":"true","data-searchable":"true","data-id-field":"pk"},w={tableAttributes:u},S=()=>{var a=$("#table");a.attr(w.tableAttributes)},m=(a,e,t)=>{if(console.log("current field: ",t),t==="Show"){const l=new URL(window.location.href),n=new URLSearchParams(l.search);let o=new URL(`./${jVarGlobalTableName}RowShowSubTable.html`,l);const r=new URL(`${o.href}?${n}`);r.searchParams.append("inRowPk",a.pk),window.location.href=r.href}if(t==="Advance"){const l=new URL(window.location.href),n=new URLSearchParams(l.search);let o=new URL(`./${jVarGlobalTableName}AlterSSR.html`,l);const r=new URL(`${o.href}?${n}`);r.searchParams.append("inRowPk",a.pk),window.location.href=r.href}},L=()=>{S(),R().then()},R=async()=>{var a=$("#table");a.bootstrapTable({data:[],onClickRow:m})},f=()=>{L(),d()},j=()=>{f(),c().then()};j();
