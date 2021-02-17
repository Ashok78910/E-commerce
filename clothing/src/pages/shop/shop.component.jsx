import React from 'react';
import SHOP_DATA from './shop.data';
import  { CollectionPreview } from '../../component/collection-preview/collection-preview.component'
export class Shoppage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           collections :SHOP_DATA
        }
    }
        render() {
            const {collections} = this.state;
            return(
              <div className = 'shop-page'>
                  {
                      collections.map(({id,...othercollectionsprops} )=> (
                          <CollectionPreview key = {id} {...othercollectionsprops} />
                      ))
                  }
              </div>
            )
        }
    }
              
       