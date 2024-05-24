import React from 'react';

const ChinhSachItem = (props) => {
  const { imge, title, des } = props;
  return (
    <div className='row'>
      <div className='col-4'>
        <img src={imge} className='img-fluid' alt='ChinhSach' />
      </div>
      <div className='col-8'>
        <p className='p-0 m-0'><strong>{title}</strong></p>
        <p className='p-0 m-0'>{des}</p>
      </div>
    </div>
  );
}

export default ChinhSachItem;
