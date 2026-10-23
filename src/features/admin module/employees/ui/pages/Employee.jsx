
import React from 'react'
import { useEmployee } from '../../hooks/UseEmployees'
import SearchFilter from '../components/employees/SearchFilter';
import EmployeeTable from '../components/employees/EmployeeTable';
import EmployeeHeader from '../components/employees/EmployeeHeader';
import EmployeeStats from '../components/employees/EmployeeStats';
import Pagination from '../components/employees/Pagination';
import { Outlet } from 'react-router';

const Employee = () => {
  let { data, isPending ,handlePageChange,isFetching,filters,handleSearchFilter} = useEmployee();
console.log(data);

  if (isPending) return <h1>Loading...</h1>;

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <Outlet/>
        <EmployeeHeader />

        <EmployeeStats employees={data?.employees} />

        <div className="mt-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-4 shadow-sm sm:p-6">
          <SearchFilter  filters={filters} handleSearchFilter={handleSearchFilter}/>
        </div>

        
        

        <div className="overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-sm">
          <EmployeeTable employees={data?.employees} />
         <Pagination
            pagination={data?.pagination}
            onPageChange={handlePageChange}
            
          />
        </div>

      </div>
    </div>
  )
}

export default Employee
