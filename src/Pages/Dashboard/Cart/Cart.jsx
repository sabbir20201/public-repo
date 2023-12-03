import { useQuery } from "@tanstack/react-query";
import UseCart from "../../../Hooks/UseCart";
import useAdmin from "../../../Hooks/useAdmin";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const Cart = () => {
    const [isAdmin] = useAdmin();
    const [cart] = UseCart();

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
    return (
        <div>
            {
                isAdmin ? <>
                   <div className=" border-4 grid grid-cols-4">
            <div className="border-r-4"> 
            <h1 className="font-bold text-2xl p-5"> 
            Total Item : {cart.length}</h1>
            <p></p>
            </div>
            <div className="border-r-4 font-bold text-2xl p-5">Total Users : {users.length}</div>
            <div className="border-r-4 font-bold text-2xl p-5">Order</div>
            <div className="font-bold text-3xl p-5">Revenue</div>
            </div>
                </>
                :
                <>
                
                </>
            }
         
        </div>
    );
};

export default Cart;