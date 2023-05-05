import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="container mt-4">
      <div>
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/create")}
        >
          Create
        </button>
      </div>
      <div className=" mt-4">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Mobile</th>
              <th scope="col">Address</th>
              <th scope="col">Govt ID</th>
              <th scope="col">Guardian</th>
              <th scope="col">Nationality</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length
              ? data.map((d) => {
                  return (
                    <tr key={d._id}>
                      <td>{d.name}</td>
                      <td>{d.age}</td>
                      <td>{d.mobile}</td>
                      <td>{d.address}</td>
                      <td>{d.govt}</td>
                      <td>{d.guardian}</td>
                      <td>{d.nationality}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
