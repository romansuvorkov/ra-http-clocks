import React, { useState } from 'react';
import Clock from './Clock';

export default function ClocksField (props) {

    const {item, onRemove} = props;
 
    return (
        <div className="clocks_field">
            {item.map(o => <Clock {...o} key={o.id} onRemove={onRemove}/>)}
        </div>
    )
  



}