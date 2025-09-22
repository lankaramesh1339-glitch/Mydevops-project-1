import React, {useState} from 'react';

export default function App(){
  const [resp, setResp] = useState('');

  async function callService(path){
    const r = await fetch(path).then(r=>r.text()).catch(e=>e.toString());
    setResp(r);
  }

  return (
    <div style={{padding:20,fontFamily:'sans-serif'}}>
      <h1>3-Tier Sample - Frontend</h1>
      <div>
        <button onClick={()=>callService('http://localhost:3001/')}>Auth Service</button>
        <button onClick={()=>callService('http://localhost:3002/')}>User Service</button>
        <button onClick={()=>callService('http://localhost:3003/')}>Product Service</button>
        <button onClick={()=>callService('http://localhost:3004/')}>Order Service</button>
        <button onClick={()=>callService('http://localhost:3005/')}>Payment Service</button>
      </div>
      <pre style={{marginTop:20,whiteSpace:'pre-wrap'}}>{resp}</pre>
    </div>
  )
}