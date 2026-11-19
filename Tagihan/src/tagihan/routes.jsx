
import React from 'react';
import TableTagihanPage from './containers/TableTagihanPage'
import DetailTagihanPage from './containers/DetailTagihanPage'

const tagihanRoutes = [
{ 
    path: "/tagihan",
    element: <TableTagihanPage />,
  }	
,
{ 
    path: "/tagihan/:id",
    element: <DetailTagihanPage />,
  }	

]

export default tagihanRoutes
