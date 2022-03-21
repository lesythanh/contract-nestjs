
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { createAttribute, getAttribute, getDeleteAttribute } from "../Api/Attribute.api";
import { getEntity } from "../Api/Entity.api";
import   './Attribute.css';

const Attribute = () => {
    const [listAttribute, setLisAttribute] = useState([]);
    const [listEntity, setListEntity] = useState([]);
    const [input, setInput] = useState('');
    const [id, setId] = useState('');



    const handInput = (valueInput) => {
        setInput(valueInput);
    }

    const handleValuEntity = (idEntity) => {
        setId(idEntity);
    }

    //create attribute
    const handleAddAttribute = async (e) => {
        e.preventDefault();
        const result = await createAttribute(input, id);

        setLisAttribute((prev) => {
            console.log(prev);
            return[
                ...prev,
                {id: result.id, lable: input, type_id: id } 

            ]
        })
        
    }

    const handleDelete = async (id) => {

        const result = await getDeleteAttribute(id);

        setLisAttribute((prev) => {

            const data = prev.filter( (item) => item.id !== id )
            
            return data
        })
        
    }

    //lấy giá trị của attribute
    useEffect(() => {
        async function fetchAll(){
            const resq = await getAttribute();
            setLisAttribute(resq)
        }

        fetchAll()

    }, []);

    //lấy giá trị của entity
    useEffect(() => {
        async function fetchAll(){
            const resq = await getEntity();
            setListEntity(resq)
        }

        fetchAll()

    }, []);

    
    return(
        <div style={{display:'flex'}}>
        <div>
            <form style={{paddingTop:'5px', paddingLeft:'10px'}}>
                <input onChange={(e) => handInput(e.target.value)} />
                <select style={{marginTop:'2px'}} onChange={ (e) => handleValuEntity(e.target.value)}>
                    <option>chọn Entity</option>
                    {listEntity.map( (item,index) => {
                        return(
                            <option value={item.id} key={index}>{item.name}</option>
                        )
                        })
                    }
                </select>
                <button className="add-attribute" onClick={(e) => {handleAddAttribute(e)}} >Add Attribute</button>
            </form>
        </div>
            <table className="table" style={{border:'1px solid black'}}>
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Lable</th>
                    <th scope="col">Type_id</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listAttribute.map( (item, index) => {
                        return(
                            <tr key={index}>
                                <th scope="row">{item.id}</th>
                                <td>{item.lable}</td>
                                <td>{item.type_id}</td>
                                <button className="btn-delete" onClick={() => {handleDelete(item.id)}}>Delete</button>
                            </tr>
                        )
                    })} 
                </tbody>
            </table>
        </div>
    );
}
export default withRouter(Attribute); 