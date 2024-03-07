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
        description : "Characterization of an information system, analysis of the information system using DFD diagrams, design of the information system using pseudo code, while working through the LEAN START UP methodology which includes a repeated process of learning, measuring, and building the MVP",
        tech : [ "HTML", "CSS", "JavaScript", "FireBase" ],
        code : '',
        live : '',
        thumnail : "smartways.png",
        featured : true
    },

    {
        title : "Power BI",
        description : " designed and builded a data warehouse system for business analysis. involving analyzing business needs, designing the data schema, implementing the warehouse in SQL Server, and creating visualizations in Power BI. considering efficiency and strategies for handling changing data over time.",
        tech : [ "Dax", "SQL" ],
        live : '',
        thumnail : "powerbi.png",
        featured : true
    },

    {
        title : "Zoho Creator Platform",
        description : "designing, developing, and deploying an information system using Zoho Creator. addressing a specific business problem by following a standard methodology, including requirements gathering, design, development, testing, deployment, and user documentation.",
        tech : [ "Deluge", "" ],
        code : '',
        live : '',
        thumnail : "zohohcreator.png",
        featured : true
    },

    {
        title : "Machine Learning",
        description : "data analysis, model development, and evaluation.  analyzing the data, develop multiple models using different algorithms, and compare their performance. evaluating the accuracy, feature importance, and economic viability of the best model.",
        tech : [ "Rstuido"],
        live : '',
        thumnail : "mlmodel.png",
        featured : true
    }
]