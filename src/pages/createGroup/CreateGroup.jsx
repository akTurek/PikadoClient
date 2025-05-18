import React , {useState}from 'react'
import "./createGroup.scss"
import { makeRequest } from '../../helpers/axios'
import { useNavigate } from 'react-router-dom'

export const CreateGroup = () => {

    const [newGroupData, setNewGroupData] = useState({
        groupName:"",
        password1:"",
        password2:"",
    })

    const navigate = useNavigate();

    const handleChange = (e)=>{
        setNewGroupData(prev=>({...prev,[e.target.name]:e.target.value}))
        console.log(newGroupData)
    }

    const handleClick = async (e)=>{
        e.preventDefault();
        if(newGroupData.password1===newGroupData.password2){
            console.log("se ujema")
            try {
                const data = await makeRequest.post("/group/newgroup",newGroupData,{withCredentials: true})
                console.log(data)
                navigate("/")
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("se ne ujema")
        }
        
    }


  return (
    <div className="cardCreateGroup">


        <div className="form">
            <div className="itemCG">
                <span>Name</span>
                <input name="groupName" type="text" onChange={handleChange}/>
            </div>
            <div className="itemCG">
                <span>Password</span>
                <input name = "password1" type="password" onChange={handleChange}/>
            </div>
            <div className="itemCG">
                <span>Password</span>
                <input name = "password2" type="password" onChange={handleChange}/>
            </div>
            <div className="buttons">
                <button onClick={handleClick}>Create</button>
                <button>Cancle</button>
            </div>
        </div>
    </div>
  )
}
