import * as React from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import {useState} from "react";

export default function GenericPage(){

    const [title, setTitle] = useState('');

    function addStuff(id: number):JSX.Element{
        return (
            <div key={id}>
                {id}
            </div>
        )
    }

    const numberList = [1,2,3,4];

    return (
        <React.Fragment>
            <NavBar randomWord="this is a prop"/>
            <h1>THIS IS A TEST</h1>
            {numberList.map(addStuff)}
            <Footer testString="hi"/>
        </React.Fragment>
    )
}

