import React, { useEffect, useState} from "react";

import HtmlEditor, { Toolbar, Item } from "devextreme-react/html-editor";

import './sidebar.css'
import { getAllUser } from "../Api/User.api";
import User from "../User/User";


 const  Sidebar = React.forwardRef((props, ref) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    
    const {htmlEditor} = props;
    
    const [listUser, setListUser] = useState([]);
    const [id, setId] = useState('');

    useEffect(() => {
      async function fetchAll(){
          const resq = await getAllUser();
          setListUser(resq)
        }
        
        fetchAll()

  }, []);

   

    const attribute = [
        {id: 1, lable: "name", entity_id: 1},
        {id: 2, lable: "email", entity_id: 1},
        {id: 3, lable: "phone", entity_id: 1},

    ]

    const onTest = (item) => {
        item = `{{${item}}}`;

        props.getListOption(item);
        htmlEditor.current.instance.insertText(
            htmlEditor.current.instance.getSelection().index,item
        );
      };

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }
    
    const handleOnlick = () => {

      let result = listUser.filter( e => e.id == id)
      props.getResult(result[0])
    }

    const handleOnValue = (id) => {
      setId(id)
    }

  return (
    <>
      <select style={{width: '175px'}} onChange={(e) => handleOnValue(e.target.value)}>
        <option>Chọn Nhân Viên</option>
        {listUser.map((item, i) => {
          return (
            <option value={item.id} key={i}>{item.name}</option>
          );
        })}
      </select>
    <div style={{display: 'flex'}}>
        <HtmlEditor ref={htmlEditor}
          height={1000}
        >
          <Toolbar>
          <Item><ul className="list-group">{
              attribute.map(function(item,index) {
                return(
                    <li className="list-group-item" onClick={()=>onTest(item.lable)} key={item.id} >{item.lable}  </li>
                )
            })
            }</ul></Item>

          </Toolbar>
        </HtmlEditor>
        <div>
            <input type="text"  onChange={(e)=> handleChangeName(e)}  value={name} />
            <input type="text"  onChange={(e)=> handleChangeEmail(e)}  value={email} />
            <input type="text"  onChange={(e)=> handleChangePhone(e)}  value={phone} />
            <button  onClick={() => handleOnlick()}>Submit</button>
        </div>
    </div>
    </>
  );
});

export default Sidebar;