import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import Topbar from "./Topbar"
function Products(){
    const [apiRes,setApiRes]=useState([])
    const [list,setList]=useState([])
    const [categories,setCategories]=useState([])
    const [selectedCategory,setSelectedCategory]=useState(' ')
    const [searchInput, setSearchInput] = useState('');
    console.log(selectedCategory)
    useEffect(()=>{
        fetch('https://mocki.io/v1/72f8d1e9-055c-4e6b-bd6a-630de0dad7f4')
        .then((res)=>{
            return res.json()
        })
        .then((json)=>{
            setApiRes(json);
            setList(json);
            const c=json.map((obj)=>obj.category)
            setCategories([...new Set(c)])
        })
        .catch()
    },[])
    console.log(categories)
    useEffect(()=>{
        if(selectedCategory===" "){
            setList(apiRes)
        }
        else{
const res=apiRes.filter((obj)=>obj.category===selectedCategory)
setList(res)
        }  
    },[selectedCategory])
    function handleSearchInput(e){
        setSearchInput(e.target.value)
    }
    const handleSearch = () => {
        const filteredList = apiRes.filter(product =>
            product.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        setList(filteredList);
 }
    return(
        <>
        <Topbar categories={categories} setSelectedCategory={setSelectedCategory}/>
        
<input type="text" value={searchInput} onChange={handleSearchInput} placeholder="search"/>&nbsp;&nbsp;
<button onClick={handleSearch}>Search</button>
        
        <div className="products-list">
        {list.map((product)=><ProductCard product={product}/>)}
        </div>
        </>
    )
}
export default Products