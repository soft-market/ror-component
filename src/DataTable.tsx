import React from 'react';
import { TableBody, TableHead } from './table/TableBody';
import { TableFooter } from './table/TableFooter';
import { TableBar } from './table/TableBar';
import { row } from './types';

interface DataTableProps<T> {
  data?: T[];
  head: TableHead[];
}

//https://medium.com/weekly-webtips/typescript-generic-react-components-17c71a64150e

export function DataTable<T extends row>(props: DataTableProps<T>) {
  const { data, head } = props;
  return (
    <table>
      <TableBar />
      <TableBody head={head} data={data} />
      <TableFooter />
    </table>
  );
}
