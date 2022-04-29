import React from "react";
import Props from "../models/reactChild";
import CardWrapper from "./CardWrapper";

const LoadingText:React.FC<Props> = ({children}) =>{

    return(
        <CardWrapper>
            <div style={{color:"#000", fontWeight: "bold", fontSize: "15px"}}>
                {children}
            </div>
        </CardWrapper>
    )
}
export default LoadingText;
