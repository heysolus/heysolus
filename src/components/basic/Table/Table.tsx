import React from 'react';
import { Table as AntTable } from 'antd';
import type { TableProps } from 'antd/es/table';
import "./Table.scss";

const Table = (props: TableProps<any> & {
    children?: React.ReactNode;
} & {
    ref?: React.Ref<HTMLDivElement> | undefined;
}) => {
    return (
        <div>
            <AntTable {...props} />
        </div>
    )
};

export default Table;