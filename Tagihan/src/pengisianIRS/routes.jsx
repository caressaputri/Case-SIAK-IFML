
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
    path: "/irs/ringkasan",
    element: <TableRingkasanPage />,
  }	

]

export default pengisianIRSRoutes
