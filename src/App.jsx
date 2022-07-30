import React, { useState } from "react";
import List from "./List";
import AddIcon from '@mui/icons-material/Add';
const App = () => {
  const [inputList, getInputList] = useState('');
  const [dateList, getdateList] = useState();
  const [amountList, getAmountList] = useState('');
  const [modeList, getModeList] = useState();
  const [itemList, getItemList] = useState([]);
  console.log(dateList);
 
    const getItem = () => {
      if(!inputList && !amountList ){
        alert('Please fill atleast one field')
      }
      else{
      let data = { name: inputList, number: dateList, amount: amountList, mode: modeList }
      getItemList((listData) => {
        return [...listData, data]
      })
  
      getInputList('')
      getdateList('')
      getAmountList('')
      getModeList('')
  
    }
  }

  const deleteItem = (id) => {
    getItemList((listData) => {
      return listData.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <div className="mainContainer">
        <div className="innerContainer">
          <h1>Recepient's Details <AddIcon /></h1>
          <br />
          <div className="inputDiv">


            <label for="date" >Date:</label>

            <input id="date" type="date" value={dateList} onChange={(e) => { getdateList(e.target.value) }} />
            <label  for="amount" >Amount:</label>
            <input  id="amount" type="number" placeholder="Amount"
              value={amountList}
              onChange={(e) => { getAmountList(e.target.value) }} />
            <label for="select" >Payment Mode:</label>
            <select id="select" className="selectBox" onChange={(e) => { getModeList(e.target.value) }}>
              <option value="Cash">Cash</option>
              <option value="Credit card">Credit card</option>
              <option value="Debit card">Debit card</option>
              <option value="Cheque">Cheque</option>
            </select>
            <label for="remarks" >Remarks:</label>
            <input id="remarks" type="text" placeholder="Remarks"
              value={inputList}
              onChange={(e)=>{ getInputList(e.target.value)}} />

            <span className="add" onClick={getItem}>+</span>
          </div>
          <br />
         

        </div>
        <ol>

{
  itemList.map((curItem, index) => {
    return <List text={curItem.name}
      amount={curItem.amount}
      mode={curItem.mode}
      key={index}
      numb={curItem.number}
      id={index}
      delete={deleteItem}
    />
  })
}

</ol>
      </div>
    </>
  )
}
export default App;