import React from 'react'
import "./sidebar.css"
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {useSelector} from 'react-redux'

function Sidebar() {
    const user = useSelector(state => state.all.user)
    console.log(user)
    return (
        <div className="sidebar">
            <SidebarRow
            src={user.photoURL}
            title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon}
            title="COVID-21 Information Center"
            />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Chat" />
            <SidebarRow Icon={StorefrontIcon} title="market place" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreIcon} title="Market Place" />
        
        </div>
    )
}

export default Sidebar
