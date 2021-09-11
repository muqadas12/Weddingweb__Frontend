// import axios from 'axios';
// import React,{useState} from 'react';
// import { Modal} from 'antd';


// function Dealer() {
//     const [isModalVisible, setIsModalVisible] = useState(false);

//     const[serviceName,setService]=useState();
//     const[dealerservice,setDealer]=useState();
//     const[description,setDescription]=useState();
//     const[price,setPrice]=useState();
//     const[Img,setImg]=useState();

//     const showModal = () => {
//         setIsModalVisible(true);
//       };
    
//       const handleOk = () => {
//         setIsModalVisible(false);
//       };
    
//       const handleCancel = () => {
//         setIsModalVisible(false);
//       };

//     const send=(e)=>{
//         e.preventDefault();
//         const fileArray=[];
//         fileArray.push(Img);
//         const formData=new FormData();
//         fileArray.map((file)=>formData.append('image',file));
//         formData.append('serviceName',serviceName);
//         formData.append('dealerservice',dealerservice);
//         formData.append('description',description);
//         formData.append('price',price)

//         axios.post("http://localhost:2000/api/postdealer/post-dealers",formData).then((res)=>{
//             console.log(res);
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }
   
//     return (
//         <div>
//           <form onSubmit={send} >
//               <label>Service name:</label>
//               <input type="text" onChange={event=>{
//                   const {value}=event.target;
//                   setService(value)
//               }}/>
//               <label>Dealer services:</label>
//               <select onChange={event=>{
//                   const {value}=event.target;
//                   setDealer(value)
//               }}>
//                   <option>select service</option>
//                   <option>Car rental</option>
//                   <option>Saloon</option>
//                   <option>Catering</option>
//                   <option>Photography</option>
//               </select>
// <label>Description</label>
// <input type="text" onChange={event=>{
//     const {value}=event.target;
//     setDescription(value)
// }}

// />
// <label>Price</label>
// <input type="text" onChange={event=>{
//     const {value}=event.target;
//     setPrice(value);
// }} />
// <lable>Upload img:</lable>
// <input type="file" name="image" onChange={event=>{
//     const Img=event.target.files[0];
//     setImg(Img);
// }}/>
//  <img style={{width:'80px',marginLeft:'-20px'}} src={Img? URL.createObjectURL(Img) : null} alt={Img? Img.name : null}/>

// <button type='submit' onClick={showModal} >Submit</button>

// <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
//        <p>Your service has added successfully!</p>
//       </Modal>
//           </form>
//         </div>
//     )
// }

// export default Dealer
