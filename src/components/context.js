import React,{ useEffect , useState } from 'react';


const AppContext = React.createContext();

const URL = "https://course-api.com/react-store-products"


const AppProvider = ({children}) =>{
    const [searchForm , setSearchForm] = useState('');
    const [loading , setLoading] = useState(false);
    const [data , setData] = useState([])
    const [singleItem , setSingleItem] = useState({});
    const [cartItems , setCartItems] = useState([])
    const [total , setTotal] = useState(0)
    const [purchase ,setPurchase] = useState({
        order:false,
        submit:false
    });
    const [orderInfo , setOrderInfo] = useState({
        name:'',
        address:'',
        number:'',
        email:''
    })

    const fetchAPI = async () =>{
        setLoading(true);
        try{const response = await fetch(URL);
        const json = await response.json();
        setData([...json]);
        setLoading(false);
    }
        catch(err){console.log(err)}
    }



    useEffect(()=>{
        fetchAPI()
    },[searchForm])


    const remove = (id)=>{
        setCartItems(cartItems.filter(item => item.id !== id))
    }
    return <AppContext.Provider value={{
                                        remove,
                                        URL,
                                        searchForm,
                                        setSearchForm,
                                        loading,
                                        setLoading,
                                        data,
                                        singleItem,
                                        setSingleItem,
                                        cartItems,
                                        setCartItems,
                                        total,
                                        setTotal,
                                        purchase,
                                        setPurchase,
                                        orderInfo,
                                        setOrderInfo,
                                        }}>
        {children}
    </AppContext.Provider>
}

export {AppProvider,AppContext};