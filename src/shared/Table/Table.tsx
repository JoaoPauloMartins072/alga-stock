import React from 'react'
import './Table.scss'
import organizeData from '../../utils/organizeDataForTable'


declare interface TableProps {
  headers: TableHeader[] 
  data: any[]

  enableActions?: boolean

  onDelete?: (item : any ) => void 
  onDetail?: (item : any ) => void 
  onEdit?: (item : any ) => void 

}

export interface TableHeader {
  key: string 
  value: string
  right?: boolean

}



const Table: React.FC<TableProps> = (props) => {
  const [organizedData, indexedHeaders] = organizeData(props.data, props.headers)
  return <table className="AppTable">
    <thead>
      <tr>
       {
           props.headers.map(header => 
           <th
            className={header.right ? 'right' : ''}
            key={header.key}
            >
              {header.value}
            </th>)
       }
      </tr>
    </thead>
    <tbody>
      {
          organizedData.map((row, i) => {
            return <tr key={i}>
            {
              Object
              .keys(row)
              .map(item =>
                item !== '$original'
                ? 
                <td 
                key={row.$original.id + i}
                className={indexedHeaders[item].right ? 'right' : ''}
                >
                { row[item] }
                </td>
                :null
              )
            }
            </tr>
          })  
      }

    </tbody>
  </table>
}

export default Table