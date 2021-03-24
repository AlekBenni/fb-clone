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


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow
            src="https://scontent.fhel4-1.fna.fbcdn.net/v/t1.0-9/117161506_655733315296457_8736053335936174191_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=SuCczsgPS7YAX8pB6YP&_nc_ht=scontent.fhel4-1.fna&oh=284d3e76ae7125bc042925abf8817106&oe=607F0C8E"
            title="Alek Benny"/>
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
