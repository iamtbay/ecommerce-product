import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons'

export default function MainSideBar(props) {
    return (
        <div className="mainSideBar">    
            <div className="sideBar">
                <ul className="sideBarUl">
                    <FontAwesomeIcon id="closeSideBar" onClick={()=> props.onChange(false)} icon={faXmark}  />
                    <li className="sideBarItems">Collections</li>
                    <li className="sideBarItems">Men</li>
                    <li className="sideBarItems">Women</li>
                    <li className="sideBarItems">About</li>
                    <li className="sideBarItems">Contact</li>
                </ul>
            </div>
            <div className="tamamla">

            </div>
    </div>
    )
}