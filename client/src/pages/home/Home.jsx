import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL})

  useEffect(() => {
    const getRandomList = async () => {
      try {
        //Defined the proxy in package.json so its not repetitive.
        const res = await axiosInstance.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
            headers:{
              token: 'jivesh eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWFlYjI4ZjgwNGUyNzIzZTNmMjlhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODM4ODA4NCwiZXhwIjoxNjgxNTg4MDg0fQ.bI00nYzL-L37bg_xc6qpIAJSbTQvAMNx2oGmolP_4IQ'
            }
          }
        );
     
        setLists(res.data)
      } catch (err) {
        console.log(err);
      }
    };

    getRandomList();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre}/>

      {
        lists.map((list)=> {

          console.log(list.title)
          return <List list = {list}/>
          
        })
      }
     
   
    </div>
  );
};

export default Home;
