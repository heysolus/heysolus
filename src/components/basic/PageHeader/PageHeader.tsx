import { Button, Dropdown } from "components";
import React, { FunctionComponent, useMemo } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { ItemType } from "antd/lib/menu/hooks/useItems";

export interface PageHeaderProps {
    title: string;
    description?: string;
    actions?: ItemType[];
    onActionSelected?: (e: any) => any;
}

const PageHeader: FunctionComponent<PageHeaderProps> = (props) => {

    const menu = useMemo(() => {
        return (
            <Menu onClick={props.onActionSelected} items={props.actions} />
        );
    }, [props.actions]);

    return (
        <div className="flex gap-4">
            <div className="flex flex-col flex-1">
                <h1 className="text-3xl font-semibold mb-0 ml-0">{props.title}</h1>
                {
                    props.description && <p className="text-gray-400 mt-2 m-0">
                        {props.description}
                    </p>
                }
            </div>

            {
                props.actions && props.actions.length > 0 &&
                <div className="flex-0 flex gap-4">
                    <Dropdown overlay={menu} placement="bottomRight">
                        <Button type="text">
                            <div className="flex gap-2 items-center text-gray-500">
                                <span className="text-gray-500 text-sm">Actions</span>
                                <DownOutlined className="text-xs" />
                            </div>
                        </Button>
                    </Dropdown>
                </div>

            }

        </div>
    );
};

export default PageHeader;