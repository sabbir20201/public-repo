import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaCcVisa } from "react-icons/fa6";


const Pricing = () => {


    return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
            <div className="card bg-black text-white">
                <div className="card-body ">
                    <div>
                        <h2 className="card-title text-2xl">Professional <p className='text-3xl'><FaCcVisa /></p></h2>
                        <div class="divider divider-neutral"></div>
                        <p> Virtual Credit Cards</p>
                        <p>Financial Analytics</p>
                        <p>Checking Account</p>
                        <p>API Integration</p>

                        <div className="card-actions">
                            <p className='pt-2 text-xl card-title'>Price: $800 for one week</p>
                        
                            <Link to="/payment">
                                <button className='btn'> Pay Now</button>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
            <div className="card bg-black text-white">
                <div className="card-body ">
                    <div>
                        <h2 className="card-title text-2xl">Unlimited <p className='text-3xl'><FaCcVisa /></p></h2>
                        <div class="divider divider-neutral"></div>
                        <p> Virtual Credit Cards</p>
                        <p>Financial Analytics</p>
                        <p>Checking Account</p>
                        <p>API Integration</p>
                        <div className="card-actions">
                            <p className='pt-2 text-xl card-title'>Price: $800 for one month</p>
                            <Link to="/payment">
                                <button className='btn'> Pay Now</button>
                            </Link>
                        
                        </div>
                    </div>

                </div>
            </div>
            <div className="card bg-black text-white">
                <div className="card-body ">
                    <div>
                        <h2 className="card-title text-2xl">Unlimited <p className='text-3xl'><FaCcVisa /></p></h2>
                        <div class="divider divider-neutral"></div>
                        <p> Virtual Credit Cards</p>
                        <p>Financial Analytics</p>
                        <p>Checking Account</p>
                        <p>API Integration</p>

                        <div className="card-actions">
                            <p className='pt-2 text-xl card-title'>Price: $800 for one year</p>
                            <Link to="/payment">
                                <button className='btn'> Pay Now</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pricing;