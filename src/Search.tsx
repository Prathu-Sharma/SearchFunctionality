import * as React from 'react';
import {useEffect , useState} from 'react';

function Search()
{

  const [data,setData]=useState([]);
  const [record,setRecord]=useState([]);

  useEffect(()=>
  {
fetch("https://dummyjson.com/products").then(res=>res.json()).then(d=>{setData(d.products);
setRecord(d.products)})},[])

function searchbar(e)
{
  const filters=data.filter(value=>value.title.toLowerCase().includes(e.target.value))
  setRecord(filters);
}

return ( <>

<input type="text" placeholder="Search" onChange={searchbar}/>
<table>
<tr>
  <th>ID</th>
  <th>Title</th>
  <th>Description</th>
  <th>Price</th>
</tr>
 
  {
    record && record.length>0 && record.map(value=>
      {return(<tr key={value.id}>
            <td>{value.id}</td>
        <td>{value.title}</td>
        <td>{value.description}</td>
        <td>{value.price}</td>
        </tr>  )
    } 
      )
      } 
  </table>
  
  </>)
  
}
export default Search;