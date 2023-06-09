import './sidebar.css';
import { NavItem, Nav, NavLink } from 'reactstrap';


const Sidebar = () => {

    let sidebarList = [
        {
            id: 1,
            name: 'On Demand Topics',
            isSelected: true,
            other: '',
            class: 'navone'
        },
        {
            id: 2,
            name: 'Trips',
            isSelected: false,
            other: '',
            class: 'navtwo'
        },
        {
            id: 3,
            name: 'Claims',
            isSelected: false,
            other: '',
            class: 'navthree'
        },
        {
            id: 4,
            name: 'Approvals',
            isSelected: false,
            other: '',
            class: 'navfour'
        },
        {
            id: 5,
            name: 'Deviations',
            isSelected: false,
            other: '',
            class: 'navfive'
        },
        {
            id: 6,
            name: 'Profiles',
            isSelected: false,
            other: '',
            class: 'navsix'
        },
        {
            id: 2,
            name: 'Reports',
            isSelected: false,
            other: '',
            class: 'navseven'
        }


    ]
    return (
        <div className="header">

            <Nav className='NavHead' vertical>

                {
                    sidebarList.map(c => {
                        return (
                            <NavItem className={c.isSelected ? "navoneSelected" : c.class} >
                                <NavLink className={c.isSelected ? 'navoneDepthSelected' : 'navoneDepth' } href="#">
                                    {c.name}
                                </NavLink>
                            </NavItem>
                        )
                    })
                }
            </Nav>
        </div>
    )
}
export default Sidebar;
