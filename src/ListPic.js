import React, { Component } from 'react';
import './App.css';
import DataSheetBase from './DataSheetBase.js';
import img_el03 from './images/03.jpg';
import axios from 'axios';

export default class ListPic extends DataSheetBase {

 

constructor(props){
  super(props)

  this.state = {
    src:''
    
    
  }
}

componentDidMount() {

   let _this = this
  

   console.log('picture Check---------->',this.props)
       _this.setState({src: this.props.dataSheetRow.photo})

  


   

   }


// sendData_button_Next_to_listData1 = () => {
//   const dataSheet = this.props.appActions.getDataSheet('listDataPic');

//   let row = this.props.dataSheetRow || {
//   };
//   row = {
//     ...row,
//     photo: this.state.src,
//   };
//   if (this.props.dataSheetId === dataSheet.id) {
//     this.props.appActions.updateInDataSheet('listDataPic', row);
//   } else {
//     this.props.appActions.addToDataSheet('listDataPic', row);
//   }
// }

  componentDidMount() {
    
    console.log('listPic check props ->',this.props)
    let _this = this;
    // this.config = {
    //   headers:{
    //   'Authorization':'Bearer '+ sessionStorage.getItem('accesstoken')
    //   }
      
    // };
      axios.get(this.props.dataSheetRow.photoId).then(res=>{
        console.log(this.props.dataSheetRow.photoId)
      console.log('photoId', res)
      _this.setState({src:res.data.photodata})
      // _this.setState({src:Buffer.from(res.data, 'binary').toString('base64')})
      //console.log('buffer=>', _this.state.src)
    })
    
    
    
  }
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};

    const style_03 = {
        height: 'auto',
     };
    const style_03_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="ListPic" style={baseStyle}>
        <div className="layoutFlow">
<<<<<<< HEAD
          {/* <div className='el03' style={style_03_outer}>
            <img style={style_03} src={img_el03} alt=""  />
=======
          <div className='el03' style={style_03_outer}>
          
            <img style={style_03} src={"data:image/jpeg;base64, " + this.state.src} alt=""  key = {this.props.dataSheetRow.key}/>
>>>>>>> e0d8bf4fbc2feb2ff77292761c4e165f6f18718e
          
          </div> */}
          
        </div>
      </div>
    )
  }
  

}
