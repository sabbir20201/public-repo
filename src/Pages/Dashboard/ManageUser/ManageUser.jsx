import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import Swal from 'sweetalert2';
import { axiosSecure } from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import UseCart from '../../../Hooks/UseCart';

const ManageUser = () => {
  const [data, setData] = useState([])
  const [cart, refetch] = UseCart()
  useEffect(() => {
    fetch("http://localhost:5000/getAllSurveys")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])


  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/delete/${id}`)
          .then(res => {
            if(res.data.deletedCount > 0) {
              refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"

              });
              const remaining = data.filter(item => item._id !== id)
              setData(remaining)
            }
          })
      }
    });
  }
  return (
    <div>
      <h1>manage user : {cart.length}</h1>
      <div className="">

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  No
                </th>
                <th>item Name</th>
                <th>Description</th>
                <th>Update</th>
                <th>Delete</th>

              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                data?.map((item, index) => <tr key={item._id}>
                  <th>
                    {index + 1}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">

                      <div>
                        <div className="font-bold">  {item.title}</div>

                      </div>
                    </div>
                  </td>
                  <td>
                    {item.description}
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                  </td>
                  <td> <Link to={`/dashboard/updateSurvey/${item._id}`}><button className='btn'><MdOutlineSystemUpdateAlt />
                  </button> </Link></td>
                  <th>
                    <button onClick={() => handleDelete(item._id)} className="btn text-red-600"><MdDelete /></button>
                  </th>
                </tr>)
              }
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ManageUser;