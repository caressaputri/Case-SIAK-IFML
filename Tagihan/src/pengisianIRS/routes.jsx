
import React from 'react';
import TableMataKuliahPage from './containers/TableMataKuliahPage'
import TableRingkasanPage from './containers/TableRingkasanPage'

const pengisianIRSRoutes = [
{ 
    path: "/irs",
    element: <TableMataKuliahPage />,
  }	
,
{ 
    path: "",
    element: <TableRingkasanPage />,
  }	

]

export default pengisianIRSRoutes
