import React from "react";

const List = (props) => {

    return (
        <>
    
        <div className="listItem">
        <span className="delete"onClick={() =>{
                props.delete(props.id)
            }}>x</span>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Mode</th>
                    <th>Remarks</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.numb}</td>
                    <td>{props.amount} $</td>
                    <td>{props.mode}</td>
                    <td>{props.text}</td>
                </tr>
            </tbody>
        </table>
        </div>
        </>
    )
}
export default List;