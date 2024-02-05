import React from 'react';
import Link from "next/link";

import Image from "next/image";


const renderCustomInput = ({ ref }) => (
  <input
      readOnly
      ref={ref}
      className="datepicker_input"
      title="Date Range"
  />
)

export default function CountDisplayCard({ 
    bgColorClass,
    count,
    filteredDateRange,
    hideFilter,
    onClickDownload,
    onUpdateDateFilter, 
    selectedDateRange,
    title
 }) {
  return (
    <div className={`db_card ${bgColorClass}`}>
        <div className="db_card_body p_16">
            <div className="d_flex justify_space_between align_item_center pb_12 pr_35">
                <div>
                    <h4>{title}</h4>
               
                </div>    
               {!hideFilter
                 &&(
                 <div className="db_icon_shape db_icon_cal">  
                    <div>
                        <Image
                            alt="Download"
                            height="24"
                            priority
                            src="/icon_calender_new.svg"
                            width="24"
                        />
                       
                    </div>
                 </div>  
               )}                         
            </div>
            <div className="d_flex justify_space_between align_item_center">
                <h2>{count}</h2>
                <div className="db_icon_shape mr_6">
                    <Link href="" className="d_inline_block" onClick={onClickDownload}>
                        <Image
                            alt="Download"
                            height="24"
                            priority
                            src="/db_icon_download.svg"
                            width="24"
                        />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};
