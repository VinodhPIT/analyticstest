import React from 'react'
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";


export default function Dashboard() {
  const handleSignOut = async () => {
    await signOut({callbackUrl:"/analytics/login"}); 
  };

  
  return (
    <div>
      <h4>dashboard</h4>

      <button
                    className="btn_secondary ml_10"
                    
                    onClick={handleSignOut}
                  >
                    {" "}
                    Log out
                  </button>
    </div>
  )
}
