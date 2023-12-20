import React from 'react';
import { useTable, usePagination } from 'react-table';
import "../../assets/css/Users.css";

const columns = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Phone Number',
    accessor: 'phoneNumber',
  },
  {
    Header: 'Photo',
    accessor: 'photo',
    Cell: ({ cell: { value } }) => (
      <img src={value} alt="User" style={{ width: '50px', height: '50px' }} />
    ),
  },
  {
    Header: 'Action',
    accessor: 'action',
    Cell: () => (
      <button onClick={() => console.log('Action clicked')} className="btn btn-primary" style={{ cursor: 'pointer' }}>
        Action
      </button>
    ),
  },
  // Add more columns as needed
];

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phoneNumber: '123-456-7890', photo: 'url/to/photo1.jpg', action: 'edit' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', phoneNumber: '987-654-3210', photo: 'url/to/photo2.jpg', action: 'edit' },
  // Add more data rows as needed
  // ...
  { id: 11, name: 'User 11', email: 'user11@example.com', phoneNumber: '111-222-3333', photo: 'url/to/photo11.jpg', action: 'edit' },
  { id: 12, name: 'User 12', email: 'user12@example.com', phoneNumber: '222-333-4444', photo: 'url/to/photo12.jpg', action: 'edit' },
  // ... Add more data rows as needed
];

const HomeTabContent = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex, pageSize },
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 }, // Set the initial page size to 10
    },
    usePagination
  );

  return (
    <div>
      <table {...getTableProps()} className="table" style={{ backgroundColor: 'white' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <div className="pagination">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className={`btn btn-secondary p_n_button ${!canPreviousPage && 'disabled'}`}
          style={{ backgroundColor: 'white', color: 'black', cursor: 'pointer' }}
        >
          Previous
        </button>
        <span style={{ color: 'white' }}>
          Page{' '}
          <strong>
            {pageIndex + 1} of {Math.ceil(data.length / pageSize)}
          </strong>{' '}
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className={`btn btn-secondary p_n_button ${!canNextPage && 'disabled'}`}
          style={{ backgroundColor: 'white', color: 'black', cursor: 'pointer' }}
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default HomeTabContent;
