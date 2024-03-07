import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = [ "About", "Experience", "Works", "Contact" ]

// project data
export const projects : ProjectTypes[] = [
    {
        title : "Smart - Ways",
        description : "",
        tech : [ "HTML", "CSS", "JavaScript", "FireBase" ],
        code : '',
        live : '',
        thumnail : "smartways.png",
        featured : true
    },

    {
        title : "Power BI",
        description : "",
        tech : [ "Dax", "SQL" ],
        live : '',
        thumnail : "powerbi.png",
        featured : true
    },

    {
        title : "Zoho Creator Platform",
        description : "",
        tech : [ "Deluge", "" ],
        code : '',
        live : '',
        thumnail : "zohohcreator.png",
        featured : true
    },

    {
        title : "Machine Learning",
        description : "",
        tech : [ "Rstuido"],
        live : '',
        thumnail : "mlmodel.png",
        featured : true
    }
]