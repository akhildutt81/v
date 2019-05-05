import React from 'react';

const Content=({options})=>{
  if (options===0){
    return (<div>option1</div>);
  }
  if(options===1){
    return (<div>Stack overflow</div>);
  }
  if(options===2){
    return (<div>Goodreads</div>);
  }
  if(options===3){
    return (<div>Codeforces</div>);
  }
}

export default Content;
