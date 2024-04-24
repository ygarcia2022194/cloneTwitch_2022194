import { useEffect } from "react"
import { Navbar } from "../../components/navbars/Navbar"
import { useChannels, useUserDetails } from "../../shared/hooks"
import { LoadingSpinner } from "../../components/LoadingSpinner"
import { Content } from "../../components/dashboard/Content"
import './dashboardPage.css'
import { Sidebar } from "../../components/navbars/Sidebar"
 
export const DashboardPage = () => {
  const { getChannels, allChannels, isFectching, followedChannels} = useChannels()
  const { isLogged } = useUserDetails()
 
  useEffect(() => {
    getChannels(isLogged)
  }, [])
 
  if (isFectching) {
    <LoadingSpinner/>
  }
  return (
    <div className="dashboard-container">
      <Navbar/>
      <Sidebar channels={followedChannels}/>
      <Content channels={allChannels || []} getChannels={getChannels}/>
    </div>
  )
}