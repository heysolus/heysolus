import { Menu, Button, Dropdown } from "antd/lib";
import React, { FC, ReactElement, useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import "./NavBar.scss";

export interface NavBarProps {
    title: string;
    showAppSwitcher?: boolean;
    items?: any[];
    rightActions?: any;
}

const AppSwitcherMenu: FC = (): ReactElement => {
    return (<div className='bg-white shadow-sm p-8 flex items-base gap-6'>
        <div className='flex flex-col items-center'>
            <button className="w-16 h-16 flex flex-col items-base">
                <img src="/images/edp.png" alt="EDP" />
            </button>
            <p className='mt-4 mb-0 text-gray-500'>EDP</p>
        </div>

        <div className='flex flex-col items-center'>
            <button className="w-14 h-16 flex flex-col">
                <img src="/images/loyalty.png" alt="Loyalty" />
            </button>
            <p className='mt-4 mb-0 text-gray-500'>Loyalty</p>
        </div>

        <div className='flex flex-col items-center'>
            <button className="w-14 h-16 flex flex-col">
                <img src="/images/personalization.png" alt="Personalization" />
            </button>
            <p className='mt-4 mb-0 text-gray-500'>Personalization</p>
        </div>
    </div>);
}

const NavBar: FC<NavBarProps> = ({ items, showAppSwitcher, title, rightActions }): ReactElement => {
    const [current, setCurrent] = useState(items && items.length > 0 ? items[0].key : null);

    const onClick = (e: any) => {
        console.log('click ', e);
        setCurrent(e.key);

        let clickedMenu = items?.filter(m => {
            return m.key === e.key;
        });

        if (clickedMenu && clickedMenu?.length > 0) {
            clickedMenu = clickedMenu[0];
        }

        console.log("clicked:");
        console.log(clickedMenu)

        // if (clickedMenu.path) {
        //     console.log("navigating to " + clickedMenu.path);
        // }
    };

    return (
        <div className="main-menu flex items-center px-6 gap-2 bg-white h-16">
            {
                showAppSwitcher && <Dropdown overlay={<AppSwitcherMenu />} placement="topRight">
                    <Button type="text" icon={<MenuOutlined />} ghost className="mr-2"></Button>
                </Dropdown>
            }

            <h1 className="m-0 mr-8 text-xl font-semibold">{title}</h1>

            {items && <div className="flex-1 flex items-center">
                <Menu onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                />
            </div>}


            {rightActions}

        </div>
    );
};

export default NavBar;
