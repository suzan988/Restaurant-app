import React, { useState } from 'react'
import App from './App.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
    ... new Set(Menu.map((curElem) => {
    return curElem.category;
})
),"All"
];
console.log(uniqueList)
const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    
    const clickItem = (category) => {
        if(category=== "All"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        })
        setMenuData(updatedList);
    } 

    return (
        <>
        <Navbar clickItem= {clickItem} menuList={menuList}/>
        <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant;

