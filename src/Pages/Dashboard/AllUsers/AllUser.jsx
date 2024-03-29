import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { MdDelete } from 'react-icons/md';
import { FaUsers } from "react-icons/fa";
import Swal from 'sweetalert2';

const AllUser = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        }
    })





    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an surviyor now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDeleteUser = user => {
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

                axiosSecure.delete(`/users/${user}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {

                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"

                            });
                            // const remaining = data.filter(item => item._id !== id)
                            // setData(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div className=''>

            <h1 className='text-3xl pl-5 font-bold'> Total Users : {users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                <td>
                                    {user?.role == 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn text-orange-500"><FaUsers /></button>}
                                </td>

                                <td>
                                    <button onClick={() => handleDeleteUser(user._id)} className="btn text-red-600"><MdDelete /></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default AllUser;