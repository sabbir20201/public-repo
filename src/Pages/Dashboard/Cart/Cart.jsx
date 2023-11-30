import UseCart from "../../../Hooks/UseCart";
import useAdmin from "../../../Hooks/useAdmin";


const Cart = () => {
    const [isAdmin] = useAdmin();
    const [cart] = UseCart();
    return (
        <div>
            {
                isAdmin ? <>
                   <div className=" border-4 grid grid-cols-4">
            <div className="border-r-4"> 
            <h1>Menu item : {cart.length}</h1>
            <p></p>
            </div>
            <div className="border-r-4">User</div>
            <div className="border-r-4">Order</div>
            <div>Revenue</div>
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