import React from "react";
import { replaceStr } from "../replaceStr";

export default function Table({title, data, columns}) {
    console.log(data, columns)
    return (
        <div className="tableContent">
            <hr/>
            <h2>{title}</h2>
            <table>
                <thead>
                    <tr>
                        { columns.map( item => <th>{Object.keys(replaceStr).includes(item) ? replaceStr[item] : item.replace('_', ' ')}</th> ) }
                    </tr>
                </thead>
                <tbody>
                    { data.map( item => (

                        <tr>
                            { Object.keys(item).map( key => typeof item[key] == 'boolean' ? (<td>{ item[key] ? "Sim" : "Não" }</td>) : (<td>{ item[key] }</td>) ) }
                        </tr>
                    ) ) }
                </tbody>
            </table>
        </div>
    );
}