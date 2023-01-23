import React from "react"
import './a1.css'
import './a2.css'
import './a3.css'
import './a4.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Wave } from 'react-animated-text';


const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase"></h5>
             
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            

            
                <h5 className="text-a">Stay in Touch</h5>
                <ul className="list-unstyled">
                    <div className="gt_hb" margin-bottom="10px">
                    <a  href="https://github.com/ashwanijha8068"><GitHubIcon /></a>

                    </div>
                   <div className="lk" margin-bottom="15px">
                   <li><a href="https://www.linkedin.com/in/ashwani-kumar-jha-a15970213"><LinkedInIcon /></a></li>
                   </div>
                    
                   
                     
                     
                </ul>
            
        </div>
    </div>

    <div className="f_t"> 
         <Wave text="Credits:Ashwani Kumar Jha"/>
        
    </div>

</footer>

export default Footer