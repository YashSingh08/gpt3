import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt='icon'/>
    </div>
    <div>
      <img src={slack} alt='icon'/>
    </div>
    <div>
      <img src={atlassian} alt='icon'/>
    </div>
    <div>
      <img src={dropbox} alt='icon'/>
    </div>
    <div>
      <img src={shopify} alt='icon'/>
    </div>
  </div>
);

export default Brand;