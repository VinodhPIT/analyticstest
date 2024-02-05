import React, { useState } from 'react'



import CountDisplayCard from '../countDisplayCard';

const Apitype = {
    contactedWithNoOffer:'contacted_with_no_offer',
    deletedCustomers:'deleted',
    joinedFromApp:'joined_from_app',
    joinedFromWeb:'joined_from_website',
    noCompletedOffer:'customer_no_offer_completed',
    notContacted:'no_contacted',
    referralUsedCustomers:'referral_used_customer',
    totalCustomers:'total_count',
    voucherUserCustomers:'voucher_used_customer',
  }

const initialValue = {
    contactedWithNoOffer:{
        from: null,
        to: null
    },
    deletedCustomers:{
        from: null,
        to: null
    },
    joinedFromApp:{
        from: null,
        to: null
    },
    joinedFromWeb:{
        from: null,
        to: null
    },
    noCompletedOffer:{
        from: null,
        to: null
    },
    notContacted:{
        from: null,
        to: null
    },
    referralUsedCustomers:{
        from: null,
        to: null
    },
    totalCustomers:{
        from: null,
        to: null
    },
    voucherUserCustomers:{
        from: null,
        to: null
    }
};

export default function CustomerDetails({initialCounts, token}) {
    const [countData, setCountData]=useState(initialCounts);
    const [dateRange, setDateRange] = useState(initialValue);
    const [selectedDayRange, setSelectedDayRange] = useState(initialValue);

   

  const handleDateFilter = async (key, dateRangeValue) => {
      setSelectedDayRange({
        ...selectedDayRange,
        [key]: dateRangeValue
    });
      const { from, to } = dateRangeValue;
      const fromDate = `${from?.year}-${from?.month}-${from?.day}` || '';
      const toDate = to ? `${to?.year}-${to?.month}-${to?.day}` : null;
      if (fromDate && toDate) {
        if(key==="joinedFromWeb"||key==="joinedFromApp"){
            const res = await analyticsCustomerLeadSourceCountWithFIlter({
                startDate: fromDate,
                endDate: toDate
            }, token);
            setCountData({
                ...countData,
                ...(key==="joinedFromApp" && { joinedFromApp: res.filter((custData)=> custData.lead_source==="APP").length }),
                ...(key==="joinedFromWeb" && { joinedFromWeb: res.filter((custData)=> custData.lead_source!=="APP").length })
            })
            setDateRange({
              ...dateRange,
              [key]: {
                from: fromDate,
                to: toDate
            }
          });
        } else {
            const res = await analyticsCustomerCountWithFIlter({
                type: Apitype[key],
                startDate: fromDate,
                endDate: toDate
            }, token);
            setCountData({
                ...countData,
                [key]: res[Apitype[key]]
            });
            setDateRange({
              ...dateRange,
              [key]: {
                from: fromDate,
                to: toDate
            }
          });
        }
      }
  }

  return (
        <section className="container-fluid">
   
        </section>
    )
}