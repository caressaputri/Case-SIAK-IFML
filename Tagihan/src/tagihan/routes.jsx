
import React from 'react';
import TableTagihanPage from './containers/TableTagihanPage'
import DetailTagihanPage from './containers/DetailTagihanPage'
import AddPembayaranPage from './containers/AddPembayaranPage'

const tagihanRoutes = [
{ 
    path: "/tagihan",
    element: <TableTagihanPage />,
  }	
,
{ 
    path: "/tagihan/bayar",
    element: <AddPembayaranPage />,
  }	
,
{ 
    path: "/tagihan/:id",
    element: <DetailTagihanPage />,
  }	

]

export default tagihanRoutes
