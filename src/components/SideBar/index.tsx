import styles from './index.module.scss';
import SideBarLink from '../SideBarLink'

import houseSVG from '../../assets/icons/house-fill.svg';
import personWorkspaceSVG from '../../assets/icons/person-workspace.svg';
// import envelopeSVG from '../../assets/icons/envelope-at.svg'

import type { SideBarLinkOptions } from '../../types';

const links:SideBarLinkOptions[] = [
    {
        iconPath: houseSVG,
        path: '/',
        tooltip: 'home'
    },
    {
        iconPath: personWorkspaceSVG,
        path: '/portfolio',
        tooltip: 'portfolio'
    },
    // {
    //     iconPath: envelopeSVG,
    //     path: '/contact',
    //     tooltip: 'contact'
    // }
];

export default function SideBar() {
    return (
        <div id={styles.sidebar}>
            <div className={styles.container}>
                <nav>
                    <ul>
                        {
                            links.map((link, i) => (
                                <SideBarLink key={i} {...link} />
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}