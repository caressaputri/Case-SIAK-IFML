
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
    path: "",
    element: <AddPembayaranPage />,
  }	
,
{ 
    path: "/tagihan/id_tagihan",
    element: <DetailTagihanPage />,
  }	

]

export default tagihanRoutes
