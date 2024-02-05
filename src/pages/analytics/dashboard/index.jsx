import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  analyticsCustomerCount,
  analyticsCustomerLeadSourceCount,
} from "@/actions/customerAnalyticsApi";
import Header from "@/analyticsComponents/header/header";
import CustomerDetails from "@/analyticsComponents/customerDetails/customerDetails";
import TotalCustomers from "@/analyticsComponents/totalCustomers/totalCustomers";
import PieChart from "@/analyticsComponents/pieChart/chart";
import CustomerConversion from "@/analyticsComponents/customerConversion/customerConversion";
import { getSession } from "next-auth/react";
import PaymentComparison from "@/analyticsComponents/paymentComparisonChart/paymentComparison";
import ComparisonChart from "@/analyticsComponents/comparisonPiechart/comparisonChart";
import Head from 'next/head'


export default function Analytics({ data }) {
  

  const router = useRouter();
  const { status, data: sessionData } = useSession();



 




  
  return (
    <>
     <Head>
        <title>Customer-Analytics</title>
      </Head>


    

      <section className="pt_20 pb_20 block_bg_gray_150">
       
        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                 <TotalCustomers  title=" Total Customers" chartData={data.chartData} /> 
              </div>
             
            </div>
          </div>
        </section>

        
   
      </section>
    </>
  );
}

export async function getServerSideProps(context) {


  try {
    const [data, customerJoinigData] = await Promise.all([
      analyticsCustomerCount('mbKrL6OCXFhGZeiR3QqsGwv9ebehoY'),
      analyticsCustomerLeadSourceCount('mbKrL6OCXFhGZeiR3QqsGwv9ebehoY'),
    ]);
  
    return {
      props: {
        data: {
          chartData: customerJoinigData,
                 },
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}
