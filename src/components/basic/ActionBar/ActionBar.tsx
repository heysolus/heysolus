import React, { useState } from "react";
import "./ActionBar.css";
import { DatePicker } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import { Input, Button } from "components";


export interface ActionBarProps {
    loading?: boolean;
    withSearch?: boolean;
    onSearch?: (searchKey: string) => any;
    customLeftActions?: any;
    withFilter?: boolean;
    onFilter?: () => any;
    customRightActions?: any;
    withSearchDatePicker?: boolean;
    onFromDateChanged?: () => any
    onToDateChanged?: () => any
}

const ActionBar = (props: ActionBarProps) => {
    const [searchKey, setSearchKey] = useState("");

    return (
        <div className="flex items-center">
            <div className="flex-1 flex gap-1">
                {
                    props.withSearch &&
                    <Input placeholder="Search..."
                        allowClear
                        style={{ width: 200 }}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            console.log(e.target.value);
                            setSearchKey(e.target.value)
                        }}
                    />
                }

                {
                    props.withSearchDatePicker &&
                    <DatePicker onChange={props.onFromDateChanged} />
                }

                {
                    props.withSearchDatePicker &&
                    <DatePicker onChange={props.onToDateChanged} />
                }

                {
                    props.withSearch && <Button type="default" icon={<SearchOutlined />}
                        loading={props.loading}
                        onClick={() => {
                            console.log("clicked");
                            props.onSearch?.(searchKey)
                        }}>
                    </Button>
                }

                {
                    props.customLeftActions
                }
            </div>
            <div className="flex-0">
                {
                    props.withFilter && <Input className="action-bar-search" placeholder="Filter..." />
                }
                {
                    props.customRightActions
                }
            </div>
        </div>
    );
};

export default ActionBar;