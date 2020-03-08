import './Table.scss';
import React from 'react';
import { TableProps } from './';
import { Icon } from 'components';
import { TableBody, TableDataCell, TableHead, TableHeader, TableRow } from '../';

export function Table({ }: TableProps) {
  return (
    <table className="table table-hover" style={{ borderTop: 0}}>
      <TableHead>
        <TableRow>
          <TableHeader>#</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Employer</TableHeader>
          <TableHeader>Positions</TableHeader>
          <TableHeader>Salary</TableHeader>
          <TableHeader/>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableHeader>
          <img src="https://cdn.fabbo.io/public/c_images/album1584/HQ005.gif"/>
        </TableHeader>
        <TableDataCell>
          Prosecutor
        </TableDataCell>
        <TableDataCell>
          <a href="/business/19d6042b-20b4-4ca8-ad5d-04d8378805bd">Courts and Tribunals Service</a>
        </TableDataCell>
        <TableDataCell>
          2
        </TableDataCell>
        <TableDataCell>
          $11
        </TableDataCell>
        <TableDataCell>
          <a href="/business/position/6ed7a20d-8062-4a13-98c4-57be8703f8af" className="btn btn-info btn-sm">
            <Icon type="fa-info-circle"/>
          </a>
        </TableDataCell>
      </TableBody>
    </table>
  )
}