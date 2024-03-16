
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Cards from './Cards';

function  NewsObjects({ResponseJson}){

// const inputStrings = {
//     genString: "this is obj1Gen String", 
//     originalString: "this is obj1Original String"
// };
return (
    <div>
        <Cards inputStringGen={ResponseJson.genString} inputStringOriginal={ResponseJson.originalString} />
    </div>
);
}


export default NewsObjects;