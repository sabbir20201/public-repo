import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const UseCart = () => {
    //     tan stack query
    const axiosSecure = useAxiosSecure()
    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/getAllSurveys')
            return res.data
        }
    })
    return [cart, refetch]
};

export default UseCart;