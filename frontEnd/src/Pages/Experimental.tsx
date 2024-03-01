import NavBar from "../Components/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";

const Experimental = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users/login");

      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  //   const clickHAndler = () => {
  //     fetchData();
  //     console.log(data);
  //   };
  if (data == null) {
    return "loading";
  } else {
    return (
      <>
        <NavBar logged_in={true} />
        <p>{data[0].username}</p>
      </>
    );
  }
};

export default Experimental;
