import { Dashboard_Icon, claender_Icon, invoice_Icon, notification_Icon, schedule_Icon, setting_icon } from "../utils/contrants";
import UploadPage from "./UploadPage";



const  HomePage=()=>{
    return(
        <div className=" bg-[#F8FAFF]  h-[780px] flex  " >

    
  
             <div className=" w-[218px] bg-[white]" >


             <img src="https://i.ibb.co/sgCxqMf/Subtract.png"   className="  relative top-[50px] left-[56px]  w-[42px] h-[42px]  " alt="company_logo"/>
             <p className="font-nunito font-semibold text-[24px] leading-[32.74px] absolute top-[55px] left-[113px] ">Base</p>
        
                  
             <ul>
                <li className=" font-nunito text-[16px] leading-[21.82px] absolute top-[143px] left-[69px] text-[#9A9AA9] font-semibold flex gap-2"><img src={Dashboard_Icon} className="w-[24px] h-[24px] " alt="icon"/>Dashboard</li>
                <li className=" font-nunito text-[16px] leading-[21.82px] absolute top-[203px] left-[69px] text-[#9A9AA9] font-semibold flex gap-2 bg-gradient-to-r from-[#ACA9FF] via-[#ACA9FF] via-transparent text-[#605bff]"><img src="https://i.ibb.co/P6vj109/Chart.png" className="w-[24px] h-[34px] " alt="icon"/>Upload</li>
                <li className=" font-nunito text-[16px] leading-[21.82px] absolute top-[277.27px] left-[69px] text-[#9A9AA9] font-semibold flex gap-2"><img src={invoice_Icon} className="w-[24px] h-[24px]"alt="icon"/>Invoice</li>
                <li className=" font-nunito text-[16px] leading-[21.82px] absolute top-[341px] left-[69px] text-[#9A9AA9] font-semibold flex gap-2"> <img src={schedule_Icon} className="w-[24px] h-[24px]"alt="icon"/>Schedule</li>
                <li className=" font-nunito text-[16px] leading-[21.82px] absolute top-[407px] left-[69px] text-[#9A9AA9] font-semibold flex gap-2"> <img src={claender_Icon} className="w-[24px] h-[24px]"alt="icon"/>Calender</li>
                <li className=" font-nunito text-[16px] leading-[21.82px] absolute top-[474.13px] left-[69px] text-[#9A9AA9] font-semibold flex gap-2"> <img src={notification_Icon} className="w-[24px] h-[24px]"alt="icon"/>Notification</li>
                <li className=" font-nunito text-[16px] leading-[21.82px] absolute top-[540.56px] left-[69px] text-[#9A9AA9] font-semibold flex gap-2"> <img src={setting_icon} className="w-[24px] h-[24px]"alt="icon"/>Setting</li>

             </ul>

           </div>

           


             <div>
                <UploadPage/>
             </div>

            
            


        </div>
    )

}
export default HomePage;